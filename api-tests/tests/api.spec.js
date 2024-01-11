const axios = require('axios');
const validator = require('jsonschema');
const getApi = require('../data/apiSchema.json')

describe('GET API tests', function () {
  let response;
  beforeAll(async () => {
    response = await axios.get(
      'https://www.lamoda.by/api/v1/cities/popular',
      {
        headers: {
          accept: "text/plain; v=1.0",
        },
      })
    })
      test('should return status code 200', async () => {
        await expect(response.status).toEqual(200);
      });


      test('should be valid response json schema', async () => {
        const result = await validator.validate(response.data, getApi);
        await expect(result.valid).toEqual(true);
      });
    });

      describe('API test', function () {
        let response;
        beforeAll(async () => {
          try {
          response = await axios.get(
            'https://www.lamoda.by/api/v1/recommendations/section',
            )
          } catch (err) {
            response = err;
        }
    });
      
            test('should return message Request failed with status code 400', async () => {
              await expect(response.message).toEqual('Request failed with status code 400');
            });
      })
  
  