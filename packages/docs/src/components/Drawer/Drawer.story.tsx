import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { select, boolean, text, number } from '@storybook/addon-knobs';

import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerMenu,
} from '@naturacosmeticos/natds-web';

import DrawerDocs from './Drawer.docs.mdx';

export default {
  title: 'Components|Drawer',
  component: Drawer,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Drawer'],
    theme: {
      context: 'web'
    },
    docs: {
      page: DrawerDocs
    }
  }
};

const styles = {
  badge: {
    display: 'inline-block',
    marginLeft: '5px'
  }
};

const anchors = {
  left: 'left',
  top: 'top',
  right: 'right',
  bottom: 'bottom'
};

const variants = {
  permanent: 'permanent',
  persistent: 'persistent',
  temporary: 'temporary',
};

const navigation = [
  {
    name: 'Página Inicial',
    icon: 'outlined-navigation-home',
    selected: true
  },
  {
    name: 'Meus Clientes',
    icon: 'outlined-social-groupofpeople',
  },
  {
    name: 'Venda',
    icon: 'outlined-finance-money',
  },
  {
    name: 'Pedido',
    icon: 'outlined-action-request',
  },
  {
    name: 'Meu Espaço Digital',
    icon: 'outlined-media-monitor',
  },
  {
    name: 'Meu Financeiro',
    icon: 'outlined-finance-debit',
  },
  {
    name: 'Promoções e Descontos',
    icon: 'outlined-finance-discount',
  },
  {
    name: 'Ciclo',
    icon: 'outlined-action-cycle',
  },
  {
    name: 'Minha Agenda',
    icon: 'outlined-action-calendar',
  },
  {
    name: 'Produtos do Ciclo',
    icon: 'outlined-product-dailycare',
    badge: 'Novo',
  },
  {
    name: 'Material de Apoio',
    icon: 'outlined-content-book',
    onSelect: null,
    onToggle: null,
    opened: true,
    badge: 'Novo',
    list: [
      {
        name: 'Apoio para Consultora',
      },
      {
        name: 'Materiais de Divulgação Digital',
        badge: 'Novo',
      },
      {
        name: 'Revista Espaço Natura',
      },
      {
        name: 'Revista Minha Natura',
        badge: 'Novo'
      },
    ]
  },
  {
    name: 'Treinamentos',
    icon: 'outlined-content-education',
  },
  {
    name: '#NaturaReconhece',
    icon: 'outlined-content-medal',
  },
  {
    name: 'Benefícios',
    icon: 'outlined-content-gift',
  },
  {
    name: 'Consultoria Beleza Natura',
    icon: 'outlined-product-brandsproduct',
  },
  {
    name: 'Documentos',
    icon: 'outlined-action-copy',
  },
  {
    name: 'Ajuda',
    icon: 'outlined-communication-chat',
  },
  {
    section: 'Section'
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
];

const footer = [
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
  {
    name: 'Menu Item',
    icon: 'outlined-action-love',
  },
];

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawer: {
    width: number('width', 256),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'column nowrap'
  },
}));

export const Interactive = () => {
  const classes = useStyles();

  return (
    <Drawer
      open={boolean('open', false)}
      anchor={select('anchor', anchors, anchors.left)}
      variant={select('variant', variants, variants.permanent)}
      classes={{ paper: classes.drawer }}>

      <DrawerHeader
        avatarSrc={require('../../assets/images/1.png')}
        primary={text('title', 'Hello, Long Name Lorem ipsum dolor sit amet...')}
        secondary={text('subtitle', 'Option')}
      />

      <DrawerBody>
        <DrawerMenu list={navigation} />
      </DrawerBody>

      <DrawerFooter>
        <DrawerMenu list={footer} />
      </DrawerFooter>
    </Drawer>
  );
};
