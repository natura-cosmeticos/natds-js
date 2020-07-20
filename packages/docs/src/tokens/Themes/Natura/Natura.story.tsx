import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";
import tokensParams from "../../shared";
import { parseColortokens } from "../shared";

const {
  colorTokens: { naturaLightColorTokens, naturaDarkColorTokens },
} = tokens;

const LightComponent = () => <Table
  schema={parseColortokens(naturaLightColorTokens)}
  title="Natura Light"
/>;
const DarkComponent = () => <Table schema={parseColortokens(naturaDarkColorTokens)} title="Natura Dark" />;

export default {
  title: "Design Tokens|Themes/Natura",
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
