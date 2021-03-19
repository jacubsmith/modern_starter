/**
 * ENV Variables for webpack compilation -- to be accessed at build time not runtime
 * provide default values if they're not specified -- null if you wish no value by default (= false)
 * Default AUTH values are for the developer credentials
 */

const ENV_VARIABLES = {
  NODE_ENV: null,
  DEBUG: null,
  AUTH_DOMAIN: null,
  AUTH_CLIENT_ID: null,
  AUTH_LOGON_CALLBACK: null,
  POST_LOGOUT_REDIRECT_URI: null,
  OKTA_TESTING_DISABLEHTTPSCHECK: null,
  AUTH_HOST: null,
  AUTH_SCOPES: null,
  AUTH_PKCE: null,
};

module.exports = ENV_VARIABLES;
