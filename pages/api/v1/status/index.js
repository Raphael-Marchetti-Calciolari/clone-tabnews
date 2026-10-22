import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const postgresVersionResult = await database.query("SHOW server_version;");
  const postgresVersion = postgresVersionResult.rows[0].server_version;

  const postgresMaxConnectionsResult = await database.query("SHOW max_connections;");
  const postgresMaxConnections = parseInt(postgresMaxConnectionsResult.rows[0].max_connections);

  const postgresOpenedConnectionResult = await database.query("SELECT count(*) FROM pg_stat_activity WHERE datname = 'local_tabnews_db';");
  const postgresOpenedConnections = parseInt(postgresOpenedConnectionResult.rows[0].count);

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: postgresVersion,
        max_connections: postgresMaxConnections,
        opened_connections: postgresOpenedConnections,
      },
    },
  });

}

export default status;
