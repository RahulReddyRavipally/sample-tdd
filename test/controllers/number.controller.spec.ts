import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {NumberApi} from '../../src/services';
import {buildApiServer} from '../helper';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

class MockNumberService implements NumberApi {
  number = jest.fn().mockName('number');
}

describe('number.controller', () => {

  let app: Application;
  let mocknumber: jest.Mock;

  beforeEach(() => {
    const apiServer = buildApiServer();

    app = apiServer.getApp();

    Container.bind(NumberApi).scope(Scope.Singleton).to(MockNumberService);

    const mockService: NumberApi = Container.get(NumberApi);
    mocknumber = mockService.number as jest.Mock;
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /roman-to-number', () => {

    describe('When checking for valid roman number input', () => {
      const romanInput = "IV";
      const numberOutput = 4;

      beforeEach(() => {
        mocknumber.mockImplementation(romanInput => numberOutput);
      });

      test(`for ${romanInput} it should return ${numberOutput} with content type as text/html and status code 200`, async () => { 
        await request(app)
          .get(`/roman-to-number`)
          .query({value: romanInput})
          .expect(200)
          .then((response) => {
            expect(parseInt(response.text)).toBe(numberOutput);
            expect(response.headers['content-type']).toBe('text/html; charset=utf-8');
          });
      });
    });

    describe('When checking for invalid roman number input', () => {
      const romanInput = "VIIII";

      beforeEach(() => {
        mocknumber.mockImplementation(() => {
          throw new BadRequestError();
        });
      });

      test(`for ${romanInput} it should throw Bad Request Error with status code as 400`, async () => { 
        await request(app)
          .get(`/roman-to-number`)
          .query({value: romanInput})
          .expect(400);
      });
    });
  });

});
