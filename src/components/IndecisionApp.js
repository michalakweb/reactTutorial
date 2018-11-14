import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    clearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        })
    }

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick = () => {
        const option = this.state.options[Math.floor(Math.random() * (this.state.options.length))]
        this.setState(() => ({
            selectedOption: option
        }))   
    }


    handleAddOption = (option) => {
        if(!option) {
            return "Enter something";
        }

        else if (this.state.options.indexOf(option) > -1) {
            return "Already exists";
        }
        
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
             const options = JSON.parse(json);

            if(options) {
             this.setState(() => ({ options }));
            }
        }

        catch (e) {
            //Do nothing
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }

    componentWillUnmount() {
        console.log("disappear");
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick}
                />
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
                <OptionModal
                selectedOption={this.state.selectedOption}
                clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;