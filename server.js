const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));  // Check path to your db.json file
const middlewares = jsonServer.defaults();

// Enable CORS for your frontend's URL
server.use(cors({
  origin: 'https://berenabiud.github.io/react-hooks-cc-plantshop/',  // Replace with your actual frontend URL
}));

// Handle preflight requests (OPTIONS)
server.options('*', cors());  // Enable preflight handling

server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;  // Use environment variable or default to 3000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
