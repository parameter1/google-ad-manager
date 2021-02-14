const { GraphQLScalarType } = require('graphql');
// const { Kind } = require('graphql/language');
const dayjs = require('../dayjs');

const pad = (number) => `${number}`.padStart(2, '0');

module.exports = new GraphQLScalarType({
  name: 'GAMDateTime',
  description: 'Converts the DateTime object used by Google Ad Manager into an ISO-8601 date string.',
  parseValue(value) {
    throw new Error(`GAMDateTime parseValue ${value} NYI`);
  },
  serialize(obj) {
    if (!obj) return null;
    const { date } = obj;
    const dateStr = `${date.year}-${pad(date.month)}-${pad(date.day)}`;
    const timeStr = `${pad(obj.hour)}:${pad(obj.minute)}:${pad(obj.second)}`;
    const str = `${dateStr}T${timeStr}`;
    const dt = dayjs.tz(str, obj.timeZoneId);
    return dt.toISOString();
  },
  parseLiteral(ast) {
    throw new Error(`GAMDateTime parseLiteral ${ast} NYI`);
  },
});
