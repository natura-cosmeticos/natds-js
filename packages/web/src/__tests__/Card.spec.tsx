import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Paper
} from '..';
import { Typography } from '@material-ui/core';

describe('Card components', () => {
  describe('rendering variants', () => {
    test('should match to snapshot - empty card', () => {
      const component = mount(<Card />);

      expect(component).matchSnapshot('Card empty snapshot');
    });

    test('should match to snapshot - with action area', () => {
      const component = mount(<Card>
        <CardActionArea>Card action area test text</CardActionArea>
      </Card>);

      expect(component).matchSnapshot('Card with action area snapshot');
    });

    test('should match to snapshot - with actions', () => {
      const component = mount(<Card>
        <CardActions>
          <Button>Button action text</Button>
        </CardActions>
      </Card>);

      expect(component).matchSnapshot('Card with actions snapshot');
    });

    test('should match to snapshot - with content', () => {
      const component = mount(<Card>
        <CardContent>
          <Typography>Content text</Typography>
        </CardContent>
      </Card>);

      expect(component).matchSnapshot('Card with content snapshot');
    });

    test('should match to snapshot - with header', () => {
      const component = mount(<Card>
        <CardHeader title="Header 1" subheader="Header 2" />
      </Card>);

      expect(component).matchSnapshot('Card with header snapshot');
    });

    test('should match to snapshot - with media', () => {
      const component = mount(<Card>
        <CardMedia title="media image">Card media image placeholder</CardMedia>
      </Card>);

      expect(component).matchSnapshot('Card with media snapshot');
    });

    test('should match to snapshot - with collapse', () => {
      const component = mount(<Card>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <Typography>Collapse text</Typography>
        </Collapse>
      </Card>);

      expect(component).matchSnapshot('Card with collapse snapshot');
    });

    test('should match to snapshot - with paper', () => {
      const component = mount(<Card>
        <Paper>
          <Typography>Paper text</Typography>
        </Paper>
      </Card>);

      expect(component).matchSnapshot('Card with paper snapshot');
    });
  });
});
