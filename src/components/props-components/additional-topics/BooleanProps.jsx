import UserDisplayCardBoolean from "../../examples/UserDisplayCardBooleanProps";

function Title() {
  return <h3>Boolean props</h3>;
}

function Description() {
  return (
    <>
      <p>
        Boolean props are just like any other props, but all they pass is a
        boolean data i.e., either true or false.
      </p>
      <p>
        Due to this binary nature, we can use this as a short hard to enable it
        or disable it.
      </p>
      <p>
        In other words, we don{"'"}t have to write the whole things as{" "}
        <code>isMarried={"true"}</code>, we can simply achive the same by
        specifying <code>isMarried</code> only.
      </p>
    </>
  );
}

function Example() {
  const longFormExample = `<UserDisplayCard isMarried={true} />`;
  const shortHandExample = `<UserDisplayCard isMarried />`;
  const falseConditionCheckExample = `<UserDisplayCard />`;
  const exampleComponent = `export default function UserDisplayCardWithDefaultValues({
  user = "Guest",
  age = 18,
  phoneno = "1234567890",
  email = "guest@info.com",
  isMarried,
}) {
  return (
    <div>
      <h3>User Information:</h3>
      <p>Name: {user}</p>
      <p>Age: {age}</p>
      <p>Phone Number: {phoneno}</p>
      <p>Email Address: {email}</p>
      <p>Is Married: {isMarried ? "Yes" : "No"}</p>
    </div>
  );
}`;

  return (
    <>
      <p>Here is an example of using boolean prop:</p>
      <p>
        Let{"'"}s modify out component a little bit by adding an additional prop
        to it.
      </p>
      <pre>
        <code>{exampleComponent}</code>
      </pre>
      <p>Now let{"'"}s, try it out in the long form and see the output...</p>
      <pre>
        <code>{longFormExample}</code>
      </pre>
      <UserDisplayCardBoolean isMarried={true} />
      <p>
        Now instead of writting this long, we just specify the props and it does
        the same.
      </p>
      <pre>
        <code>{shortHandExample}</code>
      </pre>
      <UserDisplayCardBoolean isMarried />
      <p>
        Now that we know, it work both ways let{"'"}s see whether not mentioning
        at all acts as <code>false</code> or not.
      </p>
      <pre>
        <code>{falseConditionCheckExample}</code>
      </pre>
      <UserDisplayCardBoolean />
    </>
  );
}

function EndNote() {
  return (
    <>
      <p>
        Please note that when you{"'"}re using this method, the respective prop
        will be <code>true</code> only when you specify it. And if you don{"'"}t
        specify it, it will become <code>undefined</code> as it is the default.{" "}
        <b>NOT FALSE</b>
      </p>
      <p>
        And this comes more handly when you{"'"}re using them for conditinal
        rendering <i>(don{"'"}t worry about conditional rendering for now)</i>{" "}
        and not using as a display item. And if you do use it as a display item
        then you can use an conditional statement or ternary operator or setup a
        default value to the prop to display the proper values on the final
        view.
      </p>
    </>
  );
}

export default function BooleanProps() {
  return (
    <>
      <Title />
      <Description />
      <Example />
      <EndNote />
    </>
  );
}
