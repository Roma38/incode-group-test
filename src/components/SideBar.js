import React, { Component } from "react";
import { Card, Image, Input, Placeholder } from "semantic-ui-react";

/* TODO Поиск. Написать функцию, которая будет фильтровать объект на основании строки поиска */
/* TODO сделать так чтоб можно было исключать определeнные поля из поиска, например `general.avatar` */
/* TODO сделать чтоб карточка с выбраным пользователем выделялась */

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtredClients: null,
      searchQuery: ""
    }; /* TODO убрать filtredClients из state'а */
  }

  render() {
    /* TODO вынести в отдельный компонент `ClientCardPlaceholder` */
    const placeholder = (
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
    return (
      <div className="sideBar">
        <Input
          icon="users"
          size="medium"
          placeholder="Search..."
          className="search-input"
          onChange={e => this.searchClient(e.target.value)}
        />
        {this.props.isLoading ? (
          <div>
            {placeholder}
            {placeholder}
            {placeholder}
          </div>
        ) : (
          <Card.Group>
            {this.shownClients().map((client, index) => (
              <Card
                className="clientCard"
                key={index}
                onClick={() => this.props.onCardClick(client)}
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
            ))}
          </Card.Group>
        )}
      </div>
    );
  }

  searchClient(value) {
    this.setState({ searchQuery: value });

    const filtredClients = this.props.clients.filter(client => {
      for (const property in client) {
        for (const key in client[property]) {
          if (
            client[property][key].toLowerCase().includes(value.toLowerCase())
          ) {
            return true;
          }
        }
      }
      return false;
    });

    this.setState({ filtredClients });
  }

  shownClients() {
    return this.state.searchQuery
      ? this.state.filtredClients
      : this.props.clients;
  }
}

export default SideBar;
