import styled from 'styled-components'

export interface ImageProps {
  width: number
  height: number
}

export const Image = styled.img(({ width, height }) => {
  let styles = `
    max-width: 100%;
    max-height: 100%;
  `
  if (width) styles += `width: ${width}px;`
  if (height) styles += `height: ${height}px;`

  return styles
})
