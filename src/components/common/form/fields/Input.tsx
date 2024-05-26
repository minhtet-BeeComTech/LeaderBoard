import React, {useState, useRef} from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@emotion/react';

import {StyledInput, StyledInputContainer} from 'theme';
import {FieldContainer} from './FieldContainer';
import {IconCom} from '../../icon';

export const InputCom: React.FC<FormComponents.InputCom> = ({
  secure,
  seedetect,
  iconLeftColor,
  inputStyle,
  inputRef,
  handleBlur,
  seedetect_custom = true,
  ...props
}) => {
  const theme: any = useTheme();
  const [isHide, setIsHide] = useState(secure ? true : false);
  const isError = Boolean(props.error);
  const [focus, setfocus] = useState(false);
  const ref = useRef<TextInput>();

  return (
    <FieldContainer isFocus={focus} {...props}>
      <StyledInputContainer>
        <StyledInput
          ref={inputRef || ref}
          placeholderTextColor={
            theme.color.mode === 'dark'
              ? theme.color.typo.gray100
              : theme.color.typo.gray30
          }
          secureTextEntry={secure ? isHide : false}
          isError={isError}
          onBlur={() => {
            setfocus(false);
            handleBlur;
          }}
          onFocus={() => setfocus(true)}
          style={[
            props.clearable && props.value && {paddingRight: 40},
            {...inputStyle},
          ]}
          {...props}
        />

        {props.clearable && props.value && (
          <View style={styles.clearIcoWrap}>
            <TouchableOpacity
              style={styles.clearIcoCon}
              onPress={props.onReset}>
              {props.renderClearableIcon ? (
                props.renderClearableIcon
              ) : (
                <IconCom
                  name="close"
                  type="AntDesign"
                  iconSize="lg"
                  color={theme.color.mode === 'dark' ? 'gray40' : 'gray200'}
                />
              )}
            </TouchableOpacity>
          </View>
        )}

        {props.iconLeftName && (
          <IconCom
            name={props.iconLeftName}
            type={props.type}
            iconSize="xl"
            color={iconLeftColor}
            style={styles.leftIco}
          />
        )}
        {props.leftRender && (
          <View style={styles.leftIcoRen}>{props.leftRender}</View>
        )}
        {(props.iconRightName || seedetect) && (
          <>
            {seedetect_custom ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.seeDetectWrap}
                onPress={() => seedetect && setIsHide(!isHide)}>
                {!isHide ? (
                  <IconCom name="eye-outline" type="Ionicons" iconSize="xl" />
                ) : (
                  <IconCom
                    name="eye-off-outline"
                    type="Ionicons"
                    iconSize="xl"
                  />
                )}
              </TouchableOpacity>
            ) : (
              <IconCom
                name={
                  seedetect
                    ? !isHide
                      ? 'visibility'
                      : 'visibility-off'
                    : props.iconRightName
                }
                type={seedetect ? 'MaterialIcons' : props.type}
                iconSize="xl"
                color="desc"
                style={styles.seeDetectCon}
                onPress={() => seedetect && setIsHide(!isHide)}
              />
            )}
          </>
        )}
        {props.rightRender && (
          <View style={styles.rightIcoRen}>{props.rightRender}</View>
        )}
      </StyledInputContainer>
    </FieldContainer>
  );
};

const styles = StyleSheet.create({
  clearIcoWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  },
  clearIcoCon: {
    justifyContent: 'center',
    alignContent: 'center',
    padding: 5,
    borderRadius: 15,
  },
  leftIco: {position: 'absolute', top: 10, left: 10, elevation: 1},
  leftIcoRen: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 3,
    elevation: 3,
  },
  rightIcoRen: {position: 'absolute', top: 10, right: 10, elevation: 4},
  seeDetectWrap: {position: 'absolute', top: 0, right: 0, padding: 9},
  seeDetectCon: {
    position: 'absolute',
    top: 10,
    right: 10,
    elevation: 4,
  },
});
