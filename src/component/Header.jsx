import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Information from "./Information";
import firebase from 'firebase'
class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      search:'',
      data:[]
    }
  }
  render(){
  const searchUser=(e)=>{
    e.preventDefault();
    console.log(this.state.search)
    firebase
        .firestore().collectionGroup("Freedomfighter")
        .orderBy("name")
        .where("name",">=",this.state.search)
        .get()
        .then((snapshot) => {
          let users = snapshot.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data }
          });
          this.setState({ data: users});
          console.log(users);
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-0 my-0 ">
        <div className="container">
          <img src={logo} width={150} height={80} alt="imagesss"></img>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item py-2">
                <h4 className=" btn btn-primary py-2 active">
                  <Link className="text-white text-decoration-none py-2" to="/">
                    Home
                  </Link>
                </h4>
              </li>
              <li className="nav-item py-2">
                <h4 className="btn btn-primary py-2">
                  <Link
                    className="text-white text-decoration-none py-2"
                    to="/state"
                  >
                    State
                  </Link>
                </h4>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.search}
                onChange={(event) =>this.setState({search:event.target.value})}
              />
              <button className="btn btn-outline-success" type="submit" 
              onClick={searchUser}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      
    {this.state.search==="" ?"":
    <div className="container pt-5">
    {this.state.data.map((data) => (
        <Information  state={data} key={data.id} />
    ))}
    </div>
    
    }
    </div>
  );
}
}
export default Header;
