import * as React from "react";
import * as renderer from "react-test-renderer";
import FormControl from "../FormControl";
import FormHelperText from "../../Components/FormHelperText";
import InputLabel from "../../Components/InputLabel";
import MenuItem from "../../Components/MenuItem";
import Select from "../../Components/Select";

const Component = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel shrink>Select Simple With Help Text</InputLabel>
      <Select value={age} onChange={handleChange} displayEmpty>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Some important helper text</FormHelperText>
    </FormControl>
  );
};

describe("Select components", () => {
  test("should match to snapshot - Show", () => {
    const actual: renderer.ReactTestRenderer = renderer.create(<Component />);

    expect(actual).toMatchSnapshot("Select Show snapshot");
  });
});
