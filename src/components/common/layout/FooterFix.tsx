import {memo} from 'react';

import {StyledFooterFix} from 'theme';

export const FooterFixCom: React.FC<CommonComponents.FooterFixCom> = memo(
  ({children, edges = ['bottom', 'left', 'right'], ...props}) => {
    return (
      <StyledFooterFix edges={edges} {...props}>
        {children}
      </StyledFooterFix>
    );
  },
);
