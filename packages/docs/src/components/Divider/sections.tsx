import React from "react";
import {
  Divider,
  GridContainer,
  GridItem,
  Typography
} from "@naturacosmeticos/natds-web";

export const variants = [
  {
    "title": "FullWidth",
    "component":
      <GridContainer
        spacing={3}
        style={{
          "width": 360,
          "height": 140,
          "margin": 0,
          "border": 1,
          "borderStyle": "ridge"
        }}
      >
        <GridItem md={12} style={{ "padding": "42px 0 0" }}>
          <Divider variant="fullWidth" />
        </GridItem>
      </GridContainer>

  },
  {
    "title": "Inset",
    "component":
      <GridContainer
        spacing={3}
        style={{
          "width": 360,
          "height": 140,
          "margin": 0,
          "border": 1,
          "borderStyle": "ridge"
        }}
      >
        <GridItem md={12} style={{ "padding": "42px 0 0" }}>
          <Divider variant="inset" />
        </GridItem>
      </GridContainer>

  },
  {
    "title": "Subheader",
    "component":
      <>
        <GridContainer
          spacing={3}
          style={{
            "width": 360,
            "height": 140,
            "margin": 0,
            "border": 1,
            "borderStyle": "ridge"
          }}
        >
          <GridItem md={12} style={{ "padding": "22px 0 0" }}>
            <Divider variant="fullWidth" />
            <div style={{ "margin": "8px 15.5px" }}>
              <Typography variant="caption" color="textSecondary">
                Subheader
              </Typography>
            </div>
          </GridItem>
          <GridItem md={12} style={{ "padding": "22px 0 0" }}>
            <Divider variant="inset" />
            <div style={{ "margin": "8px 72px" }}>
              <Typography variant="caption" color="textSecondary">
                Subheader
              </Typography>
            </div>
          </GridItem>
        </GridContainer>
        <Typography variant="caption" color="textSecondary">
          * Subheader applied with Typography
        </Typography>
      </>

  },
  {
    "title": "Middle",
    "component":
      <GridContainer
        spacing={3}
        style={{
          "width": 360,
          "height": 140,
          "margin": 0,
          "border": 1,
          "borderStyle": "ridge"
        }}
      >
        <GridItem md={12} style={{ "padding": "42px 0 0" }}>
          <Divider variant="middle" />
        </GridItem>
      </GridContainer>

  }
];
