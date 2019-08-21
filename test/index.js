import test from "ava";

import plugin from "../src";

const processByPlugin = object => {
  const source = JSON.stringify(object, undefined, "\t");
  const plain = plugin(source);

  return JSON.parse(plain);
};

test("does not convert plain objects", t => {
  const source = {
    string: "string",
    number: 1,
    null: null
  };
  const expected = source;
  const actual = processByPlugin(source);

  t.deepEqual(actual, expected);
});

test("convert nested objects", t => {
  const source = {
    string: "string",
    number: 1,
    null: null,
    nestedObject: {
      secondKey: "secondValue"
    }
  };
  const expected = {
    string: "string",
    number: 1,
    null: null,
    "nestedObject.secondKey": "secondValue"
  };
  const actual = processByPlugin(source);

  t.deepEqual(actual, expected);
});
