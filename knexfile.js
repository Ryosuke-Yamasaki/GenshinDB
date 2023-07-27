// Update with your config settings.

module.exports = {

  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      database: "genshin_db",
      user: "root",
      password: "TBdEAm3jKW&a",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "[事前準備で設定したrootユーザのパスワード]",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "todo_app",
      user: "root",
      password: "[事前準備で設定したrootユーザのパスワード]",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};