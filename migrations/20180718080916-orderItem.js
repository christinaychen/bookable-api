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
  db.addColumn("orderItem", "amount", {
    type: "int",
    length: 200
  }, callback);

  db.addColumn("orderItem", "token", {
    type: "string",
    length: 200
  }, callback);


};


exports.down = function (db) {
  db.removeColumn("orderItem", "amount", callback);
  db.removeColumn("orderItem", "token", callback);

};

exports._meta = {
  "version": 1
};
