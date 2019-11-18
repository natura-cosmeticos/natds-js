/**
 * Dynamically injects the fonts
 */

const css = `@font-face {
  font-family: 'MaterialCommunityIcons';
  src: url('${require('react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf')}') format('truetype');
}`,
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

head.appendChild(style);
style.type = "text/css";
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
