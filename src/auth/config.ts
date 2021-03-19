import { DefaultScopes } from './scopes';

const ISSUER = `https://${process.env.AUTH_DOMAIN}/oauth2/default`;
const HOST = process.env.AUTH_HOST || `${window.location.protocol}//${window.location.host}`;
const REDIRECT_URI = `${HOST}${process.env.AUTH_LOGON_CALLBACK}`;
const POST_LOGOUT_REDIRECT_URI = `${HOST}${process.env.POST_LOGOUT_REDIRECT_URI}`;
const SCOPES = process.env.AUTH_SCOPES || DefaultScopes;
const PKCE = !!(process.env.AUTH_PKCE || '').match(/true/i);

const config = {
    issuer: ISSUER,
    clientId: process.env.AUTH_CLIENT_ID || '',
    redirectUri: REDIRECT_URI,
    postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
    scopes: SCOPES.split(/,\s?/),
    pkce: PKCE,
};

export default config;
