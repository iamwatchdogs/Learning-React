import IntroductionToProps from "./props-components/IntroductionToProps";
import AdditionalPropsTopics from "./props-components/AdditionalPropsTopics";

function Title() {
  return <h1>Props</h1>;
}

export default function Props() {
  return (
    <article id='props'>
      <Title />
      <IntroductionToProps />
      <AdditionalPropsTopics />
    </article>
  );
}
