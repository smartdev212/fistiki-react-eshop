import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';

import {
  setActiveComponent,
  signInStart
} from '../../../redux/authentication/authentication.actions';
import { selectLoadingStatus } from '../../../redux/authentication/authentication.selectors';

import { SignInContainer, ForgotPasswordText } from './SignInForm.styles';
import { ActionButtonsContainer } from '../../../App.styles';

import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import CustomTextField from '../../common/CustomTextField/CustomTextField.comp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { isRequired, isEmail } from '../../../utils/validation';

const SignIn = ({ setActiveComponent, isLoading, signInStart, valid }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userData;

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    emailRef.current.ref.current.handleBlur();
    passwordRef.current.ref.current.handleBlur();
    if (valid) signInStart({ username: email, password });
  };

  const handleInputChange = event => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const theme = useTheme();

  return (
    <SignInContainer>
      <form onSubmit={handleSubmit}>
        <Field
          ref={emailRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Email"
          type="email"
          name="email"
          value={email}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          disabled={isLoading}
          validate={[isRequired, isEmail]}
        />
        <Field
          ref={passwordRef}
          component={CustomTextField}
          fullWidth
          onChange={handleInputChange}
          label="Password"
          type="password"
          name="password"
          value={password}
          autoComplete="password"
          margin="normal"
          variant="outlined"
          disabled={isLoading}
          validate={[isRequired]}
        />
        <ForgotPasswordText
          disabled={isLoading}
          color={theme.palette.primary.main}
          onClick={() => setActiveComponent('FORGOT_PASSWORD')}
        >
          Forgot Password?
        </ForgotPasswordText>
        <ActionButtonsContainer>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Sign In'}
          </Button>
          <Button
            mx={2}
            size="large"
            color="primary"
            disabled={isLoading}
            onClick={() => setActiveComponent('SIGN_UP')}
          >
            Create Account
          </Button>
        </ActionButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingStatus
});

const mapDispatchToProps = dispatch => ({
  setActiveComponent: component => dispatch(setActiveComponent(component)),
  signInStart: userData => dispatch(signInStart(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'SignInForm' })(SignIn));
