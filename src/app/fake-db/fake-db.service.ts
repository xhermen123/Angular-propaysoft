import { InMemoryDbService } from 'angular-in-memory-web-api';

import { DeductFakeDb } from './deduct';

export class FakeDbService implements InMemoryDbService {
  createDb() {
    return {
      'deduct-types': DeductFakeDb.types,
      'deduct-calc-methods': DeductFakeDb.deduct_default_method_types,
      'deduct-default-repetition': DeductFakeDb.deduct_default_repetition_types
    };
  }
}
