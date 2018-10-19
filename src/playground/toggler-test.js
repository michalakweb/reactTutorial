class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.btnToggler = this.btnToggler.bind(this);
        
        this.state = {
            visible: true
        }
    }

    btnToggler() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Toggler</h1>
                <button onClick={this.btnToggler}>{this.state.visible ? "Hide" : "Show"}</button>
                {this.state.visible && (<p>Some example text</p>)}
            </div>
        )
    }
}

ReactDOM.render(<Toggler />, document.getElementById('app'));