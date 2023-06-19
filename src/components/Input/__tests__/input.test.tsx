import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

describe("Input component", () => {
  it("renders label text", () => {
    const labelText = "Test Label";
    render(<Input label={labelText} />);
    const label = screen.getByText(labelText);
    expect(label).toBeInTheDocument();
  });

  it("renders input element", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("handles input change", () => {
    const mockOnChange = jest.fn();
    render(<Input onChange={mockOnChange} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "test");
    expect(mockOnChange).toHaveBeenCalledTimes(4); // 4 because 'test' has 4 characters
  });

  it("renders error message", () => {
    const errorMessage = "Test Error";
    render(<Input error={errorMessage} />);
    const error = screen.getByText(errorMessage);
    expect(error).toBeInTheDocument();
  });

  it("applies className prop", () => {
    const className = "test-class";
    const { getByTestId } = render(<Input className={className} />);
    const input = getByTestId("input-wrapper-test");
    expect(input).toHaveClass(className);
  });

  it("applies type prop", () => {
    const { getByTestId } = render(<Input type="password" />);
    const input = getByTestId("input-test");
    expect(input).toHaveAttribute("type", "password");
  });

  it("applies size prop", () => {
    const size = "small";
    const { getByTestId } = render(<Input size={size} />);
    const input = getByTestId("input-wrapper-test");
    expect(input).toHaveClass(`input--${size}`);
  });
});
