# React Architecture I

<img src="https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/screenshotC.png">

## Contents:

 - React vs JavaScript
 - trends
 - `.jsx`
 - popular component types
 - efficient practises
 - component tree hierarchies

## Packages

 - [axios](https://github.com/axios/axios)
 - [bit](https://docs.bit.dev/docs/quick-start)
 - [prop-types](https://www.npmjs.com/package/prop-types)

## JavaScript Frameworks

JavaScript frameworks keep the UI in sync with the state.

## Trends

### 2018 - 2020

Classes should achieve polymorphic behavior and code reuse by containing instances of other classes 
that implement the desired functionality, rather than inheritance from a base or parent class.

Remove all use of constructors and super() - use class properties instead

Move promise based code to async/await

Keep components small and function-specific

Reusability is important, so keep creation of new components to the minimum required

#  JSX

```javascript
// as an expression, JSX can be assigned to variables...
const greeting = <div>Hello React</div>;

const isNewToReact = true;

// ... or can be displayed conditionally
function sayGreeting() {
  if (isNewToReact) {
    // ... or returned from functions, etc.
    return greeting; // displays: Hello React
  } else {
    return <div>Hi again, React</div>;
  }
}
```

```javascript
const year = 2020;
// we can insert primitive JS values in curly braces: {}
const greeting = <div>Hello React in {year}</div>;
// trying to insert objects will result in an error
```

```javascript
// to write JSX on multiple lines, wrap in parentheses: ()
const greeting = (
  // div is the parent element
  <div>
    {/* h1 and p are child elements */}
    <h1>Hello!</h1>
    <p>Welcome to React</p>
  </div>
);
// 'parents' and 'children' are how we describe JSX elements in relation
// to one another, like we would talk about HTML elements
```

#  Popular component types

## Class Component
```javascript
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div> 💥 </div>
  }
}
```

## Class Component With Prop Types
```javascript
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;
```

## Functional Component
```javascript
import React from "react";

const Person = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);

export default Person;
```


# Efficient practises

Import a default export
```javascript
import moduleName from 'module'
```

Import a named export.
```javascript
import { destructuredModule } from 'module'
```

Import React
```javascript
import React from 'react'
```

Import React and Component.
```javascript
import React, { Component } from 'react'
```

For each iteration
```javascript
arrayName.forEach(element => { }
```

For of iteration
```javascript
for(let itemName of objectName { }
```

For in Iteration
```javascript
for(let itemName in objectName { }
```

Anonymous Function
```javascript
(params) => { }
```

Named Function
```javascript
const functionName = (params) => { }
```

ComponentDidMount
```javascript
componentDidMount = () => { }
```

ComponentDidUpdate
```javascript
componentDidUpdate = (prevProps, prevState) => { }
```

ComponentWillUnmount
```javascript
componentWillUnmount = () => { }
```



# Component hierarchies

&nbsp;

<p align="center">
  <img src="https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/screenshotB.png">
</p>

![screenshot](https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/ReactArchitectureB.jpg)

&nbsp;
### Set A

```
container + class + function → function
```

&nbsp;
### Set B

```
container → class → function
```

Function components should be authored and modified more frequently than class components and container class components.

| f (c) 	| class (c) | container class (c)	|
|--------------------	|-----------------	|---------------------------	|
| High               	| Medium          	| Low                       	|

&nbsp;
### Set C

```
container → class → function
```

Register with `guardianapis.com` for a free API key and add it to `config.js`

```javascript
export const API_KEY = "your-api-key"
```

&nbsp;
### Set D

```
container ┳━ class
          ┗━ function
```

&nbsp;
### Set E

```
function ┳━ class
         ┗━ function
```

&nbsp;
### Set F

```
container ┳━ function
          ┠━ function
          ┗━ class ━ function
```
