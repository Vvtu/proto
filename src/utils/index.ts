//http://localhost:8081/swagger-ui.html#

const baseUrl = "http://localhost:8081";

export const fetchData = () => {
  const relUrl = "/v0/organizations";
  return fetch(`${baseUrl}${relUrl}`).then((response) => {
    return response.json();
  });
};
