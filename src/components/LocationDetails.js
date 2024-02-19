import React from "react";

function locationDetails(props) {
  const { city, country } = props;
  return <h1> {`${city}, ${country}`} </h1>;
}

function MyComponent(props) {
  const { customClassName } = props;
  return <div className={customClassName} />;
}

export default locationDetails;
