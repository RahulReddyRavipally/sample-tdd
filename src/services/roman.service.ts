import {RomanApi} from './roman.api';
import {Inject} from 'typescript-ioc';
import {LoggerApi} from '../logger';

export class RomanService implements RomanApi {
  logger: LoggerApi;

  constructor(
    @Inject
    logger: LoggerApi,
  ) {
    this.logger = logger.child('RomanService');
  }

  async roman(name: string = 'Roman'): Promise<string> {
    this.logger.info(`Generating greeting for ${name}`);
    return `${name}`;
  }
}
