import React from "react";

export default class PropTypesInClassComponent extends React.Component {
  render() {
    return (
      <>
        <p>
          Coming to the <code>PropTypes</code>, it{"'"}s exactly same as
          implemented in the functional components. And also if you wish you can
          define the <code>propTypes</code> property within the class as a
          static property.
        </p>
        <p>
          Defining the <code>propTypes</code> property as a static property is
          consider to me modern implmentation, but defining them outside the
          class is consider as traditional & more compatible with older version
          of JS.
        </p>
        <p>
          So, it{"'"}s up to you as any one of these approaches will work and
          both of them are accepted within class component. My personal suggest
          is to use the modern approach, as it{"'"}s more readable.
        </p>
        <p>
          I will not be explain the same concepts as they are explained in the
          previously. Refer to the{" "}
          <a
            href='https://github.com/iamwatchdogs/Learning-React/blob/Props-and-PropTypes'
            target='_blank'
            rel='noreferrer'
          >
            Props-and-PropTypes
          </a>{" "}
          topic discussed using functional components.
        </p>
      </>
    );
  }
}
