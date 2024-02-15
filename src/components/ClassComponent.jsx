import React from "react";

export class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>
          class components are the components that are used in the early days of
          this library. They are implement completely different than the
          functional components.
        </p>
        <p>
          class components are created by declaring a class that extends the
          {"  "}
          <code>React.Component</code> class from the react library. They behave
          almost identical to the functional components but they are implemented
          with different syntax and have different lifecycle methods.
        </p>
        <p>
          Most of the current react application that are being develeped are
          using the functional components but still there are some older project
          that still use class components. So, this repo will contain a{" "}
          <abbr title='check the README.md file'>sepreate section</abbr> for
          class components to cover the related concepts and implementation
          throughout my core learning path of React using functional
          compontents.
        </p>
        <p>
          The functional components are the future of the react and they are
          much easier to understand and implement than the class components.
          These functional components became popular and converted into a
          standard after the concept of hooks has been introduced into the react
          library.
        </p>
        <p>
          Note that my main focus will always be on the functional components
          and hooks, but still covering the class components as well just for
          the backward compatibility for some projects.
        </p>
        <p>
          All the principle of JSX syntax apply to the class components to but
          to render the output view/display of the components, we have to use
          the method <code>render()</code>. This is a core method of any Class
          components as it is <b>ONLY</b> method that is capable of returning
          the JSX content which is used rendered to the DOM.
        </p>
        <p>
          These are few main points about class components and how they differ
          from functional components.
        </p>
      </div>
    );
  }
}
