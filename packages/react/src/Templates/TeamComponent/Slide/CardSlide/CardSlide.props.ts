import React from 'react'

type BrandProps =
    'aesop'
    | 'avon'
    | 'avon_2'
    | 'biome'
    | 'natura'
    | 'theBodyShop'
    | 'consultoriaDeBeleza'
    | 'natura_v2'
    | 'casaEestilo'
export interface CardSlideProps {
  /**
   * Specify an optional className to be added to your CardSlide
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Define an children Component to your CardSlide
   */
  children?: React.ReactNode

  /**
   * Define an Title Component to your CardSlide
   */
  prodTitle: string

  /**
   * Define an brand Component to your CardSlide
   */
  brand: string,

 /**
 * Define an theme Component to your CardSlide
 */
  theme: BrandProps,

/**
 * Define an code to productor to your CardSlide
 */
code: string,

/**
 * Define an point to productor to your CardSlide
 */
point: number,

/**
 * Define an price to productor to your CardSlide
 */
price: string,

/**
 * Define an url to IMG to your CardSlide
 */
url: string

}
