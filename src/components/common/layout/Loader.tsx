import React, {memo, ReactDOM} from 'react';
import {StyleSheet} from 'react-native';

import {ModalCom} from '../modal';
import {LottieAnimateCom} from '../animate';
import {StyledLoader} from 'theme';

interface LoaderComProps {
  type: string;
  isLoading?: boolean;
  children: ReactDOM;
}
export const LoaderCom: React.FC<LoaderComProps> = memo(
  ({children, type = 'screen', ...props}) => {
    const {isLoading} = props;

    return (
      <>
        {type === 'screen' && isLoading && (
          <ModalCom
            animationIn="fadeIn"
            animationOut="fadeOut"
            isAlway={isLoading}
            isVisible={isLoading}>
            <StyledLoader {...props}>
              {children ? (
                children
              ) : (
                <LottieAnimateCom
                  style={styles.animation}
                  source={require('@assets/animations/Loading.json')}
                  loop
                  autoPlay
                />
              )}
            </StyledLoader>
          </ModalCom>
        )}
      </>
    );
  },
);

const styles = StyleSheet.create({
  animation: {width: 150, height: 150},
});
