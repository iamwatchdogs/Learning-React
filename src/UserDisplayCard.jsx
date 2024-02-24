import React from "react";

class UserDisplayCard extends React.Component {
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
}

export { UserDisplayCard };
