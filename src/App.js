import React, { Component } from "react";
import "./App.css";
import { Grid } from "semantic-ui-react";
import axios from "axios";
import { API_HOST } from "./config.js";
import SideBar from "./components/SideBar.js";
import ClientInfo from "./components/ClientInfo.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clients: [], isLoading: null, selectedClient: null };
    this.onSelectClient = this.onSelectClient.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Grid columns={2} divided>
          <Grid.Column width={5} color={"yellow"}>
            <SideBar
              clients={this.state.clients}
              isLoading={this.state.isLoading}
              onCardClick={this.onSelectClient}
            />
          </Grid.Column>

          <Grid.Column width={11} color={"olive"}>
            <ClientInfo client={this.state.selectedClient} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  onSelectClient(client) {
    this.setState({ selectedClient: client });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get(`${API_HOST}/clients.json`).then(res => {
      this.setState({ clients: res.data, isLoading: false });
    });
  }
}

export default App;
