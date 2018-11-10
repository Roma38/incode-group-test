import React, { Component } from "react";
import "./App.css";
import { Grid, Card, Image, Input } from "semantic-ui-react";
import axios from "axios";
import { API_HOST } from "./config.js";

class App extends Component {
  state = { clients: [] };
  render() {
    return <div className="App">
        <Grid columns={2} divided>
          <Grid.Column width={5} color={"yellow"}>
            <Input icon="users" size="medium" placeholder="Search..." />
            <Card.Group>
              {this.state.clients.map((client, index) => <Card key={index}>
                  <Card.Content>
                    <Image floated="left" size="mini" src={client.general.avatar} />
                    <Card.Header>
                      {client.general.firstName} {client.general.lastName}
                    </Card.Header>
                    <Card.Meta>{client.job.title}</Card.Meta>
                  </Card.Content>
                </Card>)}
              <Card>
                <Card.Content>
                  <Image floated="left" size="mini" src="https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg" />
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={11} color={"olive"} />
        </Grid>
      </div>;
  }

  componentDidMount() {
    axios.get(`${API_HOST}/clients.json`).then(res => {
      const clients = res.data;
      this.setState({ clients });
    });
  }
}

export default App;
