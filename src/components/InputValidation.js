import React from 'react';
import { ValidatedInput, ValidatedPassword, Button } from '@chassi-dev/chassi-react-mui-components';
import { isPhone, isPassword, isEmail } from "@chassi-dev/chassi-javascript-validators";


class InputValidation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            phone: false,
            email: false,
            password: false,
            buttonEnabled: false,
            testForm: 'default'
        };

        this.testHandleChange = this.testHandleChange.bind(this);
        this.onValidatedField = this.onValidatedField.bind(this);
    };


    testHandleChange(e) {
        this.setState({testForm: e.target.value});
    }

    onValidatedField (output) {

        const stateObject = {
            ...this.state,
        };
        stateObject[output.name] = output.isValid;
        let { phone, email, password } = stateObject;
        stateObject.buttonEnabled = phone && email && password;

        this.setState({
            ...stateObject
        });
    };


    render () {
        const { buttonEnabled } = this.state;

        const button = buttonEnabled ?
            <Button type="submit" color="primary" raised>Button</Button> :
            <Button type="submit" color="primary" raised disabled>Button</Button>

        return (
            <form className='inputValidComp'>
                <ValidatedInput
                    id="phone"
                    className="validatedPhoneClass"
                    label="Phone"
                    adornment=""
                    adornmentPosition="end"
                    validator={isPhone}
                    invalidMessage="enter a valid phone number"
                    onValidate={this.onValidatedField}
                    name="phone"
                />

                <ValidatedInput
                    id="email"
                    className="validatedEmailClass"
                    label="Email"
                    adornment=""
                    adornmentPosition="end"
                    validator={isEmail}
                    invalidMessage="enter a valid email"
                    onValidate={this.onValidatedField}
                    name="email"
                />

                <ValidatedPassword
                    id="password"
                    className="validatedPWClass"
                    label="Password"
                    adornment=""
                    adornmentPosition="end"
                    validator={isPassword}
                    invalidMessage="enter a valid password"
                    onValidate={this.onValidatedField}
                    name="password"
                />


            {button}


            </form>
        )
    };
};

export default InputValidation;
