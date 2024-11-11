const jsonServer = require('json-server');
const path = require('path'); // Import path module for flexible file path handling
const server = jsonServer.create();

// Point to the db.json file in the src/assets directory
const router = jsonServer.router(path.join(__dirname, 'src', 'assets', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
