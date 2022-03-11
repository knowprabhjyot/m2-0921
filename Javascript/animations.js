// HTML Animations
Animations are a way through which a component/element can change 
its state in flowless manner.
Animations add additional touchup to the UI and improves user experience

// CSS Transforms
- Through css transforms you can manipulate the position, scalability and rotation via css
	
// 2D transformation
 - translate
   - Translate allows you to change position of the element into x and y axis.
   
 - rotate
   - Rotate allows you to rotate the element in a clockwise direction using degrees
 - scale
 		- Scaling is used to increase the width and height of the element based on the given ratio
   - scaleX
   		- This increases the scalability in X direction
   - scaleY
      - This increases the scalability in Y direction
 - skew
 	 - skewX
   - skewY
 - Matrix
 matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())



// 3D transformation
- RotateX
- RotateY
- RotateZ

NOTE: THere are other properties as well.



// CSS Transitions
- Transition is similar to animations when you change the state, we want to it to be very smooth


 - Transition-delay
  - It is the wait period after which your transition starts
 - transition-duration
  - For how long you want the transition to happen
 - transition-property
 	 - To which property of element you want to apply transition to
 - transition-timing-function
 - transition
 transition: property duration timing-function delay|initial|inherit;
 
 
 
// CSS Animations
- Css animations are used in complex situations


- @keyframes
 - It defines the stages where the animation should change accordingly
 - from(0%) , to(100%)
 - 0%, 25% , 50% , 100%

- animation-name
	- This is the name of the animation that you have to defined
- animation-duration
	- This is the duration of how long the animation should go
- animation-delay
	- This is the delay after which the animation should start
- animation-iteration-count
	- In how many iterations you want to repeat the animation, example: infinite
- animation-direction
 - In which direction you want to run the animation
- animation-timing-function
  - It is the type of animation like ease, linear






  // ******* HTML CODE FOR BOUNCING BALL ******** //
  <div class="main">
    <div class="ball">
    </div>
  </div>
 

 // ****** CSS CODE FOR BOUNCING BALL ******** //
 /* 

.main {
    width: 400px;
    height: 400px;
    background: red;
    display: flex;
    justify-content: center;
    }
     .ball {
    width: 50px;
    height: 50px;
    background: orange;
    border-radius: 50%;
    animation-name: bounce;
    animation-iteration-count: infinite;
    animation-duration: 2s;
    }
    
    
    
    @keyframes bounce {
    0% {
    width: 50px;
    height: 40px;
    }
    
    
    50% {
    transform: translateY(360px);
    width: 50px;
    height: 35px;
    }
    }
    





    // EXAMPLE OF HOW TO USE TRANSITIONS
.parent {
  width: 200px;
  height: 200px;
  background: red;
  transform: translate(40px, 40px);
  transform: rotate(175deg);
  transform : scaleY(4);
  transform: skew(50deg);
transform: matrix(1, -0.3, 0, 1, 0, 0);
transform: rotateZ(20deg);
transition-delay: 2s;
transition-duration: 2s;
transition-property: width;
transition-timing-function: cubic-bezier(0.89, -0.01, 0.58, 1);
transition: width 2s;
}

.parent:hover {
  transform: rotate(30deg);
  width: 400px;
}
 */