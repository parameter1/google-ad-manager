const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const dayjs = require('../dayjs');

const pad = (number) => `${number}`.padStart(2, '0');

const parseDateString = (value) => {
  const date = dayjs(value, 'YYYY-MM-DD');
  return {
    year: date.year(),
    month: date.month() + 1,
    day: date.date(),
  };
};

module.exports = new GraphQLScalarType({
  name: 'GAMDate',
  description: 'Handles Google Ad Manager date objects.',
  parseValue(value) {
    if (typeof value !== 'string') throw new Error(`Unsupported GAMDate parse value: ${typeof value}`);
    return parseDateString(value);
  },
  serialize(obj) {
    if (!obj) return null;
    const { year, month, day } = obj;
    return `${year}-${pad(month)}-${pad(day)}`;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) throw new Error(`Unsupported GAMDate kind: ${ast.kind}`);
    return parseDateString(ast.value);
  },
});
