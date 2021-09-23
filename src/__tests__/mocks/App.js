import { ButtonBase, DownloadButtonContents, NoData, Input } from "../../components";

export const App = () => {
  return `
        <main class="container">
        <section class="controls">
        ${ButtonBase(DownloadButtonContents())}
        ${Input()}
        </section>
        <section class="table-container">
        ${NoData()} 
        </section>
    </main>`;
};
