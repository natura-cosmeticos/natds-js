// eslint-disable-next-line @typescript-eslint/no-explicit-any,max-len
export const handleSelectAllClick: ({dataState, setSelected}: { dataState: any[]; setSelected: any }) => (event) => void = ({dataState, setSelected}) => (event) => {
  let auxiliaryTable = [];

  auxiliaryTable = dataState.map((auxItem) => {
    const updatedAuxItem = auxItem;

    updatedAuxItem.selected = event.target.checked;

    return updatedAuxItem;
  });

  setSelected(auxiliaryTable);
};
