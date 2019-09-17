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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = void 0;
// import ValidatedInput from '../components/synapse/validated-input'

describe('InputValidation', function () {

    beforeAll(function () {
        wrapper = (0, _enzyme.mount)(_react2.default.createElement(_InputValidation2.default, null));
    });

    it('should be disabled when invalid (includes default)', function () {
        expect(wrapper.find('button').prop('disabled')).toBe(true);
    });

    it('should be enabled when valid', function () {
        var phone = wrapper.find('input#phone');
        var email = wrapper.find('input#email');
        var password = wrapper.find('input#password');

        phone.simulate('change', { target: { value: '1231231234' } });
        email.simulate('change', { target: { value: 'a@a.com' } });
        password.simulate('change', { target: { value: 'aA1!bbbb' } });
        return new Promise(function () {
            setTimeout(function () {
                console.log('value', wrapper.find('button').prop('disabled'));
                expect(wrapper.find('button').prop('disabled')).toBe(false);
            }, 1000);
        });
    });
});