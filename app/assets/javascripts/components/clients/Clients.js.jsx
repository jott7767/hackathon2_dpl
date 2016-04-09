class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clients: this.props.clients, showThis: false}
    this.showAdd = this.showAdd.bind(this);
    this.newClient = this.newClient.bind(this);
    this.deleteClient = this.deleteClient.bind(this);
  }

  deleteClient(id) {
    $.ajax({
      url: `clients/${id}`,
      type: 'DELETE'
    }).success( client => {
      this.setState({clients: this.state.clients});
    });
  }

  newClient(client) {
    this.setState({clients: [client, ...this.state.clients]})
  }

  showAdd() {
    this.setState({showThis: !this.state.showThis});
  }

  seeAdd() {
    if (this.state.showThis) {
      return(
      <div className="row">
        <NewClient newClient={this.newClient} showAdd={this.showAdd}/>
      </div>);
    }
  }

  render() {
    let clients = this.state.clients.map( client => {
      return(
        <Client key={`client-${client.id}`} {...client} deleteClient={this.deleteClient}/>
      );
    })
    return(
      <div>
        <div className="row">
          <h1>Clients</h1>
          <button onClick={this.showAdd}>Add Client</button>
        </div>
          {this.seeAdd()}
        <div>
          {clients}
        </div>
      </div>
    );
  }
}
