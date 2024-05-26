import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  ContainerCom,
  TextCom,
  FlatListCom,
  InputCom,
  ButtonCom,
  CardCom,
  IconCom,
} from 'components';
import {leader} from 'store/actions';
import {useSettings} from 'hook';

interface LeaderBoardsProps {
  navigation: any;
}

export const LeaderBoards: React.FC<LeaderBoardsProps> = ({
  navigation,
  ...props
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const {leader_list, searchedLeader, isLoading, isBottomReach} = useSelector(
    (state: any) => state.leader,
  );
  const dispatch = useDispatch();
  const [username, setUserName] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const {theme} = useSettings();

  useEffect(() => {
    dispatch(
      leader.getLeaders({
        limit: 10,
        offset: 0,
        sortBy,
      }),
    );
  }, [dispatch, sortBy]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(
      leader.getLeaders({
        limit: 10,
        offset: 0,
        sortBy,
      }),
    );
    setRefreshing(false);
  }, [dispatch, sortBy]);

  const handleRouteChange = (route: string, params?: any) => {
    navigation.navigate(route, params);
  };

  const handleSearch = async () => {
    const user = await dispatch(
      leader.getLeaders({limit: 10, offset: 0, search: username}),
    );

    if (user?.length === 0) {
      handleRouteChange('Dialog', {
        title: 'Your Information',
        description:
          'This user name does not exist! Please specify an existing user name!',
        isModalFooter: false,
        rightBtnProps: {style: {borderWidth: 0}},
        modalContentProps: {
          style: {borderRadius: 12, marginHorizontal: 30, padding: 15},
        },
      });
    }
  };

  const handleSortBy = (sort: string) => {
    setSortBy(sort);
  };

  const renderFlatItem = useCallback(
    ({item, index}: any) => (
      <CardCom
        key={index}
        style={styles.itemWrap}
        onPress={() => handleRouteChange('LeaderBoard', {item})}>
        <View style={styles.contentWrap}>
          <View style={styles.contentIcoWrap}>
            <IconCom
              name="user"
              type="AntDesign"
              iconSize={40}
              color="gray20"
            />
          </View>
          <View style={styles.subConWrap}>
            <TextCom
              color={
                searchedLeader
                  ? item.name
                      .toLocaleLowerCase()
                      .includes(searchedLeader.toLocaleLowerCase())
                    ? 'red'
                    : 'text'
                  : 'text'
              }
              style={styles.titleWrap}>
              {item.name}
            </TextCom>
            <View style={styles.subCon}>
              <View>
                <TextCom size="sm" color="gray20">
                  Rank: {item.stars}
                </TextCom>
              </View>
              <View>
                <TextCom size="sm" color="gray20">
                  Bananas: {item.bananas}
                </TextCom>
              </View>
            </View>
          </View>
        </View>
        {item.subscribed && (
          <View style={styles.subWrap}>
            <TextCom size="xs" color="primary0" style={styles.subTxt}>
              Subscribed
            </TextCom>
          </View>
        )}
      </CardCom>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchedLeader],
  );

  const keyExt = useCallback((item: any) => item?.uid?.toString(), []);

  const handleLoadMore = () => {
    if (!isBottomReach) {
      const currentDataLength = leader_list?.data?.length || 0;
      const limit = 10;

      const newOffset = currentDataLength;

      dispatch(leader.getLeaders({limit, offset: newOffset, sortBy}, false));
    }
  };

  return (
    <ContainerCom
      text="Leaders"
      safeAreaBgColor="screenBg"
      headerBgColor="screenBg"
      headerTextProps={{color: 'text'}}
      isLoading={isLoading}
      isScroll={false}>
      <View style={styles.subHeader}>
        <View style={styles.inputWrap}>
          <InputCom
            value={username}
            onChangeText={setUserName}
            placeholder="Enter username"
            leftRender={
              <View style={styles.searchIcoWrap}>
                <IconCom
                  color="text"
                  name="search"
                  type="Feather"
                  iconSize="lg"
                />
              </View>
            }
          />
        </View>
        <View style={styles.buttonWrap}>
          <ButtonCom
            text="Search"
            onPress={handleSearch}
            style={styles.btnStyle}
          />
        </View>
      </View>
      <View style={styles.sortButtons}>
        <View
          style={[styles.btnWrap, {borderRightColor: theme.color.card.gray30}]}>
          <ButtonCom
            text="SortBy Name"
            onPress={() => handleSortBy('name')}
            style={styles.btnStyle}
            bgColor="transparent"
            color="text"
            size="sm"
            btnHeight={25}
            btnLeftRender={
              <IconCom
                name="sort"
                type="FontAwesome"
                color="text"
                style={styles.sortBtn}
              />
            }
          />
        </View>
        <ButtonCom
          text="Lowest Rank"
          onPress={() => handleSortBy('stars')}
          style={styles.btnStyle}
          bgColor="transparent"
          color="text"
          size="sm"
          btnHeight={25}
          btnLeftRender={
            <IconCom
              name="sort-reverse-variant"
              type="MaterialCommunityIcons"
              color="text"
              style={styles.sortBtn}
            />
          }
        />
      </View>
      <FlatListCom
        refreshing={refreshing}
        onRefresh={onRefresh}
        isLoading={isLoading}
        showsVerticalScrollIndicator={false}
        data={leader_list?.data || []}
        renderItem={renderFlatItem}
        keyExtractor={keyExt}
        emptytext={'No data available'}
        onEndReached={
          leader_list?.data?.length < leader_list?.total && handleLoadMore
        }
        {...props}
      />
    </ContainerCom>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  buttonWrap: {width: '30%'},
  inputWrap: {flex: 1, marginRight: 10},
  itemWrap: {marginBottom: 10, position: 'relative'},
  searchIcoWrap: {marginTop: 2},
  btnStyle: {borderWidth: 0},
  subWrap: {position: 'absolute', top: 10, right: 10},
  subTxt: {fontStyle: 'italic'},
  contentWrap: {
    flexDirection: 'row',
  },
  contentIcoWrap: {marginRight: 5},
  subConWrap: {flex: 1},
  titleWrap: {marginBottom: 10},
  subCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortButtons: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  btnWrap: {
    paddingRight: 10,
    marginRight: 10,
    borderRightWidth: 1,
  },
  sortBtn: {marginRight: 3},
});
