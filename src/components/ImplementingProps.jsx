import DefaultUsageOfProps from "./DefaultUsageOfProps";
import DestructuringProps from "./DestructuringProps";

function Title() {
  return <h2>Introduction to Props</h2>;
}

function DescriptionForPropsInput() {
  const exampleInput = `<UserDisplayCard 
  name={"sam"} 
  age={"23"} 
  phoneno={"1234567980"} 
  email={"sam.rocks.123@gmail.com"} 
/>`;

  return (
    <>
      <p>
        Props are used to pass data from parent component to child component. We
        can pass any data type as props, be it a string, number, array, object,
        function or even a component.
      </p>
      <p>
        We can simply pass this data to the components just as how we provide
        values to html tags like <code>&lt;input&gt;</code> or any other tag.
      </p>
      <p>
        For example, Say we have a components named <b>UserDisplayCard</b> and
        all it does is display <i>name</i>, <i>age</i>, <i>phone number</i> and{" "}
        <i>email</i> for a given user on the profile. Then we can pass the props
        as following,
      </p>
      <p>
        <pre>
          <code>{exampleInput}</code>
        </pre>
      </p>
    </>
  );
}

export default function ImplementingProps() {
  return (
    <section id='implementation'>
      <Title />
      <DescriptionForPropsInput />
      <DefaultUsageOfProps />
      <DestructuringProps />
    </section>
  );
}
