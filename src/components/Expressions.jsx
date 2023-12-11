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

const UsingDirectValues = () => {
    return (
        <article className='using-direct-values'>
            <section className='theory'>
                <h2>Using Direct Values</h2>
                <p>
                    We can also use direct values in the jsx elements being
                    returned. But for that we have to use curly braces for the
                    jsx element to recoginize the elements as an expressions.
                </p>
            </section>
            <section className='example'>
                <h3>For example:</h3>
                <ul>
                    <li>
                        <h4>Literal values:</h4>
                        <ul>
                            <li>String Literal: {"Hello World!"}</li>
                            <li>String template: {`externalLorem[0:5]: ${externalLorem.substring(0, 5)}`}</li>
                            <li>Numerical: {123}, {4.56}</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Expressions:</h4>
                        <ul>
                            <li>{1} + {1} = {1 + 1}</li>
                            <li>(9*5/3)%2 = {((9 * 5) / 3) % 2}</li>
                            <li>{`'3' + 3 - 3`} = {"3" + 3 - 3}</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </article>
    );
};

// Arrow functions
const consoleLogLorem = () => console.log(externalLorem);
const returnLorem = () => externalLorem;

const FunctionCalls = () => {
    return (
        <article className='function-calls'>
            <section className='theory'>
                <h2>Function Calls</h2>
                <p>
                    We can also call functions inside the jsx elements being
                    returned. But for that we have to use curly braces for the
                    jsx element to recoginize the elements as an expressions.
                </p>
                <p>
                    Note that when we call the <code>consoleLogLorem()</code>
                    function and totally normal, as the UI is being rendered
                    in a StrictMode at the root. The StrictMode forces the 
                    components to re-render to help developer find the bugs
                    and defects. In further concepts, we will know the concepts
                    of hooks and how to avoid dual function call for a single
                    actual call.
                </p>
            </section>
            <section className='example'>
                <h3>For example:</h3>
                <ul>
                    <li>
                        Calling <b>consoleLogLorem()</b>{" "}
                        <i>*no return value*</i>: {consoleLogLorem()}
                    </li>
                    <li>
                        Calling <b>returnLorem()</b>: {returnLorem()}
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
            <UsingDirectValues />
            <FunctionCalls />
        </>
    );
}
