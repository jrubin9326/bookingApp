const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("diconnect", () => {
    console.log("a user disconnected");
  });
});

http.listen(8080, () => {
  console.log("listening on post 8080");
});
