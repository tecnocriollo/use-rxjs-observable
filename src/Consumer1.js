import React from 'react';
import testSubject from './testSubject';
import useRxJsObservable from './useRxJsObservable';

const Consumer1 = () => {
    const subjectData = useRxJsObservable(testSubject)
    return (
        <div>
            { subjectData }
        </div>
    );
};

export default Consumer1;