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

    it('smokescreen test for render of InputValidation component', () => {
        const wrapper = shallow(<App />);
        const inputValidation = <InputValidation />;
        expect(wrapper.contains(inputValidation)).toBe(true);
    });

    it('should render InputValidation component', () => {
        shallow(<InputValidation/>)
    });

});


// ReactDom.render(<InputValidation />, div)