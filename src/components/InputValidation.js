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
            buttonEnabled: false
        };
    };

    onValidatedField = (output) => {

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

        return (
            <div>
                <ValidatedInput
                    label="Phone"
                    adornment=""
                    adornmentPosition="end"
                    validator={value => !!isPhone(value)}
                    invalidMessage="enter a valid phone number"
                    onValidate={output => this.onValidatedField(output)}
                    name="phone"
                />

                <ValidatedInput
                    label="Email"
                    adornment=""
                    adornmentPosition="end"
                    validator={value => !!isEmail(value)}
                    invalidMessage="enter a valid email"
                    onValidate={output => this.onValidatedField(output)}
                    name="email"
                />

                <ValidatedPassword
                    label="Password"
                    adornment=""
                    adornmentPosition="end"
                    validator={value => !!isPassword(value)}
                    invalidMessage="enter a valid password"
                    onValidate={output => this.onValidatedField(output)}
                    name="password"
                />

                <Button
                    raised color="primary"
                    icon=""
                    disabled={!buttonEnabled}
                    type='submit'
                >
                    submit
                </Button>
            </div>
        )
    };
};

export default InputValidation;
