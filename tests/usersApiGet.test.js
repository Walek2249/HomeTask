const axios = require("axios");
const validator = require("jsonschema");
const usersApiSchemaGet = require("../data/usersApiSchemaGet.json");

describe("Get API users tests", function () {
  let response;
  beforeAll(async () => {
    response = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Users",
      {
        headers: {
          accept: "text/plain; v=1.0",
        },
      }
    );
  });

  test("should return status code 200", async () => {
    await expect(response.status).toEqual(200);
  });

  test("should be valid response json schema", async () => {
    const result = await validator.validate(response.data, usersApiSchemaGet);
    await expect(result.valid).toEqual(true);
  });
});
