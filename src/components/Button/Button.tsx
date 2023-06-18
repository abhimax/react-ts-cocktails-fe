import { FC } from "react";
import { IButtonProps } from "./Button.d";

const Button: FC<IButtonProps> = ({
  primary = false,
  size = "medium",
  label,
  disabled,
  isStretched,
  ...props
}) => {
  const mode = primary ? "btn--primary" : "btn--secondary";
  return (
    <button
      type="button"
      className={[
        "ui-button",
        `btn--${size}`,
        `${isStretched ? "btn--full-width" : ""}`,
        mode,
      ].join(" ")}
      disabled={disabled}
      {...props}
    >
      <>{label}</>
    </button>
  );
};

export default Button;
