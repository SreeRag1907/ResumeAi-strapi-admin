module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
        },
      },
      debug: false,
    },
  });