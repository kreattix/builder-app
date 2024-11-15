import 'styled-components'

import { theme } from './config/theme'

type DefaultThemeConfig = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends DefaultThemeConfig {}
}
