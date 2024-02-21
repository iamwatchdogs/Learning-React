function Header() {
  return <h2>PropTypes</h2>;
}

function Desciption() {
  return (
    <>
      <p>
        PropTypes is one of default library of React library, that was initially
        an external library till React v15.5.0. The PropTypes library is used as
        an default way to implement type checking into React-based application.
      </p>
    </>
  );
}

export default function PropTypes() {
  return (
    <>
      <Header />
      <Desciption />
    </>
  );
}
