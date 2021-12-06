import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {NumberApi} from '../../src/services';
import {buildApiServer} from '../helper';

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

  describe('Given /hello', () => {
    const expectedResponse = 'Hello there!';

    beforeEach(() => {
      mocknumber.mockReturnValueOnce(Promise.resolve(expectedResponse));
    });

    test('should return "Hello, World!"', done => {
      request(app).get('/roman-to-number').expect(200).expect(expectedResponse, done);
    });
  });

});
