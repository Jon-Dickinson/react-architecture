# React Architecture

## Efficient component hierarchies

This app examines various component tree hierarchies.

### Method 1

function component &#8594; class component &#8594; container class component

Function components should be authored and modified more frequently than class components and container class components.

| f (c) 	| class (c) | container class (c)	|
|--------------------	|-----------------	|---------------------------	|
| High               	| Medium          	| Low                       	|


![screenshot](https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/ReactArchitecture.jpg)

Register with `guardianapis.com` for free API key and add it to `config.js`

```javascript
export const API_KEY = "your-api-key"
```

![screenshot2](https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/screenshot.png)

### Packages

  - prop-types
  - axios
  
### (WIP...)

### Method 2

React have introduced Hooks and Context in order to provide more native functionality to manage state.

| Hooks | Context	|
|--------------------	|-----------------	|
| Various Types             | Nesting          	|

| Redux	|
|--------------------	|
| Actions + Reducers               	|
