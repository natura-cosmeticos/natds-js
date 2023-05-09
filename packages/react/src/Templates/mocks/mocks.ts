/* eslint-disable max-lines */
const DataMockStatusBar = [
  ['outlined-finance-shoppingcart', 'Mi Carrito', 'true', 'iconShow'],
  ['outlined-content-gift', 'Mi Regalos', 'false', 'iconShow'],
  ['outlined-place-truck', 'Envio', 'false', 'iconShow'],
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
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Avon',
    theme: 'avon',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Casa & Estilo',
    theme: 'casaEestilo',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
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
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Avon',
    theme: 'avon',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Casa & Estilo',
    theme: 'casaEestilo',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Natura',
    theme: 'natura_v2',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Avon',
    theme: 'avon',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Casa & Estilo',
    theme: 'casaEestilo',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Natura',
    theme: 'natura_v2',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Avon',
    theme: 'avon',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  },
  {
    prodTitle: 'Refil Desodorante Corporal Kaiak Masculino',
    brand: 'Casa & Estilo',
    theme: 'casaEestilo',
    code: '50999',
    point: 4,
    price: 'S/0.000.00',
    url: 'https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png'
  }
]
interface labelTexProps {
  appBar: {
      start: string;
      search: string;
      mycar: string;
      perfil: string;
  };
  stepBar: {
      mycar: string;
      mypresent: string;
      send: string;
      complete: string;
  };
  search: {
      title: string;
      subTitle: string;
      placeHolder: string;
      buttonAdd: string;
  };
  mycar: {
    title: string,
    subTitle: string,
    tableHead: {
      product: string,
      purchaseUni: string,
      offer: string,
      incoming: string,
      purchase: string
    },
    tableCardRow: {
      title: string
      brand: string
      code: string
      codeValue: number,
      dots: string
      dotsValue: number,
      btnUpdate: string
      allDelete: string
    }
  };
  Slide: {
    title: string,
    cardSlide: {
      title: string
      brand: string,
      code: string,
      codeValue: string,
      dots: string,
      dotsValue: number,
      btnAdd: string,
      offer: string,
      incoming: string,
      purchase: string
    }
  };
  summary: {
    title: string
    subTitle: string,
    totalSale: string
    totalProfit: string
    totalPurchase: string
    otherAmounts: string
    taxes: string
    truckage: string
    balanceInFavor: string
    totalPayable: string
    btnBack: string
    btnContinue: string
  };
}
export const labelTexPTBR: labelTexProps = {
  appBar: {
    start: 'Início',
    search: 'Buscar',
    mycar: 'Meu Carrinho',
    perfil: 'Olá, [Nome]'
  },
  stepBar: {
    mycar: 'Meu Carrinho',
    mypresent: 'Meus Presentes',
    send: 'Envio',
    complete: 'Completo'
  },
  search: {
    title: 'Faça seus pedidos',
    subTitle: 'Encontre seus produtos Natura, Avon e Casa & Estilo e finalize os pedidos de forma fácil.',
    placeHolder: 'Insira o código ou nome do produto',
    buttonAdd: 'Adicionar'
  },
  mycar: {
    title: 'Meu Carrinho',
    subTitle: 'Agora seus produtos estão agrupados por marca e para ver mais detalhes basta selecionar a marca.',
    tableHead: {
      product: 'Produtos',
      purchaseUni: 'Compra uni.',
      offer: 'Oferta',
      incoming: 'Receita',
      purchase: 'Compra'
    },
    tableCardRow: {
      title: 'Refil Desodorante Corporal Kaiak Masculino',
      brand: 'Natura',
      code: 'Código',
      codeValue: 50999,
      dots: 'Pontos',
      dotsValue: 4,
      btnUpdate: 'Atualizar',
      allDelete: 'Eliminar Todos'
    }

  },
  Slide: {
    title: 'Só para Você',
    cardSlide: {
      title: 'Refil Desodorante Corporal Kaiak Masculino',
      brand: 'Natura',
      code: 'Código',
      codeValue: '50999',
      dots: 'Pontos',
      dotsValue: 4,
      btnAdd: 'Adicionar',
      offer: 'Oferta',
      incoming: 'Receita',
      purchase: 'Compra'
    }
  },
  summary: {
    title: 'Resumo do Pedido',
    subTitle: 'Continue! Você só precisa de 30 pts para atingir seu pedido mínimo!',
    totalSale: 'Venda Total',
    totalProfit: 'Lucro total',
    totalPurchase: 'Compra total',
    otherAmounts: 'Outros Valores',
    taxes: 'Impostos',
    truckage: 'Frete',
    balanceInFavor: 'Saldo a favor',
    totalPayable: 'Valor total a pagar',
    btnBack: 'Voltar',
    btnContinue: 'Continuar'
  }
}
export const labelTexES: labelTexProps = {
  appBar: {
    start: 'Inicio',
    search: 'Buscar',
    mycar: 'Mi Carrito',
    perfil: 'Olá, [Nombre]'
  },
  stepBar: {
    mycar: 'Mi Carrito',
    mypresent: 'MIS REGALOS',
    send: 'Envio',
    complete: 'Completo'
  },
  search: {
    title: 'Haz tus pedidos',
    subTitle: 'Encuentra tus productos Natura, Avon y Casa & Estilo y finaliza los pedidos de una forma fácil.',
    placeHolder: 'Digite código o nombre del producto',
    buttonAdd: 'AGREGAR'
  },
  mycar: {
    title: 'Mi carrito',
    subTitle: 'Ahora tus productos están agrupados por marca y para ver más detalles solo selecciona la marca.',
    tableHead: {
      product: 'Productos',
      purchaseUni: 'Compra uni.',
      offer: 'Venta',
      incoming: 'Ganancia',
      purchase: 'Compra'
    },
    tableCardRow: {
      title: 'Suspendisse Tempor Dictum Malesuada Integer a Volutpat',
      brand: 'Natura',
      code: 'Código',
      codeValue: 50999,
      dots: 'Puntos',
      dotsValue: 4,
      btnUpdate: 'ACTUALIZAR',
      allDelete: 'ELIMINAR TODOS'
    }

  },
  Slide: {
    title: 'Solo pra ti',
    cardSlide: {
      title: 'Refil Desodorante Corporal Kaiak Masculino',
      brand: 'Natura',
      code: 'Código',
      codeValue: '50999',
      dots: 'Puntos',
      dotsValue: 4,
      btnAdd: 'Agregar',
      offer: 'Venta',
      incoming: 'Ganancia',
      purchase: 'Compra'
    }
  },
  summary: {
    title: 'Resumen del pedido',
    subTitle: 'Sigue adelante! Solo te faltan 30 pts para alcanzar tu pedido mínimo!',
    totalSale: 'Venta total',
    totalProfit: 'Ganancia total',
    totalPurchase: 'Compra total',
    otherAmounts: 'Otros valores',
    taxes: 'Impuestos',
    truckage: 'Flete',
    balanceInFavor: 'Saldo a favor',
    totalPayable: 'Valor total a pagar',
    btnBack: 'VOLVER',
    btnContinue: 'Continuar'
  }
}
