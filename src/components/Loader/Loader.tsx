import { FC } from "react";

interface LoaderProps {
  size?: string;
}

const Loader: FC<LoaderProps> = ({ size = "75px" }) => {
  return (
    <div className="loader-container" style={{ width: size, height: size }}>
      <div
        className="loader-circle"
        style={{ width: `calc(${size} - 6px)`, height: `calc(${size} - 6px)` }}
      ></div>
    </div>
  );
};

export default Loader;
