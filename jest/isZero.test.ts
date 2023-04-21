import { isZero } from "./isZero";

test("return true, if value is 0", () => {
    const result = isZero(0);
    expect(result).toBe(true); // https://jestjs.io/ja/docs/expect
})
test("return false, if value is 1", () => {
    const result = isZero(1);
    expect(result).toBe(false); // https://jestjs.io/ja/docs/expect
})
