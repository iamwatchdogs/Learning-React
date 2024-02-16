import DefaultValueProps from "./additional-topics/DefaultValueProps";
import BooleanProps from "./additional-topics/BooleanProps";
import UsingSpreadOperator from "./additional-topics/UsingSpreadOperator";
import AccessingChildernThroughProps from "./additional-topics/AccessingChildernThroughProps";

function AdditionalTopicsTitle() {
  return <h2>Additional Topics</h2>;
}

export default function AdditionalPropsTopics() {
  return (
    <section id='additonal-topics'>
      <AdditionalTopicsTitle />
      <DefaultValueProps />
      <BooleanProps />
      <UsingSpreadOperator />
      <AccessingChildernThroughProps />
    </section>
  );
}
