const mockClientHeight = 100;
const mockClientWidth = 300;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createNodeMock: (element: any) => (HTMLDivElement | null) = (element) => {

  if (typeof element.type !== "undefined") {
    const mockElement: HTMLElement = document.createElement(element.type);

    mockElement.style.padding = "0";
    Reflect.defineProperty(mockElement, "clientHeight", {
      get() {
        return mockClientHeight;
      },
      enumerable: true,
      configurable: true,
    });
    Reflect.defineProperty(mockElement, "clientWidth", {
      get() {
        return mockClientWidth;
      },
      enumerable: true,
      configurable: true,
    });

    return mockElement;
  }

  return null;
};

export default createNodeMock;
