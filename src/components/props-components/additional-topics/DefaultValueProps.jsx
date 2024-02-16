import UserDisplayCardConsoleLog from "../../examples/UserDisplayCardConsoleLog";
import UserDisplayCardWithDefaultValues from "../../examples/UserDisplayCardWithDefaultValues";

function Title() {
  return <h3>Default value Props</h3>;
}

function IntroDescription() {
  const noPropsComponent = `<UserDisplayCardConsoleLog />`;
  const onlyTwoPropsComponent = `<UserDisplayCardConsoleLog user='sammy' age={21} />`;
  return (
    <>
      <p>
        We have discussed earlier about destructring and how it will break the
        application when we pass additional arguments/props, but have you
        through what will happen if we don{"'"}t pass any props or not enough to
        the component?
      </p>
      <p>Let{"'"}s try creating an UserDisplayCard without any props...</p>
      <pre>
        <code>{noPropsComponent}</code>
      </pre>
      <UserDisplayCardConsoleLog />
      <p>
        Hmm... That looks empty, let{"'"}s see with only two prop and see the
        output.
      </p>
      <pre>
        <code>{onlyTwoPropsComponent}</code>
      </pre>
      <UserDisplayCardConsoleLog user='sammy' age={21} />
      <p>
        That{"'"}s great now we can see some value, but what about the remaining
        props?
      </p>
      <p>
        These values will be <code>undefined</code> by default, you can check
        the console in the broswer because I have <code>console.log()</code>{" "}
        them.
      </p>
    </>
  );
}

function MainDescription() {
  return (
    <>
      <p>
        So, you might wonder be wonder whether there is a way to assign some
        default value rather than leaving them undefined ???...
      </p>
      <p>
        Well, you can... All you have to do is provided an default value to the
        argument present within the destructring the props in the functional
        component which is going to receive it.
      </p>
    </>
  );
}

function Example() {

  const exampleComponent = `export default function UserDisplayCard({
  user = "Guest",
  age = 18,
  phoneno = "1234567890",
  email = "guest@info.com",
}) {

  return (
    <div>
      <h3>User Information:</h3>
      <p>Name: {user}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneno}</p>
      <p>Email Address: {email}</p>
    </div>
  );
}
`;

  return (
    <>
      <p>
        Let{"'"}s look how we can rewrite the above functional component to have
        some default values with an example.
      </p>
      <pre>
        <code>{exampleComponent}</code>
      </pre>
      <p>Now, Let{"'"}s create an component without any props</p>
      <UserDisplayCardWithDefaultValues />
      <p>
        That{"'"}s great, now let{"'"}s try with 2 props only...
      </p>
      <UserDisplayCardWithDefaultValues user='sammy' age={21} />
    </>
  );
}

function Description() {
  return (
    <>
      <IntroDescription />
      <MainDescription />
      <Example />
    </>
  );
}

export default function DefaultValueProps() {
  return (
    <>
      <Title />
      <Description />
    </>
  );
}
