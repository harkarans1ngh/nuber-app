import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DRIVERFILESMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DRIVERFILES {
  readonly id: string;
  readonly name?: string | null;
  readonly file?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DRIVERFILES, DRIVERFILESMetaData>);
  static copyOf(source: DRIVERFILES, mutator: (draft: MutableModel<DRIVERFILES, DRIVERFILESMetaData>) => MutableModel<DRIVERFILES, DRIVERFILESMetaData> | void): DRIVERFILES;
}