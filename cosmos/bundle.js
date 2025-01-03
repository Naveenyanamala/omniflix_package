import * as _31 from "../cosmos_proto/coin";
import * as _32 from "./base/v1beta1/coin";
import * as _33 from "./base/abci/v1beta1/abci";
import * as _34 from "./base/kv/v1beta1/kv";
import * as _35 from "./base/node/v1beta1/query";
import * as _36 from "./base/query/v1beta1/pagination";
import * as _37 from "./base/reflection/v1beta1/reflection";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/snapshots/v1beta1/snapshot";
import * as _40 from "./base/store/v1beta1/commit_info";
import * as _41 from "./base/store/v1beta1/listening";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./base/tendermint/v1beta1/types";
import * as _44 from "../cosmos_proto/pagination";
import * as _45 from "./app/runtime/v1alpha1/module";
import * as _46 from "./app/v1alpha1/config";
import * as _47 from "./app/v1alpha1/module";
import * as _48 from "./app/v1alpha1/query";
import * as _49 from "./auth/module/v1/module";
import * as _50 from "./auth/v1beta1/auth";
import * as _51 from "./auth/v1beta1/genesis";
import * as _52 from "./auth/v1beta1/query";
import * as _53 from "./auth/v1beta1/tx";
import * as _54 from "./authz/module/v1/module";
import * as _55 from "./authz/v1beta1/authz";
import * as _56 from "./authz/v1beta1/event";
import * as _57 from "./authz/v1beta1/genesis";
import * as _58 from "./authz/v1beta1/query";
import * as _59 from "./authz/v1beta1/tx";
import * as _60 from "./autocli/v1/options";
import * as _61 from "./autocli/v1/query";
import * as _62 from "./bank/module/v1/module";
import * as _63 from "./bank/v1beta1/authz";
import * as _64 from "./bank/v1beta1/bank";
import * as _65 from "./bank/v1beta1/genesis";
import * as _66 from "./bank/v1beta1/query";
import * as _67 from "./bank/v1beta1/tx";
import * as _68 from "./capability/module/v1/module";
import * as _69 from "./capability/v1beta1/capability";
import * as _70 from "./capability/v1beta1/genesis";
import * as _71 from "./consensus/module/v1/module";
import * as _72 from "./consensus/v1/query";
import * as _73 from "./consensus/v1/tx";
import * as _74 from "./crisis/module/v1/module";
import * as _75 from "./crisis/v1beta1/genesis";
import * as _76 from "./crisis/v1beta1/tx";
import * as _77 from "./crypto/ed25519/keys";
import * as _78 from "./crypto/hd/v1/hd";
import * as _79 from "./crypto/keyring/v1/record";
import * as _80 from "./crypto/multisig/keys";
import * as _81 from "./crypto/secp256k1/keys";
import * as _82 from "./crypto/secp256r1/keys";
import * as _83 from "./distribution/module/v1/module";
import * as _84 from "./distribution/v1beta1/distribution";
import * as _85 from "./distribution/v1beta1/genesis";
import * as _86 from "./distribution/v1beta1/query";
import * as _87 from "./distribution/v1beta1/tx";
import * as _88 from "./evidence/module/v1/module";
import * as _89 from "./evidence/v1beta1/evidence";
import * as _90 from "./evidence/v1beta1/genesis";
import * as _91 from "./evidence/v1beta1/query";
import * as _92 from "./evidence/v1beta1/tx";
import * as _93 from "./feegrant/module/v1/module";
import * as _94 from "./feegrant/v1beta1/feegrant";
import * as _95 from "./feegrant/v1beta1/genesis";
import * as _96 from "./feegrant/v1beta1/query";
import * as _97 from "./feegrant/v1beta1/tx";
import * as _98 from "./genutil/module/v1/module";
import * as _99 from "./genutil/v1beta1/genesis";
import * as _100 from "./gov/module/v1/module";
import * as _101 from "./gov/v1/genesis";
import * as _102 from "./gov/v1/gov";
import * as _103 from "./gov/v1/query";
import * as _104 from "./gov/v1/tx";
import * as _105 from "./gov/v1beta1/genesis";
import * as _106 from "./gov/v1beta1/gov";
import * as _107 from "./gov/v1beta1/query";
import * as _108 from "./gov/v1beta1/tx";
import * as _109 from "./group/module/v1/module";
import * as _110 from "./group/v1/events";
import * as _111 from "./group/v1/genesis";
import * as _112 from "./group/v1/query";
import * as _113 from "./group/v1/tx";
import * as _114 from "./group/v1/types";
import * as _115 from "./mint/module/v1/module";
import * as _116 from "./mint/v1beta1/genesis";
import * as _117 from "./mint/v1beta1/mint";
import * as _118 from "./mint/v1beta1/query";
import * as _119 from "./mint/v1beta1/tx";
import * as _120 from "./msg/v1/msg";
import * as _121 from "./nft/module/v1/module";
import * as _122 from "./nft/v1beta1/event";
import * as _123 from "./nft/v1beta1/genesis";
import * as _124 from "./nft/v1beta1/nft";
import * as _125 from "./nft/v1beta1/query";
import * as _126 from "./nft/v1beta1/tx";
import * as _127 from "./orm/module/v1alpha1/module";
import * as _128 from "./orm/query/v1alpha1/query";
import * as _129 from "./orm/v1/orm";
import * as _130 from "./orm/v1alpha1/schema";
import * as _131 from "./params/module/v1/module";
import * as _132 from "./params/v1beta1/params";
import * as _133 from "./params/v1beta1/query";
import * as _134 from "./reflection/v1/reflection";
import * as _135 from "./slashing/module/v1/module";
import * as _136 from "./slashing/v1beta1/genesis";
import * as _137 from "./slashing/v1beta1/query";
import * as _138 from "./slashing/v1beta1/slashing";
import * as _139 from "./slashing/v1beta1/tx";
import * as _140 from "./staking/module/v1/module";
import * as _141 from "./staking/v1beta1/authz";
import * as _142 from "./staking/v1beta1/genesis";
import * as _143 from "./staking/v1beta1/query";
import * as _144 from "./staking/v1beta1/staking";
import * as _145 from "./staking/v1beta1/tx";
import * as _146 from "./tx/config/v1/config";
import * as _147 from "./tx/signing/v1beta1/signing";
import * as _148 from "./tx/v1beta1/service";
import * as _149 from "./tx/v1beta1/tx";
import * as _150 from "./upgrade/module/v1/module";
import * as _151 from "./upgrade/v1beta1/query";
import * as _152 from "./upgrade/v1beta1/tx";
import * as _153 from "./upgrade/v1beta1/upgrade";
import * as _154 from "./vesting/module/v1/module";
import * as _155 from "./vesting/v1beta1/tx";
import * as _156 from "./vesting/v1beta1/vesting";
import * as _207 from "./auth/v1beta1/tx.amino";
import * as _208 from "./authz/v1beta1/tx.amino";
import * as _209 from "./bank/v1beta1/tx.amino";
import * as _210 from "./consensus/v1/tx.amino";
import * as _211 from "./crisis/v1beta1/tx.amino";
import * as _212 from "./distribution/v1beta1/tx.amino";
import * as _213 from "./evidence/v1beta1/tx.amino";
import * as _214 from "./feegrant/v1beta1/tx.amino";
import * as _215 from "./gov/v1/tx.amino";
import * as _216 from "./gov/v1beta1/tx.amino";
import * as _217 from "./group/v1/tx.amino";
import * as _218 from "./mint/v1beta1/tx.amino";
import * as _219 from "./nft/v1beta1/tx.amino";
import * as _220 from "./slashing/v1beta1/tx.amino";
import * as _221 from "./staking/v1beta1/tx.amino";
import * as _222 from "./upgrade/v1beta1/tx.amino";
import * as _223 from "./vesting/v1beta1/tx.amino";
import * as _224 from "./auth/v1beta1/tx.registry";
import * as _225 from "./authz/v1beta1/tx.registry";
import * as _226 from "./bank/v1beta1/tx.registry";
import * as _227 from "./consensus/v1/tx.registry";
import * as _228 from "./crisis/v1beta1/tx.registry";
import * as _229 from "./distribution/v1beta1/tx.registry";
import * as _230 from "./evidence/v1beta1/tx.registry";
import * as _231 from "./feegrant/v1beta1/tx.registry";
import * as _232 from "./gov/v1/tx.registry";
import * as _233 from "./gov/v1beta1/tx.registry";
import * as _234 from "./group/v1/tx.registry";
import * as _235 from "./mint/v1beta1/tx.registry";
import * as _236 from "./nft/v1beta1/tx.registry";
import * as _237 from "./slashing/v1beta1/tx.registry";
import * as _238 from "./staking/v1beta1/tx.registry";
import * as _239 from "./upgrade/v1beta1/tx.registry";
import * as _240 from "./vesting/v1beta1/tx.registry";
import * as _241 from "./auth/v1beta1/query.lcd";
import * as _242 from "./authz/v1beta1/query.lcd";
import * as _243 from "./bank/v1beta1/query.lcd";
import * as _244 from "./base/node/v1beta1/query.lcd";
import * as _245 from "./base/tendermint/v1beta1/query.lcd";
import * as _246 from "./consensus/v1/query.lcd";
import * as _247 from "./distribution/v1beta1/query.lcd";
import * as _248 from "./evidence/v1beta1/query.lcd";
import * as _249 from "./feegrant/v1beta1/query.lcd";
import * as _250 from "./gov/v1/query.lcd";
import * as _251 from "./gov/v1beta1/query.lcd";
import * as _252 from "./group/v1/query.lcd";
import * as _253 from "./mint/v1beta1/query.lcd";
import * as _254 from "./nft/v1beta1/query.lcd";
import * as _255 from "./params/v1beta1/query.lcd";
import * as _256 from "./slashing/v1beta1/query.lcd";
import * as _257 from "./staking/v1beta1/query.lcd";
import * as _258 from "./tx/v1beta1/service.lcd";
import * as _259 from "./upgrade/v1beta1/query.lcd";
import * as _260 from "./app/v1alpha1/query.rpc.Query";
import * as _261 from "./auth/v1beta1/query.rpc.Query";
import * as _262 from "./authz/v1beta1/query.rpc.Query";
import * as _263 from "./autocli/v1/query.rpc.Query";
import * as _264 from "./bank/v1beta1/query.rpc.Query";
import * as _265 from "./base/node/v1beta1/query.rpc.Service";
import * as _266 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _267 from "./consensus/v1/query.rpc.Query";
import * as _268 from "./distribution/v1beta1/query.rpc.Query";
import * as _269 from "./evidence/v1beta1/query.rpc.Query";
import * as _270 from "./feegrant/v1beta1/query.rpc.Query";
import * as _271 from "./gov/v1/query.rpc.Query";
import * as _272 from "./gov/v1beta1/query.rpc.Query";
import * as _273 from "./group/v1/query.rpc.Query";
import * as _274 from "./mint/v1beta1/query.rpc.Query";
import * as _275 from "./nft/v1beta1/query.rpc.Query";
import * as _276 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _277 from "./params/v1beta1/query.rpc.Query";
import * as _278 from "./slashing/v1beta1/query.rpc.Query";
import * as _279 from "./staking/v1beta1/query.rpc.Query";
import * as _280 from "./tx/v1beta1/service.rpc.Service";
import * as _281 from "./upgrade/v1beta1/query.rpc.Query";
import * as _282 from "./auth/v1beta1/tx.rpc.msg";
import * as _283 from "./authz/v1beta1/tx.rpc.msg";
import * as _284 from "./bank/v1beta1/tx.rpc.msg";
import * as _285 from "./consensus/v1/tx.rpc.msg";
import * as _286 from "./crisis/v1beta1/tx.rpc.msg";
import * as _287 from "./distribution/v1beta1/tx.rpc.msg";
import * as _288 from "./evidence/v1beta1/tx.rpc.msg";
import * as _289 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _290 from "./gov/v1/tx.rpc.msg";
import * as _291 from "./gov/v1beta1/tx.rpc.msg";
import * as _292 from "./group/v1/tx.rpc.msg";
import * as _293 from "./mint/v1beta1/tx.rpc.msg";
import * as _294 from "./nft/v1beta1/tx.rpc.msg";
import * as _295 from "./slashing/v1beta1/tx.rpc.msg";
import * as _296 from "./staking/v1beta1/tx.rpc.msg";
import * as _297 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _298 from "./vesting/v1beta1/tx.rpc.msg";
import * as _305 from "./lcd";
import * as _306 from "./rpc.query";
import * as _307 from "./rpc.tx";
export var cosmos;
(function (cosmos) {
    let base;
    (function (base) {
        base.v1beta1 = {
            ..._31,
            ..._32
        };
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._33
            };
        })(abci = base.abci || (base.abci = {}));
        let kv;
        (function (kv) {
            kv.v1beta1 = {
                ..._34
            };
        })(kv = base.kv || (base.kv = {}));
        let node;
        (function (node) {
            node.v1beta1 = {
                ..._35,
                ..._244,
                ..._265
            };
        })(node = base.node || (base.node = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._36
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v1beta1 = {
                ..._37
            };
            reflection.v2alpha1 = {
                ..._38
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let snapshots;
        (function (snapshots) {
            snapshots.v1beta1 = {
                ..._39
            };
        })(snapshots = base.snapshots || (base.snapshots = {}));
        let store;
        (function (store) {
            store.v1beta1 = {
                ..._40,
                ..._41
            };
        })(store = base.store || (base.store = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._42,
                ..._43,
                ..._245,
                ..._266
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
    })(base = cosmos.base || (cosmos.base = {}));
    cosmos.query = {
        ..._44
    };
    let app;
    (function (app) {
        let runtime;
        (function (runtime) {
            runtime.v1alpha1 = {
                ..._45
            };
        })(runtime = app.runtime || (app.runtime = {}));
        app.v1alpha1 = {
            ..._46,
            ..._47,
            ..._48,
            ..._260
        };
    })(app = cosmos.app || (cosmos.app = {}));
    let auth;
    (function (auth) {
        let module;
        (function (module) {
            module.v1 = {
                ..._49
            };
        })(module = auth.module || (auth.module = {}));
        auth.v1beta1 = {
            ..._50,
            ..._51,
            ..._52,
            ..._53,
            ..._207,
            ..._224,
            ..._241,
            ..._261,
            ..._282
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        let module;
        (function (module) {
            module.v1 = {
                ..._54
            };
        })(module = authz.module || (authz.module = {}));
        authz.v1beta1 = {
            ..._55,
            ..._56,
            ..._57,
            ..._58,
            ..._59,
            ..._208,
            ..._225,
            ..._242,
            ..._262,
            ..._283
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let autocli;
    (function (autocli) {
        autocli.v1 = {
            ..._60,
            ..._61,
            ..._263
        };
    })(autocli = cosmos.autocli || (cosmos.autocli = {}));
    let bank;
    (function (bank) {
        let module;
        (function (module) {
            module.v1 = {
                ..._62
            };
        })(module = bank.module || (bank.module = {}));
        bank.v1beta1 = {
            ..._63,
            ..._64,
            ..._65,
            ..._66,
            ..._67,
            ..._209,
            ..._226,
            ..._243,
            ..._264,
            ..._284
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let capability;
    (function (capability) {
        let module;
        (function (module) {
            module.v1 = {
                ..._68
            };
        })(module = capability.module || (capability.module = {}));
        capability.v1beta1 = {
            ..._69,
            ..._70
        };
    })(capability = cosmos.capability || (cosmos.capability = {}));
    let consensus;
    (function (consensus) {
        let module;
        (function (module) {
            module.v1 = {
                ..._71
            };
        })(module = consensus.module || (consensus.module = {}));
        consensus.v1 = {
            ..._72,
            ..._73,
            ..._210,
            ..._227,
            ..._246,
            ..._267,
            ..._285
        };
    })(consensus = cosmos.consensus || (cosmos.consensus = {}));
    let crisis;
    (function (crisis) {
        let module;
        (function (module) {
            module.v1 = {
                ..._74
            };
        })(module = crisis.module || (crisis.module = {}));
        crisis.v1beta1 = {
            ..._75,
            ..._76,
            ..._211,
            ..._228,
            ..._286
        };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._77
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._78
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._79
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._80
        };
        crypto.secp256k1 = {
            ..._81
        };
        crypto.secp256r1 = {
            ..._82
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        let module;
        (function (module) {
            module.v1 = {
                ..._83
            };
        })(module = distribution.module || (distribution.module = {}));
        distribution.v1beta1 = {
            ..._84,
            ..._85,
            ..._86,
            ..._87,
            ..._212,
            ..._229,
            ..._247,
            ..._268,
            ..._287
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        let module;
        (function (module) {
            module.v1 = {
                ..._88
            };
        })(module = evidence.module || (evidence.module = {}));
        evidence.v1beta1 = {
            ..._89,
            ..._90,
            ..._91,
            ..._92,
            ..._213,
            ..._230,
            ..._248,
            ..._269,
            ..._288
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        let module;
        (function (module) {
            module.v1 = {
                ..._93
            };
        })(module = feegrant.module || (feegrant.module = {}));
        feegrant.v1beta1 = {
            ..._94,
            ..._95,
            ..._96,
            ..._97,
            ..._214,
            ..._231,
            ..._249,
            ..._270,
            ..._289
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let genutil;
    (function (genutil) {
        let module;
        (function (module) {
            module.v1 = {
                ..._98
            };
        })(module = genutil.module || (genutil.module = {}));
        genutil.v1beta1 = {
            ..._99
        };
    })(genutil = cosmos.genutil || (cosmos.genutil = {}));
    let gov;
    (function (gov) {
        let module;
        (function (module) {
            module.v1 = {
                ..._100
            };
        })(module = gov.module || (gov.module = {}));
        gov.v1 = {
            ..._101,
            ..._102,
            ..._103,
            ..._104,
            ..._215,
            ..._232,
            ..._250,
            ..._271,
            ..._290
        };
        gov.v1beta1 = {
            ..._105,
            ..._106,
            ..._107,
            ..._108,
            ..._216,
            ..._233,
            ..._251,
            ..._272,
            ..._291
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        let module;
        (function (module) {
            module.v1 = {
                ..._109
            };
        })(module = group.module || (group.module = {}));
        group.v1 = {
            ..._110,
            ..._111,
            ..._112,
            ..._113,
            ..._114,
            ..._217,
            ..._234,
            ..._252,
            ..._273,
            ..._292
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let mint;
    (function (mint) {
        let module;
        (function (module) {
            module.v1 = {
                ..._115
            };
        })(module = mint.module || (mint.module = {}));
        mint.v1beta1 = {
            ..._116,
            ..._117,
            ..._118,
            ..._119,
            ..._218,
            ..._235,
            ..._253,
            ..._274,
            ..._293
        };
    })(mint = cosmos.mint || (cosmos.mint = {}));
    let msg;
    (function (msg) {
        msg.v1 = {
            ..._120
        };
    })(msg = cosmos.msg || (cosmos.msg = {}));
    let nft;
    (function (nft) {
        let module;
        (function (module) {
            module.v1 = {
                ..._121
            };
        })(module = nft.module || (nft.module = {}));
        nft.v1beta1 = {
            ..._122,
            ..._123,
            ..._124,
            ..._125,
            ..._126,
            ..._219,
            ..._236,
            ..._254,
            ..._275,
            ..._294
        };
    })(nft = cosmos.nft || (cosmos.nft = {}));
    let orm;
    (function (orm) {
        let module;
        (function (module) {
            module.v1alpha1 = {
                ..._127
            };
        })(module = orm.module || (orm.module = {}));
        let query;
        (function (query) {
            query.v1alpha1 = {
                ..._128,
                ..._276
            };
        })(query = orm.query || (orm.query = {}));
        orm.v1 = {
            ..._129
        };
        orm.v1alpha1 = {
            ..._130
        };
    })(orm = cosmos.orm || (cosmos.orm = {}));
    let params;
    (function (params) {
        let module;
        (function (module) {
            module.v1 = {
                ..._131
            };
        })(module = params.module || (params.module = {}));
        params.v1beta1 = {
            ..._132,
            ..._133,
            ..._255,
            ..._277
        };
    })(params = cosmos.params || (cosmos.params = {}));
    let reflection;
    (function (reflection) {
        reflection.v1 = {
            ..._134
        };
    })(reflection = cosmos.reflection || (cosmos.reflection = {}));
    let slashing;
    (function (slashing) {
        let module;
        (function (module) {
            module.v1 = {
                ..._135
            };
        })(module = slashing.module || (slashing.module = {}));
        slashing.v1beta1 = {
            ..._136,
            ..._137,
            ..._138,
            ..._139,
            ..._220,
            ..._237,
            ..._256,
            ..._278,
            ..._295
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        let module;
        (function (module) {
            module.v1 = {
                ..._140
            };
        })(module = staking.module || (staking.module = {}));
        staking.v1beta1 = {
            ..._141,
            ..._142,
            ..._143,
            ..._144,
            ..._145,
            ..._221,
            ..._238,
            ..._257,
            ..._279,
            ..._296
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let config;
        (function (config) {
            config.v1 = {
                ..._146
            };
        })(config = tx.config || (tx.config = {}));
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._147
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._148,
            ..._149,
            ..._258,
            ..._280
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        let module;
        (function (module) {
            module.v1 = {
                ..._150
            };
        })(module = upgrade.module || (upgrade.module = {}));
        upgrade.v1beta1 = {
            ..._151,
            ..._152,
            ..._153,
            ..._222,
            ..._239,
            ..._259,
            ..._281,
            ..._297
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    let vesting;
    (function (vesting) {
        let module;
        (function (module) {
            module.v1 = {
                ..._154
            };
        })(module = vesting.module || (vesting.module = {}));
        vesting.v1beta1 = {
            ..._155,
            ..._156,
            ..._223,
            ..._240,
            ..._298
        };
    })(vesting = cosmos.vesting || (cosmos.vesting = {}));
    cosmos.ClientFactory = {
        ..._305,
        ..._306,
        ..._307
    };
})(cosmos || (cosmos = {}));
//# sourceMappingURL=bundle.js.map