class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {orders: this.props.orders, showAdd: false};
    this.toggleAdd = this.toggleAdd.bind(this);
    this.newOrder = this.newOrder.bind(this);
  }

  newOrder(order) {
    this.setState({orders: [order, ...this.state.orders]})
  }

  toggleAdd() {
    this.setState({showAdd: !this.state.showAdd})
  }

  seeAdd() {
    if (this.state.showAdd) {
      return(
        <div>
          <NewOrder newOrder={this.newOrder} toggleAdd={this.toggleAdd} client_id={this.props.client_id}/>
        </div>
      );
    }
  }

  render() {
    let orders = this.state.orders.map( order => {
      let key = `order-${order.id}`;
      console.log(key)
      return(
        <div>
          <Order key={key} {...order} />
        </div>
      );
    })
    return(
      <div>
        <div>
          <p><button className="btn" onClick={this.toggleAdd}>Add</button></p>
        </div>
        <div>
          {this.seeAdd()}
        </div>
        <div>
          { orders }
        </div>
      </div>
    );
  }
}
