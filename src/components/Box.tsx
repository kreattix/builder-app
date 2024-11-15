import styled from 'styled-components'

import { Space } from './Space'

export const Box = styled(Space)(({ direction = 'column' }) => {
  return `
    flex-direction: ${direction};
  `
})
