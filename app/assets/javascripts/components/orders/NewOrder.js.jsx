class NewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.addOrder = this.addOrder.bind(this);
  }

  addOrder(e) {
    e.preventDefault();
    let product = this.refs.product;
    let date = this.refs.date;
    let order_quantity = this.refs.order_quantity;
    let paid = this.refs.paid;
    let dollar_amount = this.refs.dollar_amount;
    $.ajax({
      url: `/clients/${this.props.client_id}/orders`,
      type: 'POST',
      data: { order: {product: product.value,
                      date: date.value,
                      order_quantity: order_quantity.value,
                      paid: paid.value,
                      dollar_amount: dollar_amount.value} },
      dataType: 'JSON'
    }).success( order => {
      this.props.newOrder(order);
    }).error( errors => {
      alert(errors)
    }).complete( () => {
      {this.props.toggleAdd()}
    });
  }


  render() {
    return(
      <div className="row">
        <form onSubmit={this.addOrder}>
          <input ref="product" placeholder="product"/>
          <input ref="order_quantity" placeholder="quantity"/>
          <input ref="date" placeholder="date"/>
          <input ref="paid" placeholder="paid"/>
          <input ref="dollar_amount" placeholder="dollar_amount"/>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}
