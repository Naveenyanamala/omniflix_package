import * as _24 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _25 from "./tokenfactory/v1beta1/genesis";
import * as _26 from "./tokenfactory/v1beta1/params";
import * as _27 from "./tokenfactory/v1beta1/query";
import * as _28 from "./tokenfactory/v1beta1/tx";
import * as _202 from "./tokenfactory/v1beta1/tx.amino";
import * as _203 from "./tokenfactory/v1beta1/tx.registry";
import * as _204 from "./tokenfactory/v1beta1/query.lcd";
import * as _205 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _206 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _302 from "./lcd";
import * as _303 from "./rpc.query";
import * as _304 from "./rpc.tx";
export var osmosis;
(function (osmosis) {
    let tokenfactory;
    (function (tokenfactory) {
        tokenfactory.v1beta1 = {
            ..._24,
            ..._25,
            ..._26,
            ..._27,
            ..._28,
            ..._202,
            ..._203,
            ..._204,
            ..._205,
            ..._206
        };
    })(tokenfactory = osmosis.tokenfactory || (osmosis.tokenfactory = {}));
    osmosis.ClientFactory = {
        ..._302,
        ..._303,
        ..._304
    };
})(osmosis || (osmosis = {}));
//# sourceMappingURL=bundle.js.map