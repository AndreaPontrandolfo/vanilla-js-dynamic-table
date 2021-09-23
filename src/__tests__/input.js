import { screen } from "@testing-library/dom";
import user from "@testing-library/user-event";
import { App } from "./mocks/App";
import { attachEvents } from "../utils/attachEvents";

beforeEach(() => {
  return (document.body.innerHTML = App());
});

describe("initial input behaviour", () => {
  it("should render a input with aria-label 'search'", () => {
    const input = screen.getByRole(/search/i);
    expect(input).toBeInTheDocument();
  });

  it("(input) should be disabled", () => {
    const input = screen.getByRole(/search/i);
    expect(input).toBeDisabled();
  });
});

describe("input behaviour after the download button is clicked", () => {
  beforeEach(() => {
    attachEvents();
  });

  it("(input) should be enabled", async () => {
    const downloadButton = screen.getByText(/fill/i);
    user.click(downloadButton);

    await screen.findByText(/refresh/i);

    const input = screen.getByRole(/search/i);
    expect(input).toBeEnabled();
  });
});
