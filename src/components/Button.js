import { css } from 'emotion';

import colors from '../styles/colors';
import typography, { pxToRem } from '../styles/typography';

const ButtonClass = css`
  display: inline-block;
  background: ${colors.white};
  position: relative;
  margin: 0;
  padding: 0 ${pxToRem(25)};
  height: ${pxToRem(40)};
  line-height: ${pxToRem(40)};
  box-shadow: 0 ${pxToRem(2)} ${pxToRem(5)} ${colors.dropShadowColor};
  border: ${pxToRem(1)} solid ${colors.gray2};
  cursor: pointer;
  box-sizing: content-box;
  border-radius: ${pxToRem(2)};
  text-decoration: none;
  font-size: ${pxToRem(16)};
  font-weight: ${typography.fontWeightRegular};
  color: ${colors.primaryColor};
  
  &:hover {
    background: ${colors.gray6};
  }
  
  &:active {
    box-shadow: 0 0 ${pxToRem(5)} ${colors.dropShadowColor};
  }
`;

const ButtonAccentClass = css`
  ${ButtonClass};
  background: ${colors.gray1};
  color: ${colors.white};
  
  &:hover {
    background: ${colors.gray2};
  }
`;

export {
  ButtonClass,
  ButtonAccentClass,
};
