class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inventories: []};
        this.deleteItem = this.deleteItem.bind(this);
        this.getInventory = this.getInventory.bind(this);
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentWillMount() {
      this.getInventory();
    }

    getInventory() {
      $.ajax({
        url: '/get_inventory',
        type: 'GET'
      }).done(data => {
        this.setState({inventories: data})
      })
    }

    deleteItem(id) {
      $.ajax({
        url: `/inventories/${id}`,
        type: 'DELETE'
      }).done(data => {
        let filteredItems = this.state.inventories.filter(item => {
          return(item.id !== id);
        });
        this.setState({inventories: filteredItems});
      }).fail(data => {
        console.log(data);
      });
    }

    editItem(id, invItem) {
      $.ajax({
        url: `/inventories/${id}`,
        type: 'PUT',
        dataType: 'JSON',
        data: { inventory: { item: invItem.item, quantity: invItem.quantity, wholesale_price: invItem.wholesale_price, retail_price: invItem.retail_price} }
      }).done(data => {
        this.getInventory();
      }).fail(data => {
        console.log(data);
      });
    }

    addItem(e) {
      let newInv = this.refs
      e.preventDefault();
      $.ajax({
        url: `/inventories`,
        type: 'POST',
        dataType:'JSON',
        data: { inventory: { item: newInv.item.value, quantity: newInv.quantity.value, wholesale_price: newInv.wholesale_price.value, retail_price: newInv.retail_price.value} }
      }).done(data => {
        this.getInventory();
      }).fail(data => {
        console.log(data);
      });
    }

    render() {
      let inventory = this.state.inventories.map(item => {
        return(<InventoryItem key={`item-${item.id}`} {...item} deleteItem={this.deleteItem} editItem={this.editItem} />)
      });
      return(
        <div className="container floating">
          <div className="center">
            <h1>Inventory</h1>
              <form>
                <input placeholder="Item Name" ref="item" required={true} />
                <input placeholder="quantity" ref="quantity" />
                <input placeholder="wholesale price" ref="wholesale_price" />
                <input placeholder="retail price" ref="retail_price"/>
                <button className="btn" onClick={this.addItem}>Add to Inventory</button>
              </form>
            <hr />
          </div>
          <div className="row">
            {inventory}
          </div>
        </div>
      );
    }
}
