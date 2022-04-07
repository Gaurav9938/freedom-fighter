import React from "react";
import Header from "./Header";
import StateComponent from "./StateComponent";

import firebase from "firebase";

class State extends React.Component {
  componentDidMount() {
    firebase.firestore()
    .collection("states")
    .onSnapshot((snapshot) => {
        let allstates = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data }
        })
        this.setState({states:allstates})
    })
  }

  constructor(){
    super()
    this.state={
      states:[]
    }
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <div className="container">
            <h3 className="text-center px-4">State Wise Information:</h3>
            <div className="row pt-1">
            {this.state.states.map((state) => (
              <StateComponent  state={state} key={state.id} />
            ))}        
          </div>
        </div>
      </div>
    );
  }
}
export default State;
