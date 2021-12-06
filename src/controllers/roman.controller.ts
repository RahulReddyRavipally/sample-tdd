import {GET, Path, PathParam} from 'typescript-rest';
import {Inject} from 'typescript-ioc';
import {RomanApi} from '../services';
import {LoggerApi} from '../logger';

@Path('/number-to-roman')
export class RomanController {

  @Inject
  service: RomanApi;
  @Inject
  _baseLogger: LoggerApi;

  get logger() {
    return this._baseLogger.child('RomanController');
  }

  @GET
  async RomanUnknown(): Promise<string> {
    this.logger.info('Saying hello to someone');
    return this.service.roman();
  }

}
