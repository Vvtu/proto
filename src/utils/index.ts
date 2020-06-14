//http://localhost:8081/swagger-ui.html#

const baseUrl = "http://localhost:8081";

export const getReuest = (url: string) => {
  return fetch(`${baseUrl}${url}`).then((response) => {
    return response.json();
  });
};
