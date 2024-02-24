import React from "react";

export default class Introduction extends React.Component {
  render() {
    const Description = () => (
      <>
        <p>
          The props function exactly the same in class components as we
          discussed in the functional components.The class components received
          the props as an object with key-value pairs.
        </p>
        <p>
          But here, we can{"'"}t directly destructure them as we did in
          functional components. Because internal passed to the class component
          and are access using <code>this</code> keyword.
        </p>
        <p>
          So, if we wish to make things simple by destructuring the props, we
          just have to create variable within the <code>render()</code> or{" "}
          <code>componentDidMount()</code> methods and destructure them.
        </p>
        <p>
          Don{"'"}t worry about the <code>componentDidMount()</code> method as
          well be discussing them too in the upcoming sections related to the
          component life cycle.
        </p>
      </>
    );

    return (
      <section id='introduction'>
        <Description />
      </section>
    );
  }
}
