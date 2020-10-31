// eslint-disable-next-line no-use-before-define
import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Favorite from "@material-ui/icons/Favorite";

import { themes } from "@naturacosmeticos/natds-styles";
import { TextField, ITextFieldProps } from "./TextField";

const getProps = (props: Partial<ITextFieldProps> = {}) => {

  const {
    disabled,
    helpText = "Assistive text", id = "field", label = "Label",
    mask,
    placeholder = "Placeholder",
    required, state,
    theme = themes.natura.light,
  } = props;

  return {
    disabled, helpText, id, label, mask, placeholder, required, state, theme,
  };
};

describe("TextField component", () => {
  describe("rendering state", () => {
    it("should match snapshot - TextField (default)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} />);

      expect(component).toMatchSnapshot("TextField default snapshot");
    });
    it("should match snapshot - TextField (readonly explicitly set to true)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} readOnly={true} />);

      expect(component).toMatchSnapshot("TextField readonly explicitly set to true snapshot");
    });
    it("should match snapshot - TextField (readonly explicitly set to false)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} readOnly={false} />);

      expect(component).toMatchSnapshot("TextField readonly explicitly set to false snapshot");
    });
    it("should match snapshot - TextField (default without placeholder)", () => {
      const props = getProps();

      Reflect.deleteProperty(props, "placeholder");

      const component = TestRenderer.create(<TextField {...props} />);

      expect(component).toMatchSnapshot("TextField default without placeholder snapshot");
    });
    it("should match snapshot - TextField (filled)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} value="some value" />);

      expect(component).toMatchSnapshot("TextField filled snapshot");
    });
    it("should match snapshot - TextField (success)", () => {
      const component = TestRenderer.create(<TextField {...getProps({ state: "success" })} />);

      expect(component).toMatchSnapshot("TextField success snapshot");
    });
    it("should match snapshot - TextField (error)", () => {
      const component = TestRenderer.create(<TextField {...getProps({ state: "error" })} />);

      expect(component).toMatchSnapshot("TextField error snapshot");
    });
    it("should match snapshot - TextField (required)", () => {
      const component = TestRenderer.create(<TextField {...getProps({ required: true })} />);

      expect(component).toMatchSnapshot("TextField required snapshot");
    });
    it("should match snapshot - TextField (required without label)", () => {
      const component = TestRenderer.create(<TextField {...getProps({
        label: null,
        required: true,
      })} />);

      expect(component).toMatchSnapshot("TextField required without label snapshot");
    });
    it("should match snapshot - TextField (disabled)", () => {
      const component = TestRenderer.create(<TextField {...getProps({ disabled: true })} />);

      expect(component).toMatchSnapshot("TextField disabled snapshot");
    });
    it("should match snapshot - TextField (custom icon)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} icon={<Favorite />} />);

      expect(component).toMatchSnapshot("TextField custom icon snapshot");
    });
    it("should match snapshot - TextField (custom icon with action)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} icon={<Favorite />} onIconPress={() => ({})} />);

      expect(component).toMatchSnapshot("TextField custom icon with action snapshot");
    });
    it("should match snapshot - TextField (mask)", () => {
      const mask = ["(", /[1-9]/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
      const component = TestRenderer.create(<TextField {...getProps({ mask })} />);

      expect(component).toMatchSnapshot("TextField mask snapshot");
    });
    it("should match snapshot - TextField (theme change)", () => {
      const component = TestRenderer.create(<TextField {...getProps({ theme: themes.natura.dark })} />);

      expect(component).toMatchSnapshot("TextField theme change snapshot");
    });
    it("should match snapshot - TextField (property forwarded)", () => {
      const component = TestRenderer.create(<TextField {...getProps()} type="email" />);

      expect(component).toMatchSnapshot("TextField property forwarded snapshot");
    });
    it("should match snapshot - TextField (default with empty theme)", () => {
      const component = TestRenderer.create(<TextField {...getProps({ theme: {} })} />);

      expect(component).toMatchSnapshot("TextField default with empty theme snapshot");
    });
  });
});
