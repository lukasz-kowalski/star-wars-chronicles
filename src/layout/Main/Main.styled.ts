import styled from '@emotion/styled';
import { Theme } from '../theme/theme';
import { Props } from './Main.types';

const Main = styled.main<Props, Theme>`
  min-height: 100vh;
  background: ${(p) => p.theme.colors.primary};
`;

export default Main;
