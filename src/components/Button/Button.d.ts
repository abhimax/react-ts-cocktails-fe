interface IButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  disabled?: boolean;
  isStretched?: boolean;
  onClick?: () => void;
}
export { IButtonProps };
