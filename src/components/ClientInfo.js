import React from "react";
import { Image, Header, List, Container, Placeholder } from "semantic-ui-react";

function ClientInfo({ client }) {
  return client ? (
    <div>
      <Image
        floated="left"
        verticalAlign="middle"
        src={client.general.avatar}
      />
      <Container text textAlign="justified">
        <Header size="huge">
          {client.general.firstName + " "}
          {client.general.lastName}
        </Header>
        <Header size="medium">
          {client.job.title}
          <br />
          {client.job.company}
        </Header>
        <List inverted>
          <List.Item
            icon="phone"
            content={
              <a href={`callto:${client.contact.phone}`}>
                {client.contact.phone}
              </a>
            }
          />
          <List.Item
            icon="mail"
            content={
              <a href={`mailto:${client.contact.email}`}>
                {client.contact.email}
              </a>
            }
          />
          <List.Item
            icon="point"
            content={client.address.city + ", " + client.address.country}
          />
          <List.Item
            icon="address book outline"
            content={client.address.street}
          />
        </List>
      </Container>
    </div>
  ) : (
    <Placeholder>
      <Placeholder.Image rectangular />
    </Placeholder>
  );
}

export default ClientInfo;
