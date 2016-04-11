class Shipment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {origin: "new york", destination: "california", cost: 0.00, distance: 0, productAmount: 5, productWeight: 5, time: 0.00 }
    this.getDistance = this.getDistance.bind(this);
  }

  getDistance(e){
    e.preventDefault()
    let origin;
    let destination;
    let productAmount;
    let productWeight;

    if (this.refs.origin.value == "") {
      origin = this.state.origin;
    }else {
      origin =  this.refs.origin.value;
    }
    if (this.refs.destination.value == "") {
      destination = this.state.destination;
    }else {
      destination =  this.refs.destination.value;
    }
    productAmount = this.refs.pro.value
    productWeight = this.refs.proWeight.value
    $.ajax({
      url: '/distance',
      type: 'GET',
      data: {origin: origin, destination: destination, productAmount: productAmount, productWeight: productWeight}
    }).done(data => {
      console.log(data)
      this.setState({origin: origin, destination: destination, productAmount: productAmount, distance: data.distance, cost: data.cost, time: data.time})
    }).fail(data =>{
      console.log(data)
    });
  }


  // setOrigin() {
  //   if(this.refs.origin.value == ""){
  //     this.setState({origin: "new york"})
  //   }else {
  //     this.setState({origin: this.refs.origin.value})
  //   }
  // }
  //
  // setDestination() {
  //   if(this.refs.destination.value == ""){
  //     this.setState({destination: "california"})
  //   }else {
  //     this.setState({destination: this.refs.destination.value})
  //   }
  // }

  render(){
    let source = `https://www.google.com/maps/embed/v1/directions?key=apikey&origin=${this.state.origin}&destination=${this.state.destination}`
    return(
      <div className="row container floating">
        <div className="col s12 col m12 l6 container">
          <h2>Shipping Calculator</h2>
          <iframe
            className="center"
            width="460"
            height="330"
            src= {source} allowFullScreen>
          </iframe>
        </div>
        <div className="col s12 m12 l6 stats">
          <h4>Distance: {this.state.distance} miles</h4>
          <h4>Estimated Arrival Time: {this.state.time} days</h4>
          <h4>Estimated Cost: ${this.state.cost}</h4>
        </div>
        <div>
          <form className="center col s12" onSubmit={this.getDistance}>
            <div className="row">
              <input className="field" type="text" placeholder="please enter origin" ref="origin"/>
              <input className="field" type="text" placeholder="please enter destination" ref="destination"/>
              <div className="col s12 m6">
                <label>Product Amount</label>
              <input className="field" type="number" placeholder="5" ref="pro"/>
              </div>
              <div className="col s12 m6 bot-marg">
                <label>Product Weight: lbs</label>
                <input className="field" type="number" placeholder="5" ref="proWeight"/>
              </div>
              <button type="submit" className="btn-large">Calculate</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
