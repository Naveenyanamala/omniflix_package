import { BinaryReader } from "../../../binary";
import { MsgCreateCampaign, MsgCreateCampaignResponse, MsgCancelCampaign, MsgCancelCampaignResponse, MsgClaim, MsgClaimResponse, MsgDepositCampaign, MsgDepositCampaignResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createCampaign = this.createCampaign.bind(this);
        this.cancelCampaign = this.cancelCampaign.bind(this);
        this.claim = this.claim.bind(this);
        this.depositCampaign = this.depositCampaign.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    createCampaign(request) {
        const data = MsgCreateCampaign.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CreateCampaign", data);
        return promise.then(data => MsgCreateCampaignResponse.decode(new BinaryReader(data)));
    }
    cancelCampaign(request) {
        const data = MsgCancelCampaign.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CancelCampaign", data);
        return promise.then(data => MsgCancelCampaignResponse.decode(new BinaryReader(data)));
    }
    claim(request) {
        const data = MsgClaim.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "Claim", data);
        return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
    }
    depositCampaign(request) {
        const data = MsgDepositCampaign.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "DepositCampaign", data);
        return promise.then(data => MsgDepositCampaignResponse.decode(new BinaryReader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map