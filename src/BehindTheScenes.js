import React from "react";

// All the JSX elements will be converted into pure javascript.
// This will be done by transpiler like Bable.js
function ActualComponent() {
	return /*#__PURE__*/ React.createElement(
		"p",
		null,
		"The value between the tags"
	);
}

// Here's the JSX version for the below Javascript version:
// ```
// 		return (
// 			<p>
// 				<ActualComponent />
// 			</p>
// 		);
// ```
function BehindTheScenes () {
	return /*#__PURE__*/ React.createElement("p", null, ActualComponent());
}

// Since we are write the component in pure javascript, we can no longer
// export `BehindTheScenes` component even though it has the same name as file.
export {BehindTheScenes};