import React from "react";
import Introduction from "./components/Introduction";
import DefaultValue from "./components/DefaultValue";
import PropTypesInClassComponent from "./components/PropTypesInClassComponent";

export default class PropsAndPropTypesInClassComponents extends React.Component {
  render() {
    return (
      <>
        <Introduction />
        <DefaultValue />
        <PropTypesInClassComponent />
      </>
    );
  }
}
