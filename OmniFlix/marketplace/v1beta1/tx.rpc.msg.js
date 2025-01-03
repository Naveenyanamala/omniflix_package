import { BinaryReader } from "../../../binary";
import { MsgListNFT, MsgListNFTResponse, MsgEditListing, MsgEditListingResponse, MsgDeListNFT, MsgDeListNFTResponse, MsgBuyNFT, MsgBuyNFTResponse, MsgCreateAuction, MsgCreateAuctionResponse, MsgCancelAuction, MsgCancelAuctionResponse, MsgPlaceBid, MsgPlaceBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.listNFT = this.listNFT.bind(this);
        this.editListing = this.editListing.bind(this);
        this.deListNFT = this.deListNFT.bind(this);
        this.buyNFT = this.buyNFT.bind(this);
        this.createAuction = this.createAuction.bind(this);
        this.cancelAuction = this.cancelAuction.bind(this);
        this.placeBid = this.placeBid.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    listNFT(request) {
        const data = MsgListNFT.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "ListNFT", data);
        return promise.then(data => MsgListNFTResponse.decode(new BinaryReader(data)));
    }
    editListing(request) {
        const data = MsgEditListing.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "EditListing", data);
        return promise.then(data => MsgEditListingResponse.decode(new BinaryReader(data)));
    }
    deListNFT(request) {
        const data = MsgDeListNFT.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "DeListNFT", data);
        return promise.then(data => MsgDeListNFTResponse.decode(new BinaryReader(data)));
    }
    buyNFT(request) {
        const data = MsgBuyNFT.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "BuyNFT", data);
        return promise.then(data => MsgBuyNFTResponse.decode(new BinaryReader(data)));
    }
    createAuction(request) {
        const data = MsgCreateAuction.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "CreateAuction", data);
        return promise.then(data => MsgCreateAuctionResponse.decode(new BinaryReader(data)));
    }
    cancelAuction(request) {
        const data = MsgCancelAuction.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "CancelAuction", data);
        return promise.then(data => MsgCancelAuctionResponse.decode(new BinaryReader(data)));
    }
    placeBid(request) {
        const data = MsgPlaceBid.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "PlaceBid", data);
        return promise.then(data => MsgPlaceBidResponse.decode(new BinaryReader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map