const http = require("http");

const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/healthcheck") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.write("Hi there, This is a Vanilla Node.js API");
    //end the response
    res.end();
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log(`Server is running`);
});
