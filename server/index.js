import express from "express";
import React from "react";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import fs from "fs";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");
const app = express();

app.use("/dist", express.static("dist"));

app.use((req, res) => {
  res.write(parts[0]);

  //render component on server and send to client as complete markup
  const reactMarkUp = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  const stream = renderToNodeStream(reactMarkUp);

  stream.pipe(
    res,
    { end: false } //don't end when done
  );

  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

console.log("listening on " + PORT);
app.listen(PORT);
