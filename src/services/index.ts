import { Container } from "typescript-ioc";

export * from './roman.api';
export * from './roman.service';
export * from './number.api';
export * from './number.service';

import config from './ioc.config';

Container.configure(...config);