import ImplementingProps from "./props-components/ImplementingProps";
import DefaultValueProps from "./props-components/DefaultValueProps";
import BooleanProps from "./props-components/BooleanProps";
import UsingSpreadOperator from "./props-components/UsingSpreadOperator";
import AccessingChildernThroughProps from "./props-components/AccessingChildernThroughProps";

function IntroductionTitle() {
  return <h2>Introduction to Props</h2>;
}

function IntroductionDescription() {
  return (
    <>
      <p>
        Props in React are short for <b>Properties</b> and they play a key role
        in desgining the component based on the input data. This help us reuse
        simple structured components to render with different data.
      </p>
      <p>
        As we know components are the building block of whole application and
        something which a huge page is broken down into. Props are used at
        different parts of the page where we feel like a few sections might have
        a repeated or similar structure but have different values and
        properties.
      </p>
      <p>
        Here a simple example to help you visualize props and their usage, Just
        go to amazon website and search for any product. What do you see ???...
      </p>
      <p>
        You see a page filled with a list of products and each of these products
        are represented within a box/block of same length and width with same
        styling. But the only different between each of them are the properties
        like title, price, description image etc.
      </p>
      <p>
        Now let us see this from React perspective, we can see that block/box as
        a component with a sepecific lenght, width, styling and other stuff. And
        the values that change from product to product (like the title, price,
        description, image etc) are the props.
      </p>
    </>
  );
}

export default function Props() {
  return (
    <article id='props'>
      <h1>Props</h1>
      <section id='introduction'>
        <IntroductionTitle />
        <IntroductionDescription />
        <ImplementingProps />
      </section>
      <section id='additonal-topics'>
        <h2>Additional Topics</h2>
        <DefaultValueProps />
        <BooleanProps />
        <UsingSpreadOperator />
        <AccessingChildernThroughProps />
      </section>
    </article>
  );
}
