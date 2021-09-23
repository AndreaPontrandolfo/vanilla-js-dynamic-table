import { screen, waitFor } from "@testing-library/dom";
import user from "@testing-library/user-event";
import { App } from "./mocks/App";
import { attachEvents } from "../utils/attachEvents";
import { randomUserMock } from "./mocks/randomUser";
import { axiosMock } from "./mocks/axiosMock";
import { autoComplete } from "./mocks/autoComplete";

beforeEach(async () => {
  axiosMock.get.mockImplementationOnce(() => Promise.resolve({ data: { randomUserMock } }));
  document.body.innerHTML = App();
  await attachEvents();
  global.autoComplete = await new autoComplete();
  const downloadButton = screen.getByText(/fill/i);
  return user.click(downloadButton);
});

it("should render the table", async () => {
  await screen.findAllByTestId(/table/i);
  const tr = screen.getAllByTestId(/table-row/i)[0];
  const img = screen.getAllByAltText(/Profile Thumbnail/i)[0];
  const firstName = screen.getAllByTestId(/first-name/i)[0];
  const lastName = screen.getAllByTestId(/last-name/i)[0];

  expect(tr).toBeInTheDocument();
  expect(tr).toContainElement(img);
  expect(tr).toContainElement(firstName);
  expect(tr).toContainElement(lastName);
});

describe("search input", () => {
  it("should render a suggestions list after user input text", async () => {
    await screen.findAllByTestId(/table/i);
    const initialRows = screen.getAllByTestId(/table-row/i);
    expect(initialRows.length).toBe(50);
    const input = screen.getByRole(/search/i);
    user.type(input, "a");
    await waitFor(() => expect(screen.getAllByTestId(/table-row/i).length).toBeLessThan(50));
    const suggestionsList = screen.getByTestId(/autoComplete_list/i);
    expect(suggestionsList).not.toBeEmptyDOMElement();
  });

  it("should render a single result after user input text", async () => {
    await screen.findAllByTestId(/table/i);
    const initialRows = screen.getAllByTestId(/table-row/i);
    expect(initialRows.length).toBe(50);
    const input = screen.getByRole(/search/i);
    user.type(input, "a");
    await waitFor(() => expect(screen.getAllByTestId(/table-row/i).length).toBeLessThan(50));
    const suggestionItem = screen.getAllByTestId(/suggestion-item/i)[0];
    user.click(suggestionItem);
    expect(screen.getAllByTestId(/table-row/i).length).toBe(1);
  });
});
