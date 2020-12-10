# React hooks + rxjs test

Usage:

1. Clone this repo
2. Install dependencies with npm install or yarn
3. Run the demo app with npm start o yarn start

When the app is running you will see a textfield and two strings below. The first string show the text input and the second string show the text input repeated 2 times.

To understand what this code does you have to look:


* testSubject.js - The file that contains a BehaviorSubject from rxjs with a default value
* TextInput.js - The component that has the textfield, receives the user input and update the subject value
* Consumer1.js - The first consumer that reads the value from the subject without doings transformations
* Consumer2.js - The second consumer that reads the value from the subject with a simple map transform that repeats the string
* useRxJsObservable - The react hook that was used by the react components, the component receives an rxjs observable and stored the changes in a variable.

I hope that the example could help you understand the power of Reactive Programming and React Hooks like I do when I developed that.
