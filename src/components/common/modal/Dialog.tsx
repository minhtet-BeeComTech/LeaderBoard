import React from 'react';
import {View, StyleSheet} from 'react-native';

import {ModalCom} from './Modal';
import {TextCom} from '../typo';
import {ButtonCom} from '../button';

export const DialogCom: React.FC<CommonComponents.DialogCom> = ({
  handleClose,
  renderChild,
  isModalHeader = true,
  isModalBody = true,
  isModalFooter = true,
  renderModalHeader,
  title,
  renderModalBody,
  description,
  subDescription,
  renderModalFooter,
  handleLeftBtn,
  handleRightBtn,
  leftBtnProps,
  rightBtnProps,
  isAlway = false,
  titleColor,
  dialogContainerProps,
  dialogBodyContainerProps,
  dialogHeaderContainerProps,
  dialogFooterContainerProps,
  ...props
}) => {
  const onHandleClose = () => {
    if (!isAlway) {
      handleClose();
    }
  };

  return (
    <ModalCom
      onSwipeComplete={onHandleClose}
      onBackButtonPress={onHandleClose}
      onBackdropPress={onHandleClose}
      setIsVisible={onHandleClose}
      swipeDirection={['up', 'down']}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      {...props}>
      {renderChild ? (
        renderChild
      ) : (
        <View style={styles.container} {...dialogContainerProps}>
          {isModalHeader && (
            <View {...dialogHeaderContainerProps}>
              {renderModalHeader ? (
                renderModalHeader
              ) : (
                <View style={styles.titleTxtCon}>
                  {title && (
                    <TextCom
                      weight="lg"
                      size="lg"
                      textAlign="center"
                      color={titleColor || 'text'}>
                      {title}
                    </TextCom>
                  )}
                </View>
              )}
            </View>
          )}
          {isModalBody && (
            <View {...dialogBodyContainerProps}>
              {renderModalBody ? (
                renderModalBody
              ) : (
                <>
                  <View style={styles.descTxtCon}>
                    {description && (
                      <TextCom textAlign="center">{description}</TextCom>
                    )}
                    {subDescription && (
                      <TextCom textAlign="center">{subDescription}</TextCom>
                    )}
                  </View>
                  {!isModalFooter && (
                    <View style={styles.footerCon}>
                      <View style={styles.footerWrap}>
                        <ButtonCom
                          appearance="gradient"
                          text="OK"
                          onPress={onHandleClose}
                          {...rightBtnProps}
                        />
                      </View>
                    </View>
                  )}
                </>
              )}
            </View>
          )}
          {isModalFooter && (
            <View {...dialogFooterContainerProps}>
              {renderModalFooter ? (
                renderModalFooter
              ) : (
                <View style={styles.footerOCon}>
                  <View style={styles.footerOWrap}>
                    <ButtonCom
                      text="Cancel"
                      bgColor="gray30"
                      onPress={handleLeftBtn}
                      {...leftBtnProps}
                    />
                  </View>
                  <View style={styles.btnWrap}>
                    <ButtonCom
                      text="Confirm"
                      onPress={handleRightBtn}
                      {...rightBtnProps}
                    />
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
      )}
    </ModalCom>
  );
};

const styles = StyleSheet.create({
  container: {padding: 10},
  titleTxtCon: {marginBottom: 12},
  descTxtCon: {marginBottom: 15},
  footerCon: {flexDirection: 'row'},
  footerWrap: {flex: 1},
  footerOCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerOWrap: {flex: 1, marginRight: 10},
  btnWrap: {flex: 1},
});
