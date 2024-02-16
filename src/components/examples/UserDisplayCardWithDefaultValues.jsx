export default function UserDisplayCardWithDefaultValues({
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
