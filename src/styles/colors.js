// Resources
// https://webaim.org/resources/contrastchecker/
// http://chir.ag/projects/name-that-color/
import Color from 'color';

const descriptiveColors = {
  mineShaft: '#333333',
  doveGray: '#666666',
  dustyGray: '#999999',
  silver: '#cccccc',
  mercury: '#e6e6e6',
  concrete: '#f2f2f2',
  fruitSalad: '#4CAF50',
  pomegranate: '#F44336',
  orangePeel: '#FF9800',
  dodgerBlue: '#2196F3',
};

const colors = {};

colors.primaryColor = descriptiveColors.mineShaft;

colors.black = '#000000';
colors.white = '#ffffff';

colors.gray1 = descriptiveColors.mineShaft;
colors.gray2 = descriptiveColors.doveGray;
colors.gray3 = descriptiveColors.dustyGray;
colors.gray4 = descriptiveColors.silver;
colors.gray5 = descriptiveColors.mercury;
colors.gray6 = descriptiveColors.concrete;

colors.success = descriptiveColors.fruitSalad;
colors.error = descriptiveColors.pomegranate;
colors.warning = descriptiveColors.orangePeel;
colors.info = descriptiveColors.dodgerBlue;

colors.dropShadowColor = Color(colors.black).alpha(0.15).rgb().toString();
colors.defaultBorderColor = colors.gray1;

export default colors;
