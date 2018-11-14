import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose = {props.clearSelectedOption}
            contentLabel='selected option'
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearSelectedOption}>Ok</button>
        </Modal>
    )
};

export default OptionModal;