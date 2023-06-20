import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../SearchForm";
import { ISearchFormProps } from "../SearchForm.d";

describe("SearchForm component", () => {
  const mockHandleSearchInputChange = jest.fn();
  const mockHandleSearchClick = jest.fn();

  const renderComponent = (props: Partial<ISearchFormProps> = {}) => {
    const defaultProps: ISearchFormProps = {
      searchTerm: "",
      handleSearchInputChange: mockHandleSearchInputChange,
      handleSearchClick: mockHandleSearchClick,
    };

    const mergedProps = { ...defaultProps, ...props };

    return render(<SearchForm {...mergedProps} />);
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the input and button", () => {
    renderComponent();

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button");

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should pass the correct props to the input element", () => {
    const placeholder = "Search Placeholder";
    const label = "Search Label";
    const searchTerm = "Test Search Term";

    renderComponent({ placeholder, label, searchTerm });

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    const labelElement = screen.getByText(label) as HTMLLabelElement;

    expect(inputElement.placeholder).toBe(placeholder);
    expect(inputElement.value).toBe(searchTerm);
    expect(labelElement.textContent).toBe(label);
  });

  it("should call handleSearchClick when the button is clicked", () => {
    renderComponent();

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);

    expect(mockHandleSearchClick).toHaveBeenCalledTimes(1);
  });
});
