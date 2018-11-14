import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Input, Label } from "semantic-ui-react";
import { selectClient } from "../redux/actions/selectedClient";
import ClientCardPlaceholder from "./ClientCardPlaceholder";

class SideBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };
  }

  render() {
    return (
      <div className="sideBar">
        <Input
          icon="users"
          size="medium"
          placeholder="Search..."
          fluid
          className="search-input"
          onChange={e => this.setState({ searchQuery: e.target.value })}
        />
        {this.props.isLoading ? (
          <div>
            <ClientCardPlaceholder />
            <ClientCardPlaceholder />
            <ClientCardPlaceholder />
          </div>
        ) : (
          <Card.Group>
            {this.filterClients(this.state.searchQuery).length < 1 ? (
              <Label basic pointing className="search-label">
                No one found :(
              </Label>
            ) : (
              this.filterClients(this.state.searchQuery).map(
                (client, index) => (
                  <Card
                    className={
                      client === this.props.selectedClient
                        ? "client-card selected-client-card"
                        : "client-card"
                    }
                    key={index}
                    onClick={() => this.props.selectClient(client)}
                  >
                    <Card.Content>
                      <Image
                        floated="left"
                        size="mini"
                        src={client.general.avatar}
                      />
                      <Card.Header>
                        {client.general.firstName} {client.general.lastName}
                      </Card.Header>
                      <Card.Meta>{client.job.title}</Card.Meta>
                    </Card.Content>
                  </Card>
                )
              )
            )}
          </Card.Group>
        )}
      </div>
    );
  }

  filterClients(searchQuery) {
    if (searchQuery === "") {
      return this.props.clients;
    }

    return this.props.clients.filter(client => checkNestedObject(client));

    function checkNestedObject(object) {
      for (const key in object) {
        if (typeof object[key] === "object") {
          if (checkNestedObject(object[key])) {
            return true;
          }
        } else {
          if (object[key].toLowerCase().includes(searchQuery.toLowerCase())) {
            return true;
          }
        }
      }
    }
  }
}

const mapStateToProps = ({ selectedClient }) => ({
  selectedClient
});

const mapDispatchToProps = dispatch => ({
  selectClient: client => dispatch(selectClient(client))
});

const SideBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComponent);

export default SideBar;
