# React Architecture

The real reason why React is popular: React currently has the most efficient state management system

1. React is currently the leader in terms of keeping the state up to date with user events and changes in data
2. A vanilla JavaScript version of a React app would be cumbersome, slow and almost four times the size

## Efficient component hierarchies

This app examines various component tree hierarchies.

![screenshot](https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/ReactArchitectureB.jpg)

### Method 1

function component &#8594; class component &#8594; container class component

Function components should be authored and modified more frequently than class components and container class components.

| f (c) 	| class (c) | container class (c)	|
|--------------------	|-----------------	|---------------------------	|
| High               	| Medium          	| Low                       	|


Register with `guardianapis.com` for a free API key and add it to `config.js`

```javascript
export const API_KEY = "your-api-key"
```

![screenshot2](https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/screenshot.png)

### Packages

  - prop-types
  - axios
  
  
### Method 2

class component &#8594; container class component

Function components should be authored and modified more frequently than class components and container class components.

| class (c) | container class (c)	|
|--------------------	|-----------------	|
| this.props              	| data set          	|


### WIP
