import React from "react";
import Header from "./Header";
import StateComponent from "./StateComponent";
import firebase from "firebase";
import Select from "react-select";

class Add extends React.Component {
  componentDidMount() {
    firebase
      .firestore()
      .collection("states")
      .get()
      .then((snapshot) => {
        let data = snapshot.docs.map((doc) => {
          const label = doc.data().name;
          const value = doc.id;
          return { value, label };
        });
        this.setState({ states: data });
      });
  }

  constructor() {
    super();
    this.state = {
      states: [],
      name: "",
      imgurl: "",
      desc: "",
      bdate: "",
      ddate: "",
      selectedstate: "",
      added:false,
    };
  }
  render() {
    const addFighter = (e) => {
      e.preventDefault();
      console.log(this.state);
      firebase
        .firestore()
        .collection("states")
        .doc(`${this.state.selectedstate.value}`)
        .collection("Freedomfighter")
        .doc()
        .set({
          img: this.state.imgurl,
          name: this.state.name,
          desc: this.state.desc,
          bdate: this.state.bdate,
          ddate: this.state.ddate,
        })
        .then(() => {
          console.log("Data Added !...");
          this.setState({added:true})
          this.setState({imgurl:'',name:'',desc:'',bdate:'',ddate:''})
        });
    };
    return (
      <div>
        <Header />
        <div className="container pt-5">
          Add Freedom Fighter
          {this.state.added ?
            <div className="alert alert-success" role="alert">
            Data Added !
           </div> :''
          }

          <form onSubmit={addFighter}>
            <Select
              value={this.state.selectedstate}
              onChange={(value) => this.setState({ selectedstate: value })}
              placeholder="Select State"
              options={this.state.states}
            />
            <div className="mb-3">
              Name :-
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              Birth Date :-
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.bdate}
                onChange={(event) =>
                  this.setState({ bdate: event.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              Died Date :-
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.ddate}
                onChange={(event) =>
                  this.setState({ ddate: event.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Img Url :-
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.imgurl}
                onChange={(event) =>
                  this.setState({ imgurl: event.target.value })
                }
                required
              />
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Description "
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={""}
                value={this.state.desc}
                onChange={(event) =>
                  this.setState({ desc: event.target.value })
                }
                required
              />
            </div>

            <button type="submit" className="mt-3 btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Add;
