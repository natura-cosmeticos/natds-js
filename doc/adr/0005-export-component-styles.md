# 5. Export Component Styles

Date: 2019-09-24

## Status

Proposed

## Context

We want to ensure Design System consistency and use by any non-React or React Native applications.

## Decision

We will export the raw styles of each component and enable modular consumption.

## Consequences

Possibility of using the Design System by systems that don't use React or React Native.
Difficulty in creating and maintaining a way to extract css and separate them by modules.
