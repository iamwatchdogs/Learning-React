import UserList from "../../examples/UserList";
import UserDisplayCardBooleanProps from "../../examples/UserDisplayCardBooleanProps";

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

function Example() {
  function SampleExample() {
    const sendingChildernComponentsExample = `<UserList>
  <UserDisplayCard />
<UserList />`;

    return (
      <>
        <p>Hard to visualize right ???.. Here, let{"'"}s see an example:</p>
        <pre>
          <code>{sendingChildernComponentsExample}</code>
        </pre>
        <p>
          As you can see, we{"'"}re sending the <code>UserDisplayCard</code>{" "}
          component as a children to <code>UserList</code> component.
        </p>
      </>
    );
  }

  function ExplaintionForSampleExample() {
    return (
      <>
        <p>So, how can we access them ???...</p>
        <p>
          To access the children through props, we have to use a special prop
          called {"children"}. This is a special case where we can not called it
          predefined fixed purpose keyword nor can we call it an ordinary prop.
          We can use any key named {"children"} in the input data as it{"'"}s
          main purpose is to access the children components.
        </p>
        <p>
          The main purpose of this feature is to expand customized JSX and
          render the component exactly how we want it to{" "}
          <i>
            (i.e., based on the input data and how we tell the component to
            render)
          </i>
          .
        </p>
      </>
    );
  }

  function ActualExample() {
    const sampleUserListComponentExample = `export default function UserList({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div className='user-list'>{children}</div>
    </>
  );
}
`;

    const demonstrationExample = `<UserList title='Top Active Users'>
  <UserDisplayCardBooleanProps user="sam" age={27} isMarried/>
  <UserDisplayCardBooleanProps user="ham" age={15} />
  <UserDisplayCardBooleanProps user="dam" age={45} isMarried/>
</UserList>`;

    return (
      <>
        <p>
          Let{"'"}s create a sample <code>UserList</code> component to
          demonstrate this feature.
        </p>
        <pre>
          <code>{sampleUserListComponentExample}</code>
        </pre>
        <p>
          Now that we have create <code>UserList</code> component let{"'"}s see
          the output of the following nested components:
        </p>
        <pre>
          <code>{demonstrationExample}</code>
        </pre>
        <UserList title='Top Active Users'>
          <UserDisplayCardBooleanProps user='sam' age={27} isMarried />
          <UserDisplayCardBooleanProps user='ham' age={15} />
          <UserDisplayCardBooleanProps user='dam' age={45} isMarried />
        </UserList>
        <p>
          As you can see the multiple <code>UserDisplayCard</code> components
          are rendered as a children of <code>UserList</code> component. Note
          that, the content within the opening and closing tag of{" "}
          <code>UserList</code> component expands first and converted in raw JSX
          and get added to the remaining JSX of the <code>UserList</code>{" "}
          component at the place it is placed.
        </p>
      </>
    );
  }

  function EndExplaination() {
    const ordinaryComponentMadeOutOfComponentsExample = `function Title() {
  return <h3>{/* component title */}</h3>;
}

function Description() {
  return <p>{/* component description */}</p>;
}

export default function ComponentName() {
  return (
    <>
      <Title />
      <Description />
    </>
  );
}`;

    return (
      <>
        <p>
          We can not modify the childrens props directly, because they are only
          meant to expand and merge into the parent JSX. And they are not to
          similar to the wrapping of the child component to make a whole
          application.
        </p>
        <p>Let me explain that with an example,</p>
        <pre>
          <code>{ordinaryComponentMadeOutOfComponentsExample}</code>
        </pre>
        <p>
          Here the <code>Title</code> and <code>Description</code> components
          are the children of the <code>ComponentName</code> component. But
          here, the parent can effect the children behaviour.
        </p>
        <p>
          But the ones that are nested in <code>UserList</code> are only meant
          to display by expanding the JSX into the parent and becoming a single
          like component.
        </p>
      </>
    );
  }

  return (
    <>
      <SampleExample />
      <ExplaintionForSampleExample />
      <ActualExample />
      <EndExplaination />
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
