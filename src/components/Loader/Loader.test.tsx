import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders the loader with the provided message and size", () => {
    const message = "Loading...";
    const size = "50px";
    render(<Loader message={message} size={size} />);

    const loaderMessage = screen.getByText(message);
    expect(loaderMessage).toBeInTheDocument();

    const loaderCircle = screen.getByTestId("id-loader-circle");
    expect(loaderCircle).toHaveStyle(`width: calc(${size} - 6px)`);
    expect(loaderCircle).toHaveStyle(`height: calc(${size} - 6px)`);

    const loaderMessageContainer = screen.getByText(message).parentElement;
    expect(loaderMessageContainer).toHaveStyle(
      `marginTop: calc(${size} * 0.25)`
    );
  });

  it("renders the loader with the default message and size when no message and size are provided", () => {
    render(<Loader />);

    const defaultLoaderMessage = screen.getByText("Loading...");
    expect(defaultLoaderMessage).toBeInTheDocument();

    const defaultLoaderCircle = screen.getByTestId("id-loader-circle");
    expect(defaultLoaderCircle).toHaveStyle(`width: calc(70px - 6px)`);
    expect(defaultLoaderCircle).toHaveStyle(`height: calc(70px - 6px)`);

    const defaultLoaderMessageContainer =
      screen.getByText("Loading...").parentElement;
    expect(defaultLoaderMessageContainer).toHaveStyle(
      `marginTop: calc(70px * 0.25)`
    );
  });

  it("renders the loader with the provided message and default size when only message is provided", () => {
    const message = "Please wait...";
    render(<Loader message={message} />);

    const loaderMessage = screen.getByText(message);
    expect(loaderMessage).toBeInTheDocument();

    const defaultLoaderCircle = screen.getByTestId("id-loader-circle");
    expect(defaultLoaderCircle).toHaveStyle(`width: calc(70px - 6px)`);
    expect(defaultLoaderCircle).toHaveStyle(`height: calc(70px - 6px)`);

    const defaultLoaderMessageContainer =
      screen.getByText(message).parentElement;
    expect(defaultLoaderMessageContainer).toHaveStyle(
      `marginTop: calc(70px * 0.25)`
    );
  });

  it("renders the loader with the default message and the provided size when only size is provided", () => {
    const size = "100px";
    render(<Loader size={size} />);

    const defaultLoaderMessage = screen.getByText("Loading...");
    expect(defaultLoaderMessage).toBeInTheDocument();

    const loaderCircle = screen.getByTestId("id-loader-circle");
    expect(loaderCircle).toHaveStyle(`width: calc(${size} - 6px)`);
    expect(loaderCircle).toHaveStyle(`height: calc(${size} - 6px)`);

    const defaultLoaderMessageContainer =
      screen.getByText("Loading...").parentElement;
    expect(defaultLoaderMessageContainer).toHaveStyle(
      `marginTop: calc(${size} * 0.25)`
    );
  });
});
