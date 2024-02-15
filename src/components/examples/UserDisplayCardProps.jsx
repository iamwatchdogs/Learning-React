export default function UserDisplayCardProps(props) {
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
