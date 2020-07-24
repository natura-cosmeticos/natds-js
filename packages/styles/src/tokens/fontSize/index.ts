/* eslint-disable sort-keys */
import { IFont } from "./IFont";

const REGULAR = 400;
const MEDIUM = 500;

/**
 * @todo refactor: rename `fontSize` to typography
 */
export const fontSize = {
  h1: {
    fontSize: "6rem",
    fontWeight: REGULAR,
  } as IFont,
  h2: {
    fontSize: "3.75rem",
    fontWeight: REGULAR,
  } as IFont,
  h3: {
    fontSize: "3rem",
    fontWeight: REGULAR,
  } as IFont,
  h4: {
    fontSize: "2.125rem",
    fontWeight: REGULAR,
  } as IFont,
  h5: {
    fontSize: "1.5rem",
    fontWeight: REGULAR,
  } as IFont,
  h6: {
    fontSize: "1.25rem",
    fontWeight: MEDIUM,
  } as IFont,
  subtitle1: {
    fontSize: "1rem",
    fontWeight: MEDIUM,
  } as IFont,
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: MEDIUM,
  } as IFont,
  body1: {
    fontSize: "1rem",
    fontWeight: REGULAR,
  } as IFont,
  body2: {
    fontSize: "0.875rem",
    fontWeight: REGULAR,
  } as IFont,
  button: {
    fontSize: "0.875rem",
    fontWeight: MEDIUM,
  } as IFont,
  caption: {
    fontSize: "0.75rem",
    fontWeight: REGULAR,
  } as IFont,
  overline: {
    fontSize: "0.75rem",
    fontWeight: MEDIUM,
  } as IFont,
};
