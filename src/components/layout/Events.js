import React, { Component } from "react";
import MapContainer from "../Containers/MapContainer";
import "./CSS/events.css";
// ────────────────────────────────────────────────────────────────────────────────

class Events extends Component {
  render() {
    return (
      <div className=" h-100">
        <MapContainer />
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
