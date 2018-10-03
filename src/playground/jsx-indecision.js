console.log("It's running.");

//Application object

const appInfo = {
    name: "Indecision App",
    sub: "Useful for making decisions",
    options: ['Option 1', 'Option 2']
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
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randomNum];
    console.log(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');


const appRender = () => {
    const template = (
        <div>
            <h1>{appInfo.name}</h1>
            {appInfo.sub && <p>{appInfo.sub}</p>}
            <p>{appInfo.options.length > 0 ? 'Your options:' : 
            "No options"}</p>
    
           <button disabled={appInfo.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <form onSubmit={formRemove}>
                <button>Remove all</button>
            </form>
            <ol>
            {
                appInfo.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
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


