import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryStreamPaymentsRequest, QueryStreamPaymentsResponse, QueryStreamPaymentRequest, QueryStreamPaymentResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.streamingPayments = this.streamingPayments.bind(this);
        this.streamingPayment = this.streamingPayment.bind(this);
        this.params = this.params.bind(this);
    }
    streamingPayments(request) {
        const data = QueryStreamPaymentsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Query", "StreamingPayments", data);
        return promise.then(data => QueryStreamPaymentsResponse.decode(new BinaryReader(data)));
    }
    streamingPayment(request) {
        const data = QueryStreamPaymentRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Query", "StreamingPayment", data);
        return promise.then(data => QueryStreamPaymentResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        streamingPayments(request) {
            return queryService.streamingPayments(request);
        },
        streamingPayment(request) {
            return queryService.streamingPayment(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map