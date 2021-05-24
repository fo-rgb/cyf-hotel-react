import React from "react";
import Moment from "react-moment";

export default class MyComponent extends React.Component {
  render() {
    return (
      <Moment duration="2018-11-1T10:59-0500" date="2018-11-1T12:59-0500" />
    );
  }
}
