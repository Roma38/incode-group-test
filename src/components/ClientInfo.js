import React from "react";
import { Image, Header, List, Placeholder } from "semantic-ui-react";

function ClientInfo({ client }) {
  return (
    <div className="client-info">
      <div className="client-avatar">
        {client ? (
          <Image src={client.general.avatar} />
        ) : (
          <Placeholder style={{ height: 128, width: 128 }}>
            <Placeholder.Image />
          </Placeholder>
        )}
      </div>
      <div>
        {client ? (
          <div>
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
          </div>
        ) : (
          /* TODO вынести в `ClientInfoLoader` компонент */
          <Placeholder
            className="info-placeholder"
          >
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
        )}
      </div>
    </div>
  );
}

export default ClientInfo;
