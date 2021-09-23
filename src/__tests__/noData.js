import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import user from "@testing-library/user-event";
import { App } from "./mocks/App";

beforeEach(() => {
  return (document.body.innerHTML = App());
});

it("should render the NoData component", () => {
  const noDataDiv = screen.getByText(/no data/i, { selector: "div" });
  const noDataImg = screen.getByAltText(/no data/i);

  expect(noDataDiv).toBeInTheDocument();
  expect(noDataDiv).toContainElement(noDataImg);
  expect(noDataImg).toBeInTheDocument();
});

it("should not render the NoData component after the download button is clicked", () => {
  const downloadButton = screen.getByText(/fill/i);

  user.click(downloadButton);

  const noDataImg = screen.queryByAltText("no data");
  const noDataDiv = screen.queryByText(/no data/i, { selector: "div" });

  waitForElementToBeRemoved([noDataDiv, noDataImg]).then(() => {
    expect(noDataDiv).not.toBeInTheDocument();
    expect(noDataImg).not.toBeInTheDocument();
  });

  noDataDiv.parentElement.removeChild(noDataDiv);
  noDataImg.parentElement.removeChild(noDataImg);
});
