class InventoryItem extends React.Component {
    constructor(props){
      super(props);
      this.state = {edit: false, show: false};
      this.toggleEdit = this.toggleEdit.bind(this);
      this.toggleShow = this.toggleShow.bind(this);
      this.editItem = this.editItem.bind(this);
    }
    
    toggleEdit() {
      this.setState({ edit: !this.state.edit });    
    }
    
    toggleShow(e) {
      e.preventDefault();
      this.setState({ show: !this.state.show });
    }
    
    editItem() {
      let invItem = {id: this.props.id, item: this.refs.item.value, quantity: this.refs.quantity.value, wholesale_price: this.refs.wholesale_price.value, retail_price: this.refs.retail_price.value}
      this.toggleEdit();
      this.props.editItem(this.props.id, invItem)
      
    }
    
    
    
    display() {
        return(
          <div className="col s12 m4">
            <div className="card grey darken-1 z-depth-3">
              <div className="card-content">
                <h2 className="center"><a onClick={this.toggleShow} href="#">{this.props.item}</a></h2>
              </div>
              <div className="card-action center">
                <button onClick={() => this.props.deleteItem(this.props.id)} className="btn">Delete</button>
                <button onClick={this.toggleEdit} className="btn">Update</button>
              </div>
            </div>
          </div>
        )
    }
    
    show() {
      return (
        <div className="col s12 m4">
          <div className="card grey darken-1 z-depth-3">
            <div className="card-content">
              <ul>
                <li>Item: {this.props.item}</li>
                <li>Quantity: {this.props.quantity}</li>
                <li>Wholesale Price: ${this.props.wholesale_price}</li>
                <li>Retail Price: ${this.props.retail_price}</li>
              </ul>
            </div>
            <div className="card-action center">
              <button onClick={this.toggleShow} className="btn">Okay</button>
            </div>
          </div>
        </div>
      );
    }
    
    edit() {
      return(
        <div className="col s12 m4">
          <div className="card grey darken-1 z-depth-3">
            <div className="card-content">
              <input placeholder={this.props.item} defaultValue={this.props.item} ref="item" required={true} />
              <input placeholder="quantity" defaultValue={this.props.quantity} ref="quantity" />
              <input placeholder="wholesale price" defaultValue={this.props.wholesale_price} ref="wholesale_price" />
              <input placeholder="retail price" defaultValue={this.props.retail_price} ref="retail_price"/>
              <button onClick={this.editItem} className="btn">Okay</button>
            </div>
            <div className="card-action center">
              <button onClick={() => this.props.deleteItem(this.props.id)} className="btn">Delete</button>
              <button onClick={this.toggleEdit} className="btn">Cancel</button>
            </div>
          </div>
        </div>);
      
    }
    
    render() {
      if(this.state.edit)
        return this.edit();
      else if(this.state.show)
        return this.show();
      else
        return this.display();
    }
}

