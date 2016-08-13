'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'webjs',
      user: 'root',
      password: '',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};
