/** JAVASCRIPT */      
      // const heading = document.createElement("h2");
      // heading.textContent="Hello words data";
      // heading.className = "heading";
      // document.getElementById("root").append(heading);

      // console.log("JavaScript element: ", heading);


      /**REACT */

// const reactHeading =  React.createElement("h1", {className : "head", id:"reactHead", children:"Hello React!!"},"Hello React!")
// function App(){
// const imageUrl = "https://files.codingninjas.in/coding-ninjas-24647.png";

const jsxHeading  = <>
<h1 className= "head">Hello JSX</h1>
<p>This is created using reactjs and JSX</p>
</>
ReactDOM.render(React.createElement(App), document.getElementById('root')).render(jsxHeading);
// return React.createElement(
// 'div',
// null,
// React.createElement('h1', null, 'Image Rendering Example'),
// React.createElement('img', { src: imageUrl, alt: 'Coding Ninjas Logo'})
// );
// }



// ReactDOM.createRoot(
// document.getElementById("root")
// ).render(reactHeading);

// console.log("React element: ", reactHeading);




