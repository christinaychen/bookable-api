'use strict';

var dbm;
var type;
var seed;
var async = require('async');

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
  db.createTable('customer', {
    customerId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 255
    },
    age: {
      type: 'int',
    },
    email: {
      type: 'string',
      length: 255,
    },
    password: {
      type: 'string',
      length: 255,
    }
  }, callback);
  db.createTable('rating', {
    ratingId: {
      type: 'int',
      primaryKey: true
    },
    customerId: {
      type: 'int',
    },
    ratingValue: {
      type: 'int',
    },
    venueId: {
      type: 'int'
    },
  }, callback);
  db.createTable('venue', {
    venueId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 255
    },
    type: {
      type: 'string',
      length: 255
    },
    address: {
      type: 'string',
      length: 255
    },
    mapId: {
      type: 'int',
    },
    latitude: {
      type: 'string',
      length: 255
    },
    longitude: {
      type: 'string',
      length: 255
    },
    rating: {
      type: 'int',
    },
    row: {
      type: 'int',
    },
    column: {
      type: 'int'
    }
  }, callback);
  db.createTable('venueRating', {
    venueRatingId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    RatingValue: {
      type: 'int',
    },
  }, callback);
  db.createTable('venueTags', {
    venueTagId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    tagType: {
      type: 'string',
      length: 255
    },
  }, callback);

  db.createTable('orderItem', {
    orderItemId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    purchaseId: {
      type: 'int',
    },
    amount: {
      type: 'int'
    }
  }, callback);

  db.createTable('rating', {
    ratingId: {
      type: 'int',
      primaryKey: true
    },
    customerId: {
      type: 'int',
    },
    x: {
      type: 'int',
    },
    y: {
      type: 'int',
    },
    time: {
      type: 'datetime',
    },
  }, callback);
  db.createTable('totalPurchase', {
    purchaseId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    customerId: {
      type: 'int',
    },
    purchaseDate: {
      type: 'datetime',
    },
    overallPrice: {
      type: 'int',
    },
  }, callback);

  db.createTable('venue', {
    venueId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 255
    },
    type: {
      type: 'string',
      length: 255
    },
    address: {
      type: 'string',
      length: 255
    },
    mapId: {
      type: 'int',
    },
    latitude: {
      type: 'string',
      length: 255
    },
    longitude: {
      type: 'string',
      length: 255
    },
    rating: {
      type: 'int',
    }
  }, callback);

  db.createTable('venueRating', {
    venueRatingId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    RatingValue: {
      type: 'int',
    },
  }, callback);

  db.createTable('venueTags', {
    venueTagId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    tagType: {
      type: 'string',
      length: 255
    },
  }, callback);

  db.createTable('orderItem', {
    orderItemId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    venueId: {
      type: 'int',
    },
    purchaseId: {
      type: 'int',
    },
    customerId: {
      type: 'int',
    },
    x: {
      type: 'int',
    },
    y: {
      type: 'int',
    },
    time: {
      type: 'datetime',
    },
  }, callback);

  db.createTable('totalPurchase', {
    purchaseId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    customerId: {
      type: 'int',
    },
    purchaseDate: {
      type: 'datetime',
    },
    overallPrice: {
      type: 'int',
    },
  }, callback);


  //   db.createTable('user_test', {
  //     id: {
  //       type: 'int',
  //       primaryKey: true,
  //       autoIncrement: true,
  //     },
  //     full_name: {
  //       type: 'string',
  //       length: 255
  //     },
  //     dob: {
  //       type: 'date'
  //     },
  //     email: {
  //       type: 'string'
  //     }
  //   }, () => {
  //     db.addColumn('user_test', 'firstname', {
  //       type: 'string',
  //       length: 255
  //     },
  //       () => {
  //         db.addColumn('user_test', 'lastname', {
  //           type: 'string',
  //           length: 255
  //         }, callback)
  //       }
  //     )
  //   }
  //   )
  // };


};

// ratingValue: {
//   type: 'int',
//     },
// venueId: {
//   type: 'int'
// },
//   }, callback);




exports.down = function (db) {
  db.dropTable('customer', callback);
  db.dropTable('rating', callback);
  db.dropTable('venue', callback);
  db.dropTable('venueRating', callback);
  db.dropTable('venueTags', callback);
  db.dropTable('orderItem', callback);
  db.dropTable('totalPurchase', callback);
};

exports._meta = {
  "version": 1
};
