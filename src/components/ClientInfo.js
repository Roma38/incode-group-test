import React, { Component } from "react";
import { Image, Header, List, Container, Placeholder } from "semantic-ui-react";

class ClientInfo extends Component {
  render() {
    return this.props.client ? <div>
        <Image floated="left" verticalAlign="middle" src={this.props.client.general.avatar} />
        <Container text textAlign="justified">
          <Header size="huge">
          {this.props.client.general.firstName + ' '}
            {this.props.client.general.lastName}
          </Header>
          <Header size="medium">
            {this.props.client.job.title}
            <br />
            {this.props.client.job.company}
          </Header>
          <List inverted>
            <List.Item icon="phone" content={<a
                  href={`callto:${this.props.client.contact.phone}`}
                >
                  {this.props.client.contact.phone}
                </a>} />
            <List.Item icon="mail" content={<a
                  href={`mailto:${this.props.client.contact.email}`}
                >
                  {this.props.client.contact.email}
                </a>} />
            <List.Item icon="point" content={this.props.client.address.city + ", " + this.props.client.address.country} />
            <List.Item icon="address book outline" content={this.props.client.address.street} />
          </List>
        </Container>
      </div> : <Placeholder>
        <Placeholder.Image rectangular />
      </Placeholder>;
  }
}

export default ClientInfo;
