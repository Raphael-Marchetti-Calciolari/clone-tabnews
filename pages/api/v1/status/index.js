import database from "infra/database.js";

function parsePostgresVersion(versionString) {
  const versionMatch = versionString.match(/PostgreSQL (\d+\.\d+)/);
  return versionMatch ? versionMatch[1] : null;
}

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = parsePostgresVersion(
    (await database.query("SELECT version();")).rows[0].version,
  );
  const postgresMaxConnections = parseInt(
    (await database.query("SHOW max_connections;")).rows[0].max_connections, 10
  );
  const postgresOpenedConnections = parseInt(
    (await database.query("SELECT count(*) FROM pg_stat_activity;")).rows[0].count
  );

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
