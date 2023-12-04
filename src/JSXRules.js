import React from "react";

function Attributes () {
	return (
		<>
			<h3 className="attributes">Attributes</h3>
			<ul className="attributes">
				<li>HTML attributes are written as camelCase in JSX.</li>
				<li>Attribute values in JSX are always strings.</li>
				<li>
					Since attributes like "class" are already part of original Javascript,
					react uses other attributes idetifiers to represent the actual attribute.
					for example,
					for <code>class</code> attribute, we use <code>className</code> in React.
				</li>
			</ul>
		</>
	);
}

function Tags() {
    return (
        <>
            <h3>Tag Rules</h3>
            <ul>
                <li>
                    Each JSX element should either have an open-close tags or
                    self-closing tag.
                </li>
                <li>
                    If you have multiple tags needed to grouped together (to
                    return in though components), then wrap them in a parent tag
                    like <b>div</b> tag <i>(or)</i> using React fragments i.e.,
                    <code>
                        <React.Fragment></React.Fragment>
                    </code>
					<i>(or)</i>
                    <code>
                        <></>
                    </code>
                </li>
				<li>
					Note that while other tags like <code>div</code> group elements within itself
					as its children, but <code>React.Fragment</code> group element without setting
					them as children to some tag.
				</li>
				<li><Attributes /></li>
            </ul>
        </>
    );
}

function Component() {
    return (
        <React.Fragment>
            <h2>Component Rules:</h2>
            <ul>
                <li>React components must start with a capital letter.</li>
                <li>Use PascalCase naming convention for all components.</li>
                <li>Each component can return only a single element.</li>
                <li>Components must return something.</li>
                <li>
                    The components can have nested elements including other
                    components.
                </li>
                <li>Avoid using the same name for multiple components.</li>
                <li><Tags /></li>
				<li>
					Components are the just oridinary functions which return JSX elements,
					thus you can do your own processing before you return you JSX elements.
				</li>
            </ul>
        </React.Fragment>
    );
}

function JSXRules () {
	return <Component />;
}

export default JSXRules;