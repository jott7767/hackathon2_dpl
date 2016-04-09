class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showMore: false};
  }

  render() {

    return(
      <tr>
        <td>{this.props.name}</td>
      </tr>
    );
  }
}
