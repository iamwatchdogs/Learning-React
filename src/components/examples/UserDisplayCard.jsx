import PropTypes from "prop-types";

function UserDisplayCardProps(props) {
  return (
    <div>
      <h3>User Information:</h3>
      <p>Name: {props.user}</p>
      <p>Age: {props.age}</p>
      <p>Phone Number: {props.phoneno}</p>
      <p>Email Address: {props.email}</p>
    </div>
  );
}

function UserDisplayCardDestructuring({ user, age, phoneno, email }) {
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

function UserDisplayCardConsoleLog({ user, age, phoneno, email }) {
  console.log(
    `User Information:\nName: ${user}, Age: ${age}, Phone Number: ${phoneno}, Email Address: ${email}`
  );

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

function UserDisplayCardWithDefaultValues({
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

function UserDisplayCardBooleanProps({
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
}

function UserDisplayCardWithSpreadOperator({
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

function UserDisplayCardPropTypes({
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

UserDisplayCardPropTypes.propTypes = {
  user: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  phoneno: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  email: PropTypes.string.isRequired,
};

export {
  UserDisplayCardProps,
  UserDisplayCardDestructuring,
  UserDisplayCardConsoleLog,
  UserDisplayCardWithDefaultValues,
  UserDisplayCardBooleanProps,
  UserDisplayCardWithSpreadOperator,
  UserDisplayCardPropTypes,
};
