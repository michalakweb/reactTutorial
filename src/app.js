console.log("It's running.");

//Application object

const appInfo = {
    name: "Indecision App",
    sub: "Useful for making decisions",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    
    if(option) {
        appInfo.options.push(option);
        e.target.elements.option.value = "";
    }
    appRender();
}

const formRemove = (e) => {
    e.preventDefault();
    appInfo.options = [];
    appRender();
}

const appRoot = document.getElementById('app');

const appRender = () => {
    const template = (
        <div>
            <h1>{appInfo.name}</h1>
            {appInfo.sub && <p>{appInfo.sub}</p>}
            <p>{appInfo.options.length > 0 ? 'Your options:' : 
            "No options"}</p>
    
            <p>{appInfo.options.length}</p>
            <form onSubmit={formRemove}>
                <button>Remove all</button>
            </form>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

appRender();


