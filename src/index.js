function plainify(object, namespace = '') {
  let result = {};

  const keys = Object.keys(object);

  for (const key of keys) {
    const value = object[key];

    if (typeof value === 'string' || typeof value === 'number' || value == null) {
      result[`${namespace}${key}`] = value;
    } else {
      const nested = plainify(value, `${namespace}${key}.`);

      Object.assign(result, nested);
    }
  }

  return result;
}


export default function plainifyLoader(source) {
  if (this && this.cacheable) {
    this.cacheable();
  }

  const parsedValue = JSON.parse(source);
  const processedValue = plainify(parsedValue);

  return JSON.stringify(processedValue, undefined, '\t');
}
