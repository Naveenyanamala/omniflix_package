import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCampaignsRequest, QueryCampaignsResponse, QueryCampaignRequest, QueryCampaignResponse, QueryClaimsRequest, QueryClaimsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.campaigns = this.campaigns.bind(this);
        this.campaign = this.campaign.bind(this);
        this.claims = this.claims.bind(this);
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    campaigns(request) {
        const data = QueryCampaignsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaigns", data);
        return promise.then(data => QueryCampaignsResponse.decode(new BinaryReader(data)));
    }
    campaign(request) {
        const data = QueryCampaignRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Campaign", data);
        return promise.then(data => QueryCampaignResponse.decode(new BinaryReader(data)));
    }
    claims(request) {
        const data = QueryClaimsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.itc.v1.Query", "Claims", data);
        return promise.then(data => QueryClaimsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        campaigns(request) {
            return queryService.campaigns(request);
        },
        campaign(request) {
            return queryService.campaign(request);
        },
        claims(request) {
            return queryService.claims(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map