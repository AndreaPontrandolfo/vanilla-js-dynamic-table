import { screen } from "@testing-library/dom";
import user from "@testing-library/user-event";
import { App } from "./mocks/App";
import { attachEvents } from "../utils/attachEvents";

beforeEach(() => {
  document.body.innerHTML = App();
  return attachEvents();
});

it("should render a element with text 'fill'", () => {
  const downloadButton = screen.getByText(/fill/i);
  expect(downloadButton).toBeInTheDocument();
});

it("should render a element with text 'refresh'", async () => {
  const downloadButton = screen.getByText(/fill/i);
  user.click(downloadButton);

  const refreshButton = await screen.findByText(/refresh/i);

  expect(refreshButton).toBeInTheDocument();
});
