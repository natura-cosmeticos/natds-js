import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { Card } from "./Card";
import { CardActionArea } from "../CardActionArea";
import { CardActions } from "../CardActions";
import { Button } from "../Button";
import { CardContent } from "../CardContent";
import { Typography } from "../Typography";
import { CardHeader } from "../CardHeader";
import { CardMedia } from "../CardMedia";
import { Collapse } from "../Collapse";
import { Paper } from "../Paper";

describe("Card components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty card", () => {
      const testRenderer = TestRenderer.create(<Card />);

      expect(testRenderer).toMatchSnapshot("Card empty snapshot");
    });

    test("should match to snapshot - with action area", () => {
      const testRenderer = TestRenderer.create(<Card>
        <CardActionArea>Card action area test text</CardActionArea>
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with action area snapshot");
    });

    test("should match to snapshot - with actions", () => {
      const testRenderer = TestRenderer.create(<Card>
        <CardActions>
          <Button>Button action text</Button>
        </CardActions>
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with actions snapshot");
    });

    test("should match to snapshot - with content", () => {
      const testRenderer = TestRenderer.create(<Card>
        <CardContent>
          <Typography>Content text</Typography>
        </CardContent>
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with content snapshot");
    });

    test("should match to snapshot - with header", () => {
      const testRenderer = TestRenderer.create(<Card>
        <CardHeader title="Header 1" subheader="Header 2" />
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with header snapshot");
    });

    test("should match to snapshot - with media", () => {
      const testRenderer = TestRenderer.create(<Card>
        <CardMedia title="media image">Card media image placeholder</CardMedia>
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with media snapshot");
    });

    test("should match to snapshot - with collapse", () => {
      const testRenderer = TestRenderer.create(<Card>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <Typography>Collapse text</Typography>
        </Collapse>
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with collapse snapshot");
    });

    test("should match to snapshot - with paper", () => {
      const testRenderer = TestRenderer.create(<Card>
        <Paper>
          <Typography>Paper text</Typography>
        </Paper>
      </Card>);

      expect(testRenderer).toMatchSnapshot("Card with paper snapshot");
    });
  });
});
