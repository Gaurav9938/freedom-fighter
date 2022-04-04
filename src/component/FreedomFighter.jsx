import React, { useState } from "react";
import Header from "./Header";
import Information from "./Information";
import { Link, Navigate, useParams } from "react-router-dom";
import firebase from "firebase";
const FreedomFighter = (props) => {
  const params = useParams();
  return <Fighter {...props} state={params} />;
};

class Fighter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      data: [],
      isfetch:false
    };
  }

  render() {
    if (this.state.state === "") {
      firebase
        .firestore()
        .collection("states")
        .where("name", "==", `${this.props.state.state}`)
        .get()
        .then((doc) => {
          doc.docs.map((data) => {
            console.log(data.data());
            this.setState({ state: data.data() });
          });
        });
    }

    if (this.state.isfetch==false && this.state.state !== "") {
      firebase
        .firestore()
        .collection("states")
        .doc(`${this.state.state.id}`)
        .collection("Freedomfighter")
        .onSnapshot((snapshot) => {
          let users = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data }
          });
          this.setState({ data: users ,isfetch :true });
         // this.setState({isfetch :true})
          console.log(users);
        });
    }

    return (
      <div>
        <Header />
        <h3 className="text-center">{this.state.state.name}</h3>
        <div className="text-center pt-3">
          <img src={this.state.state.img} height={300} width={400}></img>
          {this.state.data.map((data) => (
              <Information  state={data} key={data.id} />
            ))}
        </div>
      </div>
    );
  }
}

export default FreedomFighter;
