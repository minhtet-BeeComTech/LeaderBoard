import React from 'react';
import {memo} from 'react';

import {StyledIcon} from 'theme';

export const IconCom: React.FC<CommonComponents.IconCom> = memo(
  ({type = 'MaterialIcons', ...props}) => <StyledIcon type={type} {...props} />,
);
