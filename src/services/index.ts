import { Container } from "typescript-ioc";

export * from './roman.api';
export * from './roman.service';

import config from './ioc.config';

Container.configure(...config);