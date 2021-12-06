import {NumberApi} from './number.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class NumberService implements NumberApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('NumberService');
  }

  

  async number(roman: string = 'I'): Promise<number> {
    roman = roman.toUpperCase();

var response = 0
var obj = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
 }
 if (roman == 'nulla' || roman == 'NULLA'){
     return 0;
 }
var sum = 0
for (var i = 0; i < roman.length; i++) {
    sum = sum + obj[roman.charAt(i)]
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
if (sum >= 40 && sum <=50){
    if (!roman.includes('L')){
        sum = -1
    }
}
else if (sum >= 90 && sum <=100){
    if (!roman.includes('C')){
        sum = -1
    }
}
else if (sum >= 400 && sum <=500){
    if (!roman.includes('D')){
        sum = -1
    }
}
else if (sum >= 900 && sum <=1000){
    if (!roman.includes('M')){
        sum = -1
    }
}
else if(sum > 3999){
    sum = - 1
}

if (sum == -1){
    return -1;
}
else{
    return sum;
}
}
}
