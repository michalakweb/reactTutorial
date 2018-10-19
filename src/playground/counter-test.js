class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);

        this.state = {
            count: 0
        }
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }


    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.addOne}>+</button>
                <button onClick={this.minusOne}>-</button>
            </div>
        )
    };
}

ReactDOM.render(<Counter />, document.getElementById('app'));