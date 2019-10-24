/**
 * Dynamically injects the fonts
 */

const css = `@font-face {
  font-family: 'MaterialIcons';
  src: url('${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}') format('truetype');
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
