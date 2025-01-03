import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgUpdateDenom, MsgUpdateDenomResponse, MsgTransferDenom, MsgTransferDenomResponse, MsgPurgeDenom, MsgPurgeDenomResponse, MsgMintONFT, MsgMintONFTResponse, MsgTransferONFT, MsgTransferONFTResponse, MsgBurnONFT, MsgBurnONFTResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createDenom = this.createDenom.bind(this);
        this.updateDenom = this.updateDenom.bind(this);
        this.transferDenom = this.transferDenom.bind(this);
        this.purgeDenom = this.purgeDenom.bind(this);
        this.mintONFT = this.mintONFT.bind(this);
        this.transferONFT = this.transferONFT.bind(this);
        this.burnONFT = this.burnONFT.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    createDenom(request) {
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "CreateDenom", data);
        return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
    }
    updateDenom(request) {
        const data = MsgUpdateDenom.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "UpdateDenom", data);
        return promise.then(data => MsgUpdateDenomResponse.decode(new BinaryReader(data)));
    }
    transferDenom(request) {
        const data = MsgTransferDenom.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "TransferDenom", data);
        return promise.then(data => MsgTransferDenomResponse.decode(new BinaryReader(data)));
    }
    purgeDenom(request) {
        const data = MsgPurgeDenom.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "PurgeDenom", data);
        return promise.then(data => MsgPurgeDenomResponse.decode(new BinaryReader(data)));
    }
    mintONFT(request) {
        const data = MsgMintONFT.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "MintONFT", data);
        return promise.then(data => MsgMintONFTResponse.decode(new BinaryReader(data)));
    }
    transferONFT(request) {
        const data = MsgTransferONFT.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "TransferONFT", data);
        return promise.then(data => MsgTransferONFTResponse.decode(new BinaryReader(data)));
    }
    burnONFT(request) {
        const data = MsgBurnONFT.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "BurnONFT", data);
        return promise.then(data => MsgBurnONFTResponse.decode(new BinaryReader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map