const axios = require("axios");

describe("Delete API user test", function () {
  test("should return status code 200", async () => {
    const response = await axios.delete(
      "https://fakerestapi.azurewebsites.net/api/v1/Users/1",
      {
        headers: {
          Accept: "*/*",
        },
      }
    );
    await expect(response.status).toEqual(200);
  });
});