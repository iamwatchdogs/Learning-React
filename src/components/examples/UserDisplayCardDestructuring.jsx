export default function UserDisplayCardDestructuring({ user, age, phoneno, email }) {
    return (
      <div>
        <h3>User Information:</h3>
        <p>Name: {user}</p>
        <p>Age: {age}</p>
        <p>{phoneno}</p>
        <p>Email Address: {email}</p>
      </div>
    );
}
