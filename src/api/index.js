
export const clientBase = async (
  endpoint,
  method,
  token = null,
  sendToken = true,
  { body } = {}
) => {
  const bearerToken = token || localStorage.getItem("token");
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

  const headers = {
    "content-type": "application/json",
    accept: "*/*",
  };

  if (bearerToken && sendToken) headers.Authorization = `Bearer ${bearerToken}`;

  const config = {
    method,
    headers: {
      ...headers,
    },
  };

  if (body) config.body = JSON.stringify(body);

  const response = await window.fetch(`${apiUrl}/${endpoint}`, config);

  const data = response.status === 204 ? true : await response.json();

  if (data?.data?.must_logout) window.location.pathname = "/login"

  return {
    data: response.ok ? data : null,
    error: !response.ok ? data.message : null,
    status: response.status,
    response: data,
  };
};