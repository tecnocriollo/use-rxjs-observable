import React, {useState, useEffect} from 'react';

const useRxJsObservable = (rxObservable) => {    
    const [observableValue, setObservableValue] = useState(undefined)
    useEffect(() => {
        const subscription = rxObservable.subscribe( (value) => setObservableValue(value));
        return () => {
            subscription.unsubscribe();
        }
    }, [rxObservable])
    return observableValue;
};

export default useRxJsObservable;
