import React, { Component } from "react";
import { Card, Image, Input, Placeholder, Segment } from "semantic-ui-react";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.searchClient = this.searchClient.bind(this);
    this.state = { shownClients: null };
  }

  render() {
    return (
      <div>
        <Input
          icon="users"
          size="medium"
          placeholder="Search..."
          onChange={e => this.searchClient(e.target.value)}
        />
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
            {this.state.shownClients
              ? this.state.shownClients.map((client, index) => (
                  <Card
                    key={index}
                    onClick={() => this.props.onCardClick(client)}
                  >
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
                ))
              : this.props.clients.map((client, index) => (
                  <Card
                    key={index}
                    onClick={() => this.props.onCardClick(client)}
                  >
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

  searchClient(value) {
    const shownClients = this.props.clients.filter(client => {
      for (const property in client) {
        for (const key in client[property]) {
          if (
            client[property][key].toLowerCase().startsWith(value.toLowerCase())
          ) {
            return true;
          }
        }
      }
      return false;
    });

    this.setState({ shownClients });
    console.log(this.state.shownClients);
  }
}

export default SideBar;
