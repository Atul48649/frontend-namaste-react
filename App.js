import React from "react";
import ReactDOM from "react-dom/client";

// const heading = (React.createElement('h1', { id: 'heading' }, "Namaste React!"));

// const heading = (<h1 className="heading">Namaste React from JSX!</h1>);

const Title = ()=>(
    <h1 className="head">Namaste React </h1>
)

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const rooot = ReactDOM.createRoot(document.getElementById('root'));

rooot.render(<HeadingComponent/>);