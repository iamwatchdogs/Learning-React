import DefaultValueProps from "./additional-topics/DefaultValueProps";
import BooleanProps from "./additional-topics/BooleanProps";
import UsingSpreadOperator from "./additional-topics/UsingSpreadOperator";
import AccessingChildernThroughProps from "./additional-topics/AccessingChildernThroughProps";

function AdditionalTopicsTitle() {
  return <h2>Additional Topics</h2>;
}

function AdditionalTopicsDescription() {
  return (
    <p>
      Since we have covered the basic concepts of what, How and why we use
      props, let{"'"}s get into some essental topics.
    </p>
  );
}

export default function AdditionalPropsTopics() {
  return (
    <section id='additonal-topics'>
      <AdditionalTopicsTitle />
      <AdditionalTopicsDescription />
      <DefaultValueProps />
      <BooleanProps />
      <UsingSpreadOperator />
      <AccessingChildernThroughProps />
    </section>
  );
}
