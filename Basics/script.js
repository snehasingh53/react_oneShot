/* without react
var heading = document.createElement("h1")

heading.innerHTML="Hello "
console.log("hello")

var root= document.querySelector("#root")
root.appendChild(heading)


*/


// with react 

var h1 = React.createElement("h1",null,"hello from react ")

//console.log(h1)
var parent=document.querySelector("#parent")
var root = ReactDOM.createRoot(parent);

root.render(h1)