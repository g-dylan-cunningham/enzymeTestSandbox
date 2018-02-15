'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chassiReactMuiComponents = require('@chassi-dev/chassi-react-mui-components');

var _chassiJavascriptValidators = require('@chassi-dev/chassi-javascript-validators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputValidation = function (_React$Component) {
    _inherits(InputValidation, _React$Component);

    function InputValidation(props) {
        _classCallCheck(this, InputValidation);

        var _this = _possibleConstructorReturn(this, (InputValidation.__proto__ || Object.getPrototypeOf(InputValidation)).call(this, props));

        _this.state = {
            phone: false,
            email: false,
            password: false,
            buttonEnabled: false,
            testForm: 'default'
        };

        _this.testHandleChange = _this.testHandleChange.bind(_this);
        _this.onValidatedField = _this.onValidatedField.bind(_this);
        return _this;
    }

    _createClass(InputValidation, [{
        key: 'testHandleChange',
        value: function testHandleChange(e) {
            this.setState({ testForm: e.target.value });
        }
    }, {
        key: 'onValidatedField',
        value: function onValidatedField(output) {

            var stateObject = _extends({}, this.state);
            stateObject[output.name] = output.isValid;
            var phone = stateObject.phone,
                email = stateObject.email,
                password = stateObject.password;

            stateObject.buttonEnabled = phone && email && password;

            this.setState(_extends({}, stateObject));
        }
    }, {
        key: 'render',
        value: function render() {
            var buttonEnabled = this.state.buttonEnabled;


            var button = buttonEnabled ? _react2.default.createElement(
                _chassiReactMuiComponents.Button,
                { type: 'submit', color: 'primary', raised: true },
                'Button'
            ) : _react2.default.createElement(
                _chassiReactMuiComponents.Button,
                { type: 'submit', color: 'primary', raised: true, disabled: true },
                'Button'
            );

            return _react2.default.createElement(
                'form',
                { className: 'inputValidComp' },
                _react2.default.createElement(_chassiReactMuiComponents.ValidatedInput, {
                    id: 'phone',
                    className: 'validatedPhoneClass',
                    label: 'Phone',
                    adornment: '',
                    adornmentPosition: 'end',
                    validator: _chassiJavascriptValidators.isPhone,
                    invalidMessage: 'enter a valid phone number',
                    onValidate: this.onValidatedField,
                    name: 'phone'
                }),
                _react2.default.createElement(_chassiReactMuiComponents.ValidatedInput, {
                    id: 'email',
                    className: 'validatedEmailClass',
                    label: 'Email',
                    adornment: '',
                    adornmentPosition: 'end',
                    validator: _chassiJavascriptValidators.isEmail,
                    invalidMessage: 'enter a valid email',
                    onValidate: this.onValidatedField,
                    name: 'email'
                }),
                _react2.default.createElement(_chassiReactMuiComponents.ValidatedPassword, {
                    id: 'password',
                    className: 'validatedPWClass',
                    label: 'Password',
                    adornment: '',
                    adornmentPosition: 'end',
                    validator: _chassiJavascriptValidators.isPassword,
                    invalidMessage: 'enter a valid password',
                    onValidate: this.onValidatedField,
                    name: 'password'
                }),
                button
            );
        }
    }]);

    return InputValidation;
}(_react2.default.Component);

;

exports.default = InputValidation;