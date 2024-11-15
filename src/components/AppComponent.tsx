import styled from 'styled-components'

export const AppContainer = styled.div(({ theme }) => {
  return `
      min-height: 100vh;
      background-color: ${theme.colors.accent};
      color: ${theme.colors.text};
      font-family: ${theme.fonts.primary};
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-variation-settings: "wdth" 100;
      display: flex;
      flex-direction: column;
      line-height: 1.5;
    `
})
