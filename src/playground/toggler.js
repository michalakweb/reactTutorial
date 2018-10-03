const appRoot = document.getElementById('app');

let textP = "";

const changeVisible = (e) => {
    if(e.target.innerText != "Hide") {
        e.target.innerText = "Hide";
        textP = "Hi there";
    }

    else {
        e.target.innerText = "Show content";
        textP = "";
    }

    appRender();
};

const appRender = () => {
    const template = (
        <div>
            <h1>Apka</h1>
            <button onClick={changeVisible}>Show content</button>
            <p>{textP}</p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

appRender();
