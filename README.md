# React Architecture

JavaScript frameworks keep the UI in sync with the state.

## JavaScript

Vanilla JavaScript becomes cumbersome and bloated.

2 lines update the state

13 lines update the UI

[source](https://codepen.io/gimenete/pen/vRZLrq)

```javascript
class AddressList {

  constructor(root) {

    // state variables
    this.state = []
    
    // UI variables
    this.root = root
    this.form = root.querySelector('form')
    this.input = this.form.querySelector('input')
    this.help = this.form.querySelector('.help')
    this.ul = root.querySelector('ul')
    this.items = {} // id -> li element

    // event handlers
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      const address = this.input.value
      this.input.value = ''
      this.addAddress(address)
    })
    
    this.ul.addEventListener('click', e => {
      const id = e.target.getAttribute('data-delete-id')
      if (!id) return // user clicked in something else      
      this.removeAddress(id)
    })
  }
  
  addAddress(address) {
    // state logic
    const id = String(Date.now())
    this.state = this.state.concat({ address, id })
    
    // UI logic
    this.updateHelp()
    
    const li = document.createElement('li')
    const span = document.createElement('span')
    const del = document.createElement('a')
    span.innerText = address
    del.innerText = 'delete'
    del.setAttribute('data-delete-id', id)
    
    this.ul.appendChild(li)
    li.appendChild(del)
    li.appendChild(span)
    this.items[id] = li
  }
  
  removeAddress(id) {
    // state logic
    this.state = this.state.filter(item => item.id !== id)
    
    // UI logic
    this.updateHelp()
    const li = this.items[id]
    this.ul.removeChild(li)
  }
  
  // utility method
  updateHelp() {
    if (this.state.length > 0) {
      this.help.classList.add('hidden')
    } else {
      this.help.classList.remove('hidden')
    }
  }
}

const root = document.getElementById('addressList')
new AddressList(root)
```

```html
<div id="addressList">
  <form>
    <input>
    <p class="help">Type an email address and hit enter</p>
    <ul> </ul>
  </form>
</div>
```


# Trends

## 2018

### Composite reuse principle

Classes should achieve polymorphic behavior and code reuse by containing instances of other classes 
that implement the desired functionality, rather than inheritance from a base or parent class.

## 2019

Remove all use of constructors and super() - use class properties instead

Move promise based code to async/await

## 2020

Keep components small and function-specific

Reusability is important, so keep creation of new components to the minimum required


# Efficient component hierarchies

This app examines various component tree hierarchies.

&nbsp;

<p align="center">
  <img src="https://raw.githubusercontent.com/Jon-Dickinson/react-architecture/master/src/images/screenshotB.png">
</p>

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

### Method 2

Importing class component &#8594; container

Passing props from container &#8594; class component

| class (c) | container class (c)	|
|--------------------	|-----------------	|
| this.props              	| data set          	|





### ... WIP