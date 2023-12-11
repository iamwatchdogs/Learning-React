const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Bob", age: 30 },
    { id: 4, name: "Mary", age: 28 },
];

const Map = () => {
    return (
        <section className='Map-method'>
            <section className='theory'>
                <h2>Map method</h2>
                <p>
                    Map method is one of the most used method for iterating over
                    list of items <i>(or)</i> array object to be specific. We
                    can render a multiple components into the view from a single
                    component with data provided for each iteration of given
                    object. This help us render component dynamically based on
                    the data generated dynamically. Or we can simply generate
                    some JSX elements using the Map method.
                </p>
            </section>
            <section className='example'>
                <h3>For Example</h3>
                <p>
                    Here we are iterating over a list/array of object of some
                    data that lists a group of people and contains data such as
                    name, id, age.
                </p>
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            id: {item.id}, name: {item.name}, age: {item.age}
                        </li>
                    ))}
                </ul>
            </section>
            <section className='note'>
                <h3>Note:</h3>
                <p>
                    Please note that the map method take a call back method that
                    has two paramenter which are <b>item</b> and <b>key</b>.
                    Even though <b>key</b> is optional, it is highly suggested to provide
                    it as the key value is used to unqiuely identify one element from another.
                    In case you have an ID attribute, then you can ignore write the call back
                    function using key parameter, but you have make sure you use the id of
                    the iterable for the generating jsx element.
                </p>
            </section>
        </section>
    );
};

export default function Methods() {
    return (
        <article className='methods'>
            <section className='introduction'>
                <h1>Methods</h1>
                <p>
                    We have discussed how to make function calls previously and
                    here we are going to take a look into some of most used
                    methods for accessing an object.
                </p>
                <br />
            </section>
            <Map />
        </article>
    );
}
