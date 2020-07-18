import * as React from "react";
import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";
import tokensParams from "../../shared";
import { parseColortokens } from "../shared";

const {
  colorTokens: { avonLightColorTokens, avonDarkColorTokens },
} = tokens;

const LightComponent = () => <Table schema={parseColortokens(avonLightColorTokens)} title="Avon Light" />;
const DarkComponent = () => <Table schema={parseColortokens(avonDarkColorTokens)} title="Avon Dark" />;

export default {
  title: "Design Tokens|Themes/Avon",
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
