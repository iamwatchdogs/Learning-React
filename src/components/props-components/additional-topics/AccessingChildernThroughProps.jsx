{
  /* Since the export is `default` we can import the component (or) anything else using any name */
}
import Example from "./AccessingChildernThroughPropsExample";

function Title() {
  return <h3>Accessing Children Through Props</h3>;
}

function Description() {
  return (
    <>
      <p>
        This is one of the most important topic of props and this one
        functionality opens many possiblities of how we can design our
        components.
      </p>
      <p>
        At the very beginning we have discussed that the JSX syntax makes us use
        a closing tag or self-closing tag for creating a component. And most of
        the time, till this part we have been using self-closing tags to
        creating components. Because, we have no a sub component under that we
        can pass to another component.
      </p>
      <p>
        That{"'"}s right, we can only only send data to create custom component
        but also send a whole component itself. How crazy is that ???...
      </p>
      <p>
        So, to send a component for custom rendering, we have to place the
        component we want to send within the opening and closing tag of the
        component we want to send it to.
      </p>
    </>
  );
}

export default function AccessingChildernThroughProps() {
  return (
    <>
      <Title />
      <Description />
      <Example />
    </>
  );
}
