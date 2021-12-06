import {Container} from 'typescript-ioc';

import {RomanService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('Hello World service', () =>{

  let app: ApiServer;
  let service: RomanService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(RomanService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Given roman()', () => {

    context('Number to Roman service ', () => {
      test('Testing number to roman"', async () => {
        expect(await service.roman()).toEqual('Roman');
      });
    })
  });
});
