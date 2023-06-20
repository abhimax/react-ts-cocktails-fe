import { FC } from "react";
import { Col, Row } from "react-grid-system";
import { IAppHeaderProps } from "./AppHeader.d";

const AppHeader: FC<IAppHeaderProps> = ({ heading }) => {
  return (
    <Row>
      <Col className="app-header">
        <header>
          <h1 className="main-heading">{heading}</h1>
        </header>
      </Col>
    </Row>
  );
};

export default AppHeader;
