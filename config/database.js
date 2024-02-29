const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-eu-central-1.pooler.supabase.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres.iqrtvpqmakcmfngntlyj"),
      password: env("DATABASE_PASSWORD", "cCUEL39rJE0vcSMU"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    useNullAsDefault: true,
  },
});
