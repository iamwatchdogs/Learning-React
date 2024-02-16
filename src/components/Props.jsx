import IntroductionToProps from "./props-components/IntroductionToProps";
import AdditionalPropsTopics from "./props-components/AdditionalPropsTopics";

export default function Props() {
  function Title() {
    return <h1>Props</h1>;
  }

  return (
    <article id='props'>
      <Title />
      <IntroductionToProps />
      <AdditionalPropsTopics />
    </article>
  );
}
