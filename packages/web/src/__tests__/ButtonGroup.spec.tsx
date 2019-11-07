import React from 'react';
<<<<<<< HEAD
import { expect } from 'chai';
=======
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { assert, spy } from 'sinon';
>>>>>>> chore(web): creating ButtonGroup component
import renderer from 'react-test-renderer';

import ButtonGroup from '../Components/ButtonGroup';
import Button from '../Components/Button';

describe('ButtonGroup component', () => {
  describe('rendering sizes', () => {
    test('should match snapshot - Size Small', () => {
      const component = renderer.create(<ButtonGroup size="small"><Button>One</Button><Button>Two</Button></ButtonGroup>).toJSON();
      expect(component).matchSnapshot('Small ButtonGroup snapshot');
    });

    test('should match snapshot - Size Medium', () => {
      const component = renderer.create(<ButtonGroup size="medium"><Button>One</Button><Button>Two</Button></ButtonGroup>).toJSON();
      expect(component).matchSnapshot('Medium ButtonGroup snapshot');
    });

    test('should match snapshot - Size Large', () => {
      const component = renderer.create(<ButtonGroup size="large"><Button>One</Button><Button>Two</Button></ButtonGroup>).toJSON();
      expect(component).matchSnapshot('Medium ButtonGroup snapshot');
    });
  });

  describe('rendering variants', () => {
    test('should match snapshot - Low emphasis button (variant text)', () => {
      const component = renderer.create(<ButtonGroup variant="text"><Button>One</Button><Button>Two</Button></ButtonGroup>).toJSON();

      expect(component).to.matchSnapshot('Low emphasis ButtonGroup snapshot');
    });

    test('should match snapshot - Medium emphasis button (variant outlined)', () => {
      const component = renderer.create(<ButtonGroup variant="outlined"><Button>One</Button><Button>Two</Button></ButtonGroup>).toJSON();

      expect(component).to.matchSnapshot('Medium emphasis ButtonGroup snapshot');
    });

    test('should match snapshot - High emphasis button (variant contained)', () => {
      const component = renderer.create(<ButtonGroup variant="contained"><Button>One</Button><Button>Two</Button></ButtonGroup>).toJSON();

      expect(component).to.matchSnapshot('High emphasis ButtonGroup snapshot');
    });
  });
});
