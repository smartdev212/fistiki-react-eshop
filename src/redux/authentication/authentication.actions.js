import AuthenticationActionTypes from './authentication.types';

export const setActiveComponent = component => ({
  type: AuthenticationActionTypes.SET_ACTIVE_COMPONENT,
  payload: component
});

export const setSnackbarHidden = () => ({
  type: AuthenticationActionTypes.SET_SNACKBAR_HIDDEN
});

export const getCurrentAuthenticatedUserStart = () => ({
  type: AuthenticationActionTypes.GET_AUTHENTICATED_USER_START
});

export const getCurrentAuthenticatedUserSuccess = user => ({
  type: AuthenticationActionTypes.GET_AUTHENTICATED_USER_SUCCESS,
  payload: user
});

export const getCurrentAuthenticatedUserFailure = error => ({
  type: AuthenticationActionTypes.GET_AUTHENTICATED_USER_FAILURE,
  payload: error
});

export const signUpStart = userData => ({
  type: AuthenticationActionTypes.SIGN_UP_START,
  payload: userData
});

export const signUpSuccess = username => ({
  type: AuthenticationActionTypes.SIGN_UP_SUCCESS,
  payload: username
});

export const signUpFailure = error => ({
  type: AuthenticationActionTypes.SIGN_UP_FAILURE,
  payload: error
});

export const verifyEmailAddressStart = verificationData => ({
  type: AuthenticationActionTypes.VERIFY_EMAIL_START,
  payload: verificationData
});

export const verifyEmailAddressSuccess = username => ({
  type: AuthenticationActionTypes.VERIFY_EMAIL_SUCCESS,
  payload: username
});

export const verifyEmailAddressFailure = error => ({
  type: AuthenticationActionTypes.VERIFY_EMAIL_FAILURE,
  payload: error
});

export const resendVerificationEmailStart = username => ({
  type: AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_START,
  payload: username
});

export const resendVerificationEmailSuccess = () => ({
  type: AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_SUCCESS
});

export const resendVerificationEmailFailure = error => ({
  type: AuthenticationActionTypes.RESEND_VERIFICATION_EMAIL_FAILURE,
  payload: error
});

export const signInStart = userData => ({
  type: AuthenticationActionTypes.EMAIL_SIGN_IN_START,
  payload: userData
});

export const signInSuccess = username => ({
  type: AuthenticationActionTypes.SIGN_IN_SUCCESS,
  payload: username
});

export const signInFailure = error => ({
  type: AuthenticationActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: AuthenticationActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: AuthenticationActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: AuthenticationActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const forgotPasswordStart = username => ({
  type: AuthenticationActionTypes.FORGOT_PASSWORD_START,
  payload: username
});

export const forgotPasswordSuccess = username => ({
  type: AuthenticationActionTypes.FORGOT_PASSWORD_SUCCESS,
  payload: username
});

export const forgotPasswordFailure = error => ({
  type: AuthenticationActionTypes.FORGOT_PASSWORD_FAILURE,
  payload: error
});

export const forgotPasswordSubmitStart = data => ({
  type: AuthenticationActionTypes.FORGOT_PASSWORD_SUBMIT_START,
  payload: data
});

export const forgotPasswordSubmitSuccess = () => ({
  type: AuthenticationActionTypes.FORGOT_PASSWORD_SUBMIT_SUCCESS
});

export const forgotPasswordSubmitFailure = error => ({
  type: AuthenticationActionTypes.FORGOT_PASSWORD_SUBMIT_FAILURE,
  payload: error
});
