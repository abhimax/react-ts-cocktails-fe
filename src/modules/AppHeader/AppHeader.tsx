import { FC } from "react";
import { Col, Row } from "react-grid-system";

interface AppHeaderProps {
  heading: string;
}

const AppHeader: FC<AppHeaderProps> = ({ heading }) => {
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
