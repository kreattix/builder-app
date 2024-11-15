import styled from 'styled-components'

export const Container = styled.div(({ theme }) => {
  return `
    max-width: 100%;
    width: 100%;
    padding: 0 ${theme.space.md};
  `
})
