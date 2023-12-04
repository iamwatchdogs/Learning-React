function LoremPara1 () {
	return (
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
	);
}

function LoremPara2 () {
	return (
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae velit consectetur aliquid omnis?</p>
	);
}

function AnotherApp () {
	return (
		<p>
		"LoremPara1" & "LoremPara2" are two components from AnotherApp.js file yet can
		be directly used by other components, as we have exported it individually.
		</p>
	);
}

// Here we are exporting each component individually.
// Thus all the mentioned components can be accessed from the current file.
// We can use `default` keyword here too, but in that case we can not export other components.
// Also note that when we use `default`, we can export only a single component the one which has the same name as the file
export {LoremPara1, LoremPara2, AnotherApp};