import {Container} from 'typescript-ioc';

import {NumberService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('Hello World service', () =>{

  let app: ApiServer;
  let service: NumberService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(NumberService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Test roman to number conversion',() => {
    test('take roman I and return 1',async () => {
        expect( await service.number('I')).toEqual(1)
     })
     test('take roman II and return 2',async () => {
        expect( await service.number('II')).toEqual(2)
     })
     test('take roman III and return 3',async () => {
        expect( await service.number('III')).toEqual(3)
     })
     test('take roman IV and return 4',async () => {
        expect( await service.number('IV')).toEqual(4)
     })
     test('take roman V and return 5',async () => {
        expect( await service.number('V')).toEqual(5)
     })
     test('take roman VI and return 6',async () => {
        expect( await service.number('VI')).toEqual(6)
     })
     test('take roman IX and return 9',async () => {
        expect( await service.number('IX')).toEqual(9)
     })
     test('take roman X and return 10',async () => {
        expect( await service.number('X')).toEqual(10)
     })
     test('take roman XI and return 11',async () => {
        expect( await service.number('XI')).toEqual(11)
     })
     test('take roman XVII and return 17',async () => {
        expect( await service.number('XVII')).toEqual(17)
     })
     test('take roman XIX and return 19',async () => {
        expect( await service.number('XIX')).toEqual(19)
     })
     test('take roman XL and return 40',async () => {
      expect( await service.number('XL')).toEqual(40)
   })
   test('take roman L and return 50',async () => {
      expect( await service.number('L')).toEqual(50)
   })
   test('take roman XC and return 90',async () => {
      expect( await service.number('XC')).toEqual(90)
   })
   test('take roman XCIX and return 99',async () => {
      expect( await service.number('XCIX')).toEqual(99)
   })
   test('take roman C and return 100',async () => {
      expect( await service.number('C')).toEqual(100)
   })
   test('take roman CD and return 400',async () => {
      expect( await service.number('CD')).toEqual(400)
   })
   test('take roman CDXXV and return 425',async () => {
      expect( await service.number('CDXXV')).toEqual(425)
   })
   test('take roman D and return 500',async () => {
      expect( await service.number('D')).toEqual(500)
   })
   test('take roman CM and return 900',async () => {
      expect( await service.number('CM')).toEqual(900)
   })
   test('take roman M and return 1000',async () => {
      expect( await service.number('M')).toEqual(1000)
   })
   test('take roman MMDXLIX and return 2549',async () => {
      expect( await service.number('MMDXLIX')).toEqual(2549)
   })
   test('take roman MMMCMXCIX and return MMMCMXCIX',async () => {
      expect( await service.number('MMMCMXCIX')).toEqual(3999)
   })
   test('take roman nulla and return 0',async () => {
      expect( await service.number('nulla')).toEqual(0)
   })
   test('take roman XXXXIV and return ERROR',async () => {
      expect( await service.number('XXXXIV')).toEqual(-1)
   })
   test('take roman LXXXXIX and return ERROR',async () => {
      expect( await service.number('LXXXXIX')).toEqual(-1)
   })
   test('take roman CCCCII and return ERROR',async () => {
      expect( await service.number('CCCCII')).toEqual(-1)
   })
   test('take roman DCCCCXXIV and return ERROR',async () => {
      expect( await service.number('DCCCCXXIV')).toEqual(-1)
   })
   test('take roman MMMM and return ERROR',async () => {
      expect( await service.number('MMMM')).toEqual(-1)
   })
   test('take roman i and return 1',async () => {
      expect( await service.number('i')).toEqual(1)
   })

});

  


});
