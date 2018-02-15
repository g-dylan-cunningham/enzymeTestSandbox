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
    };


    testHandleChange(e) {
        this.setState({testForm: e.target.value});
    }

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
        console.log(this.state)
    };


    render () {
        const { buttonEnabled } = this.state;

        return (
            <div className='inputValidComp'>
                <ValidatedInput
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
                    className="validatedPWClass"
                    label="Password"
                    adornment=""
                    adornmentPosition="end"
                    validator={isPassword}
                    invalidMessage="enter a valid password"
                    onValidate={this.onValidatedField}
                    name="password"
                />

                <Button
                    className="button"
                    raised color="primary"
                    icon=""
                    disabled={!buttonEnabled}
                    type='submit'
                >
                    submit
                </Button>

                <h1 className='testClass' >hello</h1>

                <form>
                    <label>
                        Name:
                        <input className='input' value={this.state.testForm} onChange={this.testHandleChange} type="text" name="testForm" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    };
};

export default InputValidation;
