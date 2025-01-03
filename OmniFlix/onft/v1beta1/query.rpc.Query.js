import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCollectionRequest, QueryCollectionResponse, QueryIBCCollectionRequest, QueryDenomRequest, QueryDenomResponse, QueryIBCDenomRequest, QueryDenomsRequest, QueryDenomsResponse, QueryONFTRequest, QueryONFTResponse, QueryIBCDenomONFTRequest, QueryOwnerONFTsRequest, QueryOwnerONFTsResponse, QueryOwnerIBCDenomONFTsRequest, QuerySupplyRequest, QuerySupplyResponse, QueryIBCDenomSupplyRequest, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.collection = this.collection.bind(this);
        this.iBCCollection = this.iBCCollection.bind(this);
        this.denom = this.denom.bind(this);
        this.iBCDenom = this.iBCDenom.bind(this);
        this.denoms = this.denoms.bind(this);
        this.oNFT = this.oNFT.bind(this);
        this.iBCDenomONFT = this.iBCDenomONFT.bind(this);
        this.ownerONFTs = this.ownerONFTs.bind(this);
        this.ownerIBCDenomONFTs = this.ownerIBCDenomONFTs.bind(this);
        this.supply = this.supply.bind(this);
        this.iBCDenomSupply = this.iBCDenomSupply.bind(this);
        this.params = this.params.bind(this);
    }
    collection(request) {
        const data = QueryCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Collection", data);
        return promise.then(data => QueryCollectionResponse.decode(new BinaryReader(data)));
    }
    iBCCollection(request) {
        const data = QueryIBCCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCCollection", data);
        return promise.then(data => QueryCollectionResponse.decode(new BinaryReader(data)));
    }
    denom(request) {
        const data = QueryDenomRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denom", data);
        return promise.then(data => QueryDenomResponse.decode(new BinaryReader(data)));
    }
    iBCDenom(request) {
        const data = QueryIBCDenomRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenom", data);
        return promise.then(data => QueryDenomResponse.decode(new BinaryReader(data)));
    }
    denoms(request) {
        const data = QueryDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Denoms", data);
        return promise.then(data => QueryDenomsResponse.decode(new BinaryReader(data)));
    }
    oNFT(request) {
        const data = QueryONFTRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "ONFT", data);
        return promise.then(data => QueryONFTResponse.decode(new BinaryReader(data)));
    }
    iBCDenomONFT(request) {
        const data = QueryIBCDenomONFTRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomONFT", data);
        return promise.then(data => QueryONFTResponse.decode(new BinaryReader(data)));
    }
    ownerONFTs(request) {
        const data = QueryOwnerONFTsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerONFTs", data);
        return promise.then(data => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
    }
    ownerIBCDenomONFTs(request) {
        const data = QueryOwnerIBCDenomONFTsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "OwnerIBCDenomONFTs", data);
        return promise.then(data => QueryOwnerONFTsResponse.decode(new BinaryReader(data)));
    }
    supply(request) {
        const data = QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Supply", data);
        return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
    }
    iBCDenomSupply(request) {
        const data = QueryIBCDenomSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "IBCDenomSupply", data);
        return promise.then(data => QuerySupplyResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.onft.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        collection(request) {
            return queryService.collection(request);
        },
        iBCCollection(request) {
            return queryService.iBCCollection(request);
        },
        denom(request) {
            return queryService.denom(request);
        },
        iBCDenom(request) {
            return queryService.iBCDenom(request);
        },
        denoms(request) {
            return queryService.denoms(request);
        },
        oNFT(request) {
            return queryService.oNFT(request);
        },
        iBCDenomONFT(request) {
            return queryService.iBCDenomONFT(request);
        },
        ownerONFTs(request) {
            return queryService.ownerONFTs(request);
        },
        ownerIBCDenomONFTs(request) {
            return queryService.ownerIBCDenomONFTs(request);
        },
        supply(request) {
            return queryService.supply(request);
        },
        iBCDenomSupply(request) {
            return queryService.iBCDenomSupply(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map