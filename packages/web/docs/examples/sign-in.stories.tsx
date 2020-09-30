import * as React from "react";
import {Meta, Story} from "@storybook/react";

export default {
  title: "Examples/Sign In"
} as Meta;

const Button = React.lazy(() => import("../../src/Components/Button"));
const Container = React.lazy(() => import("../../src/Components/Container"));
const GridContainer = React.lazy(() => import("../../src/Components/GridContainer"));
const GridItem = React.lazy(() => import("../../src/Components/GridItem"));
const Link = React.lazy(() => import("../../src/Components/Link"));
const Paper = React.lazy(() => import("../../src/Components/Paper"));
const Spacing = React.lazy(() => import("../../src/Components/Spacing"));
const TextField = React.lazy(() => import("../../src/Components/TextField"));
const Typography = React.lazy(() => import("../../src/Components/Typography"));

const Template : Story = () => {
  return (
      <Container component={"main"} maxWidth={"xs"}>
    <Paper>
        <Typography component={"h1"} variant={"h5"}>Sign in</Typography>
      <form noValidate={true}>
        <Spacing marginBottom={"tiny"} marginTop={"small"}>
          <TextField
            autoComplete={"email"}
            fullWidth={true}
            id={"email"}
            label={"Email Address"}
            margin={"normal"}
            name={"email"}
            placeholder={"Valid email address"}
            required={true}
            type={"email"}
            variant={"outlined"}
          />
        </Spacing>
        <Spacing marginBottom={"tiny"} marginTop={"small"}>
          <TextField
            autoComplete={"current-password"}
            fullWidth={true}
            id={"password"}
            label={"Password"}
            margin={"normal"}
            placeholder={"Valid password"}
            required={true}
            type={"password"}
            variant={"outlined"}
          />
        </Spacing>
        <Button
          color={"primary"}
          fullWidth={true}
          type={"submit"}
          variant={"contained"}>
          Sign In
        </Button>
        <GridContainer>
          <GridItem xs={true}>
            <Link href={"#"} variant={"body2"}>
              Forgot password?
            </Link>
          </GridItem>
          <GridItem>
            Don&#8217;t have an account?{" "}
            <Link href={"#"} variant={"body2"}>
              Sign Up
            </Link>
          </GridItem>
        </GridContainer>
      </form>
    </Paper>
  </Container>
);
}

export const SignIn : Story = Template.bind({});
