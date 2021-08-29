import {IContract} from "./icontract";
import {IAttachService} from "./iattach-service";

export interface IContractDetail {
  id?: number;
  contract?: IContract;
  attachService?: IAttachService;
  quantity?: number;
}
