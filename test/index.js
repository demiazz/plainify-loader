import test from 'ava';

import plugin from '../src';


function processByPlugin(object) {
  const source = JSON.stringify(object, undefined, '\t');
  const plain = plugin(source);

  return JSON.parse(plain);
}


test('does not convert plain objects', t => {
  const source = {
    firstKey: 'firstValue',
    secondKey: 'secondValue',
  };
  const expected = source;
  const actual = processByPlugin(source);

  t.deepEqual(actual, expected);
});

test('convert nested objects', t => {
  const source = {
    firstKey: 'firstValue',
    nestedObject: {
      secondKey: 'secondValue',
    },
  };
  const expected = {
    firstKey: 'firstValue',
    'nestedObject.secondKey': 'secondValue',
  };
  const actual = processByPlugin(source);

  t.deepEqual(actual, expected);
});
