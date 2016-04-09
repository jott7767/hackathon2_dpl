class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clients: this.props.clients, showThis: false}
    this.showAdd = this.showAdd.bind(this);
    this.newClient = this.newClient.bind(this);
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
        <Client key={`client-${client.id}`} {...client} />
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
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Product</th>
                <th>Last Order Type</th>
                <th>Last Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {clients}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
