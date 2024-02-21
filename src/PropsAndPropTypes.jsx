import Props from './components/Props';
import PropTypes from './components/PropTypes';

function Header() {
  return (
    <header>
      <h1>Props and PropTypes</h1>
      <p>
        Props and PropTypes are two core concepts in React. They are used to
        define the shape of a React component. They play a key role in any React
        application as they help to render the component based on the given
        data.
      </p>
    </header>
  );
}

function Main() {
  return (
    <main>
      <Props />
    </main>
  );
}

export default function PropsAndPropTypes() {
  return (
    <>
      <Header />
      <Main />
      <PropTypes />
    </>
  );
}
