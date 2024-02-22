import { UserDisplayCardProps } from "../../examples/UserDisplayCard";

function Description() {
  return (
    <>
      <p>
        Nice, now we know how pass the data into a component. But now, how are
        we going to use this data inside the component? This is where keywork
        props come in.
      </p>
      <p>
        You see, when we pass data into a component, it will be sent as an
        object with key-value pair. And to accept this data we need to specify
        within the parenthesis of the functional component which we decided to
        send the data.
      </p>
      <p>
        Then we use that variable named props to access the data and use it to
        render the component accordingly.
      </p>
      <p>
        As an example, Now let us take a look into the content within the the{" "}
        <b>UserDisplayCard</b> we discussed earlier.
      </p>
    </>
  );
}

function Example() {
  const examplePropsComponent = `export default function UserDisplayCard(props) {
  return (
    <div>
      <h3>User Information:</h3>
      <p>Name: {props.user}</p>
      <p>Age: {props.age}</p>
      <p>{props.phoneno}</p>
      <p>Email Address: {props.email}</p>
    </div>
  );
  }`;

  return (
    <>
      <pre>
        <code>{examplePropsComponent}</code>
      </pre>
      <p>Thus, the output of above example</p>
      <UserDisplayCardProps
        user='sam'
        age={23}
        phoneno={1234567980}
        email='sam.rocks.123@gmail.com'
      />
    </>
  );
}

export default function DefaultUsageOfProps() {
  return (
    <>
      <Description />
      <Example />
    </>
  );
}
