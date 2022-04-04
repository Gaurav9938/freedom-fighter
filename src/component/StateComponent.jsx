import React from "react";
import { Link } from "react-router-dom";


function StateComponent(props) {
  const name=props.state.name
  return (
    <div className="row pt-1">
    
    <div className="col-sm-4 col-12 m-auto">
    <div className="list-group list-group-numbered pt-3">
    <Link to={`${name}`} className="list-group-item list-group-item-action text-decoration-none">
        {name}
    </Link>
    </div>
    </div>
    
    </div>
  );
}
export default StateComponent;
