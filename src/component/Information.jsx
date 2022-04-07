import React from "react";

function Information(props) {
  console.log(props)
  console.log(props.state)
  props = props.state;
  return (
    <div>
      <div className="container pt-3">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={props.img}
                className="img-fluid rounded-start"
                alt="gagga"
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">
                  Born date := <small className="text-muted">{props.bdate}</small>
                  <br></br>
                  Died Date := <small className="text-muted">{props.ddate}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Information;
