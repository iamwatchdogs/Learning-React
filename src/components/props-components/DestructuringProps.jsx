import UserDisplayCardDestructuring from "../examples/UserDisplayCardDestructuring";

function Description() {
  return (
    <>
      <p>
        As you can see things get a bit tedious when we use props to access the
        all input data. So, we can use a JavaScript ES6 concept called
        Destructuring to Destructure the object into variables mapping the keys
        of the object.
      </p>
      <p>
        This helps us minimize the using props and the member operator to access
        the value. But this comes with a downside which in come cases act as an
        advantage.
      </p>
      <p>
        When we are Destructuring, we have to make sure to match all the keys
        present while specifying what to destructure from the object which is
        passed as input. If any additional attribute has been passed as input,
        it will throw an error and application will break.
      </p>
      <p>
        This acts as disadvantange as it limits the possible input to a
        component, but this can act as safetly advisor but help you make sure
        all the attribute are fixed and provided data no more than specified.
      </p>
      <p>
        ok that enough theory, let us take look how the above example looks like
        if we apply destructuring.
      </p>
    </>
  );
}

function Example() {
  const example = `export default function UserDisplayCardDestructuring({ user, age, phoneno, email }) {
    return (
      <div>
        <h3>User Information:</h3>
        <p>Name: {user}</p>
        <p>Age: {age}</p>
        <p>Phone Number: {phoneno}</p>
        <p>Email Address: {email}</p>
      </div>
    );
  }`;

  return (
    <pre>
      <code>{example}</code>
    </pre>
  );
}

function EndNote() {
  return (
    <>
      <p>
        As you can see it way more better to write and easy follow without
        changing the output.
      </p>
    </>
  );
}

export default function DestructuringProps() {
  return (
    <>
      <Description />
      <Example />
      <UserDisplayCardDestructuring
        user='sam'
        age={23}
        phoneno={1234567980}
        email='sam.rocks.123@gmail.com'
      />
      <EndNote />
    </>
  );
}
