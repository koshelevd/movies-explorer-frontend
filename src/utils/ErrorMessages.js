import {
  SIGN_UP_ERROR_DEFAULT_MESSAGE,
  SIGN_IN_ERROR_DEFAULT_MESSAGE,
  SIGN_OUT_ERROR_DEFAULT_MESSAGE,
  USER_UPDATE_ERROR_DEFAULT_MESSAGE,
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
  INTERNAL_SERVER_ERROR_CODE,
  BAD_REQUEST_MESSAGE,
  UNAUTHORIZED_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  INTERNAL_SERVER_ERROR_MESSAGE,
} from './config';

export const signUpErrorMessage = (err) => {
  let message = SIGN_UP_ERROR_DEFAULT_MESSAGE;
  if (err === BAD_REQUEST_ERROR_CODE) {
    message = BAD_REQUEST_MESSAGE;
  } else if (err === CONFLICT_ERROR_CODE) {
    message = CONFLICT_ERROR_MESSAGE;
  } else if (err === NOT_FOUND_ERROR_CODE) {
    message = NOT_FOUND_ERROR_MESSAGE;
  } else if (err === INTERNAL_SERVER_ERROR_CODE) {
    message = INTERNAL_SERVER_ERROR_MESSAGE;
  }
  return message;
};

export const signInErrorMessage = (err) => {
  let message = SIGN_IN_ERROR_DEFAULT_MESSAGE;
  if (err === BAD_REQUEST_ERROR_CODE) {
    message = BAD_REQUEST_MESSAGE;
  } else if (err === UNAUTHORIZED_ERROR_CODE) {
    message = UNAUTHORIZED_ERROR_MESSAGE;
  } else if (err === NOT_FOUND_ERROR_CODE) {
    message = NOT_FOUND_ERROR_MESSAGE;
  } else if (err === INTERNAL_SERVER_ERROR_CODE) {
    message = INTERNAL_SERVER_ERROR_MESSAGE;
  }

  return message;
};

export const signOutErrorMessage = (err) => {
  let message = SIGN_OUT_ERROR_DEFAULT_MESSAGE;
  if (err === NOT_FOUND_ERROR_CODE) {
    message = NOT_FOUND_ERROR_MESSAGE;
  } else if (err === INTERNAL_SERVER_ERROR_CODE) {
    message = INTERNAL_SERVER_ERROR_MESSAGE;
  }

  return message;
};

export const userUpdateErrorMessage = (err) => {
  let message = USER_UPDATE_ERROR_DEFAULT_MESSAGE;
  if (err === INTERNAL_SERVER_ERROR_CODE) {
    message = INTERNAL_SERVER_ERROR_MESSAGE;
  } else if (err === NOT_FOUND_ERROR_CODE) {
    message = NOT_FOUND_ERROR_MESSAGE;
  } else if (err === CONFLICT_ERROR_CODE) {
    message = CONFLICT_ERROR_MESSAGE;
  }

  return message;
};
