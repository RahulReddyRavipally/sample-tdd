import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {RomanApi} from '../../src/services';
import {buildApiServer} from '../helper';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

class MockRomanService implements RomanApi {
  roman = jest.fn().mockName('roman');
}

describe('roman.controller', () => {

  let app: Application;
  let mockroman: jest.Mock;

  beforeEach(() => {
    const apiServer = buildApiServer();

    app = apiServer.getApp();

    Container.bind(RomanApi).scope(Scope.Singleton).to(MockRomanService);

    const mockService: RomanApi = Container.get(RomanApi);
    mockroman = mockService.roman as jest.Mock;
  });

  test('canary validates test infrastructure', () => {
    expect(true).toBe(true);
  });

  describe('Given /number-to-roman', () => {
    describe('When checking for valid numeric input', () => {
      const numericInput = 24;
      const romanOutput = "XXIV";

      beforeEach(() => {
        mockroman.mockImplementation(numericInput => romanOutput);
      });

      test(`for ${numericInput} it should return ${romanOutput} with content type as text/html and status code 200`, async () => { 
        await request(app)
          .get(`/number-to-roman`)
          .query({value: numericInput})
          .expect(200)
          .then((response) => {
            expect(response.text).toBe(romanOutput);
            expect(response.headers['content-type']).toBe('text/html; charset=utf-8');
          });
      });

    });
    describe('When checking for invalid numeric input', () => {
      const numericInput = -1;

      beforeEach(() => {
        mockroman.mockImplementation(() => {
          throw new BadRequestError();
        });
      });

      test(`for ${numericInput} it should throw Bad Request Error with status code as 400`, async () => { 
        await request(app)
          .get(`/number-to-roman`)
          .query({value: numericInput})
          .expect(400);
      });
    });
    describe('When checking for non numeric input', () => {
      const numericInput = "XIV";

      beforeEach(() => {
        mockroman.mockImplementation(() => {
          throw new BadRequestError();
        });
      });

      test(`for ${numericInput} it should throw Bad Request Error with status code as 400`, async () => {
        await request(app)
          .get(`/number-to-roman`)
          .query({value: numericInput})
          .expect(400);
      });
    });
  });

});
