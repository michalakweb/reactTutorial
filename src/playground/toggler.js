
class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.changeVisible = this.changeVisible.bind(this);
        this.state = {
            visible: false,
        };
    }

    changeVisible() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Toggler</h1>
                <button onClick={this.changeVisible}>{this.state.visible ? "Hide" : "Show"}</button>
                {this.state.visible && (
                    <div>
                        <p>Some text</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Toggler />, document.getElementById('app'));