import {RomanApi} from './roman.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';
import { BadRequestError } from 'typescript-rest/dist/server/model/errors';

export class RomanService implements RomanApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('RomanService');
  }

  

  async roman(number: number = 0): Promise<string> {
    var mapping = [
      {numeral: 'M', value: 1000},
      {numeral: 'CM', value: 900},
      {numeral: 'D', value: 500},
      {numeral: 'CD', value: 400},
      {numeral: 'C', value: 100},
      {numeral: 'XC', value: 90},
      {numeral: 'L', value: 50},
      {numeral: 'XL', value: 40},
      {numeral: 'X', value: 10},
      {numeral: 'IX', value: 9},
      {numeral: 'V', value: 5},
      {numeral: 'IV', value: 4},
      {numeral: 'I', value: 1},
    ];
    var response = ''
    if (number == 0){
        return 'nulla'
    }
    if (number % 1 !== 0){
        throw new BadRequestError('Invalid!')
    }
    if (number > 3999 || number <0){
      throw new BadRequestError('Invalid!')
    }
    mapping.forEach(function (item){
        while(number >= item.value){
            response += item.numeral;
            number -= item.value;
        }
    });

    return response
  }
}
