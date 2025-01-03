import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { AppOptionsRequest, AppOptionsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.appOptions = this.appOptions.bind(this);
    }
    appOptions(request = {}) {
        const data = AppOptionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.autocli.v1.Query", "AppOptions", data);
        return promise.then(data => AppOptionsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        appOptions(request) {
            return queryService.appOptions(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map