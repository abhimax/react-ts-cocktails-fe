import React from "react";
import classNames from "classnames";

type InputProps = {
  label?: string;
  size?: "small" | "medium" | "large";
  error?: string;
  className?: string;
  type?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "label" | "error" | "className" | "type"
>;

const Input: React.FC<InputProps> = ({
  label,
  size = "medium",
  error,
  className,
  type,
  ...props
}) => {
  const inputClassName = classNames(
    "form-group",
    size ? `input--${size}` : "",
    error ? `input--error` : "",
    className,
    type ? `input--${type}` : ""
  );

  return (
    <div className={inputClassName} data-testid="input-wrapper-test">
      <label className="input-label">{label}</label>
      <input
        className="form-input"
        type={type}
        {...props}
        data-testid="input-test"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
