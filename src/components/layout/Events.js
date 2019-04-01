import React, { Component } from "react";
import Map from "../Containers/Map";
import "./CSS/events.css";

// ────────────────────────────────────────────────────────────────────────────────

class Events extends Component {
  render() {
    return (
      <div className=" h-100">
        <Map/>
        <div className="split">
          <div className="row1 height50">

          </div>
          
          <div className="row2 height50">

          </div>
        </div>
      </div>
    );
  }
}

export default Events;
