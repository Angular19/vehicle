"use strict";

const http = require("http");
const path = require("path");
const express = require("express");

const app = express();

app.use("/", express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || "3000";
app.set("port", port);
console.log(port);
http.createServer(app).listen(port);