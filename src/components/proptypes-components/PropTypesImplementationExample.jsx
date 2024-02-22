import { UserDisplayCardPropTypes } from "../examples/UserDisplayCard";

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

export default function PropTypesImplementationExample() {
  return (
    <>
      <IntroExample />
      <ActualExample />
      <OptionalTypeCheckingExample />
    </>
  );
}
