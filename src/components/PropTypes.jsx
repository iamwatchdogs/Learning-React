import PropTypesImplementation from "./proptypes-components/PropTypesImplementation";

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
      <p>
        PropTypes is an optional tool that is used for static type checking in
        React. And most modern React application are not using PropTypes anymore
        for typechecking, as most React-based application are built using
        Typescript and it does a better job at Type Checking by letting you
        define the type using <code>interface</code>.
      </p>
      <p>
        It{"'"} suggest to type checking with Typescript rather than using
        PropTypes, because PropTypes were only meant to act only as a
        placeholder for type checking using Typescript or flow.
      </p>
      <p>
        Note that the PropTypes is completly optional but one the best practise
        that can help you write highly debuggable application. This is the
        reason why in I have updated the eslinter{"'"}s config to ignore the
        typechecking using prop-types.
      </p>
      <p>
        Also note that these PropTypes will not terimate or break you
        application in any way possible, they will only act as an warning that
        is help you less buddy code for you application.
      </p>
    </>
  );
}

export default function PropTypes() {
  return (
    <>
      <Header />
      <Desciption />
      <PropTypesImplementation />
    </>
  );
}
