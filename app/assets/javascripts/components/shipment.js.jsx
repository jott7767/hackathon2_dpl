class Shipment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {origin: "new york", destination: "california", cost: 0.00, distance: 0 }
    this.setOrigin = this.setOrigin.bind(this);
    this.setDestination = this.setDestination.bind(this);
  }

  setOrigin() {
    if(this.refs.origin.value == ""){
      this.setState({origin: "new york"})
    }else {
      this.setState({origin: this.refs.origin.value})
    }
  }

  setDestination() {
    if(this.refs.destination.value == ""){
      this.setState({destination: "california"})
    }else {
      this.setState({destination: this.refs.destination.value})
    }
  }

  render(){
    let source = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBblRBZp_9JKVUeK-HKRcW4_EY160-CmeU&origin=${this.state.origin}&destination=${this.state.destination}`
    return(
      <div className="row container">
        <div className="col s12 col m8 offset-m2">
          <iframe
            className="center"
            width="600"
            height="450"
            src= {source} allowFullScreen>
          </iframe>
        </div>
        <div>
          <form className="center col s12" onSubmit={this.setRoute}>
            <input type="text" placeholder="please enter origin" ref="origin" onChange={this.setOrigin}/>
            <input type="text" placeholder="please enter destination" ref="destination" onChange={this.setDestination}/>
          </form>
        </div>
        <div className="center">
          <h2>Distance: {this.state.distance} miles</h2>
          <h2>Estimated Cost: ${this.state.cost}</h2>
        </div>
      </div>
    );
  }
}
