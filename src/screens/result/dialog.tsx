import React from 'react';

import {ContainerCom, DialogCom} from 'components';

export const Dialog = ({navigation, route, ...props}: any) => {
  const {component} = route?.params;
  let tmpProps = {
    ...props,
    ...route.params,
  };

  const onHandleClose = () => {
    navigation.pop();
  };

  const handleChild = () => {
    if (component) {
      return component;
    }

    return (
      <DialogCom
        isVisible={true}
        isHeader={true}
        handleClose={route.params?.onClose || onHandleClose}
        {...route?.params}
      />
    );
  };

  return (
    <ContainerCom
      isHeader={false}
      safeAreaBgColor="transparent"
      containerBgColor="transparent"
      full
      {...tmpProps}>
      {handleChild()}
    </ContainerCom>
  );
};
