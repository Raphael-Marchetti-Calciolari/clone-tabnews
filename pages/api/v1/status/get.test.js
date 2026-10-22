test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

});

test("GET to /api/v1/status should have updated_at convertable to ISO 8601 format", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

});

test("GET to /api/v1/status should have dependencies with database", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.dependencies).toBeDefined();
  expect(responseBody.dependencies.database).toBeDefined();

});

test("GET to /api/v1/status should have database version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.dependencies.database.version).toBeDefined();
  const version = responseBody.dependencies.database.version;

  expect(typeof version).toBe("string");

  const versionRegex = /^(\d+\.\d+)/;
  expect(versionRegex.test(version)).toBe(true);
  expect(version).toEqual("16.0");

});

test("GET to /api/v1/status should have max_connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.dependencies.database.max_connections).toBeDefined();
  
  const maxConnections = responseBody.dependencies.database.max_connections;
  expect(typeof maxConnections).toBe("number");

});

test("GET to /api/v1/status should have opened_connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  
  expect(responseBody.dependencies.database.opened_connections).toBeDefined();
  const openedConnections = responseBody.dependencies.database.opened_connections;
  expect(typeof openedConnections).toBe("number");
  expect(openedConnections).toEqual(1);

});
