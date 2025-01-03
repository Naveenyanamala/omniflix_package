import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
    }
    send(request) {
        const data = MsgSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Msg", "Send", data);
        return promise.then(data => MsgSendResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map