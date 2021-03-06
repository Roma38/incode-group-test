import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import axios from "axios";
import { API_HOST } from "./config.js";
import SideBar from "./components/SideBar.js";
import ClientInfo from "./components/ClientInfo.js";
import {
  clientsLoadStart,
  clientsLoadSucceed,
  clientsLoadFailed
} from "./redux/actions/clients";

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <SideBar
          clients={this.props.clients.items}
          isLoading={this.props.clients.isLoading}
          onCardClick={this.onSelectClient}
        />
        <ClientInfo client={null} />
      </div>
    );
  }

  toggleSideBar() {}

  componentDidMount() {
    this.props.clientsLoadStart();
    axios
      .get(`${API_HOST}/clients.json`)
      .then(res => {
        this.props.clientsLoadSucceed(res.data);
      })
      .catch(this.props.clientsLoadFailed);
  }
}

const mapStateToProps = ({ selectedClient, clients }) => ({
  selectedClient,
  clients
});

const mapDispatchToProps = dispatch => ({
  clientsLoadStart: () => dispatch(clientsLoadStart()),
  clientsLoadSucceed: clients => dispatch(clientsLoadSucceed(clients)),
  clientsLoadFailed: error => dispatch(clientsLoadFailed(error))
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);

export default App;
