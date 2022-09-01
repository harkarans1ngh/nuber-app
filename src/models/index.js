// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { DRIVERFILES } = initSchema(schema);

export {
  DRIVERFILES
};