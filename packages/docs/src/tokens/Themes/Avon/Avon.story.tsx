import * as React from "react";
import tokensParams from "../../shared";
import Table from "@addons/Table";
import { parseColortokens } from "../shared";
import { tokens } from "@naturacosmeticos/natds-styles";

const {
  "colorTokens": { avonLightColorTokens, avonDarkColorTokens }
} = tokens;

const LightComponent = () => <Table schema={parseColortokens(avonLightColorTokens)} title="Avon Light" />;
const DarkComponent = () => <Table schema={parseColortokens(avonDarkColorTokens)} title="Avon Dark" />;

export default {
  "title": "Design Tokens|Themes/Avon",
  "parameters": {
    "docs": {
      "container": null,
      "page": () => <div>
        <LightComponent />
        <DarkComponent />
      </div>

    },
    ...tokensParams
  }
};

export const Light = () => <LightComponent />;
export const Dark = () => <DarkComponent />;
