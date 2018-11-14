import React from "react";
import { Image, Header, List } from "semantic-ui-react";
import { connect } from "react-redux";
import ClientInfoPlaceholder from "./ClientInfoPlaceholder";

function ClientInfoComponent({ selectedClient: client }) {
  return (
    <div className="client-info">
      {client ? (
        <div className="client-info">
          <div className="client-avatar">
            <Image src={client.general.avatar} />
          </div>
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
        </div>
      ) : (
        <ClientInfoPlaceholder />
      )}
    </div>
  );
}

const mapStateToProps = ({ selectedClient }) => ({
  selectedClient
});

const ClientInfo = connect(
  mapStateToProps,
  null
)(ClientInfoComponent);

export default ClientInfo;
