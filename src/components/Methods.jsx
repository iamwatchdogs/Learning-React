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
                    Even though <b>key</b> is optional, it is highly suggested
                    to provide it as the key value is used to unqiuely identify
                    one element from another. In case you have an ID attribute,
                    then you can ignore write the call back function using key
                    parameter, but you have make sure you use the id of the
                    iterable for the generating jsx element.
                </p>
            </section>
        </section>
    );
};

const ForEach = () => {
    const generateJsx = () => {
        const elements = [];

        // generating jsx elements to store them into an array
        data.forEach((item) =>
            elements.push(
                <li key={item.id}>
                    id: {item.id}, name: {item.name}, age: {item.age}
                </li>
            )
        );

        // returning all the jsx elements using `map()` method
        return elements.map((item) => item);
    };

    return (
        <section className='for-each-method'>
            <section className='theory'>
                <h2>For Each method</h2>
                <p>
                    For Each method is similar to map method but it does not
                    return anything. It is used to iterate over an array of
                    object and perform some action on each item of the object.
                    For example, we can use this method to print the name of
                    each person in the list.
                </p>
            </section>
            <section className='example'>
                <h3>For Example</h3>
                <p>
                    Here we are iterating over a list/array of object of some
                    data that lists a group of people and contains data such as
                    name, id, age.
                </p>
                <ul>{generateJsx()}</ul>
            </section>
            <section className='note'>
                <h3>Note:</h3>
                <p>
                    Please note that the For Each method take a call back method
                    that has two paramenter which are <b>item</b> and <b>key</b>
                    . Even though <b>key</b> is optional, it is highly suggested
                    to provide it as the key value is used to unqiuely identify
                    one element from another. In case you have an ID attribute,
                    then you can ignore write the call back function using key
                    parameter, but you have make sure you use the id of the
                    iterable for the generating jsx element.
                </p>
            </section>
        </section>
    );
};

const Filter = () => {
    return (
        <section className='filter-method'>
            <section className='theory'>
                <h2>Filter method</h2>
                <p>
                    Filter method is used to filter out the items from the
                    iterable object based on some condition. The condition
                    checking will be done using a call back function containing
                    <code>item</code> parameter and the filter method returns a
                    new list/array of filtred element. The filter method only
                    filters and returns list of element, so we can chain the
                    method with
                    <code>map</code> method to generate the required jsx.
                </p>
            </section>
            <section className='example'>
                <h3>For Example</h3>
                <p>
                    Here we are iterating over a list/array of object of some
                    data and return only the details of the people who are 25
                    years of age or above.
                </p>
                <ul>
                    {data
                        .filter((item) => item.age >= 25)
                        .map((item) => (
                            <li key={item.id}>
                                id: {item.id}, name: {item.name}, age:{" "}
                                {item.age}
                            </li>
                        ))}
                </ul>
            </section>
        </section>
    );
};

const Reduce = () => {
    return (
        <section className='reduce'>
            <section className='theory'>
                <h2>Reduce Method</h2>
                <p>
                    Reduce method is similar to the filter method, but not in
                    all ways. Reduce method is used to reduce the whole list of
                    elements or array in a single computed result, the mode of
                    computation can be any operation that requires accumulation
                    of previous operation. Some of the common/simple example is
                    performing sum of an array.
                </p>
            </section>
            <section className='example'>
                <h3>For Example</h3>
                <p>
                    Using reduce method we are going to find the average of all
                    the people present in the data. And just to show to that the
                    <code>reduce</code> method is not only for artihmetic operation,
                    we will append all the name together
                </p>
                <ul>
                    <li>
                        Avg age of people in <code>data</code>:{' '}
                        {data.reduce((acc, item) => acc + item.age, 0) / data.length}
                    </li>
                    <li>
                        Names of all the people in <code>data</code>:{' '}
                        {data.reduce((acc, item) => acc + item.name + ' ', '')}
                    </li>
                </ul>
            </section>
        </section>
    );
};

const Find = () => {
    return (
        <section className='find'>
            <section className='theory'>
                <h2>Find Method</h2>
                <p>
                    Find method is very similar to filter method as both of
                    them return elements that satisy the condition which is
                    provided in the form of call back function. The only 
                    difference between them is that, Find method only returns
                    single element, the one which statifies the condition first. 
                </p>
            </section>
            <section className='example'>
                <h3>For Example:</h3>
                <p>
                    Using find method, we find the first person the enrolled into 
                    the <code>data</code> array <i>(assume that the indexing as the
                    order people enrolled)</i> and who is 25 years old or above.
                </p>
                <ul>
                    <li>
                        First person who is 25 years old or above:{' '}
                        {data.find((item) => item.age >= 25).name}
                    </li>
                </ul>
            </section>
        </section>
    );
}

export default function Methods() {
    return (
        <article className='methods'>
            <h1>Methods</h1>
            <section className='introduction'>
                <h1>Introduction</h1>
                <p>
                    We have discussed how to make function calls previously and
                    here we are going to take a look into some of most used
                    methods for accessing an object.
                </p>
            </section>
            <Map />
            <ForEach />
            <Filter />
            <Reduce />
            <Find />
        </article>
    );
}
