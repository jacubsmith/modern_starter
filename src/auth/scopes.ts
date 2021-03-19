/* eslint-disable max-len,no-tabs */

/**
 * https://developer.okta.com/docs/reference/api/oidc/#scopes
 * Property	        Description	                                                                                                    Required
 *******************************************************************************************************************************************
 * openid	        Identifies the request as an OpenID Connect request.	                                                        Yes
 * profile	        Requests access to the end user's default profile claims.	                                                    No
 * email	        Requests access to the email and email_verified claims.	                                                        No
 * phone	        Requests access to the phone_number and phone_number_verified claims.	                                        No
 * address	        Requests access to the address claim.	                                                                        No
 * groups	        Requests access to the groups claim.	                                                                        No
 * offline_access	Requests a refresh token used to obtain more access tokens without re-prompting the user for authentication.	No
 */

enum AuthScopes {
    openid = 'openid',
    profile = 'profile',
    email = 'email',
    phone = 'phone',
    address = 'address',
    groups = 'groups',
    offline_access = 'offline_access',
}

export const DefaultScopes = [AuthScopes.openid, AuthScopes.profile, AuthScopes.email].join(',');

export default AuthScopes;
