import { NoData, ButtonBase, DownloadButtonContents, Input } from "./components";

async function App() {
  const template = document.createElement("template");

  template.innerHTML = `
    <main class="container">
      <section class="controls">
        ${ButtonBase(DownloadButtonContents())}
        ${Input()}
      </section>
      <section class="table-container">
        ${NoData()} 
      </section>
    </main>
      `;

  return template.content.cloneNode(true);
}

export default App;
