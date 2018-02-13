import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import InputValidation from '../components/InputValidation';
import { ValidatedInput, ValidatedPassword, Button } from '@chassi-dev/chassi-react-mui-components';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

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

    it('should find a ValidatedInput component', () => {
        const wrapper = shallow(<InputValidation />)
        const vi = <ValidatedInput label="email"/>;

        expect(!!wrapper.find(vi)).toBe(true)
    });

    it('should find Button component', () => {
        const wrapper = shallow(<InputValidation />);
        const button = <Button />;

        expect(!!wrapper.find(button)).toBe(true);
    });

    it('should find Button component by class', () => {
        const wrapper = shallow(<InputValidation />);

        expect(!!wrapper.find('.testClass')).toBe(true);
    });

    it('should find ValidatedInput component by name', () => {
        const wrapper = shallow(<InputValidation />);

        expect(!!wrapper.find('email')).toBe(true);
    });


    it('should create a snapshot', () => {
        const output = shallow(
            <h1>hello</h1>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });


    it('should find element type of .testClass', () => {
        const wrapper = shallow(<InputValidation/>);
        const result = wrapper.find('.testClass').type();
        expect(result).toBe('h1')
    })

    it('should find type of validatedPassword component', () => {
        const wrapper = shallow(<InputValidation/>);
        const component = wrapper.find('.validatedPWClass').type();
        expect(component).toBe(ValidatedPassword);
    });

    it('should set state on testForm with change event', () =>{
        const wrapper = shallow(<InputValidation/>);
        const input = wrapper.find('.input');
        input.simulate('change', {target: { value : 'testValue'}})
        console.log('2nd', input, wrapper.state())
    })

});
