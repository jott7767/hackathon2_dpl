class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>{this.props.product}</p>
        <p>{this.props.order_quantity}</p>
        <p>{this.props.date}</p>
        <p>{this.props.paid}</p>
        <p>{this.props.dollar_amount}</p>
      </div>
    );
  }
}
