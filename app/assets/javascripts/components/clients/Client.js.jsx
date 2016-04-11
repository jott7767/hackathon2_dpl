class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: [], showMore: false};
    this.showOrders = this.showOrders.bind(this);
  }

  showOrders() {
    this.setState({showMore: !this.state.showMore});
  }

  componentWillMount() {
    $.ajax({
      url: `/clients/${this.props.id}/orders`,
      type: 'GET',
      data: { client_id: this.props.id },
      dataType: 'JSON'
    }).success( orders => {
      this.setState({ orders: orders });
    }).error( orders => {
      console.log(orders)
    });
  }

  checking() {
    if (this.state.showMore) {
      return(
        <div>
          <Orders orders={this.state.orders} client_id={this.props.id}/>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="col s12 m6">
        <div onClick={this.showOrders}>
          <h1>{this.props.name}</h1>
        </div>
          <button onClick={ () => this.props.deleteClient(this.props.id)} className="btn">Delete</button>
        <div>
          {this.checking()}
        </div>
      </div>
    );
  }
}
