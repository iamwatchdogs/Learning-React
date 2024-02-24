import React from "react";

export default class DefaultValue extends React.Component {
  render() {
    const Descripition = () => (
      <>
        <p>
          And unlike the functional components, it{"'"}s not that easy to set
          the default prop values since we can{"'"}t access them directly.
        </p>
        <p>
          You can set default values for props in a class component in two ways:
        </p>
        <ul>
          <li>
            By defining a <code>static</code> property called as{" "}
            <code>defaultProps</code> within the class.
          </li>
          <li>
            By appendin the <code>defaultProps</code> attribute to the class
            component after the class compoent has been defined.{" "}
            <i>
              (Just like <code>PropTypes</code>)
            </i>
          </li>
        </ul>
      </>
    );
    
    return (
      <>
        <Descripition />
      </>
    );
  }
}
