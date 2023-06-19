import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button element", () => {
    const { getByRole } = render(<Button />);
    expect(getByRole("button")).toBeInTheDocument();
  });

  it("renders the label prop", () => {
    const label = "Click me";
    const { getByText } = render(<Button label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it("applies the primary style if primary prop is true", () => {
    const { getByRole } = render(<Button primary />);
    expect(getByRole("button")).toHaveClass("btn--primary");
  });

  it("applies the secondary style if primary prop is false", () => {
    const { getByRole } = render(<Button primary={false} />);
    expect(getByRole("button")).toHaveClass("btn--secondary");
  });

  it("applies the medium size style by default", () => {
    const { getByRole } = render(<Button />);
    expect(getByRole("button")).toHaveClass("btn--medium");
  });

  it("applies the size style based on size prop", () => {
    const { getByRole } = render(<Button size="small" />);
    expect(getByRole("button")).toHaveClass("btn--small");
  });

  it("applies the isStretched style based on size prop", () => {
    const { getByRole } = render(<Button isStretched />);
    expect(getByRole("button")).toHaveClass("btn--full-width");
  });

  it("disables the button if disabled prop is true", () => {
    const { getByRole } = render(<Button disabled />);
    expect(getByRole("button")).toBeDisabled();
  });

  it("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} />);
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
