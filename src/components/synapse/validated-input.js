import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputAdornment, InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import { Icon } from 'material-ui';
import PropTypes from 'prop-types';

const styles = theme => ({
    formControl: {
        width: '100%',
    },
    icon: {
        fontSize: '20px',
        color: '#9B9B9B',
    },
    clickableIcon: {
        cursor: 'pointer',
        fontSize: '20px',
        color: '#9B9B9B',
    },
});

class ValidatedInput extends React.Component {
    constructor(props) {
        super(props);
        const { id } = props;
        this.state = {
            id: id || this.generateRandomID(),
            valid: false,
            validated: false,
        };
        this.validate = this.validate.bind(this);
        this.timeout = null;
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    generateRandomID() {
        return `validated-input-${parseInt(Math.random() * 1000000)}`;
    }

    validate(e, inTimeout = true, value) {
        // if the user cleared the field, reset validation
        const inputValue = !!e ? e.target.value : value;
        if (inputValue === '') {
            clearTimeout(this.timeout);
            this.setState({
                valid: true,
                validated: false,
            });
            return true;
        }

        if (inTimeout) {
            const me = this;
            me.timeout && clearTimeout(me.timeout);
            me.timeout = setTimeout(() => {
                clearTimeout(me.timeout);
                me.timeout = null;
                me.validate(null, false, inputValue);
            }, 750);

            const { valid, validated } = me.state;
            if (!validated) return !validated;
            else return valid;
        }

        const { validator, onValidate, name } = this.props;
        const isValid = validator(inputValue);
        onValidate({ name, isValid });
        this.setState({
            validated: true,
            valid: isValid,
        });
    }

    render() {
        const {
            classes,
            label,
            type,
            adornment,
            adornmentPosition,
            onClickAdornemnt,
            invalidMessage,
            value,
            disabled,
            autoComplete,
        } = this.props;

        const { id, validated, valid } = this.state;
        const invalid = validated && !valid;

        return (
            <FormControl
                error={invalid}
                className={classes.formControl}
                aria-describedby={`error-text-${id}`}
            >
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <Input
                    id={id}
                    value={value}
                    autoComplete={autoComplete}
                    disabled={disabled}
                    endAdornment={
                        !!adornment && (
                            <InputAdornment position={adornmentPosition || 'end'}>
                                <Icon
                                    onClick={onClickAdornemnt}
                                    className={
                                        !!onClickAdornemnt ? classes.clickableIcon : classes.icon
                                    }
                                >
                                    {adornment}
                                </Icon>
                            </InputAdornment>
                        )
                    }
                    onChange={e => this.validate(e)}
                    type={type || 'text'}
                />
                <FormHelperText id={`error-text-${id}`}>
                    {invalid && invalidMessage}
                </FormHelperText>
            </FormControl>
        );
    }
}

ValidatedInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    adornment: PropTypes.string,
    adornmentPosition: PropTypes.string,
    onClickAdornemnt: PropTypes.func,
    validator: PropTypes.func.isRequired,
    invalidMessage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onValidate: PropTypes.func.isRequired,
};

export { ValidatedInput };
export default withStyles(styles)(ValidatedInput);
