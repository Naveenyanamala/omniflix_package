import * as _0 from "./alloc/v1beta1/genesis";
import * as _1 from "./alloc/v1beta1/params";
import * as _2 from "./alloc/v1beta1/query";
import * as _3 from "./alloc/v1beta1/tx";
import * as _4 from "./globalfee/v1beta1/genesis";
import * as _5 from "./globalfee/v1beta1/query";
import * as _6 from "./globalfee/v1beta1/tx";
import * as _7 from "./itc/v1/genesis";
import * as _8 from "./itc/v1/itc";
import * as _9 from "./itc/v1/params";
import * as _10 from "./itc/v1/query";
import * as _11 from "./itc/v1/tx";
import * as _12 from "./marketplace/v1beta1/auction";
import * as _13 from "./marketplace/v1beta1/events";
import * as _14 from "./marketplace/v1beta1/genesis";
import * as _15 from "./marketplace/v1beta1/listing";
import * as _16 from "./marketplace/v1beta1/params";
import * as _17 from "./marketplace/v1beta1/query";
import * as _18 from "./marketplace/v1beta1/tx";
import * as _19 from "./onft/v1beta1/genesis";
import * as _20 from "./onft/v1beta1/onft";
import * as _21 from "./onft/v1beta1/params";
import * as _22 from "./onft/v1beta1/query";
import * as _23 from "./onft/v1beta1/tx";
import * as _177 from "./alloc/v1beta1/tx.amino";
import * as _178 from "./globalfee/v1beta1/tx.amino";
import * as _179 from "./itc/v1/tx.amino";
import * as _180 from "./marketplace/v1beta1/tx.amino";
import * as _181 from "./onft/v1beta1/tx.amino";
import * as _182 from "./alloc/v1beta1/tx.registry";
import * as _183 from "./globalfee/v1beta1/tx.registry";
import * as _184 from "./itc/v1/tx.registry";
import * as _185 from "./marketplace/v1beta1/tx.registry";
import * as _186 from "./onft/v1beta1/tx.registry";
import * as _187 from "./alloc/v1beta1/query.lcd";
import * as _188 from "./globalfee/v1beta1/query.lcd";
import * as _189 from "./itc/v1/query.lcd";
import * as _190 from "./marketplace/v1beta1/query.lcd";
import * as _191 from "./onft/v1beta1/query.lcd";
import * as _192 from "./alloc/v1beta1/query.rpc.Query";
import * as _193 from "./globalfee/v1beta1/query.rpc.Query";
import * as _194 from "./itc/v1/query.rpc.Query";
import * as _195 from "./marketplace/v1beta1/query.rpc.Query";
import * as _196 from "./onft/v1beta1/query.rpc.Query";
import * as _197 from "./alloc/v1beta1/tx.rpc.msg";
import * as _198 from "./globalfee/v1beta1/tx.rpc.msg";
import * as _199 from "./itc/v1/tx.rpc.msg";
import * as _200 from "./marketplace/v1beta1/tx.rpc.msg";
import * as _201 from "./onft/v1beta1/tx.rpc.msg";
import * as _299 from "./lcd";
import * as _300 from "./rpc.query";
import * as _301 from "./rpc.tx";
export var OmniFlix;
(function (OmniFlix) {
    let alloc;
    (function (alloc) {
        alloc.v1beta1 = {
            ..._0,
            ..._1,
            ..._2,
            ..._3,
            ..._177,
            ..._182,
            ..._187,
            ..._192,
            ..._197
        };
    })(alloc = OmniFlix.alloc || (OmniFlix.alloc = {}));
    let globalfee;
    (function (globalfee) {
        globalfee.v1beta1 = {
            ..._4,
            ..._5,
            ..._6,
            ..._178,
            ..._183,
            ..._188,
            ..._193,
            ..._198
        };
    })(globalfee = OmniFlix.globalfee || (OmniFlix.globalfee = {}));
    let itc;
    (function (itc) {
        itc.v1 = {
            ..._7,
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._179,
            ..._184,
            ..._189,
            ..._194,
            ..._199
        };
    })(itc = OmniFlix.itc || (OmniFlix.itc = {}));
    let marketplace;
    (function (marketplace) {
        marketplace.v1beta1 = {
            ..._12,
            ..._13,
            ..._14,
            ..._15,
            ..._16,
            ..._17,
            ..._18,
            ..._180,
            ..._185,
            ..._190,
            ..._195,
            ..._200
        };
    })(marketplace = OmniFlix.marketplace || (OmniFlix.marketplace = {}));
    let onft;
    (function (onft) {
        onft.v1beta1 = {
            ..._19,
            ..._20,
            ..._21,
            ..._22,
            ..._23,
            ..._181,
            ..._186,
            ..._191,
            ..._196,
            ..._201
        };
    })(onft = OmniFlix.onft || (OmniFlix.onft = {}));
    OmniFlix.ClientFactory = {
        ..._299,
        ..._300,
        ..._301
    };
})(OmniFlix || (OmniFlix = {}));
//# sourceMappingURL=bundle.js.map