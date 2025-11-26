// Chama tudo

import App from "./App.js";

const app = new App(
  "https://jsonplaceholder.typicode.com/posts",
  "#tbody"
);

app.init();
