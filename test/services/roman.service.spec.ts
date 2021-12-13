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


  describe('Test number to roman conversion', ()=>{
    test('take number 1 and return I', async () => {
        expect( await service.roman(1)).toEqual('I')
     }) 
     test('take number 2 and return II', async () => {
        expect( await service.roman(2)).toEqual('II')
     }) 
     test('take number 3 and return III', async () => {
        expect( await service.roman(3)).toEqual('III')
     }) 
     test('take number 4 and return IV',async () => {
        expect( await service.roman(4)).toEqual('IV')
     })
     test('take number 5 and return V',async () => {
        expect( await service.roman(5)).toEqual('V')
     })
     test('take number 6 and return VI',async () => {
        expect( await service.roman(6)).toEqual('VI')
     })
     test('take number 7 and return VII',async () => {
        expect( await service.roman(7)).toEqual('VII')
     })
     test('take number 9 and return IX',async () => {
        expect( await service.roman(9)).toEqual('IX')
     })
     test('take number 10 and return X',async () => {
        expect( await service.roman(10)).toEqual('X')
     })
     test('take number 14 and return XIV',async () => {
        expect( await service.roman(14)).toEqual('XIV')
     })
     test('take number 15 and return XV',async () => {
        expect( await service.roman(15)).toEqual('XV')
     })
     test('take number 19 and return XIX',async () => {
        expect( await service.roman(19)).toEqual('XIX')
     })
     test('take number 24 and return XXIV',async () => {
        expect( await service.roman(24)).toEqual('XXIV')
     })
     test('take number 40 and return XL',async () => {
        expect( await service.roman(40)).toEqual('XL')
     })
     test('take number 49 and return XLIX',async () => {
        expect( await service.roman(49)).toEqual('XLIX')
     })
     test('take number 59 and return LIX',async () => {
        expect( await service.roman(59)).toEqual('LIX')
     })
     test('take number 60 and return LX',async () => {
        expect( await service.roman(60)).toEqual('LX')
     })
     test('take number 90 and return XC',async () => {
        expect( await service.roman(90)).toEqual('XC')
     })
     test('take number 99 and return XCIX',async () => {
        expect( await service.roman(99)).toEqual('XCIX')
     })
     test('take number 100 and return C',async () => {
        expect( await service.roman(100)).toEqual('C')
     })
     test('take number 400 and return CD',async () => {
        expect( await service.roman(400)).toEqual('CD')
     })
     test('take number 436 and return CDXXXVI',async () => {
      expect( await service.roman(436)).toEqual('CDXXXVI')
   })
     test('take number 500 and return D',async () => {
        expect( await service.roman(500)).toEqual('D')
     })
     test('take number 900 and return CM',async () => {
        expect( await service.roman(900)).toEqual('CM')
     })
     test('take number 999 and return CMXCIX',async () => {
      expect( await service.roman(999)).toEqual('CMXCIX')
   })
     test('take number 1000 and return M',async () => {
        expect( await service.roman(1000)).toEqual('M')
     })
     test('take number 1990 and return MCMXC',async () => {
      expect( await service.roman(1990)).toEqual('MCMXC')
   })
     test('take number 3999 and return MMMCMXCIX',async () => {
        expect( await service.roman(3999)).toEqual('MMMCMXCIX')
     })
     test('take number 0 and return nulla',async () => {
        expect( await service.roman(0)).toEqual('nulla')
     })
     test('take float 1.1 and return ERROR',async () => {
      await expect(service.roman(1.1)).rejects.toThrow('Invalid!');
   })
     test('take number 4000 and return ERROR',async () => {
      await expect(service.roman(4000)).rejects.toThrow('Invalid!');
     })
     test('take number -1 and return ERROR',async () => {
      await expect(service.roman(-1)).rejects.toThrow('Invalid!');
   })


});
});
