import {IServiceType} from "./iservice-type";
import {IRentType} from "./IRentType";

export interface IService {
  id?: number;
  serviceName?: string;
  serviceArea?: number;
  serviceCost?: number;
  maxPeople?: number;
  standardRoom?: string;
  description?: string;
  poolArea?: number;
  numberFloors?: number;
  serviceCode?: string;
  serviceType?: IServiceType;
  rentType?: IRentType;
}
