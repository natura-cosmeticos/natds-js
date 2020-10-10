import { ILinkProps, Link, Typography } from "@naturacosmeticos/natds-web";
import * as React from "react";

const links : ILinkProps[] = [
  {
    children: "Guias e Manuais",
    href: "#",
  },
  {
    children: "Já sou Consultora",
    href: "#",
  },
  {
    children: "Chat Online",
    href: "#",
  },
  {
    children: "Política de Privacidade",
    href: "#",
  },
];

export const FooterMenu : React.FunctionComponent = () => (
  <ul>
    {links.map<ILinkProps>((value: ILinkProps, index) => (
      <li key={index}>
        <Typography gutterBottom={false} variant={"caption"}>
          <Link href={value.href}>{value.children}</Link>
        </Typography>
      </li>
    ))}
  </ul>
);

export default FooterMenu;
