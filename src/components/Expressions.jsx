const externalLorem =
    "Nostrum vero dolorem rem voluptas explicabo quisquam, totam ab fuga.";

const UsingVariables = () => {
    const internalLorem =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
    return (
        <article className='using-variables'>
            <section className='theory'>
                <h2>Using Variables</h2>
                <p>
                    As mentioned before, the functional components are baisc
                    functions that return jsx element. Hence we can use other
                    variables <i>(either internal or external)</i> into the jsx
                    elements being returned. This enables us to dynamically
                    modify the end result based on condition or dynamically
                    provided data.
                </p>
                <p>
                    But to make use of those variables we have to use curly
                    braces for the jsx element to recoginize the elements as an
                    expressions or in this case as a variable.
                </p>
            </section>
            <section className='example'>
                <h3>For example:</h3>
                <ul>
                    <li>
                        <h4>Internal variable:</h4>
                        {internalLorem}
                    </li>
                    <li>
                        <h4>External variable:</h4>
                        {externalLorem}
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default function Expressions() {
    return (
        <>
            <UsingVariables />
        </>
    );
}
