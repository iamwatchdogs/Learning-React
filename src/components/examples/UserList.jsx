export default function UserList({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div className='user-list'>{children}</div>
    </>
  );
}
