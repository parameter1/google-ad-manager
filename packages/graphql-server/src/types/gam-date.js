const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const dayjs = require('../dayjs');

const pad = (number) => `${number}`.padStart(2, '0');

module.exports = new GraphQLScalarType({
  name: 'GAMDate',
  description: 'Handles Google Ad Manager date objects.',
  parseValue(value) {
    throw new Error(`GAMDate parseValue ${value} NYI`);
  },
  serialize(obj) {
    if (!obj) return null;
    const { year, month, day } = obj;
    return `${year}-${pad(month)}-${pad(day)}`;
  },
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) throw new Error(`Unsupported GAMDate kind: ${ast.kind}`);
    const date = dayjs(ast.value, 'YYYY-MM-DD');
    return {
      year: date.year(),
      month: date.month() + 1,
      day: date.date(),
    };
  },
});
