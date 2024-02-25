import React from "react";
import { UserDisplayCard } from "./UserDisplayCard";

class Example extends React.Component {
  render() {
    const userDisplayCardAsClassComponent = `import React from "react";

export default class UserDisplayCard extends React.Component {
  render() {
    const { user, age, phoneno, email, isMarried, ...additionalData } = this.props;

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
}
`;

    const instanceOFUserDisplayCard = `<UserDisplayCard user="sammy" age={27} email="sammy.rocks.123@gmail.com" isMarried role="Developer"/>`;
    return (
      <>
        <p>
          Let{"'"}s take an example and rewrite the <code>UserDisplayCard</code>{" "}
          component into a class component.
        </p>
        <pre>
          <code>{userDisplayCardAsClassComponent}</code>
        </pre>
        <p>
          And when we create an instance of this class component, with some
          sample props, we get...
        </p>
        <pre>
          <code>{instanceOFUserDisplayCard}</code>
        </pre>
        <UserDisplayCard
          user='sammy'
          age={27}
          email='sammy.rocks.123@gmail.com'
          isMarried
          role='Developer'
        />
        <p>
          I have destructured the props within the <code>render()</code> method
          as we haven{"'"}t discussed about the <code>componentDidMount()</code>{" "}
          method yet.
        </p>
      </>
    );
  }
}

export default class Introduction extends React.Component {
  render() {
    const Description = () => (
      <>
        <p>
          The props function exactly the same in class components as we
          discussed in the functional components.The class components received
          the props as an object with key-value pairs.
        </p>
        <p>
          But here, we can{"'"}t directly destructure them as we did in
          functional components. Because internal passed to the class component
          and are access using <code>this</code> keyword.
        </p>
        <p>
          So, if we wish to make things simple by destructuring the props, we
          just have to create variable within the <code>render()</code> or{" "}
          <code>componentDidMount()</code> methods and destructure them.
        </p>
        <p>
          Don{"'"}t worry about the <code>componentDidMount()</code> method as
          well be discussing them too in the upcoming sections related to the
          component life cycle.
        </p>
      </>
    );

    return (
      <section id='introduction'>
        <Description />
        <Example />
      </section>
    );
  }
}
