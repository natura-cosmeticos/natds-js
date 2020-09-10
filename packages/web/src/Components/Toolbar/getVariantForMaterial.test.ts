import { getVariantForMaterial } from "./getVariantForMaterial";

describe("Toolbar variant property for Material UI", () => {
  describe("when variant property is regular", () => {
    it("should return regular as Material UI variant", () => {
      const variantForMaterial = getVariantForMaterial({ variant: "regular" });

      expect(variantForMaterial).toBe("regular");
    });
  });
  describe("when variant property is dense", () => {
    it("should return dense as Material UI variant", () => {
      const variantForMaterial = getVariantForMaterial({ variant: "dense" });

      expect(variantForMaterial).toBe("dense");
    });
  });
  describe("when variant property is prominent", () => {
    it("should return regular as Material UI variant", () => {
      const variantForMaterial = getVariantForMaterial({ variant: "prominent" });

      expect(variantForMaterial).toBe("regular");
    });
  });
});
