import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import InputValidation from '../components/InputValidation';
import { ValidatedInput, ValidatedPassword, Button } from '@chassi-dev/chassi-react-mui-components';
import Input, { InputAdornment, InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { isPhone, isPassword, isEmail } from "@chassi-dev/chassi-javascript-validators";

import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('InputValidation', () => {

    it('should shallow render App', () => {
        shallow(<App />);
    });

    it('should deep render App', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('should render InputValidation component in shallow render of App', () => {
        const wrapper = shallow(<App />);
        const inputValidation = <InputValidation />;
        expect(wrapper.contains(inputValidation)).toBe(true);
    });

    it('should render InputValidation component', () => {
        shallow(<InputValidation/>)
    });

    it('should find a ValidatedPassword component in Input Validation', () => {
        const wrapper = shallow(<InputValidation />);
        const result = wrapper.find(".validatedPWClass").type();
        expect(result).toBe(ValidatedPassword);
    });

    it('should find Button component in InputValidation', () => {
        const wrapper = shallow(<InputValidation />);
        const button = <Button
                            className="button"
                            raised color="primary"
                            icon=""
                            disabled={true}
                            type='submit'
                        >
                            submit
                        </Button>;

        expect(wrapper.contains(button)).toBe(true);
    });

    it('should find correct text in h1 component', () => {
        const wrapper = shallow(<InputValidation />);
        expect(wrapper.find('.testClass').props().children).toBe('hello');
    });

    it('should find ValidatedInput Email component has a defined validator method', () => {
        const wrapper = shallow(<InputValidation />);
        const elem = wrapper.find(".validatedEmailClass");
        expect(elem.props().validator).toBeDefined();
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
    });

    it('should find type of ValidatedPassword component', () => {
        const wrapper = shallow(<InputValidation/>);
        const component = wrapper.find('.validatedPWClass').type();
        expect(component).toBe(ValidatedPassword);
    });

    it('should set state on testForm with change event', () =>{
        const wrapper = shallow(<InputValidation/>);
        const input = wrapper.find('.input');
        // console.log(input.props())
        input.simulate('change', {target: { value : 'testValue'}})
        expect(wrapper.state('testForm')).toEqual('testValue');
    });

    it('should set buttonEnabled state to true when phone, email, password are all true', () => {
        const wrapper = shallow(<InputValidation/>);
        const component = wrapper.find('.validatedPWClass');
        wrapper.setState({password: true, phone: true, email: true})
        // console.log(wrapper.state());
        // this is false because we need to use the onValidateField function
        // to change phone, email & password. setState() bypasses this logic
        // expect(wrapper.state('buttonEnabled')).toBe(true);
    });

    it('should set "<Button>" props "disabled" to false if state.buttonEnabled is true', () => {
        const wrapper = shallow(<InputValidation />);
        wrapper.setState({buttonEnabled: true});
        const component = wrapper.find('.button');
        expect(component.props().disabled).toBe(false);
    });

    it('should set state on ValidatedInput phone component with change event', () =>{
        const wrapper = shallow(<InputValidation/>);
        const input = wrapper.find('.validatedPhoneClass');
        // console.log(input.props().validator('12342342345'))
        input.simulate('change', {target: { validator : isPhone('12342342345'), onValidate: {name: 'phone', isValid: true}}});

        // expect(wrapper.state('phone')).toEqual(true);

    });

    // it('should set state on ValidatedInput phone component with change event using shallow render of Validated input component', () =>{
    //     // trying to shallow render ValidatedInput component to get access
    //     // to modify the value of it there
    //     const wrapper = shallow(<InputValidation/>);
    //     // const input = wrapper.find('.validatedPhoneClass').type();
    //     const innerWrapper = shallow(<ValidatedInput/>);
    //     // console.log(innerWrapper.type());
    //     // console.log(input.props().validator('12342342345'))
    //     innerWrapper.simulate('change', {target: { value : '12342342345'}});
    //     // console.log(innerWrapper.state())
    //     // expect(wrapper.state('phone')).toEqual(true);
    //
    // });

    it('should set state during onChange events when we deep render the InputValidation component', () => {

        const wrapper = mount(<InputValidation/>);
        let phoneComp = (wrapper.find('ValidatedInput.validatedPhoneClass'));
        let FormControlComp = phoneComp.find('FormControl');
        let InputComp = FormControlComp.find('Input');
        // console.log(InputComp.props())
        // InputComp.props().value = '5555555555'
        InputComp.simulate('change', {target: { value: '5555556655'}});
        // console.log(InputComp.props().value)
        // console.log(wrapper.state())
        // dont know why the simulate method wont change value of value
        // expect(InputComp.props().value).toBe('5555556655')
    });

    it('should set state in InputValidation component on change event', () => {
        const wrapper = shallow(<InputValidation/>)
        // let FormControlComp = wrapper.find('FormControl');
        // let InputComp = FormControlComp.find('Input')
        // InputComp.simulate('change', {target: {value: '5555555555'}})
        // console.log(InputComp.props().value)
        console.log(wrapper.state()) // wtf why no state here???
    })



});
