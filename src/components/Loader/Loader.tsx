import { FC } from "react";

interface LoaderProps {
  size?: string;
  message?: string;
}

const Loader: FC<LoaderProps> = ({ size = "70px", message = "Loading..." }) => {
  return (
    <div className="loader-container">
      <div
        className="loader-circle"
        style={{ width: `calc(${size} - 6px)`, height: `calc(${size} - 6px)` }}
        data-testid="id-loader-circle"
      ></div>
      <p className="loader-message" style={{ marginTop: `calc(${size}*0.25)` }}>
        {message}
      </p>
    </div>
  );
};

export default Loader;
