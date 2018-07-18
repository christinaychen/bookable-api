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
  db.addForeignKey('rating', 'customer', 'rating-customer-map',
    {
      'customerId': 'customerId'
    },
    {

    }, callback);


  db.addForeignKey('rating', 'venue', 'rating-venue-map',
    {
      'venueId': 'venueId'
    },
    {
    }, callback);

  db.addForeignKey('venueRating', 'venue', 'venueRating-venue-map',
    {
      'venueId': 'venueId'
    },
    {
    }, callback);

  db.addForeignKey('venueTags', 'venue', 'venueTags-venue-map',
    {
      'venueId': 'venueId'
    },
    {
    }, callback);

  // db.addForeignKey('venue','map','venue-map-map',
  // {
  //   'mapId':'mapId'
  // },
  // {
  // },callback);

  db.addForeignKey('orderItem', 'venue', 'orderItem-venue-map',
    {
      'venueId': 'venueId'
    },
    {
    }, callback);

  db.addForeignKey('orderItem', 'customer', 'orderItem-customer-map',
    {
      'customerId': 'customerId'
    },
    {
    }, callback);

};


exports.down = function (db, callback) {
  db.removeForeignKey('rating', 'rating-customer-map', callback);
  db.removeForeignKey('rating', 'rating-venue-map', callback);
  db.removeForeignKey('venueRating', 'venueRating-venue-map', callback);
  db.removeForeignKey('venueTags', 'venueTags-venue-map', callback);
  db.removeForeignKey('orderItem', 'orderItem-venue-map', callback);
  db.removeForeignKey('orderItem', 'orderItem-customer-map', callback);


};
