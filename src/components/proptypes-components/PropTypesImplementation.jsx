import SampleExample from "./SampleExample";
import { UserDisplayCardPropTypes } from "../examples/UserDisplayCard";

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
          <a href='https://legacy.reactjs.org/docs/typechecking-with-proptypes.html'>
            React Legacy
          </a>{" "}
          or npm page of{" "}
          <a href='https://www.npmjs.com/package/prop-types'>prop-types</a>{" "}
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

function Example() {
  function IntroExample() {
    return (
      <>
        <p>
          Now, let{"'"}s update our <code>UserDisplayCard</code> component to do
          the typechecking too,
        </p>
        <p>
          Let{"'"}s see what are props sent to this <code>UserDisplayCard</code>{" "}
          component and then add type to them.
        </p>
        <ul>
          <li>
            <code>user</code> is just the name of the user, so it will be a
            string.
          </li>
          <li>
            <code>age</code> is the age of the user, so it will be a number.
          </li>
          <li>
            <code>phoneno</code> is phone number and it most of the cases people
            will add their country code in front of their number. And it{"'"}s
            also possible to just only number as in put. So, it can either be a
            string or a number.
          </li>
          <li>
            <code>email</code> is an email address, so it{"'"}s just a simple
            string.
          </li>
          <li>
            <code>isMarried</code>is a boolean value, so it will be a boolean.
          </li>
          <li>
            <code>additionalData</code> is an spread operator that is used to
            caputre all the other props that are not defined in the component.
            There can be any possible value that can be passed into this prop as
            an object of key-value pair, so it will be an any type.
          </li>
          <li>
            <code>children</code> is a special prop that is used to access the
            nested components through props and it by default expect React
            components or JSX elements. As it is expected to contain the JSX
            elements, we don{"'"}t need to specify the type for this prop. But
            if you do you can...
          </li>
        </ul>
      </>
    );
  }

  function ActualExample() {
    const updatedCompnent = `import PropTypes from "prop-types";
  
function UserDisplayCard({
  user = "Guest",
  age = 18,
  phoneno = "1234567890",
  email = "guest@info.com",
  isMarried,
  ...additionalData
}) {
  return (
    <div>
      <h3>User Information:</h3>
      <p>Name: {user}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneno}</p>
      <p>Email Address: {email}</p>
      <p>Is Married: {isMarried ? "Yes" : "No"}</p>
      {Object.keys(additionalData).map((key, id) => {
        const value = additionalData[key];
        return (
          <p key={id}>
            {key}: {value}
          </p>
        );
      })}
    </div>
  );
}

UserDisplayCard.propTypes = {
  user: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phoneno: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  email: PropTypes.string.isRequired,
};

export default UserDisplayCard;
`;

    const wrongTypesExample = `<UserDisplayCard user={21} age="21 savage" phoneno={null}/>`;

    return (
      <>
        <p>
          Now, let{"'"}s update our <code>UserDisplayCard</code> component with
          the following prop-types:
        </p>
        <pre>
          <code>{updatedCompnent}</code>
        </pre>
        <UserDisplayCardPropTypes />
        <p>
          That{"'"}s great, now let{"'"}s try it out with wrong type to see
          whether proptypes are working or not.
        </p>
        <pre>
          <code>{wrongTypesExample}</code>
        </pre>
        <UserDisplayCardPropTypes user={21} age='21 savage' phoneno={null} />
        <p>Now, you see the warning in your console</p>
      </>
    );
  }

  function OptionalTypeCheckingExample() {
    const updatedPropTypes = `UserDisplayCard.propTypes = {
  user: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phoneno: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  email: PropTypes.string.isRequired,
  additionalData: PropTypes.objectOf(PropTypes.any)
  children: PropTypes.element
};`;

    return (
      <>
        <p>
          That{"'"}s great, now let{"'"}s go back to those 2 proptypes I said as
          optional and not necessary.
        </p>
        <p>
          These two proptypes are for the props <code>additionalData</code> and{" "}
          <code>children</code>.
        </p>
        <p>
          I give a sample example of how can you implement these two proptypes
          but not implement it right here, as they{"'"}re not necessary and we
          should always write the necessary code.
        </p>
        <p>
          So, let{"'"}s updated the proptypes for the{" "}
          <code>UserDisplayCard</code> component as following,
        </p>
        <pre>
          <code>{updatedPropTypes}</code>
        </pre>
        <p>
          As we can see the <code>additionalData</code> prop, we would receive
          an object with key-value pair of prop and its value. So, we can
          specify the types as an object which have values of any type. i.e.,
        </p>
        <pre>
          <code>{`PropTypes.objectOf(PropTypes.any)`}</code>
        </pre>
        <p>
          Coming to the <code>children</code> prop, it will be React component
          that will eventually expand itself into JSX and merge into the place
          it used within the component recieving these children props. So, the
          type will be JSX and in terms of proptypes it{"'"}s an
          React-Element/element.
        </p>
        <pre>
          <code>{`PropTypes.element`}</code>
        </pre>
      </>
    );
  }

  return (
    <>
      <IntroExample />
      <ActualExample />
      <OptionalTypeCheckingExample />
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
