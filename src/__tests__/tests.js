import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import InputValidation from '../components/InputValidation';
import { shallow } from 'enzyme';


describe('InputValidation', () => {

    it('smokescreen test for shallow render of App', () => {
        shallow(<App />);
    });

    it('smokescreen test for deep render of App', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });



});


// ReactDom.render(<InputValidation />, div)