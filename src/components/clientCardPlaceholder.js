import React from "react";
import { Card, Placeholder } from "semantic-ui-react";

function ClientCardPlaceholder() {
  return (
    <Card className="clientCard">
      <Card.Content>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      </Card.Content>
    </Card>
  );
}

export default ClientCardPlaceholder;