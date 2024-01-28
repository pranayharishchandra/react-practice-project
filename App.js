import React from "react";
import ReactDOM from "react-dom/client"


 // const heading = React.createElement()

 const heading = () => (
  <h1 id='title' key='h2'>
    Hello React
  </h1>
 )

 const HeaderComponent = () => {
  return (
    <div>
      {heading()}
      <h1>
        Hello World HeaderComponent
      </h1>
    </div>
  )
 }


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent/>)

