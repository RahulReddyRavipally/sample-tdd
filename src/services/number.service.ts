import {NumberApi} from './number.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

export class NumberService implements NumberApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('NumberService');
  }

   obj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
 }

  async number(roman: string = 'I'): Promise<number> {
    roman = roman.toUpperCase();

var response = 0

 if (roman == 'nulla' || roman == 'NULLA'){
     return 0;
 }
this.validateRoman(roman);
var sum = 0
for (var i = 0; i < roman.length; i++) {
    sum = sum + this.obj[roman.charAt(i)]
}
if (roman.includes('IV') || roman.includes('IX')){
        sum = sum - 2
    }
if (roman.includes('XL') || roman.includes('XC')){
    sum = sum - 20
}
if (roman.includes('CD') || roman.includes('CM')){
    sum = sum - 200
}

return sum;

  
}
private validateRoman(value: string) {
    for (let i = 0; i < value.length; i++) {
      if (!(value[i] in this.obj))
        throw new BadRequestError('Invalid!');
      if (!isNaN(Number(value[i])))
        throw new BadRequestError('Invalid!');
    }
    const RE = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!(RE.test(value)))
      throw new BadRequestError('Invalid!');
  }

  
}
