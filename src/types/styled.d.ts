import '@emotion/styled';

import * as themeConfig from '../theme/attributes';

declare module '@emotion/styled' {
  type BaseConfig = typeof themeConfig;
  type Component = typeof themeConfig.lightColor;

  export interface DefaultTheme extends BaseConfig {
    color: Component;
  }
}
