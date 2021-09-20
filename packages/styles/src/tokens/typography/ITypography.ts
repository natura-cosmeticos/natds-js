export interface ITypography {
  fontFamily?: string;
  fontFamilyBrand1?: string;
  fontFamilyBrand2?: string;
  fontFamilyBrand3?: string;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  body?: Body;
  display?: Display;
  headline?: Display;
}

export interface Body {
  regular: Display
  bold: Display
}

export interface Display {
  fontFamily: string
  fontWeight: number
}
