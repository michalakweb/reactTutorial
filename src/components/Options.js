import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className='widget-header'>
                <h3 className='widget-header__h3'>Your options</h3>
                <button 
                className='button button--link'
                onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && (<p className='widget__text'>No data yet.</p>)}
            {
                props.options.map((option, index) =>
                <Option 
                    key={option} optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
                )
            }
        </div>
    );
};

export default Options;