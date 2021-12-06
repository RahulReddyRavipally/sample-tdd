import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {RomanApi} from './roman.api';
import {RomanService} from './roman.service';
import {NumberApi} from './number.api';
import {NumberService} from './number.service';

const config: ContainerConfiguration[] = [
  {
    bind: RomanApi,
    to: RomanService,
    scope: Scope.Singleton
  },
  {
    bind: NumberApi,
    to: NumberService,
    scope: Scope.Singleton
  }
];

export default config;