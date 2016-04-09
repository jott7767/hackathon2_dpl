class NewClient extends React.Component {
  constructor(props) {
    super(props);
    this.addClient = this.addClient.bind(this);
  }

  addClient(e) {
    e.preventDefault();
    let name = this.refs.name;
    $.ajax({
      url: '/clients',
      type: 'POST',
      data: { client: {name: name.value} },
      dataType: 'JSON',
    }).success( client => {
      this.props.newClient(client);
    }).error( errors => {
      alert(errors)
    }).complete( () => {
      {this.props.showAdd()}
    });
  }

  render() {
    return(
      <div className="row">
        <h3>Add Client</h3>
        <form onSubmit={this.addClient}>
          <input placeholder="Name" ref="name" />
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
}
