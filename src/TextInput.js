import React from 'react';
import testSubject from './testSubject';

const TextInput = () => {
    
    return (
        <div>
            <input type="text"  onChange={(evt) => testSubject.next(evt.target.value) }></input>
        </div>
    );        
};

export default TextInput;