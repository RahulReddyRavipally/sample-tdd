import {Application} from 'express';
import {default as request} from 'supertest';
import {Container, Scope} from 'typescript-ioc';

import {RomanApi} from '../../src/services';
import {buildApiServer} from '../helper';

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

  describe('Given /hello', () => {
    const expectedResponse = 'Hello there!';

    beforeEach(() => {
      mockroman.mockReturnValueOnce(Promise.resolve(expectedResponse));
    });

    test('should return "Hello, World!"', done => {
      request(app).get('/number-to-roman').expect(200).expect(expectedResponse, done);
    });
  });

});
