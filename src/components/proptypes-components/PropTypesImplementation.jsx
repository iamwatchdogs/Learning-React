import SampleExample from "./SampleExample";
import Example from "./PropTypesImplementationExample";

function Title() {
  return <h3>Implementation</h3>;
}

function Description() {
  function IntroDescription() {
    return (
      <>
        <p>
          Let{"'"}s talk a bit of implementing <code>PropTypes</code>, first
          since it{"'"}s a separate library included into React. You have to
          import it as <code>PropTypes</code> from {'"prop-types"'}. Now this
          lets you define the types for the props are going to be passed to your
          components.
        </p>
        <p>
          And to define the types for the props, we have to set an additional
          attribute to our component with keeping <code>propTypes</code> as key
          to our object that defines the key-value pair of prop-types.
        </p>
        <p>
          Note that we should export the component while declaring it right
          away, as we are appending the typechecking properties using{" "}
          <code>propTypes</code>. So, if we export the component directly the
          typechecking <code>propType</code> properties will not be exported
          with the component, thus not typechecking.
        </p>
      </>
    );
  }

  function MainDescription() {
    return (
      <>
        <p>
          Before we proceed even further, let{"'"}s talk a bit more about the
          sample example discussed above.
        </p>
        <p>
          Now that you have an idea how we can add the propTypes property to a
          component, let us take a look at how we have specified the we
          specified the type value for a specific prop. Let{"'"}s pick this line
          to understand how we specify type for a single prop
        </p>
        <pre>
          <code>{`name: PropTypes.string.isRequired`}</code>
        </pre>
        <p>
          As you can see, the <code>name</code> is just one of the props of the
          component thus we specified it as a key. And we have specified{" "}
          <code>PropTypes.string.isRequired</code> as the value for the key{" "}
          <code>name</code>.
        </p>
        <p>
          To specify the type, we have to specify the type from the{" "}
          <code>PropTypes</code> object{" "}
          <i>(the one which we have imported at the beginning of the file)</i>
        </p>
        <p>
          And you can see that it{"'"}s mostly self-explanatory, as we are
          saying that the type will be string by saying{" "}
          <code>PropTypes.string</code> and we also specify that it is required
          for this component to have a value to create a component instance by
          saying <code>PropTypes.string.isRequired</code>.
        </p>
        <p>
          There many types through which you can specify the props used/passed
          to the component. You can find the list of all the types in the
          official page of{" "}
          <a
            href='https://legacy.reactjs.org/docs/typechecking-with-proptypes.html'
            target='_blank'
            rel='noreferrer'
          >
            React Legacy
          </a>{" "}
          or npm page of{" "}
          <a
            href='https://www.npmjs.com/package/prop-types'
            target='_blank'
            rel='noreferrer'
          >
            prop-types
          </a>{" "}
          module.
        </p>
      </>
    );
  }

  return (
    <>
      <IntroDescription />
      <SampleExample />
      <MainDescription />
    </>
  );
}

export default function PropTypesImplementation() {
  return (
    <>
      <Title />
      <Description />
      <Example />
    </>
  );
}
