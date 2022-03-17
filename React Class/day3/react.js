// Life Cycle hooks 
 
    // Mounting Phase

    constructor()
    getDerivedStateFromProps()
    this method is called before the component is mounted to the DOM.
     By returning an object, we update the state of the component before it is even rendered.
    render()
    componentDidMount()


    // Updating Phase
    // Same as before, but its the first method called in updating phase
    getDerivedStateFromProps()
    // shouldComponentUpdate()
    render()
    componentDidUpdate()



    // Unmounting Phase
        - componentWillUnmount()

    

// VIRTUAL DOM IN REACT
// Virtual Dom is like a clone object of the DOM (Document Object Model), 
// So if anything in the code is changed, the virtual dom gets to know, and it updates only that value
// inside the real DOM

// Call apply bind

// Call method is used over a function to borrow it for other objects

let object = {
    name : "Prabh"
}

function printName(age, college) {
    console.log(`${this.name} age is ${age} and teaches at ${college}`);
}

printName.call(object, 27, "cornerstone");


// Apply Method
// Apply method is similar to the call function, its just it takes the other parameter as an array
printName.apply(object,[ 27, "cornerstone" ]);


// Bind
// Bind works similar to the call function, it just returns a function instead of invoking the function

let bindFunc = printName.bind(student, 27, "cornerstone")
bindFunc();

// Immutability in states
// Don not update the state given like this - 
// this.state.name = "prabh";// This is a wrong practice
// Instead update state using set state, to avoid disruptions in your UI
this.setState({
    name: typedValue
    }) // This is the right practice



// export default meaning
// Export default means when you are trying export a file by default
import App from './App';

// If you use export newApp class extends Component {}

import { newApp } from './App';

// props.children

// Props.children is passed to the component like this
<Child> 
{/* // children */}
  <h1>Hello</h1> 
</Child>


// Inside Child component

render() {
    return (
        <h1>{this.props.children}</h1>
    )
}

// Fragments
// Fragments are used to make sure the content is directly coming under their parent component
// There are two ways to write fragments
// FIRST
{/* < >
</>

// SECOND
<Fragment>

</Fragment>


// THIRD
<React.Fragment>

</React.Fragment> */}


TOMORROW - // styles

 - styles
 - classNames

