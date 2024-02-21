import {
  SampleComponentWithoutPropTypes,
  SampleComponentWithPropTypes,
} from "../examples/SampleComponent";

function IntroduceSampleComponent() {
  const sampleComponent = `export function SampleComponent({ name, age, isDeveloper }) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>Is a developer: {isDeveloper ? "Yes" : "No"}</p>
    </>
  );
}`;

  return (
    <>
      <p>
        Let{"'"}s take a sample example to understand how to implement type
        checking to the props of a component using PropTypes,
      </p>
      <p>Now, Consider the following sample component</p>
      <pre>
        <code>{sampleComponent}</code>
      </pre>
      <p>Output:</p>
      <SampleComponentWithoutPropTypes />
    </>
  );
}

function StepsToAddPropTypes() {
  return (
    <>
      <p>Now, Let{"'"}s add type-checking using proptypes.</p>
      <ul>
        <li>
          first export the component at the end of the file, not while defining
          it.
        </li>
        <li>
          now import the <code>PropTypes</code> from{" "}
          <code>{'"prop-types"'}</code>.
        </li>
        <li>
          Now, append the <code>propTypes</code> attribute of the component
          using a object of key-value pair containing a specific prop as key and
          Type as the value. As shown in the updated component.
        </li>
      </ul>
    </>
  );
}

function DemonstratingPropTypes() {
  const sampleComponentWithPropTypes = `import PropTypes from "prop-types";

function SampleComponent({ name = "default", age = 18, isDeveloper }) {
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>Is a developer: {isDeveloper ? "Yes" : "No"}</p>
    </>
  );
}

SampleComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isDeveloper: PropTypes.bool.isRequired,
};`;

  return (
    <>
      <pre>
        <code>{sampleComponentWithPropTypes}</code>
      </pre>
      <SampleComponentWithPropTypes />
      <p>
        This does nothing when we create a component without any props or with
        proper props. But if we give values that does not match the specified
        type, then we will get a warning in the console and even your IDE if it
        has capablitiy to show erros.
      </p>
      <p>Let give it a try shall we?</p>
      <pre>
        <code>{`<SampleComponent age='21 savage' isDeveloper='idk'/>`}</code>
      </pre>
      <SampleComponentWithPropTypes age='21 savage' isDeveloper='idk' />
      <p>
        The component has render but what have you found in the console ???...
        there{"'"}s a warning saying invaild types expected something else.
      </p>
      <p>
        If we did gave any default values to the <code>name</code> prop then we
        {"'"}ll have another warning saying that the prop is required but not
        provided.
      </p>
    </>
  );
}

export default function SampleExample() {
  return (
    <>
      <IntroduceSampleComponent />
      <StepsToAddPropTypes />
      <DemonstratingPropTypes />
    </>
  );
}
