import React, { Component } from "react";
import { Card, Image, Input, Placeholder, Segment } from "semantic-ui-react";

class SideBar extends Component {
  render() {
    return (
      <div>
        <Input icon="users" size="medium" placeholder="Search..." />
        {this.props.isLoading ? (
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
          </Segment>
        ) : (
          <Card.Group>
            {this.props.clients.map((client, index) => (
              <Card key={index} onClick={() => this.props.onCardClick(client)}>
                <Card.Content>
                  <Image
                    floated="left"
                    size="tiny"
                    src={client.general.avatar}
                  />
                  <Card.Header>
                    {client.general.firstName} {client.general.lastName}
                  </Card.Header>
                  <Card.Meta>{client.job.title}</Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        )}
      </div>
    );
  }
}

export default SideBar;
