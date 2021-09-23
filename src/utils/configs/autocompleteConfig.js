import { replaceTable } from "../replaceTable";

export const setAutoCompleteInstance = (source) => {
  new autoComplete({
    data: {
      src: source,
      key: ["first"],
      cache: true,
    },
    placeHolder: "Search",
    selector: "#autoComplete",
    maxResults: 10,
    threshold: 0, // Min. Chars length to start Engine
    debounce: 300, // Post duration for engine to start
    searchEngine: "loose",
    resultsList: {
      render: true,
      container: (source) => {
        const results = document.querySelector("#autoComplete_list");
        if (!results) {
          source.setAttribute("id", "autoComplete_list");
          source.setAttribute("data-testid", "autoComplete_list");
        }

        // This code solves a bug in the library
        const resultsList = document.querySelectorAll("#autoComplete_list");
        resultsList.forEach((element) => {
          element.remove();
        });
      },
      destination: document.querySelector("#autoComplete"),
      element: "ul",
    },
    highlight: true,
    resultItem: {
      content: (data, source) => {
        source.setAttribute("data-testid", "suggestion-item");
        source.innerHTML = data.match;
      },
      element: "li",
    },
    noResults: () => {
      const result = document.createElement("li");
      result.setAttribute("class", "no_result");
      result.setAttribute("tabindex", "1");
      result.innerHTML = "No Results";
      document.querySelector("#autoComplete_list").appendChild(result);
    },
    onSelection: (feedback) => {
      const input = document.querySelector("#autoComplete");
      const selection = feedback.selection;
      const user = selection.value;
      const userName = user.first;
      input.value = userName;
      // Focus out
      input.blur();
      // Render selected choice
      replaceTable([user]);
    },
  });
};
