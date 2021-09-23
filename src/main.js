import "./scss/app.scss";
import App from "./App";
import { attachEvents } from "./utils/attachEvents";

const app = async () => {
  document.getElementById("app").appendChild(await App());
  await attachEvents();
};

app();
