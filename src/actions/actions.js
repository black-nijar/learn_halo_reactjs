import { USER_PROFILE } from './types';

export const userProfile = data => {
  console.log('data', data)
  return {
    type: USER_PROFILE,
    payload: data
  };
};