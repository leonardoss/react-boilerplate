export const AUTH_STATUS_CHANGE = 'AUTH_STATUS_CHANGE';
export const IS_AUTHENTICATING = 'IS_AUTHENTICATING';
export const AUTH_WITH_FEDERATIONS = 'AUTH_WITH_FEDERATIONS';
export const AUTH_WITH_USERNAME_AND_PASSWORD = 'AUTH_WITH_USERNAME_AND_PASSWORD';

export function isAuthenticating(auth) {
  return {
    type: IS_AUTHENTICATING,
    isAuthenticating: auth,
  };
}

export function authStatusChange(user) {
  return {
    type: AUTH_STATUS_CHANGE,
    user,
    authenticated: !!(user || false),
  };
}

export function authWithUsernameAndPassword(credentials) {
  return {
    type: AUTH_WITH_USERNAME_AND_PASSWORD,
    credentials,
  };
}

export function authWithFacebook(federarion) {
  return {
    type: AUTH_WITH_FEDERATIONS,
    federation: 'facebook',
  };
}
