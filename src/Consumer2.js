import React from 'react';
import testSubject from './testSubject';
import useRxJsObservable from './useRxJsObservable';
import { map } from 'rxjs/operators';

const Consumer2 = () => {

    const subjectData = useRxJsObservable(testSubject.pipe(map(val => val*2)))
    return (
        <div>
            {subjectData}
        </div>
    );
};

export default Consumer2;
