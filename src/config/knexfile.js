module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '9102',
      database: 'armoney-dev',
      user: 'armoney-dev',
      password: 'armoney-dev',
    },
    migrations: {
      directory: '../database/migrations'
    },
    seeds: {
      directory: '../database/seeds'
    }
  },

test: {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    database: 'armoney-test',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  },
  migrations: {
    directory: '../database/migrations'
  },
  seeds: {
    directory: '../database/seeds'
  }
},

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: '../database/migrations'
    },
    seeds: {
      directory: '../database/seeds'
    }
  }
};
