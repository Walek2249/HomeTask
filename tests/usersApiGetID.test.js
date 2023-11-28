const axios = require("axios");
const validator = require("jsonschema");
const usersApiSchemaGetID = require("../data/usersApiSchemaGetID.json");


describe("Get API user tests", function () {
  let response;
  beforeAll(async () => {
    response = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Users/1",
      {
        headers: {
          accept: "*/*",
        },
      }
    );
  });

  test("should return status code 200", async () => {
    await expect(response.status).toEqual(200);
  });

  test("should be valid response json schema", async () => {
    const result = await validator.validate(response.data, usersApiSchemaGetID);
    await expect(result.valid).toEqual(true);
  });
});
