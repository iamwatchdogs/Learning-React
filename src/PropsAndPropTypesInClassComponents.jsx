import React from "react";
import Introduction from "./Introduction";
import DefaultValue from "./DefaultValue";
import PropTypesInClassComponent from './PropTypesInClassComponent';

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
