import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";
import tokensParams from "../../shared";
import { parseColortokens } from "../shared";

const {
  colorTokens: { theBodyShopLightColorTokens, theBodyShopDarkColorTokens },
} = tokens;

const LightComponent = () => <Table
  schema={parseColortokens(theBodyShopLightColorTokens)}
  title="The Body Shop Light"
/>;
const DarkComponent = () => <Table
  schema={parseColortokens(theBodyShopDarkColorTokens)}
  title="The Body Shop Dark"
/>;

export default {
  title: "Design Tokens|Themes/TheBodyShop",
  parameters: {
    docs: {
      container: null,
      page: () => <div>
        <LightComponent />
        <DarkComponent />
      </div>,

    },
    ...tokensParams,
  },
};

export const Light = () => <LightComponent />;
export const Dark = () => <DarkComponent />;
