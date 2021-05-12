import React from "react";
import {Link as ScrollLink} from "react-scroll";

function Card(props) {
  return (
    <div className="col-lg-3 col-6 mb-5" style={{alignItems: "middle"}}>
      <ScrollLink className={"Scroll-" + props.route} to={props.route} smooth={true} duration={500}>
      <button className="card-button mb-3" style={{border: "none"}}>
        <div className="card" style={{pointerEvents: "none", backgroundColor: props.bgColor }} >
          <div className="card-body card-link">
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </button>
      </ScrollLink>
    </div>);
}

export default Card;