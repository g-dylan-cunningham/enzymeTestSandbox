'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _InputValidation = require('../components/InputValidation');

var _InputValidation2 = _interopRequireDefault(_InputValidation);

var _chassiReactMuiComponents = require('@chassi-dev/chassi-react-mui-components');

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('material-ui/Form');

var _chassiJavascriptValidators = require('@chassi-dev/chassi-javascript-validators');

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ValidatedInput from '../components/synapse/validated-input'

describe('InputValidation', function () {

    // it('should shallow render App', () => {
    //     shallow(<App />);
    // });


    // it('should deep render App', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<App />, div);
    // });


    // it('should find InputValidation component in shallow render of App', () => {
    //     const wrapper = shallow(<App />);
    //     const inputValidation = <InputValidation />;
    //     expect(wrapper.contains(inputValidation)).toBe(true);
    // });


    // it('should shallow render InputValidation component', () => {
    //     shallow(<InputValidation/>)
    // });


    // it('should find ValidatedPassword component to be correct component type', () => {
    //     const wrapper = shallow(<InputValidation/>);
    //     const component = wrapper.find('.validatedPWClass').type();
    //     expect(component).toBe(ValidatedPassword);
    // });


    // it('should find Button component in InputValidation', () => {
    //     const wrapper = shallow(<InputValidation />);
    //     const button = <Button
    //                         className="button"
    //                         raised color="primary"
    //                         icon=""
    //                         disabled={true}
    //                         type='submit'
    //                     >
    //                         submit
    //                     </Button>;
    //
    //     expect(wrapper.contains(button)).toBe(true);
    // });


    // it('should find correct text in h1 component', () => {
    //     const wrapper = shallow(<InputValidation />);
    //     expect(wrapper.find('.testClass').props().children).toBe('hello');
    // });


    // it('should find ValidatedInput Email component has a defined validator method', () => {
    //     const wrapper = shallow(<InputValidation />);
    //     const elem = wrapper.find(".validatedEmailClass");
    //     expect(elem.props().validator).toBeDefined();
    // });


    it('should create a snapshot of demo text', function () {
        var output = (0, _enzyme.shallow)(_react2.default.createElement(
            'h1',
            { className: 'testClass' },
            'hello'
        ));
        expect((0, _enzymeToJson.shallowToJson)(output)).toMatchSnapshot();
    });

    // it('should find element .testClass to be type h1', () => {
    //     const wrapper = shallow(<InputValidation/>);
    //     const result = wrapper.find('.testClass').type();
    //     expect(result).toBe('h1')
    // });


    // it('should set state on testForm with change event', () =>{
    //     const wrapper = shallow(<InputValidation/>);
    //     const input = wrapper.find('.input');
    //
    //     // console.log('state1', wrapper.state())  //...testFrom: 'default'
    //     // console.log('testForm value1', input.props().value) //'default'
    //     input.simulate('change', {target: { value : 'testValue'}});
    //
    //     // console.log('testForm value2', input.props().value)  //'default' - why no change?
    //     // console.log('state2', wrapper.state())  // 'testValue' - state DOES update via handler
    //     expect(wrapper.state('testForm')).toEqual('testValue');
    // });


    // it('should set buttonEnabled state to true when phone, email, password are all true', () => {
    //     const wrapper = shallow(<InputValidation/>);
    //     const component = wrapper.find('.validatedPWClass');
    //     wrapper.setState({password: true, phone: true, email: true})
    //     // console.log(wrapper.state());
    //     // // this is false because we need to use the onValidateField function
    //     // // to change phone, email & password. setState() bypasses this logic
    //     // expect(wrapper.state('buttonEnabled')).toBe(true);
    // });


    // it('should set "<Button>" props "disabled" to false if state.buttonEnabled is true', () => {
    //     const wrapper = shallow(<InputValidation />);
    //     // wrapper.setState({buttonEnabled: true});
    //     const component = wrapper.find('.button');
    //     // working test
    //     // expect(component.props().disabled).toBe(false);
    // });


    // it('should set state during onChange events when we deep render the InputValidation component', () => {
    //     const wrapper = mount(<InputValidation/>);
    //     const phoneComp = (wrapper.find('ValidatedInput.validatedPhoneClass'));
    //     const InputComp = phoneComp.find('Input');
    //     // console.log(InputComp.props().value)
    //     InputComp.props().value = '5555555555'
    //     InputComp.simulate('change', {target: { value: '5555556655'}});
    //     // console.log(InputComp.props().value)
    //     // InputComp.simulate('keyDown', { key: 'Tab', keyCode: 9, which: 9 })
    //     // console.log(wrapper.state())
    //
    //     // dont know why the simulate method wont change value of value
    //     // expect(InputComp.props().value).toBe('5555556655')
    //
    // });


    // it('should set state in InputValidation component on change event', () => {
    //
    //     const wrapper = mount(<InputValidation/>);
    //     // console.log('wrapper', wrapper.state());
    //     let EmailComp = wrapper.find('ValidatedInput.validatedEmailClass');
    //     // console.log('emailComp', EmailComp.props());
    //     let InputComp = EmailComp.find('Input');
    //     // console.log('inputcomp;,', InputComp.props());
    //
    //     InputComp.simulate('change', {target: { value: '5555556666'}})
    //     InputComp.simulate('keyUp', { key: 'Enter', keyCode: 13, which: 13 })
    //     // console.log(InputComp.props().value);
    //     console.log(wrapper.state())
    //     // expect(wrapper.state().phone).toBe(true);
    // });


    // it('should pass a selected value to onChange handler function using jest.fn()', () => {
    //     const value = 'testEmail@asdf.com';
    //     const onChange = jest.fn();
    //     const wrapper = mount(
    //         <ValidatedInput
    //             className="validatedEmailClass"
    //             label="Email"
    //             adornment=""
    //             adornmentPosition="end"
    //             validator={onChange}
    //             invalidMessage="enter a valid email"
    //             onValidate={onChange}
    //             name="email"
    //         />
    //     );
    //     // console.log('wrapper', wrapper.state())
    //     wrapper.find('Input').simulate('change', {target: {value}});
    //     // wrapper.find('Input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 })
    //     // console.log('input', wrapper.find('Input').props());
    //     // console.log(wrapper.find('Input').props().value)
    //     // console.log(wrapper.state())
    //     expect(onChange).toBeCalledWith(value)
    //
    // })


    // it('should call handler function', () => {
    //     // const value = 'testEmail@asdf.com';
    //     // const onChange = jest.fn();
    //     let counter = 0;
    //     const countAug = () => {
    //         counter++;
    //         return counter;
    //     };
    //
    //     const wrapper = mount(
    //         <ValidatedInput
    //             className="validatedEmailClass"
    //             label="Email"
    //             adornment=""
    //             adornmentPosition="end"
    //             validator={() => true}
    //             invalidMessage="enter a valid email"
    //             onValidate={countAug}
    //             name="email"
    //         />
    //     );
    //     wrapper.find('Input').props().value = 'test@test.com';
    //     console.log(wrapper.find('Input').props().value);
    //     // onChange();
    //     // wrapper.find('Input').simulate('keyUp', { key: 'Enter', keyCode: 13, which: 13 })
    //     expect(counter).toBe(1)
    // })


    // it('should find state in ValidatedInput component', () => {
    //     const wrapper = mount(<ValidatedInput
    //             className="validatedEmailClass"
    //             label="Email"
    //             adornment=""
    //             adornmentPosition="end"
    //             validator={isEmail}
    //             invalidMessage="enter a valid email"
    //             onValidate={()=> true}
    //             name="email"
    //         />
    //     );
    //     const theWrapper = wrapper
    //     console.log(theWrapper.state())
    // });

});