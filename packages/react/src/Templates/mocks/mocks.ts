const DataMockStatusBar = [
  ['outlined-finance-shoppingcart', 'Meu Carrinho', 'true'],
  ['outlined-content-gift', 'Meus presentes', 'false'],
  ['outlined-place-truck', 'Envio', 'false'],
  ['outlined-action-like', 'Completo', 'false']
]
export default DataMockStatusBar

type BrandProps =
    'aesop' | 'avon'
    | 'biome'
    | 'natura'
    | 'theBodyShop'
    | 'consultoriaDeBeleza'
    | 'natura_v2'
    | 'casaEestilo'

export interface IDataCartProps {
    prodTitle: string
    brand: string,
    theme: BrandProps,
    code: string,
    point: number,
    price: string,
    url: string
  }

export const dataCart: IDataCartProps[] = [
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Natura',
    theme: 'natura_v2',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: ''
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Avon',
    theme: 'avon',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: ''
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Casa & Estilo',
    theme: 'casaEestilo',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: ''
  }
]

export const brandTransform = (brands: string): string | undefined => ({
  aesop: 'Aesop',
  avon: 'Avon',
  biome: 'Biome',
  natura: 'Natura',
  natura_v2: 'Natura',
  theBodyShop: ' The Body Shop',
  consultoriaDeBeleza: 'Consultoria de Beleza',
  casaEestilo: 'Casa & Estilo'
})[brands]

export const dataCartSlide: IDataCartProps[] = [
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Natura',
    theme: 'natura_v2',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: ''
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Avon',
    theme: 'avon',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: ''
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Casa & Estilo',
    theme: 'casaEestilo',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: ''
  }
]
