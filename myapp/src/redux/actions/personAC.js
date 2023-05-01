import axiosInstanse from '../../components/config/axios';
import { PERSON_SIGN_IN, PERSON_SIGN_UP } from '../types/personTypes';

export const personSignUp = (newPerson) => {
  return {
    type: PERSON_SIGN_UP,
    payload: newPerson
  };
};

export const personSignUpQuery =
  ({ firstName, lastName, email, password, cb }) =>
  async (dispatch) => {
    const response = await axiosInstanse.post('signup', {
      firstName,
      lastName,
      email,
      password
    });
    const newPerson = response.data;
    if (newPerson) {
      dispatch(
        personSignUp({
          ...newPerson.data,
          token: newPerson.token
        })
      );
      cb && cb();
    }
  };

export const personSignIn = (regPerson) => ({
  type: PERSON_SIGN_IN,
  payload: regPerson
});

export const personSignInQuery =
  ({ email, password, cb }) =>
  async (dispath) => {
    const response = await axiosInstanse.post('signin', {
      email,
      password
    });
    const person = response.data;
    dispath(
      personSignIn({
        ...person.data,
        token: person.token
      })
    );
    cb && cb();
  };
