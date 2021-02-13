const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 250;

const clean = (value) => {
  if (!value) return null;
  return `${value}`.replace(/\r?\n|\r/g, ' ').trim();
};

class StatementBuilder {
  constructor({
    where,
    orderBy,
    limit,
    offset,
  } = {}) {
    this.clauses = {};
    this
      .where(where)
      .orderBy(orderBy)
      .limit(limit)
      .offset(offset);
  }

  where(conditions) {
    this.clauses.where = (conditions || '').trim() || null;
    return this;
  }

  limit(count) {
    const limit = parseInt(count, 10);
    if (!limit || limit < 1) {
      this.clauses.limit = DEFAULT_LIMIT;
      return this;
    }
    if (limit > MAX_LIMIT) {
      this.clauses.limit = MAX_LIMIT;
      return this;
    }
    this.clauses.limit = limit;
    return this;
  }

  offset(count) {
    const offset = parseInt(count, 10);
    if (!offset || offset < 1) {
      this.clauses.offset = 0;
      return this;
    }
    this.clauses.offset = offset;
    return this;
  }

  orderBy(orderBy) {
    this.clauses.orderBy = (orderBy || '').trim() || null;
    return this;
  }

  build() {
    const clauses = [];
    const {
      where,
      orderBy,
      limit,
      offset,
    } = this.clauses;
    if (where) clauses.push(clean(`WHERE ${where}`));
    if (orderBy) clauses.push(clean(`ORDER BY ${orderBy}`));
    if (limit) clauses.push(`LIMIT ${limit}`);
    if (offset) clauses.push(`OFFSET ${offset}`);
    return clauses.join(' ').trim();
  }
}

module.exports = StatementBuilder;
