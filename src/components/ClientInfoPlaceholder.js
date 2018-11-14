import React from "react";
import { Placeholder } from "semantic-ui-react";

function ClientInfoPlaceholder() {
  return (
    <div className="client-info">
      <Placeholder className="client-avatar">
        <Placeholder.Image />
      </Placeholder>

      <Placeholder className="info-placeholder">
        <Placeholder.Header>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Header>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </div>
  );
}

export default ClientInfoPlaceholder;
