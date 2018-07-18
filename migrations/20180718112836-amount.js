'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('amount', {
    amountId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    x: {
      type: 'int',
    },
    y: {
      type: 'int',
    },
    price: {
      type: 'int'
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable("amount", callback);
};

exports._meta = {
  "version": 1
};
