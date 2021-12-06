import {ContainerConfiguration, Scope} from 'typescript-ioc';
import {RomanApi} from './roman.api';
import {RomanService} from './roman.service';

const config: ContainerConfiguration[] = [
  {
    bind: RomanApi,
    to: RomanService,
    scope: Scope.Singleton
  }
];

export default config;