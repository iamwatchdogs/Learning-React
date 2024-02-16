export default function UserDisplayConsoleLog({ user, age, phoneno, email }) {

	console.log(`User Information:\nName: ${user}, Age: ${age}, Phone Number: ${phoneno}, Email Address: ${email}`);

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
