const hello = require("./index");
const { bhello } = require("./index");

describe("hello", () => {
  it("hello", () => {
    expect(hello()).toEqual("Hello World From b!");
    expect(hello("John")).toEqual("Hello John From b!");
  });
});
