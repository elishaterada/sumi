import { css } from 'emotion';

import colors from '../styles/colors';
import typography from '../styles/typography';
import mediaQueries from '../styles/media-queries';

const DLClass = css`
  margin: 0 0 1rem;
`;

const DTClass = css`
  font-weight: ${typography.fontWeightSemiBold};
  margin: 0 0 0.5rem;
  color: ${colors.primaryColor};

  @media (min-width: ${mediaQueries.medium}) {
    float: left;
    width: 12rem;
    clear: left;
    overflow: hidden;
  }
`;

const DDClass = css`
  margin: 0 0 1rem;
  color: ${colors.secondaryColor};

  @media (min-width: ${mediaQueries.medium}) {
    margin-left: 15rem;
  }
`;

export {
  DLClass,
  DTClass,
  DDClass,
};
