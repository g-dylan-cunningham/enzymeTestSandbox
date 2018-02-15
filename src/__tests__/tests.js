import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import InputValidation from '../components/InputValidation';
import { ValidatedInput, ValidatedPassword, Button } from '@chassi-dev/chassi-react-mui-components';
import Input, { InputAdornment, InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import sinon from 'sinon';
import { isPhone, isPassword, isEmail } from "@chassi-dev/chassi-javascript-validators";
// import ValidatedInput from '../components/synapse/validated-input'

import { shallow, mount } from 'enzyme';

let wrapper;
let clock;
describe('InputValidation', () => {

    beforeAll(() => {
        wrapper = mount(<InputValidation />);
        clock = sinon.useFakeTimers();
    });

    it('should be disabled when invalid (includes default)', () => {
        expect(wrapper.find('button').prop('disabled')).toBe(true);
    });

    it('should be enabled when valid', () => {

        const phone = wrapper.find('input#phone');
        const email = wrapper.find('input#email');
        const password = wrapper.find('input#password');

        phone.simulate('keyup', {target: {value: '1231231234'}});
        email.simulate('keyup', {target: {value: 'a@a.com'}});
        password.simulate('keyup', {target: {value: 'aA1!bbbb'}});

        console.warn('disabled waiting on timeout', wrapper.find('button').prop('disabled'));
        clock.tick(1000);
        wrapper.update();

        console.warn('disabled after timeout', wrapper.find('button').prop('disabled'));
        expect(wrapper.find('button').prop('disabled')).toBe(false);
        clock.reset();


    });

    it('should be diabled when invalid phone is present', () => {
        const phone = wrapper.find('input#phone');
        const email = wrapper.find('input#email');
        const password = wrapper.find('input#password');

        phone.simulate('keyup', {target: {value: '1'}});
        email.simulate('keyup', {target: {value: 'a@a.com'}});
        password.simulate('keyup', {target: {value: 'aA1!bbbb'}});

        clock.tick(1000);
        wrapper.update();

        expect(wrapper.find('button').prop('disabled')).toBe(true);
        clock.reset();
    });

    it('should be diabled when invalid Email is present', () => {
        const phone = wrapper.find('input#phone');
        const email = wrapper.find('input#email');
        const password = wrapper.find('input#password');

        phone.simulate('keyup', {target: {value: '123-123-1234'}});
        email.simulate('keyup', {target: {value: 'a@a'}});
        password.simulate('keyup', {target: {value: 'aA1!bbbb'}});

        clock.tick(1000);
        wrapper.update();

        expect(wrapper.find('button').prop('disabled')).toBe(true);
        clock.reset();
    });

    it('should be diabled when invalid password is present', () => {
        const phone = wrapper.find('input#phone');
        const email = wrapper.find('input#email');
        const password = wrapper.find('input#password');

        phone.simulate('keyup', {target: {value: '123-123-1234'}});
        email.simulate('keyup', {target: {value: 'a@a.com'}});
        password.simulate('keyup', {target: {value: 'a'}});

        clock.tick(1000);
        wrapper.update();

        expect(wrapper.find('button').prop('disabled')).toBe(true);
        clock.reset();
    });

});
