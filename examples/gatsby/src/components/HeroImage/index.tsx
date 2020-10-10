import { Image } from "@naturacosmeticos/natds-web";
import * as React from "react";

export const HeroImage : React.FunctionComponent = () => <Image
  alt={"Mulher sorrindo segurando um celular. Ao lado esquerdo, produtos da Natura em cima da mesa"}
  draggable={false}
  src={"https://accounts.natura.com/queroserconsultora/static/ca0db8e3378c7c1f47740e67233d9363/4e1b5/hero-banner.webp"}
  style={{ width: "100%", height: "auto" }}
/>;

export default HeroImage;
