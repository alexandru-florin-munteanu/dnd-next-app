import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  scope: process.env.AUTH0_SCOPE!,
  redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback`,
  postLogoutRedirectUri: process.env.NEXT_PUBLIC_BASE_URL,
  session: {
    cookieSecret: process.env.SESSION_COOKIE_SECRET!,
    cookieLifetime: Number(process.env.SESSION_COOKIE_LIFETIME) || 7200,
    storeIdToken: true,
    storeAccessToken: true,
    storeRefreshToken: true,
  },
  oidcClient: {
    httpTimeout: Number(process.env.OIDC_CLIENT_HTTP_TIMEOUT) || 2500,
    clockTolerance: Number(process.env.OIDC_CLIENT_CLOCK_TOLERANCE) || 10000,
  },
});
