import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@emotion/react';

import {StyledFieldContainer} from 'theme';
import {TextCom} from '../../typo';
import {IconCom} from '../../icon';

export const FieldContainer: React.FC<FormComponents.VFieldContainer> = ({
  fieldContainerProps,
  label,
  required,
  children,
  materialLabel,
  isFocus,
  radioLabelPos,
  error,
  isShowErrMsg = true,
  ...props
}) => {
  const theme: any = useTheme();
  const [checkFocus, setCheckFocus] = useState(isFocus);
  const isError = Boolean(error);

  useEffect(() => {
    if (materialLabel) {
      if (isFocus) {
        setCheckFocus(true);
      } else {
        setCheckFocus(!!props?.value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocus]);

  let radioPosition = radioLabelPos && {marginLeft: 25, marginBottom: -20};

  return (
    <StyledFieldContainer {...fieldContainerProps}>
      {materialLabel ? (
        <View style={styles.labelCon}>
          <View style={[styles.labelWrap, {top: checkFocus ? -15 : 5}]}>
            {label && checkFocus && (
              <TextCom
                style={styles.labelTxt}
                size={checkFocus ? 'sm' : 'md'}
                color={checkFocus ? 'primary0' : 'gray300'}>
                {label} {required ? '*' : ''}
              </TextCom>
            )}
            <View
              style={{
                position: 'absolute',
                bottom: 9.1,
                left: 0,
                width: '100%',
                borderWidth: 1.5,
                borderColor: checkFocus
                  ? theme?.color?.form?.white
                  : 'transparent',
              }}
            />
          </View>
        </View>
      ) : (
        label && (
          <TextCom
            color="label"
            weight="lg"
            numberOfLines={1}
            style={[{marginBottom: 5.5}, radioPosition]}>
            {label} {required ? '*' : ''}
          </TextCom>
        )
      )}
      <View {...props}>{children}</View>
      {isError && isShowErrMsg && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <IconCom
            name="exclamationcircle"
            iconSize="sm"
            type="AntDesign"
            color="error"
          />
          <TextCom size="xs" color="error" style={{marginLeft: 3.5}}>
            {error}
          </TextCom>
        </View>
      )}
      {props.desc && (
        <TextCom size="sm" color="gray" style={{marginTop: 5}}>
          {props.desc}
        </TextCom>
      )}
    </StyledFieldContainer>
  );
};

const styles = StyleSheet.create({
  labelCon: {zIndex: 3, elevation: 0, marginLeft: 5},
  labelWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    zIndex: 3,
    elevation: 0,
  },
  labelTxt: {zIndex: 99, lineHeight: 25}
});
