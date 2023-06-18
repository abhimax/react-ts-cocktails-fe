interface IButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export { IButtonProps };
