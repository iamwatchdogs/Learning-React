// Creating an Header component.
function Header() {
    return <h2>This is imported Header element</h2>;
}

// returning JSX present within Header component using Header component.
function App() {
    return <Header />;
}

// exporting App component so that other files can use the component.
// we are exporting it using keyword `default` as App is the name of file itself.
export default App;
