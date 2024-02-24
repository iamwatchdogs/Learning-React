import React from "react";
import {
  UserDisplayCardWithStaticDefaultPropValues,
  UserDisplayCardWithDefaultPropValues,
} from "./UserDisplayCard";

class StaticDefaultPropsExample extends React.Component {
  render() {
    const updateUserDisplayCardComponent = `import React from "react";

export default class UserDisplayCard extends React.Component {
  static defaultProps = {
    user: "Guest",
    age: 18,
    phoneno: "1234567890",
    email: "guest@info.com",
  };
  render() {
    const { user, age, phoneno, email, isMarried, ...additionalData } =
      this.props;

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
}`;

    return (
      <>
        <p>
          Let{"'"}s start with the defining the static values as static property
          within the class by updating out <code>UserDisplayCard</code> class
          component with the static property as follows,
        </p>
        <pre>
          <code>{updateUserDisplayCardComponent}</code>
        </pre>
        <p>
          Now, let{"'"}s create a instance of the class component with no props
          at all
        </p>
        <UserDisplayCardWithStaticDefaultPropValues />
      </>
    );
  }
}

class DefaultPropsExample extends React.Component {
  render() {
    const rewrittenUserDisplayCard = `import React from "react";
  
class UserDisplayCard extends React.Component {
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
UserDisplayCard.defaultProps = {
  user: "Guest",
  age: 18,
  phoneno: "1234567890",
  email: "guest@info.com",
};
`;

    return (
      <>
        <p>
          Now, let{"'"}s take a look at the traditional implementation and the
          one which is similar to the <code>propTypes</code>.
        </p>
        <p>
          Just like how we append the <code>propTypes</code> property after
          defining the component, we can just append/add{" "}
          <code>defaultProps</code> to the finished class component.
        </p>
        <p>
          This also works with functional components but it more readable when
          we destructing the props rather than this methods.
        </p>
        <p>
          Now, let{"'"}s rewrite the <code>UserDisplayCard</code> to demonstrate
          this implemenation.
        </p>
        <pre>
          <code>{rewrittenUserDisplayCard}</code>
        </pre>
        <p>Now, let{"'"}s create an Instance of the component...</p>
        <UserDisplayCardWithDefaultPropValues />
        <p>And as we see nothing has changed. It still remain the same,</p>
      </>
    );
  }
}

export default class DefaultValue extends React.Component {
  render() {
    const Descripition = () => (
      <>
        <p>
          And unlike the functional components, it{"'"}s not that easy to set
          the default prop values since we can{"'"}t access them directly.
        </p>
        <p>
          You can set default values for props in a class component in two ways:
        </p>
        <ul>
          <li>
            By defining a <code>static</code> property called as{" "}
            <code>defaultProps</code> within the class.
          </li>
          <li>
            By appendin the <code>defaultProps</code> attribute to the class
            component after the class compoent has been defined.{" "}
            <i>
              (Just like <code>PropTypes</code>)
            </i>
          </li>
        </ul>
      </>
    );

    const Example = () => (
      <>
        <StaticDefaultPropsExample />
        <DefaultPropsExample />
      </>
    );

    return (
      <>
        <Descripition />
        <Example />
      </>
    );
  }
}
