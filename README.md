# Welcome to Learning-React Repo

This is the repo that will act as a sandbox environment for me to get some hands-on learning for React Framework. Feel free to check my progress and suggest me through [GitHub Issues](../../issues). Please note that this repo is solely for **my** learning and no external contribution will be merged into this repo. I would really appreciate your work but I will not be merging any of your pull requests into this repo.

## Props and PropTypes

In the topic of Props and PropTypes, I had some good hands-on experience on the following topics:

- [x] What are Props?
- [x] Accessing props
  - Access props as an object.
  - Destructuring the props.
- [x] Additional Topic about props.
  - Default Values props.
  - Shorthand for Boolean props.
  - Using Spread operator.
    - while passing props to the component.
    - while accessing undefined props.
  - Accessing nested components _(AKA children)_ through props.
- [x] What are PropTypes?
- [x] PropType Implementation.
- [x] Explored various PropTypes

## Refactoring Notes

- Organized file structure: [451f869](../commit/451f869)

  > Moved all the props files into the `prop-components` directory

- Reorganized the file structure: [07e0ea4](../commit/07e0ea4)

  > Separated all the sub-topics of props into `introduction` and `additional-topics` sub-directories

- Refactored the project: [ff40dc0](../commit/ff40dc0)

  > Refractored the whole code to work with the above changes

- Fixed a minor semantic error: [16d94e1](../commit/16d94e1)

  > Fixed the HTML semantic error i.e., not wrapping `<pre>` tags within `<p>` tags

- Refactoring Props sections: [983024e](../commit/983024e)

  > Major Refactoring of prop section by decomposing huge components into multiple smaller manageable components

- fixed small semantic of the page: [cb5ee36](../commit/cb5ee36)

  > Minor fix for misplaced `PropTypes` component.

- Refactored the examples: [72de075](../commit/72de075)

  > Major Refactoring of the example `UserDisplayCard` component by wrapping up all the components into a single file with multiple exports, also updated the import statements.

- Overall Refactoring: [5546331](../commit/5546331)

  > Major refactoring of overall application and decomposing huge less readable components into smaller or separated files, and also encapsulating some smaller components into a single component.

## Updates In the React application

- Updated Eslint config _(to ignore prop types)_: [a986e80](../commit/a986e80)
- Executed `npm fix audit`: [379dee0](../commit/379dee0)
- Fixed the hrm _(hot replacement module)_ issue: [417caee](../commit/417caee)