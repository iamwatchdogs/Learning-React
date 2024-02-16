export default function UserDisplayCardWithSpreadOperator({
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
