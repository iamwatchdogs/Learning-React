import UserDisplayCardBooleanProps from "../../examples/UserDisplayCardBooleanProps";
import UserDisplayCardWithSpreadOperator from "../../examples/UserDisplayCardWithSpreadOperator";

function Title() {
  return <h3>Using Spread Operator</h3>;
}

function Description() {
  return (
    <>
      <p>
        The whole idea and concept of props sounds great until you have to pass
        a hundreds of props to a component. Even though no designs components to
        receive such huge amount of props, let{"'"} assume that we have a
        hundred of props to pass. What are you going to do ???...
      </p>
      <p>
        No expect you to sit for hour writing key-value pair for all the hundred
        props for a single component, don{"'"}t even ask me about creating
        multiple components and assigning all hundred props for each single one
        of them...
      </p>
      <p>
        This where we can use another ES6 feature of JavaScript called the{" "}
        {"Spread opereator"}. The spread operator is used to expand an array or
        object into another array or object.
      </p>
      <p>
        This make our job easy by helping us assign data from objects to
        automatically assign repective props to a component.
      </p>
    </>
  );
}

function Example() {
  const data = {
    user: "sammy",
    age: 21,
    phoneno: 1234567980,
    email: "sam.rocks.123@gmail.com",
    isMarried: true,
  };
  const dataObjectDeclaration = `const data = ${JSON.stringify(data, null, 2)}`;

  function ExampleWithoutSpreadOperator() {
    const withoutSpreadOperatorExample = `<UserDisplayCard user='sammy' age={21} phoneno={1234567980} email='sam.rocks.123@gmail.com' isMarried/>`;

    return (
      <>
        <p>Let{"'"}s take an example from previous component.</p>
        <pre>
          <code>{withoutSpreadOperatorExample}</code>
        </pre>
        <UserDisplayCardBooleanProps
          user='sammy'
          age={21}
          phoneno={1234567980}
          email='sam.rocks.123@gmail.com'
          isMarried
        />
      </>
    );
  }

  function ExampleWithSpreadOperator() {
    const withSpreadOperatorExample = `<UserDisplayCard {...data}/>`;

    return (
      <>
        <p>
          As you can see things get a bit messy when there are many properties
          in it. to achieve the same thing with spread opeartor let{"'"}s
          declare a object filled with valid data.
        </p>
        <pre>
          <code>{dataObjectDeclaration}</code>
        </pre>
        <p>
          Now that we got our data, let{"'"}s see how we can use spread operator
        </p>
        <pre>
          <code>{withSpreadOperatorExample}</code>
        </pre>
        <UserDisplayCardBooleanProps {...data} />
        <p>
          As you can see, we have used the spread operator to pass the data
          object to the component. This will automatically assign the respective
          props to the component.
        </p>
        <p>
          Same output with little efforts, also this comes really handy when we
          try to create components passing the data from an external resource
          and something more dynamic like APIs.
        </p>
      </>
    );
  }

  return (
    <>
      <ExampleWithoutSpreadOperator />
      <ExampleWithSpreadOperator />
    </>
  );
}

function AdditionalInformation() {
  const sampleExample = `<UserDisplayCard gender="male" age={25} name="John Doe" />`;
  const sampleComponent = `export default function UserDisplayCard({
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
`;

  return (
    <>
      <p>
        We can also use spread operator to overcome the disadvantage of
        destructing at component receiving the data.
      </p>
      <p>
        All we have to do is place a spread operator at the end of the
        parameters that captures the additional key-value pairs.
      </p>
      <p>Let{"'"}s modify the above component to accept additional data:</p>
      <pre>
        <code>{sampleComponent}</code>
      </pre>
      <p>
        Now, let{"'"}s test this out by creating a component and passing an
        additional data of gender.
      </p>
      <pre>
        <code>{sampleExample}</code>
      </pre>
      <UserDisplayCardWithSpreadOperator
        gender='male'
        age={25}
        name='John Doe'
      />
    </>
  );
}

export default function UsingSpreadOperator() {
  return (
    <>
      <Title />
      <Description />
      <Example />
      <AdditionalInformation />
    </>
  );
}
