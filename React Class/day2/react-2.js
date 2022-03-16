// Class based components vs Functional Based components

// Class based components have their own state
// Functional based component, they don't have their own state (16)
// Different module inside react library that would allow the functional component
// to have a state and they were known as HOOKS

// Functional based components have less code bas as compared to class based components

// Lifecycle hooks in react *******************
// They are basically the phases of the application

    // Mounting Phas
      - constructor()
      // getDerivedStateFromProps()
      -  render()
      - componentDidMount() // Genrally we call api insider here

    // Updating Phase
    // getDerivedStateFromProps()
    // shouldComponentUpdate() // This allows you to weather render your UI again or not if any data is updated
    render() // ts mainly responsible for showing the template
    // getSnapshotBeforeUpdate()
    componentDidUpdate()

    // Unmounting Phase
    - componentWillUnmount() // Its used a lot for avoid memory leaks, and you know deleting the data which
    // is not required anymore  and many more


// React Props

// 1. Class based components (Props)
 - Props are the data that is passed from the parent component to their children component


// 2. Functional based components  (props)


// React state

// React class life cycle hooks

    // Mounting Phase

    constructor()
    // getDerivedStateFromProps()
    render()
    componentDidMount()


    // Updating Phase
    // getDerivedStateFromProps()
    // shouldComponentUpdate()
    render()
    // getSnapshotBeforeUpdate()
    componentDidUpdate()



    // Unmounting Phase
        - componentWillUnmount()

// Counter Application


