declare module "*.eot";
declare module "*.ttf";
declare module "*.svg";
declare module "*.woff";
declare module "*.woff2";
declare module "*.css" {
  const styles: { [className: string]: string };

  export default styles;
}
