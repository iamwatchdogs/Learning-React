import PropTypes from "prop-types";

function SampleComponentWithoutPropTypes({ name = "default", age = 18, isDeveloper }) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>Is a developer: {isDeveloper ? "Yes" : "No"}</p>
    </>
  );
}

function SampleComponentWithPropTypes({ name = "default", age = 18, isDeveloper }) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>Is a developer: {isDeveloper ? "Yes" : "No"}</p>
    </>
  );
}

SampleComponentWithPropTypes.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isDeveloper: PropTypes.bool.isRequired,
};

export { SampleComponentWithoutPropTypes, SampleComponentWithPropTypes };
