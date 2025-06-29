import React, { Component } from "react";
import { geoOrthographic } from "d3-geo";
import { timer } from "d3";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

class Globe extends Component {
  constructor() {
    super();
    this.state = {
      rotation: [0, 0, 0]
    };
    this.startAnimation = this.startAnimation.bind(this);
  }

  componentDidMount() {
    this.autorotation = timer(this.startAnimation);
  }

  componentWillUnmount() {
    if (this.autorotation) this.autorotation.stop();
  }

  startAnimation() {
    this.setState((prevState) => ({
      rotation: [prevState.rotation[0] + 0.2, 0, 0]
    }));
  }

  render() {
    const projection = geoOrthographic()
      .rotate(this.state.rotation)
      .scale(120)
      .translate([400, 400]); // center map in 800x800

    return (
      <ComposableMap
        width={800}
        height={800}
        projection={projection}
        viewBox="220 220 360 360" 
        className="rsm-svg"
      >
        <ZoomableGroup disableZoom>
          <Geographies geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    );
  }
}

export default Globe;