type Id = number;
type Title = string;
type Selected = boolean;
type Row = { id: Id, title: Title, selected: Selected}
export type IExampleDataTable = Row[]

export const exampleDataTable : IExampleDataTable = [
  { id: 1, title: "Cell", selected: false },
  { id: 2, title: "Cell", selected: false },
  { id: 3, title: "Cell", selected: false },
  { id: 4, title: "Cell", selected: false },
];

export default exampleDataTable;
