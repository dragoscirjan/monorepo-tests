const hello = require("./index");
const { bhello } = require("./index");

describe("hello", () => {
  it("hello", () => {
    expect(hello()).toEqual("Hello World From a!");
    expect(hello("John")).toEqual("Hello John From a!");
  });
});

describe("hello", () => {
  it("bhello", () => {
    expect(bhello()).toEqual("Hello World From b!");
    expect(bhello("John")).toEqual("Hello John From b!");
  });
});
