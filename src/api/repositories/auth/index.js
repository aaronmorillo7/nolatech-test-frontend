import { clientBase } from "../..";

const apiLogin = async (body) => {
  const { data, error } = await clientBase("auth/login", "POST", null, false, {
    body,
  });

  return { data, error };
};

const apiCheckToken = (accessToken) =>
  clientBase("auth/check-token", "POST", null, false, {
    body: {
      access_token: accessToken,
    },
  });

const apiSignup = (body) =>
  clientBase("auth/register", "POST", null, false, {
    body,
  });

export { apiLogin, apiSignup, apiCheckToken };
