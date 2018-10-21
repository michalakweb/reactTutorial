class App extends React.Component {
    constructor(props) {
        super(props);
        this.showRandom = this.showRandom.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.formHandler = this.formHandler.bind(this);

        this.state = {
            options: ["jeden", "dwa", "trzy"]
        }
    }

    showRandom() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[rand]);
    }

    deleteAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    formHandler(option) {
        if(this.state.options.indexOf(option) > -1) {
           return alert("kupa");
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render() {
        const title = "Indecision App";
        const subtitle = "Your personal decision-making helper";

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    showRandom={this.showRandom}
                    deleteAll={this.deleteAll}
                    options={this.state.options}
                />
                <Options options={this.state.options}/>
                <AddOption formHandler={this.formHandler}/>
            </div>
        );
    };
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        );
    };
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.showRandom}
                        disabled={this.props.options.length > 0 ? false : true}>
                        What to do?
                </button>
                <button onClick={this.props.deleteAll}>Delete All</button>
            </div>
        );
    };
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Your possibilities:</h3>
                <ul>
                    {
                        this.props.options.map((option) => {
                            return <Option key={option} option={option}/>;
                        })
                    }
                </ul>
            </div>
        );
    };
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.formHandler = this.formHandler.bind(this);
    }

    formHandler(e) {
        e.preventDefault();
        const option = e.target.elements.option.value;
        this.props.formHandler(option);
    }

    render() {
        return (
            <form onSubmit={this.formHandler}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('app'));