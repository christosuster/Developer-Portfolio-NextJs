"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function Location() {
  return (
    <div className="bg-[#161616] p-2 rounded-xl mt-3 ">
      <div className=" gap-x-6  flex justify-between ">
        <div className="flex justify-between items-center w-full p-2">
          <p className="text-white font-Intermedium">My Location</p>
        </div>
      </div>

      <div className=" w-full">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-10.0, -52.0, 0],
            center: [-5, -3],
            scale: 1100,
          }}
        >
          <Geographies
            geography={geoUrl}
            fill="#D6D6DA"
            stroke="#333"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Annotation
            subject={[2.3522, 48.8566]}
            dx={-90}
            dy={-30}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 3,
              strokeLinecap: "round",
            }}
          >
            <text
              x="-8"
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
            >
              {"Paris"}
            </text>
          </Annotation>
        </ComposableMap>
      </div>
    </div>
  );
}

export default Location;
