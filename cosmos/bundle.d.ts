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
export declare namespace cosmos {
    namespace base {
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _32.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.Coin;
                fromPartial(object: Partial<_32.Coin>): _32.Coin;
                fromAmino(object: _32.CoinAmino): _32.Coin;
                toAmino(message: _32.Coin): _32.CoinAmino;
                fromAminoMsg(object: _32.CoinAminoMsg): _32.Coin;
                toAminoMsg(message: _32.Coin): _32.CoinAminoMsg;
                fromProtoMsg(message: _32.CoinProtoMsg): _32.Coin;
                toProto(message: _32.Coin): Uint8Array;
                toProtoMsg(message: _32.Coin): _32.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _32.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.DecCoin;
                fromPartial(object: Partial<_32.DecCoin>): _32.DecCoin;
                fromAmino(object: _32.DecCoinAmino): _32.DecCoin;
                toAmino(message: _32.DecCoin): _32.DecCoinAmino;
                fromAminoMsg(object: _32.DecCoinAminoMsg): _32.DecCoin;
                toAminoMsg(message: _32.DecCoin): _32.DecCoinAminoMsg;
                fromProtoMsg(message: _32.DecCoinProtoMsg): _32.DecCoin;
                toProto(message: _32.DecCoin): Uint8Array;
                toProtoMsg(message: _32.DecCoin): _32.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _32.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.IntProto;
                fromPartial(object: Partial<_32.IntProto>): _32.IntProto;
                fromAmino(object: _32.IntProtoAmino): _32.IntProto;
                toAmino(message: _32.IntProto): _32.IntProtoAmino;
                fromAminoMsg(object: _32.IntProtoAminoMsg): _32.IntProto;
                toAminoMsg(message: _32.IntProto): _32.IntProtoAminoMsg;
                fromProtoMsg(message: _32.IntProtoProtoMsg): _32.IntProto;
                toProto(message: _32.IntProto): Uint8Array;
                toProtoMsg(message: _32.IntProto): _32.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _32.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.DecProto;
                fromPartial(object: Partial<_32.DecProto>): _32.DecProto;
                fromAmino(object: _32.DecProtoAmino): _32.DecProto;
                toAmino(message: _32.DecProto): _32.DecProtoAmino;
                fromAminoMsg(object: _32.DecProtoAminoMsg): _32.DecProto;
                toAminoMsg(message: _32.DecProto): _32.DecProtoAminoMsg;
                fromProtoMsg(message: _32.DecProtoProtoMsg): _32.DecProto;
                toProto(message: _32.DecProto): Uint8Array;
                toProtoMsg(message: _32.DecProto): _32.DecProtoProtoMsg;
            };
        };
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _33.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.TxResponse;
                    fromPartial(object: Partial<_33.TxResponse>): _33.TxResponse;
                    fromAmino(object: _33.TxResponseAmino): _33.TxResponse;
                    toAmino(message: _33.TxResponse): _33.TxResponseAmino;
                    fromAminoMsg(object: _33.TxResponseAminoMsg): _33.TxResponse;
                    toAminoMsg(message: _33.TxResponse): _33.TxResponseAminoMsg;
                    fromProtoMsg(message: _33.TxResponseProtoMsg): _33.TxResponse;
                    toProto(message: _33.TxResponse): Uint8Array;
                    toProtoMsg(message: _33.TxResponse): _33.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _33.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.ABCIMessageLog;
                    fromPartial(object: Partial<_33.ABCIMessageLog>): _33.ABCIMessageLog;
                    fromAmino(object: _33.ABCIMessageLogAmino): _33.ABCIMessageLog;
                    toAmino(message: _33.ABCIMessageLog): _33.ABCIMessageLogAmino;
                    fromAminoMsg(object: _33.ABCIMessageLogAminoMsg): _33.ABCIMessageLog;
                    toAminoMsg(message: _33.ABCIMessageLog): _33.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _33.ABCIMessageLogProtoMsg): _33.ABCIMessageLog;
                    toProto(message: _33.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _33.ABCIMessageLog): _33.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _33.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.StringEvent;
                    fromPartial(object: Partial<_33.StringEvent>): _33.StringEvent;
                    fromAmino(object: _33.StringEventAmino): _33.StringEvent;
                    toAmino(message: _33.StringEvent): _33.StringEventAmino;
                    fromAminoMsg(object: _33.StringEventAminoMsg): _33.StringEvent;
                    toAminoMsg(message: _33.StringEvent): _33.StringEventAminoMsg;
                    fromProtoMsg(message: _33.StringEventProtoMsg): _33.StringEvent;
                    toProto(message: _33.StringEvent): Uint8Array;
                    toProtoMsg(message: _33.StringEvent): _33.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _33.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Attribute;
                    fromPartial(object: Partial<_33.Attribute>): _33.Attribute;
                    fromAmino(object: _33.AttributeAmino): _33.Attribute;
                    toAmino(message: _33.Attribute): _33.AttributeAmino;
                    fromAminoMsg(object: _33.AttributeAminoMsg): _33.Attribute;
                    toAminoMsg(message: _33.Attribute): _33.AttributeAminoMsg;
                    fromProtoMsg(message: _33.AttributeProtoMsg): _33.Attribute;
                    toProto(message: _33.Attribute): Uint8Array;
                    toProtoMsg(message: _33.Attribute): _33.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _33.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.GasInfo;
                    fromPartial(object: Partial<_33.GasInfo>): _33.GasInfo;
                    fromAmino(object: _33.GasInfoAmino): _33.GasInfo;
                    toAmino(message: _33.GasInfo): _33.GasInfoAmino;
                    fromAminoMsg(object: _33.GasInfoAminoMsg): _33.GasInfo;
                    toAminoMsg(message: _33.GasInfo): _33.GasInfoAminoMsg;
                    fromProtoMsg(message: _33.GasInfoProtoMsg): _33.GasInfo;
                    toProto(message: _33.GasInfo): Uint8Array;
                    toProtoMsg(message: _33.GasInfo): _33.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _33.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.Result;
                    fromPartial(object: Partial<_33.Result>): _33.Result;
                    fromAmino(object: _33.ResultAmino): _33.Result;
                    toAmino(message: _33.Result): _33.ResultAmino;
                    fromAminoMsg(object: _33.ResultAminoMsg): _33.Result;
                    toAminoMsg(message: _33.Result): _33.ResultAminoMsg;
                    fromProtoMsg(message: _33.ResultProtoMsg): _33.Result;
                    toProto(message: _33.Result): Uint8Array;
                    toProtoMsg(message: _33.Result): _33.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _33.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.SimulationResponse;
                    fromPartial(object: Partial<_33.SimulationResponse>): _33.SimulationResponse;
                    fromAmino(object: _33.SimulationResponseAmino): _33.SimulationResponse;
                    toAmino(message: _33.SimulationResponse): _33.SimulationResponseAmino;
                    fromAminoMsg(object: _33.SimulationResponseAminoMsg): _33.SimulationResponse;
                    toAminoMsg(message: _33.SimulationResponse): _33.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _33.SimulationResponseProtoMsg): _33.SimulationResponse;
                    toProto(message: _33.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _33.SimulationResponse): _33.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _33.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgData;
                    fromPartial(object: Partial<_33.MsgData>): _33.MsgData;
                    fromAmino(object: _33.MsgDataAmino): _33.MsgData;
                    toAmino(message: _33.MsgData): _33.MsgDataAmino;
                    fromAminoMsg(object: _33.MsgDataAminoMsg): _33.MsgData;
                    toAminoMsg(message: _33.MsgData): _33.MsgDataAminoMsg;
                    fromProtoMsg(message: _33.MsgDataProtoMsg): _33.MsgData;
                    toProto(message: _33.MsgData): Uint8Array;
                    toProtoMsg(message: _33.MsgData): _33.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _33.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.TxMsgData;
                    fromPartial(object: Partial<_33.TxMsgData>): _33.TxMsgData;
                    fromAmino(object: _33.TxMsgDataAmino): _33.TxMsgData;
                    toAmino(message: _33.TxMsgData): _33.TxMsgDataAmino;
                    fromAminoMsg(object: _33.TxMsgDataAminoMsg): _33.TxMsgData;
                    toAminoMsg(message: _33.TxMsgData): _33.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _33.TxMsgDataProtoMsg): _33.TxMsgData;
                    toProto(message: _33.TxMsgData): Uint8Array;
                    toProtoMsg(message: _33.TxMsgData): _33.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _33.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.SearchTxsResult;
                    fromPartial(object: Partial<_33.SearchTxsResult>): _33.SearchTxsResult;
                    fromAmino(object: _33.SearchTxsResultAmino): _33.SearchTxsResult;
                    toAmino(message: _33.SearchTxsResult): _33.SearchTxsResultAmino;
                    fromAminoMsg(object: _33.SearchTxsResultAminoMsg): _33.SearchTxsResult;
                    toAminoMsg(message: _33.SearchTxsResult): _33.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _33.SearchTxsResultProtoMsg): _33.SearchTxsResult;
                    toProto(message: _33.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _33.SearchTxsResult): _33.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _34.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Pairs;
                    fromPartial(object: Partial<_34.Pairs>): _34.Pairs;
                    fromAmino(object: _34.PairsAmino): _34.Pairs;
                    toAmino(message: _34.Pairs): _34.PairsAmino;
                    fromAminoMsg(object: _34.PairsAminoMsg): _34.Pairs;
                    toAminoMsg(message: _34.Pairs): _34.PairsAminoMsg;
                    fromProtoMsg(message: _34.PairsProtoMsg): _34.Pairs;
                    toProto(message: _34.Pairs): Uint8Array;
                    toProtoMsg(message: _34.Pairs): _34.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _34.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Pair;
                    fromPartial(object: Partial<_34.Pair>): _34.Pair;
                    fromAmino(object: _34.PairAmino): _34.Pair;
                    toAmino(message: _34.Pair): _34.PairAmino;
                    fromAminoMsg(object: _34.PairAminoMsg): _34.Pair;
                    toAminoMsg(message: _34.Pair): _34.PairAminoMsg;
                    fromProtoMsg(message: _34.PairProtoMsg): _34.Pair;
                    toProto(message: _34.Pair): Uint8Array;
                    toProtoMsg(message: _34.Pair): _34.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _265.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _35.ConfigRequest): Promise<_35.ConfigResponse>;
                };
                LCDQueryClient: typeof _244.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _35.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.ConfigRequest;
                    fromPartial(_: Partial<_35.ConfigRequest>): _35.ConfigRequest;
                    fromAmino(_: _35.ConfigRequestAmino): _35.ConfigRequest;
                    toAmino(_: _35.ConfigRequest): _35.ConfigRequestAmino;
                    fromAminoMsg(object: _35.ConfigRequestAminoMsg): _35.ConfigRequest;
                    toAminoMsg(message: _35.ConfigRequest): _35.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _35.ConfigRequestProtoMsg): _35.ConfigRequest;
                    toProto(message: _35.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _35.ConfigRequest): _35.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _35.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.ConfigResponse;
                    fromPartial(object: Partial<_35.ConfigResponse>): _35.ConfigResponse;
                    fromAmino(object: _35.ConfigResponseAmino): _35.ConfigResponse;
                    toAmino(message: _35.ConfigResponse): _35.ConfigResponseAmino;
                    fromAminoMsg(object: _35.ConfigResponseAminoMsg): _35.ConfigResponse;
                    toAminoMsg(message: _35.ConfigResponse): _35.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _35.ConfigResponseProtoMsg): _35.ConfigResponse;
                    toProto(message: _35.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _35.ConfigResponse): _35.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _36.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.PageRequest;
                    fromPartial(object: Partial<_36.PageRequest>): _36.PageRequest;
                    fromAmino(object: _36.PageRequestAmino): _36.PageRequest;
                    toAmino(message: _36.PageRequest): _36.PageRequestAmino;
                    fromAminoMsg(object: _36.PageRequestAminoMsg): _36.PageRequest;
                    toAminoMsg(message: _36.PageRequest): _36.PageRequestAminoMsg;
                    fromProtoMsg(message: _36.PageRequestProtoMsg): _36.PageRequest;
                    toProto(message: _36.PageRequest): Uint8Array;
                    toProtoMsg(message: _36.PageRequest): _36.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _36.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.PageResponse;
                    fromPartial(object: Partial<_36.PageResponse>): _36.PageResponse;
                    fromAmino(object: _36.PageResponseAmino): _36.PageResponse;
                    toAmino(message: _36.PageResponse): _36.PageResponseAmino;
                    fromAminoMsg(object: _36.PageResponseAminoMsg): _36.PageResponse;
                    toAminoMsg(message: _36.PageResponse): _36.PageResponseAminoMsg;
                    fromProtoMsg(message: _36.PageResponseProtoMsg): _36.PageResponse;
                    toProto(message: _36.PageResponse): Uint8Array;
                    toProtoMsg(message: _36.PageResponse): _36.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _37.ListAllInterfacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_37.ListAllInterfacesRequest>): _37.ListAllInterfacesRequest;
                    fromAmino(_: _37.ListAllInterfacesRequestAmino): _37.ListAllInterfacesRequest;
                    toAmino(_: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesRequestAminoMsg): _37.ListAllInterfacesRequest;
                    toAminoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesRequestProtoMsg): _37.ListAllInterfacesRequest;
                    toProto(message: _37.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesRequest): _37.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _37.ListAllInterfacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_37.ListAllInterfacesResponse>): _37.ListAllInterfacesResponse;
                    fromAmino(object: _37.ListAllInterfacesResponseAmino): _37.ListAllInterfacesResponse;
                    toAmino(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _37.ListAllInterfacesResponseAminoMsg): _37.ListAllInterfacesResponse;
                    toAminoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _37.ListAllInterfacesResponseProtoMsg): _37.ListAllInterfacesResponse;
                    toProto(message: _37.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _37.ListAllInterfacesResponse): _37.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ListImplementationsRequest;
                    fromPartial(object: Partial<_37.ListImplementationsRequest>): _37.ListImplementationsRequest;
                    fromAmino(object: _37.ListImplementationsRequestAmino): _37.ListImplementationsRequest;
                    toAmino(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _37.ListImplementationsRequestAminoMsg): _37.ListImplementationsRequest;
                    toAminoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsRequestProtoMsg): _37.ListImplementationsRequest;
                    toProto(message: _37.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsRequest): _37.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _37.ListImplementationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.ListImplementationsResponse;
                    fromPartial(object: Partial<_37.ListImplementationsResponse>): _37.ListImplementationsResponse;
                    fromAmino(object: _37.ListImplementationsResponseAmino): _37.ListImplementationsResponse;
                    toAmino(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _37.ListImplementationsResponseAminoMsg): _37.ListImplementationsResponse;
                    toAminoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _37.ListImplementationsResponseProtoMsg): _37.ListImplementationsResponse;
                    toProto(message: _37.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _37.ListImplementationsResponse): _37.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.AppDescriptor;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                    fromAmino(object: _38.AppDescriptorAmino): _38.AppDescriptor;
                    toAmino(message: _38.AppDescriptor): _38.AppDescriptorAmino;
                    fromAminoMsg(object: _38.AppDescriptorAminoMsg): _38.AppDescriptor;
                    toAminoMsg(message: _38.AppDescriptor): _38.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AppDescriptorProtoMsg): _38.AppDescriptor;
                    toProto(message: _38.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AppDescriptor): _38.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _38.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.TxDescriptor;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                    fromAmino(object: _38.TxDescriptorAmino): _38.TxDescriptor;
                    toAmino(message: _38.TxDescriptor): _38.TxDescriptorAmino;
                    fromAminoMsg(object: _38.TxDescriptorAminoMsg): _38.TxDescriptor;
                    toAminoMsg(message: _38.TxDescriptor): _38.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _38.TxDescriptorProtoMsg): _38.TxDescriptor;
                    toProto(message: _38.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _38.TxDescriptor): _38.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.AuthnDescriptor;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                    fromAmino(object: _38.AuthnDescriptorAmino): _38.AuthnDescriptor;
                    toAmino(message: _38.AuthnDescriptor): _38.AuthnDescriptorAmino;
                    fromAminoMsg(object: _38.AuthnDescriptorAminoMsg): _38.AuthnDescriptor;
                    toAminoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AuthnDescriptorProtoMsg): _38.AuthnDescriptor;
                    toProto(message: _38.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _38.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.SigningModeDescriptor;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                    fromAmino(object: _38.SigningModeDescriptorAmino): _38.SigningModeDescriptor;
                    toAmino(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _38.SigningModeDescriptorAminoMsg): _38.SigningModeDescriptor;
                    toAminoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _38.SigningModeDescriptorProtoMsg): _38.SigningModeDescriptor;
                    toProto(message: _38.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.ChainDescriptor;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                    fromAmino(object: _38.ChainDescriptorAmino): _38.ChainDescriptor;
                    toAmino(message: _38.ChainDescriptor): _38.ChainDescriptorAmino;
                    fromAminoMsg(object: _38.ChainDescriptorAminoMsg): _38.ChainDescriptor;
                    toAminoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ChainDescriptorProtoMsg): _38.ChainDescriptor;
                    toProto(message: _38.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _38.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.CodecDescriptor;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                    fromAmino(object: _38.CodecDescriptorAmino): _38.CodecDescriptor;
                    toAmino(message: _38.CodecDescriptor): _38.CodecDescriptorAmino;
                    fromAminoMsg(object: _38.CodecDescriptorAminoMsg): _38.CodecDescriptor;
                    toAminoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _38.CodecDescriptorProtoMsg): _38.CodecDescriptor;
                    toProto(message: _38.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.InterfaceDescriptor;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                    fromAmino(object: _38.InterfaceDescriptorAmino): _38.InterfaceDescriptor;
                    toAmino(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceDescriptorAminoMsg): _38.InterfaceDescriptor;
                    toAminoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceDescriptorProtoMsg): _38.InterfaceDescriptor;
                    toProto(message: _38.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.InterfaceImplementerDescriptor;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                    fromAmino(object: _38.InterfaceImplementerDescriptorAmino): _38.InterfaceImplementerDescriptor;
                    toAmino(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceImplementerDescriptorAminoMsg): _38.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceImplementerDescriptorProtoMsg): _38.InterfaceImplementerDescriptor;
                    toProto(message: _38.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _38.InterfaceAcceptingMessageDescriptorAmino): _38.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceAcceptingMessageDescriptorAminoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceAcceptingMessageDescriptorProtoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _38.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.ConfigurationDescriptor;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                    fromAmino(object: _38.ConfigurationDescriptorAmino): _38.ConfigurationDescriptor;
                    toAmino(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _38.ConfigurationDescriptorAminoMsg): _38.ConfigurationDescriptor;
                    toAminoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ConfigurationDescriptorProtoMsg): _38.ConfigurationDescriptor;
                    toProto(message: _38.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _38.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.MsgDescriptor;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                    fromAmino(object: _38.MsgDescriptorAmino): _38.MsgDescriptor;
                    toAmino(message: _38.MsgDescriptor): _38.MsgDescriptorAmino;
                    fromAminoMsg(object: _38.MsgDescriptorAminoMsg): _38.MsgDescriptor;
                    toAminoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _38.MsgDescriptorProtoMsg): _38.MsgDescriptor;
                    toProto(message: _38.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetAuthnDescriptorRequest;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                    fromAmino(_: _38.GetAuthnDescriptorRequestAmino): _38.GetAuthnDescriptorRequest;
                    toAmino(_: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorRequestAminoMsg): _38.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorRequestProtoMsg): _38.GetAuthnDescriptorRequest;
                    toProto(message: _38.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetAuthnDescriptorResponse;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                    fromAmino(object: _38.GetAuthnDescriptorResponseAmino): _38.GetAuthnDescriptorResponse;
                    toAmino(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorResponseAminoMsg): _38.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorResponseProtoMsg): _38.GetAuthnDescriptorResponse;
                    toProto(message: _38.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetChainDescriptorRequest;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                    fromAmino(_: _38.GetChainDescriptorRequestAmino): _38.GetChainDescriptorRequest;
                    toAmino(_: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorRequestAminoMsg): _38.GetChainDescriptorRequest;
                    toAminoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorRequestProtoMsg): _38.GetChainDescriptorRequest;
                    toProto(message: _38.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetChainDescriptorResponse;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                    fromAmino(object: _38.GetChainDescriptorResponseAmino): _38.GetChainDescriptorResponse;
                    toAmino(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorResponseAminoMsg): _38.GetChainDescriptorResponse;
                    toAminoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorResponseProtoMsg): _38.GetChainDescriptorResponse;
                    toProto(message: _38.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetCodecDescriptorRequest;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                    fromAmino(_: _38.GetCodecDescriptorRequestAmino): _38.GetCodecDescriptorRequest;
                    toAmino(_: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorRequestAminoMsg): _38.GetCodecDescriptorRequest;
                    toAminoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorRequestProtoMsg): _38.GetCodecDescriptorRequest;
                    toProto(message: _38.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetCodecDescriptorResponse;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                    fromAmino(object: _38.GetCodecDescriptorResponseAmino): _38.GetCodecDescriptorResponse;
                    toAmino(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorResponseAminoMsg): _38.GetCodecDescriptorResponse;
                    toAminoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorResponseProtoMsg): _38.GetCodecDescriptorResponse;
                    toProto(message: _38.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetConfigurationDescriptorRequest;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                    fromAmino(_: _38.GetConfigurationDescriptorRequestAmino): _38.GetConfigurationDescriptorRequest;
                    toAmino(_: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorRequestAminoMsg): _38.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorRequestProtoMsg): _38.GetConfigurationDescriptorRequest;
                    toProto(message: _38.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetConfigurationDescriptorResponse;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                    fromAmino(object: _38.GetConfigurationDescriptorResponseAmino): _38.GetConfigurationDescriptorResponse;
                    toAmino(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorResponseAminoMsg): _38.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorResponseProtoMsg): _38.GetConfigurationDescriptorResponse;
                    toProto(message: _38.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetQueryServicesDescriptorRequest;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _38.GetQueryServicesDescriptorRequestAmino): _38.GetQueryServicesDescriptorRequest;
                    toAmino(_: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorRequestAminoMsg): _38.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorRequestProtoMsg): _38.GetQueryServicesDescriptorRequest;
                    toProto(message: _38.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetQueryServicesDescriptorResponse;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _38.GetQueryServicesDescriptorResponseAmino): _38.GetQueryServicesDescriptorResponse;
                    toAmino(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorResponseAminoMsg): _38.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorResponseProtoMsg): _38.GetQueryServicesDescriptorResponse;
                    toProto(message: _38.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetTxDescriptorRequest;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                    fromAmino(_: _38.GetTxDescriptorRequestAmino): _38.GetTxDescriptorRequest;
                    toAmino(_: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorRequestAminoMsg): _38.GetTxDescriptorRequest;
                    toAminoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorRequestProtoMsg): _38.GetTxDescriptorRequest;
                    toProto(message: _38.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetTxDescriptorResponse;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                    fromAmino(object: _38.GetTxDescriptorResponseAmino): _38.GetTxDescriptorResponse;
                    toAmino(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorResponseAminoMsg): _38.GetTxDescriptorResponse;
                    toAminoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorResponseProtoMsg): _38.GetTxDescriptorResponse;
                    toProto(message: _38.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryServicesDescriptor;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                    fromAmino(object: _38.QueryServicesDescriptorAmino): _38.QueryServicesDescriptor;
                    toAmino(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServicesDescriptorAminoMsg): _38.QueryServicesDescriptor;
                    toAminoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServicesDescriptorProtoMsg): _38.QueryServicesDescriptor;
                    toProto(message: _38.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryServiceDescriptor;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                    fromAmino(object: _38.QueryServiceDescriptorAmino): _38.QueryServiceDescriptor;
                    toAmino(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServiceDescriptorAminoMsg): _38.QueryServiceDescriptor;
                    toAminoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServiceDescriptorProtoMsg): _38.QueryServiceDescriptor;
                    toProto(message: _38.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryMethodDescriptor;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                    fromAmino(object: _38.QueryMethodDescriptorAmino): _38.QueryMethodDescriptor;
                    toAmino(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _38.QueryMethodDescriptorAminoMsg): _38.QueryMethodDescriptor;
                    toAminoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryMethodDescriptorProtoMsg): _38.QueryMethodDescriptor;
                    toProto(message: _38.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _39.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.Snapshot;
                    fromPartial(object: Partial<_39.Snapshot>): _39.Snapshot;
                    fromAmino(object: _39.SnapshotAmino): _39.Snapshot;
                    toAmino(message: _39.Snapshot): _39.SnapshotAmino;
                    fromAminoMsg(object: _39.SnapshotAminoMsg): _39.Snapshot;
                    toAminoMsg(message: _39.Snapshot): _39.SnapshotAminoMsg;
                    fromProtoMsg(message: _39.SnapshotProtoMsg): _39.Snapshot;
                    toProto(message: _39.Snapshot): Uint8Array;
                    toProtoMsg(message: _39.Snapshot): _39.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _39.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.Metadata;
                    fromPartial(object: Partial<_39.Metadata>): _39.Metadata;
                    fromAmino(object: _39.MetadataAmino): _39.Metadata;
                    toAmino(message: _39.Metadata): _39.MetadataAmino;
                    fromAminoMsg(object: _39.MetadataAminoMsg): _39.Metadata;
                    toAminoMsg(message: _39.Metadata): _39.MetadataAminoMsg;
                    fromProtoMsg(message: _39.MetadataProtoMsg): _39.Metadata;
                    toProto(message: _39.Metadata): Uint8Array;
                    toProtoMsg(message: _39.Metadata): _39.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotItem;
                    fromPartial(object: Partial<_39.SnapshotItem>): _39.SnapshotItem;
                    fromAmino(object: _39.SnapshotItemAmino): _39.SnapshotItem;
                    toAmino(message: _39.SnapshotItem): _39.SnapshotItemAmino;
                    fromAminoMsg(object: _39.SnapshotItemAminoMsg): _39.SnapshotItem;
                    toAminoMsg(message: _39.SnapshotItem): _39.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotItemProtoMsg): _39.SnapshotItem;
                    toProto(message: _39.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotItem): _39.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotStoreItem;
                    fromPartial(object: Partial<_39.SnapshotStoreItem>): _39.SnapshotStoreItem;
                    fromAmino(object: _39.SnapshotStoreItemAmino): _39.SnapshotStoreItem;
                    toAmino(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _39.SnapshotStoreItemAminoMsg): _39.SnapshotStoreItem;
                    toAminoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotStoreItemProtoMsg): _39.SnapshotStoreItem;
                    toProto(message: _39.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotStoreItem): _39.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotIAVLItem;
                    fromPartial(object: Partial<_39.SnapshotIAVLItem>): _39.SnapshotIAVLItem;
                    fromAmino(object: _39.SnapshotIAVLItemAmino): _39.SnapshotIAVLItem;
                    toAmino(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _39.SnapshotIAVLItemAminoMsg): _39.SnapshotIAVLItem;
                    toAminoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotIAVLItemProtoMsg): _39.SnapshotIAVLItem;
                    toProto(message: _39.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotIAVLItem): _39.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotExtensionMeta;
                    fromPartial(object: Partial<_39.SnapshotExtensionMeta>): _39.SnapshotExtensionMeta;
                    fromAmino(object: _39.SnapshotExtensionMetaAmino): _39.SnapshotExtensionMeta;
                    toAmino(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionMetaAminoMsg): _39.SnapshotExtensionMeta;
                    toAminoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionMetaProtoMsg): _39.SnapshotExtensionMeta;
                    toProto(message: _39.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionMeta): _39.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _39.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotExtensionPayload;
                    fromPartial(object: Partial<_39.SnapshotExtensionPayload>): _39.SnapshotExtensionPayload;
                    fromAmino(object: _39.SnapshotExtensionPayloadAmino): _39.SnapshotExtensionPayload;
                    toAmino(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _39.SnapshotExtensionPayloadAminoMsg): _39.SnapshotExtensionPayload;
                    toAminoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _39.SnapshotExtensionPayloadProtoMsg): _39.SnapshotExtensionPayload;
                    toProto(message: _39.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _39.SnapshotExtensionPayload): _39.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _39.SnapshotKVItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotKVItem;
                    fromPartial(object: Partial<_39.SnapshotKVItem>): _39.SnapshotKVItem;
                    fromAmino(object: _39.SnapshotKVItemAmino): _39.SnapshotKVItem;
                    toAmino(message: _39.SnapshotKVItem): _39.SnapshotKVItemAmino;
                    fromAminoMsg(object: _39.SnapshotKVItemAminoMsg): _39.SnapshotKVItem;
                    toAminoMsg(message: _39.SnapshotKVItem): _39.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _39.SnapshotKVItemProtoMsg): _39.SnapshotKVItem;
                    toProto(message: _39.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _39.SnapshotKVItem): _39.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _39.SnapshotSchema, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.SnapshotSchema;
                    fromPartial(object: Partial<_39.SnapshotSchema>): _39.SnapshotSchema;
                    fromAmino(object: _39.SnapshotSchemaAmino): _39.SnapshotSchema;
                    toAmino(message: _39.SnapshotSchema): _39.SnapshotSchemaAmino;
                    fromAminoMsg(object: _39.SnapshotSchemaAminoMsg): _39.SnapshotSchema;
                    toAminoMsg(message: _39.SnapshotSchema): _39.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _39.SnapshotSchemaProtoMsg): _39.SnapshotSchema;
                    toProto(message: _39.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _39.SnapshotSchema): _39.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _41.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.StoreKVPair;
                    fromPartial(object: Partial<_41.StoreKVPair>): _41.StoreKVPair;
                    fromAmino(object: _41.StoreKVPairAmino): _41.StoreKVPair;
                    toAmino(message: _41.StoreKVPair): _41.StoreKVPairAmino;
                    fromAminoMsg(object: _41.StoreKVPairAminoMsg): _41.StoreKVPair;
                    toAminoMsg(message: _41.StoreKVPair): _41.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _41.StoreKVPairProtoMsg): _41.StoreKVPair;
                    toProto(message: _41.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _41.StoreKVPair): _41.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _41.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.BlockMetadata;
                    fromPartial(object: Partial<_41.BlockMetadata>): _41.BlockMetadata;
                    fromAmino(object: _41.BlockMetadataAmino): _41.BlockMetadata;
                    toAmino(message: _41.BlockMetadata): _41.BlockMetadataAmino;
                    fromAminoMsg(object: _41.BlockMetadataAminoMsg): _41.BlockMetadata;
                    toAminoMsg(message: _41.BlockMetadata): _41.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _41.BlockMetadataProtoMsg): _41.BlockMetadata;
                    toProto(message: _41.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _41.BlockMetadata): _41.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _41.BlockMetadata_DeliverTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.BlockMetadata_DeliverTx;
                    fromPartial(object: Partial<_41.BlockMetadata_DeliverTx>): _41.BlockMetadata_DeliverTx;
                    fromAmino(object: _41.BlockMetadata_DeliverTxAmino): _41.BlockMetadata_DeliverTx;
                    toAmino(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _41.BlockMetadata_DeliverTxAminoMsg): _41.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _41.BlockMetadata_DeliverTxProtoMsg): _41.BlockMetadata_DeliverTx;
                    toProto(message: _41.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _41.BlockMetadata_DeliverTx): _41.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _40.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.CommitInfo;
                    fromPartial(object: Partial<_40.CommitInfo>): _40.CommitInfo;
                    fromAmino(object: _40.CommitInfoAmino): _40.CommitInfo;
                    toAmino(message: _40.CommitInfo): _40.CommitInfoAmino;
                    fromAminoMsg(object: _40.CommitInfoAminoMsg): _40.CommitInfo;
                    toAminoMsg(message: _40.CommitInfo): _40.CommitInfoAminoMsg;
                    fromProtoMsg(message: _40.CommitInfoProtoMsg): _40.CommitInfo;
                    toProto(message: _40.CommitInfo): Uint8Array;
                    toProtoMsg(message: _40.CommitInfo): _40.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _40.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.StoreInfo;
                    fromPartial(object: Partial<_40.StoreInfo>): _40.StoreInfo;
                    fromAmino(object: _40.StoreInfoAmino): _40.StoreInfo;
                    toAmino(message: _40.StoreInfo): _40.StoreInfoAmino;
                    fromAminoMsg(object: _40.StoreInfoAminoMsg): _40.StoreInfo;
                    toAminoMsg(message: _40.StoreInfo): _40.StoreInfoAminoMsg;
                    fromProtoMsg(message: _40.StoreInfoProtoMsg): _40.StoreInfo;
                    toProto(message: _40.StoreInfo): Uint8Array;
                    toProtoMsg(message: _40.StoreInfo): _40.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _40.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.CommitID;
                    fromPartial(object: Partial<_40.CommitID>): _40.CommitID;
                    fromAmino(object: _40.CommitIDAmino): _40.CommitID;
                    toAmino(message: _40.CommitID): _40.CommitIDAmino;
                    fromAminoMsg(object: _40.CommitIDAminoMsg): _40.CommitID;
                    toAminoMsg(message: _40.CommitID): _40.CommitIDAminoMsg;
                    fromProtoMsg(message: _40.CommitIDProtoMsg): _40.CommitID;
                    toProto(message: _40.CommitID): Uint8Array;
                    toProtoMsg(message: _40.CommitID): _40.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _266.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                    getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                    getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                    getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _42.ABCIQueryRequest): Promise<_42.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _245.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _43.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.Block;
                    fromPartial(object: Partial<_43.Block>): _43.Block;
                    fromAmino(object: _43.BlockAmino): _43.Block;
                    toAmino(message: _43.Block): _43.BlockAmino;
                    fromAminoMsg(object: _43.BlockAminoMsg): _43.Block;
                    toAminoMsg(message: _43.Block): _43.BlockAminoMsg;
                    fromProtoMsg(message: _43.BlockProtoMsg): _43.Block;
                    toProto(message: _43.Block): Uint8Array;
                    toProtoMsg(message: _43.Block): _43.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _43.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.Header;
                    fromPartial(object: Partial<_43.Header>): _43.Header;
                    fromAmino(object: _43.HeaderAmino): _43.Header;
                    toAmino(message: _43.Header): _43.HeaderAmino;
                    fromAminoMsg(object: _43.HeaderAminoMsg): _43.Header;
                    toAminoMsg(message: _43.Header): _43.HeaderAminoMsg;
                    fromProtoMsg(message: _43.HeaderProtoMsg): _43.Header;
                    toProto(message: _43.Header): Uint8Array;
                    toProtoMsg(message: _43.Header): _43.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightRequest>): _42.GetValidatorSetByHeightRequest;
                    fromAmino(object: _42.GetValidatorSetByHeightRequestAmino): _42.GetValidatorSetByHeightRequest;
                    toAmino(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightRequestAminoMsg): _42.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightRequestProtoMsg): _42.GetValidatorSetByHeightRequest;
                    toProto(message: _42.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightResponse>): _42.GetValidatorSetByHeightResponse;
                    fromAmino(object: _42.GetValidatorSetByHeightResponseAmino): _42.GetValidatorSetByHeightResponse;
                    toAmino(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightResponseAminoMsg): _42.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightResponseProtoMsg): _42.GetValidatorSetByHeightResponse;
                    toProto(message: _42.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetRequest>): _42.GetLatestValidatorSetRequest;
                    fromAmino(object: _42.GetLatestValidatorSetRequestAmino): _42.GetLatestValidatorSetRequest;
                    toAmino(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetRequestAminoMsg): _42.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetRequestProtoMsg): _42.GetLatestValidatorSetRequest;
                    toProto(message: _42.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetResponse>): _42.GetLatestValidatorSetResponse;
                    fromAmino(object: _42.GetLatestValidatorSetResponseAmino): _42.GetLatestValidatorSetResponse;
                    toAmino(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetResponseAminoMsg): _42.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetResponseProtoMsg): _42.GetLatestValidatorSetResponse;
                    toProto(message: _42.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _42.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Validator;
                    fromPartial(object: Partial<_42.Validator>): _42.Validator;
                    fromAmino(object: _42.ValidatorAmino): _42.Validator;
                    toAmino(message: _42.Validator): _42.ValidatorAmino;
                    fromAminoMsg(object: _42.ValidatorAminoMsg): _42.Validator;
                    toAminoMsg(message: _42.Validator): _42.ValidatorAminoMsg;
                    fromProtoMsg(message: _42.ValidatorProtoMsg): _42.Validator;
                    toProto(message: _42.Validator): Uint8Array;
                    toProtoMsg(message: _42.Validator): _42.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_42.GetBlockByHeightRequest>): _42.GetBlockByHeightRequest;
                    fromAmino(object: _42.GetBlockByHeightRequestAmino): _42.GetBlockByHeightRequest;
                    toAmino(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightRequestAminoMsg): _42.GetBlockByHeightRequest;
                    toAminoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightRequestProtoMsg): _42.GetBlockByHeightRequest;
                    toProto(message: _42.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_42.GetBlockByHeightResponse>): _42.GetBlockByHeightResponse;
                    fromAmino(object: _42.GetBlockByHeightResponseAmino): _42.GetBlockByHeightResponse;
                    toAmino(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightResponseAminoMsg): _42.GetBlockByHeightResponse;
                    toAminoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightResponseProtoMsg): _42.GetBlockByHeightResponse;
                    toProto(message: _42.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _42.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestBlockRequest;
                    fromPartial(_: Partial<_42.GetLatestBlockRequest>): _42.GetLatestBlockRequest;
                    fromAmino(_: _42.GetLatestBlockRequestAmino): _42.GetLatestBlockRequest;
                    toAmino(_: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _42.GetLatestBlockRequestAminoMsg): _42.GetLatestBlockRequest;
                    toAminoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockRequestProtoMsg): _42.GetLatestBlockRequest;
                    toProto(message: _42.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestBlockResponse;
                    fromPartial(object: Partial<_42.GetLatestBlockResponse>): _42.GetLatestBlockResponse;
                    fromAmino(object: _42.GetLatestBlockResponseAmino): _42.GetLatestBlockResponse;
                    toAmino(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _42.GetLatestBlockResponseAminoMsg): _42.GetLatestBlockResponse;
                    toAminoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockResponseProtoMsg): _42.GetLatestBlockResponse;
                    toProto(message: _42.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _42.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetSyncingRequest;
                    fromPartial(_: Partial<_42.GetSyncingRequest>): _42.GetSyncingRequest;
                    fromAmino(_: _42.GetSyncingRequestAmino): _42.GetSyncingRequest;
                    toAmino(_: _42.GetSyncingRequest): _42.GetSyncingRequestAmino;
                    fromAminoMsg(object: _42.GetSyncingRequestAminoMsg): _42.GetSyncingRequest;
                    toAminoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingRequestProtoMsg): _42.GetSyncingRequest;
                    toProto(message: _42.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _42.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetSyncingResponse;
                    fromPartial(object: Partial<_42.GetSyncingResponse>): _42.GetSyncingResponse;
                    fromAmino(object: _42.GetSyncingResponseAmino): _42.GetSyncingResponse;
                    toAmino(message: _42.GetSyncingResponse): _42.GetSyncingResponseAmino;
                    fromAminoMsg(object: _42.GetSyncingResponseAminoMsg): _42.GetSyncingResponse;
                    toAminoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingResponseProtoMsg): _42.GetSyncingResponse;
                    toProto(message: _42.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _42.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetNodeInfoRequest;
                    fromPartial(_: Partial<_42.GetNodeInfoRequest>): _42.GetNodeInfoRequest;
                    fromAmino(_: _42.GetNodeInfoRequestAmino): _42.GetNodeInfoRequest;
                    toAmino(_: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _42.GetNodeInfoRequestAminoMsg): _42.GetNodeInfoRequest;
                    toAminoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoRequestProtoMsg): _42.GetNodeInfoRequest;
                    toProto(message: _42.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _42.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetNodeInfoResponse;
                    fromPartial(object: Partial<_42.GetNodeInfoResponse>): _42.GetNodeInfoResponse;
                    fromAmino(object: _42.GetNodeInfoResponseAmino): _42.GetNodeInfoResponse;
                    toAmino(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _42.GetNodeInfoResponseAminoMsg): _42.GetNodeInfoResponse;
                    toAminoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoResponseProtoMsg): _42.GetNodeInfoResponse;
                    toProto(message: _42.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _42.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.VersionInfo;
                    fromPartial(object: Partial<_42.VersionInfo>): _42.VersionInfo;
                    fromAmino(object: _42.VersionInfoAmino): _42.VersionInfo;
                    toAmino(message: _42.VersionInfo): _42.VersionInfoAmino;
                    fromAminoMsg(object: _42.VersionInfoAminoMsg): _42.VersionInfo;
                    toAminoMsg(message: _42.VersionInfo): _42.VersionInfoAminoMsg;
                    fromProtoMsg(message: _42.VersionInfoProtoMsg): _42.VersionInfo;
                    toProto(message: _42.VersionInfo): Uint8Array;
                    toProtoMsg(message: _42.VersionInfo): _42.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Module;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _42.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ABCIQueryRequest;
                    fromPartial(object: Partial<_42.ABCIQueryRequest>): _42.ABCIQueryRequest;
                    fromAmino(object: _42.ABCIQueryRequestAmino): _42.ABCIQueryRequest;
                    toAmino(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _42.ABCIQueryRequestAminoMsg): _42.ABCIQueryRequest;
                    toAminoMsg(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _42.ABCIQueryRequestProtoMsg): _42.ABCIQueryRequest;
                    toProto(message: _42.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _42.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ABCIQueryResponse;
                    fromPartial(object: Partial<_42.ABCIQueryResponse>): _42.ABCIQueryResponse;
                    fromAmino(object: _42.ABCIQueryResponseAmino): _42.ABCIQueryResponse;
                    toAmino(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _42.ABCIQueryResponseAminoMsg): _42.ABCIQueryResponse;
                    toAminoMsg(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _42.ABCIQueryResponseProtoMsg): _42.ABCIQueryResponse;
                    toProto(message: _42.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _42.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ProofOp;
                    fromPartial(object: Partial<_42.ProofOp>): _42.ProofOp;
                    fromAmino(object: _42.ProofOpAmino): _42.ProofOp;
                    toAmino(message: _42.ProofOp): _42.ProofOpAmino;
                    fromAminoMsg(object: _42.ProofOpAminoMsg): _42.ProofOp;
                    toAminoMsg(message: _42.ProofOp): _42.ProofOpAminoMsg;
                    fromProtoMsg(message: _42.ProofOpProtoMsg): _42.ProofOp;
                    toProto(message: _42.ProofOp): Uint8Array;
                    toProtoMsg(message: _42.ProofOp): _42.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _42.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ProofOps;
                    fromPartial(object: Partial<_42.ProofOps>): _42.ProofOps;
                    fromAmino(object: _42.ProofOpsAmino): _42.ProofOps;
                    toAmino(message: _42.ProofOps): _42.ProofOpsAmino;
                    fromAminoMsg(object: _42.ProofOpsAminoMsg): _42.ProofOps;
                    toAminoMsg(message: _42.ProofOps): _42.ProofOpsAminoMsg;
                    fromProtoMsg(message: _42.ProofOpsProtoMsg): _42.ProofOps;
                    toProto(message: _42.ProofOps): Uint8Array;
                    toProtoMsg(message: _42.ProofOps): _42.ProofOpsProtoMsg;
                };
            };
        }
    }
    const query: {
        PageRequest: {
            typeUrl: string;
            encode(message: _44.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.PageRequest;
            fromPartial(object: Partial<_44.PageRequest>): _44.PageRequest;
            fromAmino(object: _44.PageRequestAmino): _44.PageRequest;
            toAmino(message: _44.PageRequest): _44.PageRequestAmino;
            fromAminoMsg(object: _44.PageRequestAminoMsg): _44.PageRequest;
            toAminoMsg(message: _44.PageRequest): _44.PageRequestAminoMsg;
            fromProtoMsg(message: _44.PageRequestProtoMsg): _44.PageRequest;
            toProto(message: _44.PageRequest): Uint8Array;
            toProtoMsg(message: _44.PageRequest): _44.PageRequestProtoMsg;
        };
        PageResponse: {
            typeUrl: string;
            encode(message: _44.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.PageResponse;
            fromPartial(object: Partial<_44.PageResponse>): _44.PageResponse;
            fromAmino(object: _44.PageResponseAmino): _44.PageResponse;
            toAmino(message: _44.PageResponse): _44.PageResponseAmino;
            fromAminoMsg(object: _44.PageResponseAminoMsg): _44.PageResponse;
            toAminoMsg(message: _44.PageResponse): _44.PageResponseAminoMsg;
            fromProtoMsg(message: _44.PageResponseProtoMsg): _44.PageResponse;
            toProto(message: _44.PageResponse): Uint8Array;
            toProtoMsg(message: _44.PageResponse): _44.PageResponseProtoMsg;
        };
    };
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _45.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Module;
                    fromPartial(object: Partial<_45.Module>): _45.Module;
                    fromAmino(object: _45.ModuleAmino): _45.Module;
                    toAmino(message: _45.Module): _45.ModuleAmino;
                    fromAminoMsg(object: _45.ModuleAminoMsg): _45.Module;
                    toAminoMsg(message: _45.Module): _45.ModuleAminoMsg;
                    fromProtoMsg(message: _45.ModuleProtoMsg): _45.Module;
                    toProto(message: _45.Module): Uint8Array;
                    toProtoMsg(message: _45.Module): _45.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _45.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.StoreKeyConfig;
                    fromPartial(object: Partial<_45.StoreKeyConfig>): _45.StoreKeyConfig;
                    fromAmino(object: _45.StoreKeyConfigAmino): _45.StoreKeyConfig;
                    toAmino(message: _45.StoreKeyConfig): _45.StoreKeyConfigAmino;
                    fromAminoMsg(object: _45.StoreKeyConfigAminoMsg): _45.StoreKeyConfig;
                    toAminoMsg(message: _45.StoreKeyConfig): _45.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _45.StoreKeyConfigProtoMsg): _45.StoreKeyConfig;
                    toProto(message: _45.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _45.StoreKeyConfig): _45.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _48.QueryConfigRequest): Promise<_48.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _48.QueryConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryConfigRequest;
                fromPartial(_: Partial<_48.QueryConfigRequest>): _48.QueryConfigRequest;
                fromAmino(_: _48.QueryConfigRequestAmino): _48.QueryConfigRequest;
                toAmino(_: _48.QueryConfigRequest): _48.QueryConfigRequestAmino;
                fromAminoMsg(object: _48.QueryConfigRequestAminoMsg): _48.QueryConfigRequest;
                toAminoMsg(message: _48.QueryConfigRequest): _48.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _48.QueryConfigRequestProtoMsg): _48.QueryConfigRequest;
                toProto(message: _48.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _48.QueryConfigRequest): _48.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _48.QueryConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryConfigResponse;
                fromPartial(object: Partial<_48.QueryConfigResponse>): _48.QueryConfigResponse;
                fromAmino(object: _48.QueryConfigResponseAmino): _48.QueryConfigResponse;
                toAmino(message: _48.QueryConfigResponse): _48.QueryConfigResponseAmino;
                fromAminoMsg(object: _48.QueryConfigResponseAminoMsg): _48.QueryConfigResponse;
                toAminoMsg(message: _48.QueryConfigResponse): _48.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _48.QueryConfigResponseProtoMsg): _48.QueryConfigResponse;
                toProto(message: _48.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _48.QueryConfigResponse): _48.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _47.ModuleDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.ModuleDescriptor;
                fromPartial(object: Partial<_47.ModuleDescriptor>): _47.ModuleDescriptor;
                fromAmino(object: _47.ModuleDescriptorAmino): _47.ModuleDescriptor;
                toAmino(message: _47.ModuleDescriptor): _47.ModuleDescriptorAmino;
                fromAminoMsg(object: _47.ModuleDescriptorAminoMsg): _47.ModuleDescriptor;
                toAminoMsg(message: _47.ModuleDescriptor): _47.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _47.ModuleDescriptorProtoMsg): _47.ModuleDescriptor;
                toProto(message: _47.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _47.ModuleDescriptor): _47.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _47.PackageReference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.PackageReference;
                fromPartial(object: Partial<_47.PackageReference>): _47.PackageReference;
                fromAmino(object: _47.PackageReferenceAmino): _47.PackageReference;
                toAmino(message: _47.PackageReference): _47.PackageReferenceAmino;
                fromAminoMsg(object: _47.PackageReferenceAminoMsg): _47.PackageReference;
                toAminoMsg(message: _47.PackageReference): _47.PackageReferenceAminoMsg;
                fromProtoMsg(message: _47.PackageReferenceProtoMsg): _47.PackageReference;
                toProto(message: _47.PackageReference): Uint8Array;
                toProtoMsg(message: _47.PackageReference): _47.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _47.MigrateFromInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MigrateFromInfo;
                fromPartial(object: Partial<_47.MigrateFromInfo>): _47.MigrateFromInfo;
                fromAmino(object: _47.MigrateFromInfoAmino): _47.MigrateFromInfo;
                toAmino(message: _47.MigrateFromInfo): _47.MigrateFromInfoAmino;
                fromAminoMsg(object: _47.MigrateFromInfoAminoMsg): _47.MigrateFromInfo;
                toAminoMsg(message: _47.MigrateFromInfo): _47.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _47.MigrateFromInfoProtoMsg): _47.MigrateFromInfo;
                toProto(message: _47.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _47.MigrateFromInfo): _47.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _46.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.Config;
                fromPartial(object: Partial<_46.Config>): _46.Config;
                fromAmino(object: _46.ConfigAmino): _46.Config;
                toAmino(message: _46.Config): _46.ConfigAmino;
                fromAminoMsg(object: _46.ConfigAminoMsg): _46.Config;
                toAminoMsg(message: _46.Config): _46.ConfigAminoMsg;
                fromProtoMsg(message: _46.ConfigProtoMsg): _46.Config;
                toProto(message: _46.Config): Uint8Array;
                toProtoMsg(message: _46.Config): _46.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _46.ModuleConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.ModuleConfig;
                fromPartial(object: Partial<_46.ModuleConfig>): _46.ModuleConfig;
                fromAmino(object: _46.ModuleConfigAmino): _46.ModuleConfig;
                toAmino(message: _46.ModuleConfig): _46.ModuleConfigAmino;
                fromAminoMsg(object: _46.ModuleConfigAminoMsg): _46.ModuleConfig;
                toAminoMsg(message: _46.ModuleConfig): _46.ModuleConfigAminoMsg;
                fromProtoMsg(message: _46.ModuleConfigProtoMsg): _46.ModuleConfig;
                toProto(message: _46.ModuleConfig): Uint8Array;
                toProtoMsg(message: _46.ModuleConfig): _46.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _46.GolangBinding, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.GolangBinding;
                fromPartial(object: Partial<_46.GolangBinding>): _46.GolangBinding;
                fromAmino(object: _46.GolangBindingAmino): _46.GolangBinding;
                toAmino(message: _46.GolangBinding): _46.GolangBindingAmino;
                fromAminoMsg(object: _46.GolangBindingAminoMsg): _46.GolangBinding;
                toAminoMsg(message: _46.GolangBinding): _46.GolangBindingAminoMsg;
                fromProtoMsg(message: _46.GolangBindingProtoMsg): _46.GolangBinding;
                toProto(message: _46.GolangBinding): Uint8Array;
                toProtoMsg(message: _46.GolangBinding): _46.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _49.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Module;
                    fromPartial(object: Partial<_49.Module>): _49.Module;
                    fromAmino(object: _49.ModuleAmino): _49.Module;
                    toAmino(message: _49.Module): _49.ModuleAmino;
                    fromAminoMsg(object: _49.ModuleAminoMsg): _49.Module;
                    toAminoMsg(message: _49.Module): _49.ModuleAminoMsg;
                    fromProtoMsg(message: _49.ModuleProtoMsg): _49.Module;
                    toProto(message: _49.Module): Uint8Array;
                    toProtoMsg(message: _49.Module): _49.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _49.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.ModuleAccountPermission;
                    fromPartial(object: Partial<_49.ModuleAccountPermission>): _49.ModuleAccountPermission;
                    fromAmino(object: _49.ModuleAccountPermissionAmino): _49.ModuleAccountPermission;
                    toAmino(message: _49.ModuleAccountPermission): _49.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _49.ModuleAccountPermissionAminoMsg): _49.ModuleAccountPermission;
                    toAminoMsg(message: _49.ModuleAccountPermission): _49.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _49.ModuleAccountPermissionProtoMsg): _49.ModuleAccountPermission;
                    toProto(message: _49.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _49.ModuleAccountPermission): _49.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _282.MsgClientImpl;
            QueryClientImpl: typeof _261.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _52.QueryAccountsRequest): Promise<_52.QueryAccountsResponse>;
                account(request: _52.QueryAccountRequest): Promise<_52.QueryAccountResponse>;
                accountAddressByID(request: _52.QueryAccountAddressByIDRequest): Promise<_52.QueryAccountAddressByIDResponse>;
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                moduleAccounts(request?: _52.QueryModuleAccountsRequest): Promise<_52.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _52.QueryModuleAccountByNameRequest): Promise<_52.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _52.Bech32PrefixRequest): Promise<_52.Bech32PrefixResponse>;
                addressBytesToString(request: _52.AddressBytesToStringRequest): Promise<_52.AddressBytesToStringResponse>;
                addressStringToBytes(request: _52.AddressStringToBytesRequest): Promise<_52.AddressStringToBytesResponse>;
                accountInfo(request: _52.QueryAccountInfoRequest): Promise<_52.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _53.MsgUpdateParams) => _53.MsgUpdateParamsAmino;
                    fromAmino: (object: _53.MsgUpdateParamsAmino) => _53.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _53.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.MsgUpdateParams;
                fromPartial(object: Partial<_53.MsgUpdateParams>): _53.MsgUpdateParams;
                fromAmino(object: _53.MsgUpdateParamsAmino): _53.MsgUpdateParams;
                toAmino(message: _53.MsgUpdateParams): _53.MsgUpdateParamsAmino;
                fromAminoMsg(object: _53.MsgUpdateParamsAminoMsg): _53.MsgUpdateParams;
                toAminoMsg(message: _53.MsgUpdateParams): _53.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _53.MsgUpdateParamsProtoMsg): _53.MsgUpdateParams;
                toProto(message: _53.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _53.MsgUpdateParams): _53.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _53.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_53.MsgUpdateParamsResponse>): _53.MsgUpdateParamsResponse;
                fromAmino(_: _53.MsgUpdateParamsResponseAmino): _53.MsgUpdateParamsResponse;
                toAmino(_: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _53.MsgUpdateParamsResponseAminoMsg): _53.MsgUpdateParamsResponse;
                toAminoMsg(message: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _53.MsgUpdateParamsResponseProtoMsg): _53.MsgUpdateParamsResponse;
                toProto(message: _53.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountsRequest;
                fromPartial(object: Partial<_52.QueryAccountsRequest>): _52.QueryAccountsRequest;
                fromAmino(object: _52.QueryAccountsRequestAmino): _52.QueryAccountsRequest;
                toAmino(message: _52.QueryAccountsRequest): _52.QueryAccountsRequestAmino;
                fromAminoMsg(object: _52.QueryAccountsRequestAminoMsg): _52.QueryAccountsRequest;
                toAminoMsg(message: _52.QueryAccountsRequest): _52.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountsRequestProtoMsg): _52.QueryAccountsRequest;
                toProto(message: _52.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountsRequest): _52.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountsResponse;
                fromPartial(object: Partial<_52.QueryAccountsResponse>): _52.QueryAccountsResponse;
                fromAmino(object: _52.QueryAccountsResponseAmino): _52.QueryAccountsResponse;
                toAmino(message: _52.QueryAccountsResponse): _52.QueryAccountsResponseAmino;
                fromAminoMsg(object: _52.QueryAccountsResponseAminoMsg): _52.QueryAccountsResponse;
                toAminoMsg(message: _52.QueryAccountsResponse): _52.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountsResponseProtoMsg): _52.QueryAccountsResponse;
                toProto(message: _52.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountsResponse): _52.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountRequest;
                fromPartial(object: Partial<_52.QueryAccountRequest>): _52.QueryAccountRequest;
                fromAmino(object: _52.QueryAccountRequestAmino): _52.QueryAccountRequest;
                toAmino(message: _52.QueryAccountRequest): _52.QueryAccountRequestAmino;
                fromAminoMsg(object: _52.QueryAccountRequestAminoMsg): _52.QueryAccountRequest;
                toAminoMsg(message: _52.QueryAccountRequest): _52.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountRequestProtoMsg): _52.QueryAccountRequest;
                toProto(message: _52.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountRequest): _52.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountResponse;
                fromPartial(object: Partial<_52.QueryAccountResponse>): _52.QueryAccountResponse;
                fromAmino(object: _52.QueryAccountResponseAmino): _52.QueryAccountResponse;
                toAmino(message: _52.QueryAccountResponse): _52.QueryAccountResponseAmino;
                fromAminoMsg(object: _52.QueryAccountResponseAminoMsg): _52.QueryAccountResponse;
                toAminoMsg(message: _52.QueryAccountResponse): _52.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountResponseProtoMsg): _52.QueryAccountResponse;
                toProto(message: _52.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountResponse): _52.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
                fromAmino(_: _52.QueryParamsRequestAmino): _52.QueryParamsRequest;
                toAmino(_: _52.QueryParamsRequest): _52.QueryParamsRequestAmino;
                fromAminoMsg(object: _52.QueryParamsRequestAminoMsg): _52.QueryParamsRequest;
                toAminoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryParamsRequestProtoMsg): _52.QueryParamsRequest;
                toProto(message: _52.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
                fromAmino(object: _52.QueryParamsResponseAmino): _52.QueryParamsResponse;
                toAmino(message: _52.QueryParamsResponse): _52.QueryParamsResponseAmino;
                fromAminoMsg(object: _52.QueryParamsResponseAminoMsg): _52.QueryParamsResponse;
                toAminoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryParamsResponseProtoMsg): _52.QueryParamsResponse;
                toProto(message: _52.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _52.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryModuleAccountsRequest;
                fromPartial(_: Partial<_52.QueryModuleAccountsRequest>): _52.QueryModuleAccountsRequest;
                fromAmino(_: _52.QueryModuleAccountsRequestAmino): _52.QueryModuleAccountsRequest;
                toAmino(_: _52.QueryModuleAccountsRequest): _52.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _52.QueryModuleAccountsRequestAminoMsg): _52.QueryModuleAccountsRequest;
                toAminoMsg(message: _52.QueryModuleAccountsRequest): _52.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountsRequestProtoMsg): _52.QueryModuleAccountsRequest;
                toProto(message: _52.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountsRequest): _52.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _52.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryModuleAccountsResponse;
                fromPartial(object: Partial<_52.QueryModuleAccountsResponse>): _52.QueryModuleAccountsResponse;
                fromAmino(object: _52.QueryModuleAccountsResponseAmino): _52.QueryModuleAccountsResponse;
                toAmino(message: _52.QueryModuleAccountsResponse): _52.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _52.QueryModuleAccountsResponseAminoMsg): _52.QueryModuleAccountsResponse;
                toAminoMsg(message: _52.QueryModuleAccountsResponse): _52.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountsResponseProtoMsg): _52.QueryModuleAccountsResponse;
                toProto(message: _52.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountsResponse): _52.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _52.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryModuleAccountByNameRequest;
                fromPartial(object: Partial<_52.QueryModuleAccountByNameRequest>): _52.QueryModuleAccountByNameRequest;
                fromAmino(object: _52.QueryModuleAccountByNameRequestAmino): _52.QueryModuleAccountByNameRequest;
                toAmino(message: _52.QueryModuleAccountByNameRequest): _52.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _52.QueryModuleAccountByNameRequestAminoMsg): _52.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _52.QueryModuleAccountByNameRequest): _52.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountByNameRequestProtoMsg): _52.QueryModuleAccountByNameRequest;
                toProto(message: _52.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountByNameRequest): _52.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _52.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryModuleAccountByNameResponse;
                fromPartial(object: Partial<_52.QueryModuleAccountByNameResponse>): _52.QueryModuleAccountByNameResponse;
                fromAmino(object: _52.QueryModuleAccountByNameResponseAmino): _52.QueryModuleAccountByNameResponse;
                toAmino(message: _52.QueryModuleAccountByNameResponse): _52.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _52.QueryModuleAccountByNameResponseAminoMsg): _52.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _52.QueryModuleAccountByNameResponse): _52.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _52.QueryModuleAccountByNameResponseProtoMsg): _52.QueryModuleAccountByNameResponse;
                toProto(message: _52.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _52.QueryModuleAccountByNameResponse): _52.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _52.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.Bech32PrefixRequest;
                fromPartial(_: Partial<_52.Bech32PrefixRequest>): _52.Bech32PrefixRequest;
                fromAmino(_: _52.Bech32PrefixRequestAmino): _52.Bech32PrefixRequest;
                toAmino(_: _52.Bech32PrefixRequest): _52.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _52.Bech32PrefixRequestAminoMsg): _52.Bech32PrefixRequest;
                toAminoMsg(message: _52.Bech32PrefixRequest): _52.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _52.Bech32PrefixRequestProtoMsg): _52.Bech32PrefixRequest;
                toProto(message: _52.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _52.Bech32PrefixRequest): _52.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _52.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.Bech32PrefixResponse;
                fromPartial(object: Partial<_52.Bech32PrefixResponse>): _52.Bech32PrefixResponse;
                fromAmino(object: _52.Bech32PrefixResponseAmino): _52.Bech32PrefixResponse;
                toAmino(message: _52.Bech32PrefixResponse): _52.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _52.Bech32PrefixResponseAminoMsg): _52.Bech32PrefixResponse;
                toAminoMsg(message: _52.Bech32PrefixResponse): _52.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _52.Bech32PrefixResponseProtoMsg): _52.Bech32PrefixResponse;
                toProto(message: _52.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _52.Bech32PrefixResponse): _52.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _52.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.AddressBytesToStringRequest;
                fromPartial(object: Partial<_52.AddressBytesToStringRequest>): _52.AddressBytesToStringRequest;
                fromAmino(object: _52.AddressBytesToStringRequestAmino): _52.AddressBytesToStringRequest;
                toAmino(message: _52.AddressBytesToStringRequest): _52.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _52.AddressBytesToStringRequestAminoMsg): _52.AddressBytesToStringRequest;
                toAminoMsg(message: _52.AddressBytesToStringRequest): _52.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _52.AddressBytesToStringRequestProtoMsg): _52.AddressBytesToStringRequest;
                toProto(message: _52.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _52.AddressBytesToStringRequest): _52.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _52.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.AddressBytesToStringResponse;
                fromPartial(object: Partial<_52.AddressBytesToStringResponse>): _52.AddressBytesToStringResponse;
                fromAmino(object: _52.AddressBytesToStringResponseAmino): _52.AddressBytesToStringResponse;
                toAmino(message: _52.AddressBytesToStringResponse): _52.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _52.AddressBytesToStringResponseAminoMsg): _52.AddressBytesToStringResponse;
                toAminoMsg(message: _52.AddressBytesToStringResponse): _52.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _52.AddressBytesToStringResponseProtoMsg): _52.AddressBytesToStringResponse;
                toProto(message: _52.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _52.AddressBytesToStringResponse): _52.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _52.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.AddressStringToBytesRequest;
                fromPartial(object: Partial<_52.AddressStringToBytesRequest>): _52.AddressStringToBytesRequest;
                fromAmino(object: _52.AddressStringToBytesRequestAmino): _52.AddressStringToBytesRequest;
                toAmino(message: _52.AddressStringToBytesRequest): _52.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _52.AddressStringToBytesRequestAminoMsg): _52.AddressStringToBytesRequest;
                toAminoMsg(message: _52.AddressStringToBytesRequest): _52.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _52.AddressStringToBytesRequestProtoMsg): _52.AddressStringToBytesRequest;
                toProto(message: _52.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _52.AddressStringToBytesRequest): _52.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _52.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.AddressStringToBytesResponse;
                fromPartial(object: Partial<_52.AddressStringToBytesResponse>): _52.AddressStringToBytesResponse;
                fromAmino(object: _52.AddressStringToBytesResponseAmino): _52.AddressStringToBytesResponse;
                toAmino(message: _52.AddressStringToBytesResponse): _52.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _52.AddressStringToBytesResponseAminoMsg): _52.AddressStringToBytesResponse;
                toAminoMsg(message: _52.AddressStringToBytesResponse): _52.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _52.AddressStringToBytesResponseProtoMsg): _52.AddressStringToBytesResponse;
                toProto(message: _52.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _52.AddressStringToBytesResponse): _52.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountAddressByIDRequest;
                fromPartial(object: Partial<_52.QueryAccountAddressByIDRequest>): _52.QueryAccountAddressByIDRequest;
                fromAmino(object: _52.QueryAccountAddressByIDRequestAmino): _52.QueryAccountAddressByIDRequest;
                toAmino(message: _52.QueryAccountAddressByIDRequest): _52.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _52.QueryAccountAddressByIDRequestAminoMsg): _52.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _52.QueryAccountAddressByIDRequest): _52.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountAddressByIDRequestProtoMsg): _52.QueryAccountAddressByIDRequest;
                toProto(message: _52.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountAddressByIDRequest): _52.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountAddressByIDResponse;
                fromPartial(object: Partial<_52.QueryAccountAddressByIDResponse>): _52.QueryAccountAddressByIDResponse;
                fromAmino(object: _52.QueryAccountAddressByIDResponseAmino): _52.QueryAccountAddressByIDResponse;
                toAmino(message: _52.QueryAccountAddressByIDResponse): _52.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _52.QueryAccountAddressByIDResponseAminoMsg): _52.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _52.QueryAccountAddressByIDResponse): _52.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountAddressByIDResponseProtoMsg): _52.QueryAccountAddressByIDResponse;
                toProto(message: _52.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountAddressByIDResponse): _52.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _52.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountInfoRequest;
                fromPartial(object: Partial<_52.QueryAccountInfoRequest>): _52.QueryAccountInfoRequest;
                fromAmino(object: _52.QueryAccountInfoRequestAmino): _52.QueryAccountInfoRequest;
                toAmino(message: _52.QueryAccountInfoRequest): _52.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _52.QueryAccountInfoRequestAminoMsg): _52.QueryAccountInfoRequest;
                toAminoMsg(message: _52.QueryAccountInfoRequest): _52.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _52.QueryAccountInfoRequestProtoMsg): _52.QueryAccountInfoRequest;
                toProto(message: _52.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _52.QueryAccountInfoRequest): _52.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _52.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryAccountInfoResponse;
                fromPartial(object: Partial<_52.QueryAccountInfoResponse>): _52.QueryAccountInfoResponse;
                fromAmino(object: _52.QueryAccountInfoResponseAmino): _52.QueryAccountInfoResponse;
                toAmino(message: _52.QueryAccountInfoResponse): _52.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _52.QueryAccountInfoResponseAminoMsg): _52.QueryAccountInfoResponse;
                toAminoMsg(message: _52.QueryAccountInfoResponse): _52.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _52.QueryAccountInfoResponseProtoMsg): _52.QueryAccountInfoResponse;
                toProto(message: _52.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _52.QueryAccountInfoResponse): _52.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _50.BaseAccount | import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _50.ModuleAccount | import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _51.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
                fromAmino(object: _51.GenesisStateAmino): _51.GenesisState;
                toAmino(message: _51.GenesisState): _51.GenesisStateAmino;
                fromAminoMsg(object: _51.GenesisStateAminoMsg): _51.GenesisState;
                toAminoMsg(message: _51.GenesisState): _51.GenesisStateAminoMsg;
                fromProtoMsg(message: _51.GenesisStateProtoMsg): _51.GenesisState;
                toProto(message: _51.GenesisState): Uint8Array;
                toProtoMsg(message: _51.GenesisState): _51.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _50.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.BaseAccount;
                fromPartial(object: Partial<_50.BaseAccount>): _50.BaseAccount;
                fromAmino(object: _50.BaseAccountAmino): _50.BaseAccount;
                toAmino(message: _50.BaseAccount): _50.BaseAccountAmino;
                fromAminoMsg(object: _50.BaseAccountAminoMsg): _50.BaseAccount;
                toAminoMsg(message: _50.BaseAccount): _50.BaseAccountAminoMsg;
                fromProtoMsg(message: _50.BaseAccountProtoMsg): _50.BaseAccount;
                toProto(message: _50.BaseAccount): Uint8Array;
                toProtoMsg(message: _50.BaseAccount): _50.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _50.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.ModuleAccount;
                fromPartial(object: Partial<_50.ModuleAccount>): _50.ModuleAccount;
                fromAmino(object: _50.ModuleAccountAmino): _50.ModuleAccount;
                toAmino(message: _50.ModuleAccount): _50.ModuleAccountAmino;
                fromAminoMsg(object: _50.ModuleAccountAminoMsg): _50.ModuleAccount;
                toAminoMsg(message: _50.ModuleAccount): _50.ModuleAccountAminoMsg;
                fromProtoMsg(message: _50.ModuleAccountProtoMsg): _50.ModuleAccount;
                toProto(message: _50.ModuleAccount): Uint8Array;
                toProtoMsg(message: _50.ModuleAccount): _50.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _50.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.ModuleCredential;
                fromPartial(object: Partial<_50.ModuleCredential>): _50.ModuleCredential;
                fromAmino(object: _50.ModuleCredentialAmino): _50.ModuleCredential;
                toAmino(message: _50.ModuleCredential): _50.ModuleCredentialAmino;
                fromAminoMsg(object: _50.ModuleCredentialAminoMsg): _50.ModuleCredential;
                toAminoMsg(message: _50.ModuleCredential): _50.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _50.ModuleCredentialProtoMsg): _50.ModuleCredential;
                toProto(message: _50.ModuleCredential): Uint8Array;
                toProtoMsg(message: _50.ModuleCredential): _50.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _50.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.Params;
                fromPartial(object: Partial<_50.Params>): _50.Params;
                fromAmino(object: _50.ParamsAmino): _50.Params;
                toAmino(message: _50.Params): _50.ParamsAmino;
                fromAminoMsg(object: _50.ParamsAminoMsg): _50.Params;
                toAminoMsg(message: _50.Params): _50.ParamsAminoMsg;
                fromProtoMsg(message: _50.ParamsProtoMsg): _50.Params;
                toProto(message: _50.Params): Uint8Array;
                toProtoMsg(message: _50.Params): _50.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _54.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.Module;
                    fromPartial(_: Partial<_54.Module>): _54.Module;
                    fromAmino(_: _54.ModuleAmino): _54.Module;
                    toAmino(_: _54.Module): _54.ModuleAmino;
                    fromAminoMsg(object: _54.ModuleAminoMsg): _54.Module;
                    toAminoMsg(message: _54.Module): _54.ModuleAminoMsg;
                    fromProtoMsg(message: _54.ModuleProtoMsg): _54.Module;
                    toProto(message: _54.Module): Uint8Array;
                    toProtoMsg(message: _54.Module): _54.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _262.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _58.QueryGrantsRequest): Promise<_58.QueryGrantsResponse>;
                granterGrants(request: _58.QueryGranterGrantsRequest): Promise<_58.QueryGranterGrantsResponse>;
                granteeGrants(request: _58.QueryGranteeGrantsRequest): Promise<_58.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _242.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _59.MsgGrant): {
                        typeUrl: string;
                        value: _59.MsgGrant;
                    };
                    exec(value: _59.MsgExec): {
                        typeUrl: string;
                        value: _59.MsgExec;
                    };
                    revoke(value: _59.MsgRevoke): {
                        typeUrl: string;
                        value: _59.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _59.MsgGrant) => _59.MsgGrantAmino;
                    fromAmino: (object: _59.MsgGrantAmino) => _59.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _59.MsgExec) => _59.MsgExecAmino;
                    fromAmino: (object: _59.MsgExecAmino) => _59.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _59.MsgRevoke) => _59.MsgRevokeAmino;
                    fromAmino: (object: _59.MsgRevokeAmino) => _59.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _59.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgGrant;
                fromPartial(object: Partial<_59.MsgGrant>): _59.MsgGrant;
                fromAmino(object: _59.MsgGrantAmino): _59.MsgGrant;
                toAmino(message: _59.MsgGrant): _59.MsgGrantAmino;
                fromAminoMsg(object: _59.MsgGrantAminoMsg): _59.MsgGrant;
                toAminoMsg(message: _59.MsgGrant): _59.MsgGrantAminoMsg;
                fromProtoMsg(message: _59.MsgGrantProtoMsg): _59.MsgGrant;
                toProto(message: _59.MsgGrant): Uint8Array;
                toProtoMsg(message: _59.MsgGrant): _59.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _59.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgExecResponse;
                fromPartial(object: Partial<_59.MsgExecResponse>): _59.MsgExecResponse;
                fromAmino(object: _59.MsgExecResponseAmino): _59.MsgExecResponse;
                toAmino(message: _59.MsgExecResponse): _59.MsgExecResponseAmino;
                fromAminoMsg(object: _59.MsgExecResponseAminoMsg): _59.MsgExecResponse;
                toAminoMsg(message: _59.MsgExecResponse): _59.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _59.MsgExecResponseProtoMsg): _59.MsgExecResponse;
                toProto(message: _59.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _59.MsgExecResponse): _59.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _59.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgExec;
                fromPartial(object: Partial<_59.MsgExec>): _59.MsgExec;
                fromAmino(object: _59.MsgExecAmino): _59.MsgExec;
                toAmino(message: _59.MsgExec): _59.MsgExecAmino;
                fromAminoMsg(object: _59.MsgExecAminoMsg): _59.MsgExec;
                toAminoMsg(message: _59.MsgExec): _59.MsgExecAminoMsg;
                fromProtoMsg(message: _59.MsgExecProtoMsg): _59.MsgExec;
                toProto(message: _59.MsgExec): Uint8Array;
                toProtoMsg(message: _59.MsgExec): _59.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _59.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgGrantResponse;
                fromPartial(_: Partial<_59.MsgGrantResponse>): _59.MsgGrantResponse;
                fromAmino(_: _59.MsgGrantResponseAmino): _59.MsgGrantResponse;
                toAmino(_: _59.MsgGrantResponse): _59.MsgGrantResponseAmino;
                fromAminoMsg(object: _59.MsgGrantResponseAminoMsg): _59.MsgGrantResponse;
                toAminoMsg(message: _59.MsgGrantResponse): _59.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _59.MsgGrantResponseProtoMsg): _59.MsgGrantResponse;
                toProto(message: _59.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _59.MsgGrantResponse): _59.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _59.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgRevoke;
                fromPartial(object: Partial<_59.MsgRevoke>): _59.MsgRevoke;
                fromAmino(object: _59.MsgRevokeAmino): _59.MsgRevoke;
                toAmino(message: _59.MsgRevoke): _59.MsgRevokeAmino;
                fromAminoMsg(object: _59.MsgRevokeAminoMsg): _59.MsgRevoke;
                toAminoMsg(message: _59.MsgRevoke): _59.MsgRevokeAminoMsg;
                fromProtoMsg(message: _59.MsgRevokeProtoMsg): _59.MsgRevoke;
                toProto(message: _59.MsgRevoke): Uint8Array;
                toProtoMsg(message: _59.MsgRevoke): _59.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _59.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgRevokeResponse;
                fromPartial(_: Partial<_59.MsgRevokeResponse>): _59.MsgRevokeResponse;
                fromAmino(_: _59.MsgRevokeResponseAmino): _59.MsgRevokeResponse;
                toAmino(_: _59.MsgRevokeResponse): _59.MsgRevokeResponseAmino;
                fromAminoMsg(object: _59.MsgRevokeResponseAminoMsg): _59.MsgRevokeResponse;
                toAminoMsg(message: _59.MsgRevokeResponse): _59.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _59.MsgRevokeResponseProtoMsg): _59.MsgRevokeResponse;
                toProto(message: _59.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _59.MsgRevokeResponse): _59.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _58.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryGrantsRequest;
                fromPartial(object: Partial<_58.QueryGrantsRequest>): _58.QueryGrantsRequest;
                fromAmino(object: _58.QueryGrantsRequestAmino): _58.QueryGrantsRequest;
                toAmino(message: _58.QueryGrantsRequest): _58.QueryGrantsRequestAmino;
                fromAminoMsg(object: _58.QueryGrantsRequestAminoMsg): _58.QueryGrantsRequest;
                toAminoMsg(message: _58.QueryGrantsRequest): _58.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryGrantsRequestProtoMsg): _58.QueryGrantsRequest;
                toProto(message: _58.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryGrantsRequest): _58.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _58.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryGrantsResponse;
                fromPartial(object: Partial<_58.QueryGrantsResponse>): _58.QueryGrantsResponse;
                fromAmino(object: _58.QueryGrantsResponseAmino): _58.QueryGrantsResponse;
                toAmino(message: _58.QueryGrantsResponse): _58.QueryGrantsResponseAmino;
                fromAminoMsg(object: _58.QueryGrantsResponseAminoMsg): _58.QueryGrantsResponse;
                toAminoMsg(message: _58.QueryGrantsResponse): _58.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryGrantsResponseProtoMsg): _58.QueryGrantsResponse;
                toProto(message: _58.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryGrantsResponse): _58.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _58.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryGranterGrantsRequest;
                fromPartial(object: Partial<_58.QueryGranterGrantsRequest>): _58.QueryGranterGrantsRequest;
                fromAmino(object: _58.QueryGranterGrantsRequestAmino): _58.QueryGranterGrantsRequest;
                toAmino(message: _58.QueryGranterGrantsRequest): _58.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _58.QueryGranterGrantsRequestAminoMsg): _58.QueryGranterGrantsRequest;
                toAminoMsg(message: _58.QueryGranterGrantsRequest): _58.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryGranterGrantsRequestProtoMsg): _58.QueryGranterGrantsRequest;
                toProto(message: _58.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryGranterGrantsRequest): _58.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _58.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryGranterGrantsResponse;
                fromPartial(object: Partial<_58.QueryGranterGrantsResponse>): _58.QueryGranterGrantsResponse;
                fromAmino(object: _58.QueryGranterGrantsResponseAmino): _58.QueryGranterGrantsResponse;
                toAmino(message: _58.QueryGranterGrantsResponse): _58.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _58.QueryGranterGrantsResponseAminoMsg): _58.QueryGranterGrantsResponse;
                toAminoMsg(message: _58.QueryGranterGrantsResponse): _58.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryGranterGrantsResponseProtoMsg): _58.QueryGranterGrantsResponse;
                toProto(message: _58.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryGranterGrantsResponse): _58.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _58.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryGranteeGrantsRequest;
                fromPartial(object: Partial<_58.QueryGranteeGrantsRequest>): _58.QueryGranteeGrantsRequest;
                fromAmino(object: _58.QueryGranteeGrantsRequestAmino): _58.QueryGranteeGrantsRequest;
                toAmino(message: _58.QueryGranteeGrantsRequest): _58.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _58.QueryGranteeGrantsRequestAminoMsg): _58.QueryGranteeGrantsRequest;
                toAminoMsg(message: _58.QueryGranteeGrantsRequest): _58.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _58.QueryGranteeGrantsRequestProtoMsg): _58.QueryGranteeGrantsRequest;
                toProto(message: _58.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _58.QueryGranteeGrantsRequest): _58.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _58.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.QueryGranteeGrantsResponse;
                fromPartial(object: Partial<_58.QueryGranteeGrantsResponse>): _58.QueryGranteeGrantsResponse;
                fromAmino(object: _58.QueryGranteeGrantsResponseAmino): _58.QueryGranteeGrantsResponse;
                toAmino(message: _58.QueryGranteeGrantsResponse): _58.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _58.QueryGranteeGrantsResponseAminoMsg): _58.QueryGranteeGrantsResponse;
                toAminoMsg(message: _58.QueryGranteeGrantsResponse): _58.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _58.QueryGranteeGrantsResponseProtoMsg): _58.QueryGranteeGrantsResponse;
                toProto(message: _58.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _58.QueryGranteeGrantsResponse): _58.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _57.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.GenesisState;
                fromPartial(object: Partial<_57.GenesisState>): _57.GenesisState;
                fromAmino(object: _57.GenesisStateAmino): _57.GenesisState;
                toAmino(message: _57.GenesisState): _57.GenesisStateAmino;
                fromAminoMsg(object: _57.GenesisStateAminoMsg): _57.GenesisState;
                toAminoMsg(message: _57.GenesisState): _57.GenesisStateAminoMsg;
                fromProtoMsg(message: _57.GenesisStateProtoMsg): _57.GenesisState;
                toProto(message: _57.GenesisState): Uint8Array;
                toProtoMsg(message: _57.GenesisState): _57.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _56.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.EventGrant;
                fromPartial(object: Partial<_56.EventGrant>): _56.EventGrant;
                fromAmino(object: _56.EventGrantAmino): _56.EventGrant;
                toAmino(message: _56.EventGrant): _56.EventGrantAmino;
                fromAminoMsg(object: _56.EventGrantAminoMsg): _56.EventGrant;
                toAminoMsg(message: _56.EventGrant): _56.EventGrantAminoMsg;
                fromProtoMsg(message: _56.EventGrantProtoMsg): _56.EventGrant;
                toProto(message: _56.EventGrant): Uint8Array;
                toProtoMsg(message: _56.EventGrant): _56.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _56.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.EventRevoke;
                fromPartial(object: Partial<_56.EventRevoke>): _56.EventRevoke;
                fromAmino(object: _56.EventRevokeAmino): _56.EventRevoke;
                toAmino(message: _56.EventRevoke): _56.EventRevokeAmino;
                fromAminoMsg(object: _56.EventRevokeAminoMsg): _56.EventRevoke;
                toAminoMsg(message: _56.EventRevoke): _56.EventRevokeAminoMsg;
                fromProtoMsg(message: _56.EventRevokeProtoMsg): _56.EventRevoke;
                toProto(message: _56.EventRevoke): Uint8Array;
                toProtoMsg(message: _56.EventRevoke): _56.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _55.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.GenericAuthorization;
                fromPartial(object: Partial<_55.GenericAuthorization>): _55.GenericAuthorization;
                fromAmino(object: _55.GenericAuthorizationAmino): _55.GenericAuthorization;
                toAmino(message: _55.GenericAuthorization): _55.GenericAuthorizationAmino;
                fromAminoMsg(object: _55.GenericAuthorizationAminoMsg): _55.GenericAuthorization;
                toAminoMsg(message: _55.GenericAuthorization): _55.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _55.GenericAuthorizationProtoMsg): _55.GenericAuthorization;
                toProto(message: _55.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _55.GenericAuthorization): _55.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _55.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.Grant;
                fromPartial(object: Partial<_55.Grant>): _55.Grant;
                fromAmino(object: _55.GrantAmino): _55.Grant;
                toAmino(message: _55.Grant): _55.GrantAmino;
                fromAminoMsg(object: _55.GrantAminoMsg): _55.Grant;
                toAminoMsg(message: _55.Grant): _55.GrantAminoMsg;
                fromProtoMsg(message: _55.GrantProtoMsg): _55.Grant;
                toProto(message: _55.Grant): Uint8Array;
                toProtoMsg(message: _55.Grant): _55.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _55.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.GrantAuthorization;
                fromPartial(object: Partial<_55.GrantAuthorization>): _55.GrantAuthorization;
                fromAmino(object: _55.GrantAuthorizationAmino): _55.GrantAuthorization;
                toAmino(message: _55.GrantAuthorization): _55.GrantAuthorizationAmino;
                fromAminoMsg(object: _55.GrantAuthorizationAminoMsg): _55.GrantAuthorization;
                toAminoMsg(message: _55.GrantAuthorization): _55.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _55.GrantAuthorizationProtoMsg): _55.GrantAuthorization;
                toProto(message: _55.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _55.GrantAuthorization): _55.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _55.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.GrantQueueItem;
                fromPartial(object: Partial<_55.GrantQueueItem>): _55.GrantQueueItem;
                fromAmino(object: _55.GrantQueueItemAmino): _55.GrantQueueItem;
                toAmino(message: _55.GrantQueueItem): _55.GrantQueueItemAmino;
                fromAminoMsg(object: _55.GrantQueueItemAminoMsg): _55.GrantQueueItem;
                toAminoMsg(message: _55.GrantQueueItem): _55.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _55.GrantQueueItemProtoMsg): _55.GrantQueueItem;
                toProto(message: _55.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _55.GrantQueueItem): _55.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _55.GenericAuthorization | _63.SendAuthorization | _141.StakeAuthorization | import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _263.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _61.AppOptionsRequest): Promise<_61.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _61.AppOptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.AppOptionsRequest;
                fromPartial(_: Partial<_61.AppOptionsRequest>): _61.AppOptionsRequest;
                fromAmino(_: _61.AppOptionsRequestAmino): _61.AppOptionsRequest;
                toAmino(_: _61.AppOptionsRequest): _61.AppOptionsRequestAmino;
                fromAminoMsg(object: _61.AppOptionsRequestAminoMsg): _61.AppOptionsRequest;
                toAminoMsg(message: _61.AppOptionsRequest): _61.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _61.AppOptionsRequestProtoMsg): _61.AppOptionsRequest;
                toProto(message: _61.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _61.AppOptionsRequest): _61.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _61.AppOptionsResponse_ModuleOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromPartial(object: Partial<_61.AppOptionsResponse_ModuleOptionsEntry>): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _61.AppOptionsResponse_ModuleOptionsEntryAmino): _61.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _61.AppOptionsResponse_ModuleOptionsEntry): _61.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _61.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _61.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _61.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _61.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _61.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _61.AppOptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.AppOptionsResponse;
                fromPartial(object: Partial<_61.AppOptionsResponse>): _61.AppOptionsResponse;
                fromAmino(object: _61.AppOptionsResponseAmino): _61.AppOptionsResponse;
                toAmino(message: _61.AppOptionsResponse): _61.AppOptionsResponseAmino;
                fromAminoMsg(object: _61.AppOptionsResponseAminoMsg): _61.AppOptionsResponse;
                toAminoMsg(message: _61.AppOptionsResponse): _61.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _61.AppOptionsResponseProtoMsg): _61.AppOptionsResponse;
                toProto(message: _61.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _61.AppOptionsResponse): _61.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _60.ModuleOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ModuleOptions;
                fromPartial(object: Partial<_60.ModuleOptions>): _60.ModuleOptions;
                fromAmino(object: _60.ModuleOptionsAmino): _60.ModuleOptions;
                toAmino(message: _60.ModuleOptions): _60.ModuleOptionsAmino;
                fromAminoMsg(object: _60.ModuleOptionsAminoMsg): _60.ModuleOptions;
                toAminoMsg(message: _60.ModuleOptions): _60.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _60.ModuleOptionsProtoMsg): _60.ModuleOptions;
                toProto(message: _60.ModuleOptions): Uint8Array;
                toProtoMsg(message: _60.ModuleOptions): _60.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _60.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromPartial(object: Partial<_60.ServiceCommandDescriptor_SubCommandsEntry>): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _60.ServiceCommandDescriptor_SubCommandsEntryAmino): _60.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _60.ServiceCommandDescriptor_SubCommandsEntry): _60.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _60.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _60.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _60.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _60.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _60.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _60.ServiceCommandDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ServiceCommandDescriptor;
                fromPartial(object: Partial<_60.ServiceCommandDescriptor>): _60.ServiceCommandDescriptor;
                fromAmino(object: _60.ServiceCommandDescriptorAmino): _60.ServiceCommandDescriptor;
                toAmino(message: _60.ServiceCommandDescriptor): _60.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _60.ServiceCommandDescriptorAminoMsg): _60.ServiceCommandDescriptor;
                toAminoMsg(message: _60.ServiceCommandDescriptor): _60.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _60.ServiceCommandDescriptorProtoMsg): _60.ServiceCommandDescriptor;
                toProto(message: _60.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _60.ServiceCommandDescriptor): _60.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _60.RpcCommandOptions_FlagOptionsEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.RpcCommandOptions_FlagOptionsEntry;
                fromPartial(object: Partial<_60.RpcCommandOptions_FlagOptionsEntry>): _60.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _60.RpcCommandOptions_FlagOptionsEntryAmino): _60.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _60.RpcCommandOptions_FlagOptionsEntry): _60.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _60.RpcCommandOptions_FlagOptionsEntryAminoMsg): _60.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _60.RpcCommandOptions_FlagOptionsEntryProtoMsg): _60.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _60.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _60.RpcCommandOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.RpcCommandOptions;
                fromPartial(object: Partial<_60.RpcCommandOptions>): _60.RpcCommandOptions;
                fromAmino(object: _60.RpcCommandOptionsAmino): _60.RpcCommandOptions;
                toAmino(message: _60.RpcCommandOptions): _60.RpcCommandOptionsAmino;
                fromAminoMsg(object: _60.RpcCommandOptionsAminoMsg): _60.RpcCommandOptions;
                toAminoMsg(message: _60.RpcCommandOptions): _60.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _60.RpcCommandOptionsProtoMsg): _60.RpcCommandOptions;
                toProto(message: _60.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _60.RpcCommandOptions): _60.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _60.FlagOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.FlagOptions;
                fromPartial(object: Partial<_60.FlagOptions>): _60.FlagOptions;
                fromAmino(object: _60.FlagOptionsAmino): _60.FlagOptions;
                toAmino(message: _60.FlagOptions): _60.FlagOptionsAmino;
                fromAminoMsg(object: _60.FlagOptionsAminoMsg): _60.FlagOptions;
                toAminoMsg(message: _60.FlagOptions): _60.FlagOptionsAminoMsg;
                fromProtoMsg(message: _60.FlagOptionsProtoMsg): _60.FlagOptions;
                toProto(message: _60.FlagOptions): Uint8Array;
                toProtoMsg(message: _60.FlagOptions): _60.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _60.PositionalArgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.PositionalArgDescriptor;
                fromPartial(object: Partial<_60.PositionalArgDescriptor>): _60.PositionalArgDescriptor;
                fromAmino(object: _60.PositionalArgDescriptorAmino): _60.PositionalArgDescriptor;
                toAmino(message: _60.PositionalArgDescriptor): _60.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _60.PositionalArgDescriptorAminoMsg): _60.PositionalArgDescriptor;
                toAminoMsg(message: _60.PositionalArgDescriptor): _60.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _60.PositionalArgDescriptorProtoMsg): _60.PositionalArgDescriptor;
                toProto(message: _60.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _60.PositionalArgDescriptor): _60.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _62.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Module;
                    fromPartial(object: Partial<_62.Module>): _62.Module;
                    fromAmino(object: _62.ModuleAmino): _62.Module;
                    toAmino(message: _62.Module): _62.ModuleAmino;
                    fromAminoMsg(object: _62.ModuleAminoMsg): _62.Module;
                    toAminoMsg(message: _62.Module): _62.ModuleAminoMsg;
                    fromProtoMsg(message: _62.ModuleProtoMsg): _62.Module;
                    toProto(message: _62.Module): Uint8Array;
                    toProtoMsg(message: _62.Module): _62.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _264.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _66.QueryBalanceRequest): Promise<_66.QueryBalanceResponse>;
                allBalances(request: _66.QueryAllBalancesRequest): Promise<_66.QueryAllBalancesResponse>;
                spendableBalances(request: _66.QuerySpendableBalancesRequest): Promise<_66.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _66.QuerySpendableBalanceByDenomRequest): Promise<_66.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _66.QueryTotalSupplyRequest): Promise<_66.QueryTotalSupplyResponse>;
                supplyOf(request: _66.QuerySupplyOfRequest): Promise<_66.QuerySupplyOfResponse>;
                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                denomMetadata(request: _66.QueryDenomMetadataRequest): Promise<_66.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _66.QueryDenomsMetadataRequest): Promise<_66.QueryDenomsMetadataResponse>;
                denomOwners(request: _66.QueryDenomOwnersRequest): Promise<_66.QueryDenomOwnersResponse>;
                sendEnabled(request: _66.QuerySendEnabledRequest): Promise<_66.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _67.MsgSend): {
                        typeUrl: string;
                        value: _67.MsgSend;
                    };
                    multiSend(value: _67.MsgMultiSend): {
                        typeUrl: string;
                        value: _67.MsgMultiSend;
                    };
                    updateParams(value: _67.MsgUpdateParams): {
                        typeUrl: string;
                        value: _67.MsgUpdateParams;
                    };
                    setSendEnabled(value: _67.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _67.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _67.MsgSend) => _67.MsgSendAmino;
                    fromAmino: (object: _67.MsgSendAmino) => _67.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _67.MsgMultiSend) => _67.MsgMultiSendAmino;
                    fromAmino: (object: _67.MsgMultiSendAmino) => _67.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _67.MsgUpdateParams) => _67.MsgUpdateParamsAmino;
                    fromAmino: (object: _67.MsgUpdateParamsAmino) => _67.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _67.MsgSetSendEnabled) => _67.MsgSetSendEnabledAmino;
                    fromAmino: (object: _67.MsgSetSendEnabledAmino) => _67.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _67.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgSend;
                fromPartial(object: Partial<_67.MsgSend>): _67.MsgSend;
                fromAmino(object: _67.MsgSendAmino): _67.MsgSend;
                toAmino(message: _67.MsgSend): _67.MsgSendAmino;
                fromAminoMsg(object: _67.MsgSendAminoMsg): _67.MsgSend;
                toAminoMsg(message: _67.MsgSend): _67.MsgSendAminoMsg;
                fromProtoMsg(message: _67.MsgSendProtoMsg): _67.MsgSend;
                toProto(message: _67.MsgSend): Uint8Array;
                toProtoMsg(message: _67.MsgSend): _67.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _67.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgSendResponse;
                fromPartial(_: Partial<_67.MsgSendResponse>): _67.MsgSendResponse;
                fromAmino(_: _67.MsgSendResponseAmino): _67.MsgSendResponse;
                toAmino(_: _67.MsgSendResponse): _67.MsgSendResponseAmino;
                fromAminoMsg(object: _67.MsgSendResponseAminoMsg): _67.MsgSendResponse;
                toAminoMsg(message: _67.MsgSendResponse): _67.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _67.MsgSendResponseProtoMsg): _67.MsgSendResponse;
                toProto(message: _67.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _67.MsgSendResponse): _67.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _67.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgMultiSend;
                fromPartial(object: Partial<_67.MsgMultiSend>): _67.MsgMultiSend;
                fromAmino(object: _67.MsgMultiSendAmino): _67.MsgMultiSend;
                toAmino(message: _67.MsgMultiSend): _67.MsgMultiSendAmino;
                fromAminoMsg(object: _67.MsgMultiSendAminoMsg): _67.MsgMultiSend;
                toAminoMsg(message: _67.MsgMultiSend): _67.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _67.MsgMultiSendProtoMsg): _67.MsgMultiSend;
                toProto(message: _67.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _67.MsgMultiSend): _67.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _67.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgMultiSendResponse;
                fromPartial(_: Partial<_67.MsgMultiSendResponse>): _67.MsgMultiSendResponse;
                fromAmino(_: _67.MsgMultiSendResponseAmino): _67.MsgMultiSendResponse;
                toAmino(_: _67.MsgMultiSendResponse): _67.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _67.MsgMultiSendResponseAminoMsg): _67.MsgMultiSendResponse;
                toAminoMsg(message: _67.MsgMultiSendResponse): _67.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _67.MsgMultiSendResponseProtoMsg): _67.MsgMultiSendResponse;
                toProto(message: _67.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _67.MsgMultiSendResponse): _67.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _67.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgUpdateParams;
                fromPartial(object: Partial<_67.MsgUpdateParams>): _67.MsgUpdateParams;
                fromAmino(object: _67.MsgUpdateParamsAmino): _67.MsgUpdateParams;
                toAmino(message: _67.MsgUpdateParams): _67.MsgUpdateParamsAmino;
                fromAminoMsg(object: _67.MsgUpdateParamsAminoMsg): _67.MsgUpdateParams;
                toAminoMsg(message: _67.MsgUpdateParams): _67.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _67.MsgUpdateParamsProtoMsg): _67.MsgUpdateParams;
                toProto(message: _67.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _67.MsgUpdateParams): _67.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _67.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_67.MsgUpdateParamsResponse>): _67.MsgUpdateParamsResponse;
                fromAmino(_: _67.MsgUpdateParamsResponseAmino): _67.MsgUpdateParamsResponse;
                toAmino(_: _67.MsgUpdateParamsResponse): _67.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _67.MsgUpdateParamsResponseAminoMsg): _67.MsgUpdateParamsResponse;
                toAminoMsg(message: _67.MsgUpdateParamsResponse): _67.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _67.MsgUpdateParamsResponseProtoMsg): _67.MsgUpdateParamsResponse;
                toProto(message: _67.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _67.MsgUpdateParamsResponse): _67.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _67.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgSetSendEnabled;
                fromPartial(object: Partial<_67.MsgSetSendEnabled>): _67.MsgSetSendEnabled;
                fromAmino(object: _67.MsgSetSendEnabledAmino): _67.MsgSetSendEnabled;
                toAmino(message: _67.MsgSetSendEnabled): _67.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _67.MsgSetSendEnabledAminoMsg): _67.MsgSetSendEnabled;
                toAminoMsg(message: _67.MsgSetSendEnabled): _67.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _67.MsgSetSendEnabledProtoMsg): _67.MsgSetSendEnabled;
                toProto(message: _67.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _67.MsgSetSendEnabled): _67.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _67.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgSetSendEnabledResponse;
                fromPartial(_: Partial<_67.MsgSetSendEnabledResponse>): _67.MsgSetSendEnabledResponse;
                fromAmino(_: _67.MsgSetSendEnabledResponseAmino): _67.MsgSetSendEnabledResponse;
                toAmino(_: _67.MsgSetSendEnabledResponse): _67.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _67.MsgSetSendEnabledResponseAminoMsg): _67.MsgSetSendEnabledResponse;
                toAminoMsg(message: _67.MsgSetSendEnabledResponse): _67.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _67.MsgSetSendEnabledResponseProtoMsg): _67.MsgSetSendEnabledResponse;
                toProto(message: _67.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _67.MsgSetSendEnabledResponse): _67.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _66.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryBalanceRequest;
                fromPartial(object: Partial<_66.QueryBalanceRequest>): _66.QueryBalanceRequest;
                fromAmino(object: _66.QueryBalanceRequestAmino): _66.QueryBalanceRequest;
                toAmino(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestAmino;
                fromAminoMsg(object: _66.QueryBalanceRequestAminoMsg): _66.QueryBalanceRequest;
                toAminoMsg(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _66.QueryBalanceRequestProtoMsg): _66.QueryBalanceRequest;
                toProto(message: _66.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _66.QueryBalanceRequest): _66.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _66.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryBalanceResponse;
                fromPartial(object: Partial<_66.QueryBalanceResponse>): _66.QueryBalanceResponse;
                fromAmino(object: _66.QueryBalanceResponseAmino): _66.QueryBalanceResponse;
                toAmino(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseAmino;
                fromAminoMsg(object: _66.QueryBalanceResponseAminoMsg): _66.QueryBalanceResponse;
                toAminoMsg(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _66.QueryBalanceResponseProtoMsg): _66.QueryBalanceResponse;
                toProto(message: _66.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _66.QueryBalanceResponse): _66.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllBalancesRequest;
                fromPartial(object: Partial<_66.QueryAllBalancesRequest>): _66.QueryAllBalancesRequest;
                fromAmino(object: _66.QueryAllBalancesRequestAmino): _66.QueryAllBalancesRequest;
                toAmino(message: _66.QueryAllBalancesRequest): _66.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _66.QueryAllBalancesRequestAminoMsg): _66.QueryAllBalancesRequest;
                toAminoMsg(message: _66.QueryAllBalancesRequest): _66.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllBalancesRequestProtoMsg): _66.QueryAllBalancesRequest;
                toProto(message: _66.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllBalancesRequest): _66.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllBalancesResponse;
                fromPartial(object: Partial<_66.QueryAllBalancesResponse>): _66.QueryAllBalancesResponse;
                fromAmino(object: _66.QueryAllBalancesResponseAmino): _66.QueryAllBalancesResponse;
                toAmino(message: _66.QueryAllBalancesResponse): _66.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _66.QueryAllBalancesResponseAminoMsg): _66.QueryAllBalancesResponse;
                toAminoMsg(message: _66.QueryAllBalancesResponse): _66.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllBalancesResponseProtoMsg): _66.QueryAllBalancesResponse;
                toProto(message: _66.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllBalancesResponse): _66.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySpendableBalancesRequest;
                fromPartial(object: Partial<_66.QuerySpendableBalancesRequest>): _66.QuerySpendableBalancesRequest;
                fromAmino(object: _66.QuerySpendableBalancesRequestAmino): _66.QuerySpendableBalancesRequest;
                toAmino(message: _66.QuerySpendableBalancesRequest): _66.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _66.QuerySpendableBalancesRequestAminoMsg): _66.QuerySpendableBalancesRequest;
                toAminoMsg(message: _66.QuerySpendableBalancesRequest): _66.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalancesRequestProtoMsg): _66.QuerySpendableBalancesRequest;
                toProto(message: _66.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalancesRequest): _66.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySpendableBalancesResponse;
                fromPartial(object: Partial<_66.QuerySpendableBalancesResponse>): _66.QuerySpendableBalancesResponse;
                fromAmino(object: _66.QuerySpendableBalancesResponseAmino): _66.QuerySpendableBalancesResponse;
                toAmino(message: _66.QuerySpendableBalancesResponse): _66.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _66.QuerySpendableBalancesResponseAminoMsg): _66.QuerySpendableBalancesResponse;
                toAminoMsg(message: _66.QuerySpendableBalancesResponse): _66.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalancesResponseProtoMsg): _66.QuerySpendableBalancesResponse;
                toProto(message: _66.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalancesResponse): _66.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySpendableBalanceByDenomRequest;
                fromPartial(object: Partial<_66.QuerySpendableBalanceByDenomRequest>): _66.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _66.QuerySpendableBalanceByDenomRequestAmino): _66.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _66.QuerySpendableBalanceByDenomRequest): _66.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _66.QuerySpendableBalanceByDenomRequestAminoMsg): _66.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _66.QuerySpendableBalanceByDenomRequest): _66.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalanceByDenomRequestProtoMsg): _66.QuerySpendableBalanceByDenomRequest;
                toProto(message: _66.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalanceByDenomRequest): _66.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _66.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySpendableBalanceByDenomResponse;
                fromPartial(object: Partial<_66.QuerySpendableBalanceByDenomResponse>): _66.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _66.QuerySpendableBalanceByDenomResponseAmino): _66.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _66.QuerySpendableBalanceByDenomResponse): _66.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _66.QuerySpendableBalanceByDenomResponseAminoMsg): _66.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _66.QuerySpendableBalanceByDenomResponse): _66.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySpendableBalanceByDenomResponseProtoMsg): _66.QuerySpendableBalanceByDenomResponse;
                toProto(message: _66.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySpendableBalanceByDenomResponse): _66.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _66.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryTotalSupplyRequest;
                fromPartial(object: Partial<_66.QueryTotalSupplyRequest>): _66.QueryTotalSupplyRequest;
                fromAmino(object: _66.QueryTotalSupplyRequestAmino): _66.QueryTotalSupplyRequest;
                toAmino(message: _66.QueryTotalSupplyRequest): _66.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _66.QueryTotalSupplyRequestAminoMsg): _66.QueryTotalSupplyRequest;
                toAminoMsg(message: _66.QueryTotalSupplyRequest): _66.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _66.QueryTotalSupplyRequestProtoMsg): _66.QueryTotalSupplyRequest;
                toProto(message: _66.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _66.QueryTotalSupplyRequest): _66.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _66.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_66.QueryTotalSupplyResponse>): _66.QueryTotalSupplyResponse;
                fromAmino(object: _66.QueryTotalSupplyResponseAmino): _66.QueryTotalSupplyResponse;
                toAmino(message: _66.QueryTotalSupplyResponse): _66.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _66.QueryTotalSupplyResponseAminoMsg): _66.QueryTotalSupplyResponse;
                toAminoMsg(message: _66.QueryTotalSupplyResponse): _66.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _66.QueryTotalSupplyResponseProtoMsg): _66.QueryTotalSupplyResponse;
                toProto(message: _66.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _66.QueryTotalSupplyResponse): _66.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _66.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySupplyOfRequest;
                fromPartial(object: Partial<_66.QuerySupplyOfRequest>): _66.QuerySupplyOfRequest;
                fromAmino(object: _66.QuerySupplyOfRequestAmino): _66.QuerySupplyOfRequest;
                toAmino(message: _66.QuerySupplyOfRequest): _66.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _66.QuerySupplyOfRequestAminoMsg): _66.QuerySupplyOfRequest;
                toAminoMsg(message: _66.QuerySupplyOfRequest): _66.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySupplyOfRequestProtoMsg): _66.QuerySupplyOfRequest;
                toProto(message: _66.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySupplyOfRequest): _66.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _66.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySupplyOfResponse;
                fromPartial(object: Partial<_66.QuerySupplyOfResponse>): _66.QuerySupplyOfResponse;
                fromAmino(object: _66.QuerySupplyOfResponseAmino): _66.QuerySupplyOfResponse;
                toAmino(message: _66.QuerySupplyOfResponse): _66.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _66.QuerySupplyOfResponseAminoMsg): _66.QuerySupplyOfResponse;
                toAminoMsg(message: _66.QuerySupplyOfResponse): _66.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySupplyOfResponseProtoMsg): _66.QuerySupplyOfResponse;
                toProto(message: _66.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySupplyOfResponse): _66.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _66.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryParamsRequest;
                fromPartial(_: Partial<_66.QueryParamsRequest>): _66.QueryParamsRequest;
                fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                toProto(message: _66.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _66.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryParamsResponse;
                fromPartial(object: Partial<_66.QueryParamsResponse>): _66.QueryParamsResponse;
                fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                toProto(message: _66.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _66.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_66.QueryDenomsMetadataRequest>): _66.QueryDenomsMetadataRequest;
                fromAmino(object: _66.QueryDenomsMetadataRequestAmino): _66.QueryDenomsMetadataRequest;
                toAmino(message: _66.QueryDenomsMetadataRequest): _66.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _66.QueryDenomsMetadataRequestAminoMsg): _66.QueryDenomsMetadataRequest;
                toAminoMsg(message: _66.QueryDenomsMetadataRequest): _66.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDenomsMetadataRequestProtoMsg): _66.QueryDenomsMetadataRequest;
                toProto(message: _66.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDenomsMetadataRequest): _66.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _66.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_66.QueryDenomsMetadataResponse>): _66.QueryDenomsMetadataResponse;
                fromAmino(object: _66.QueryDenomsMetadataResponseAmino): _66.QueryDenomsMetadataResponse;
                toAmino(message: _66.QueryDenomsMetadataResponse): _66.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _66.QueryDenomsMetadataResponseAminoMsg): _66.QueryDenomsMetadataResponse;
                toAminoMsg(message: _66.QueryDenomsMetadataResponse): _66.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDenomsMetadataResponseProtoMsg): _66.QueryDenomsMetadataResponse;
                toProto(message: _66.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDenomsMetadataResponse): _66.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _66.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_66.QueryDenomMetadataRequest>): _66.QueryDenomMetadataRequest;
                fromAmino(object: _66.QueryDenomMetadataRequestAmino): _66.QueryDenomMetadataRequest;
                toAmino(message: _66.QueryDenomMetadataRequest): _66.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _66.QueryDenomMetadataRequestAminoMsg): _66.QueryDenomMetadataRequest;
                toAminoMsg(message: _66.QueryDenomMetadataRequest): _66.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDenomMetadataRequestProtoMsg): _66.QueryDenomMetadataRequest;
                toProto(message: _66.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDenomMetadataRequest): _66.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _66.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_66.QueryDenomMetadataResponse>): _66.QueryDenomMetadataResponse;
                fromAmino(object: _66.QueryDenomMetadataResponseAmino): _66.QueryDenomMetadataResponse;
                toAmino(message: _66.QueryDenomMetadataResponse): _66.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _66.QueryDenomMetadataResponseAminoMsg): _66.QueryDenomMetadataResponse;
                toAminoMsg(message: _66.QueryDenomMetadataResponse): _66.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDenomMetadataResponseProtoMsg): _66.QueryDenomMetadataResponse;
                toProto(message: _66.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDenomMetadataResponse): _66.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _66.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryDenomOwnersRequest;
                fromPartial(object: Partial<_66.QueryDenomOwnersRequest>): _66.QueryDenomOwnersRequest;
                fromAmino(object: _66.QueryDenomOwnersRequestAmino): _66.QueryDenomOwnersRequest;
                toAmino(message: _66.QueryDenomOwnersRequest): _66.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _66.QueryDenomOwnersRequestAminoMsg): _66.QueryDenomOwnersRequest;
                toAminoMsg(message: _66.QueryDenomOwnersRequest): _66.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _66.QueryDenomOwnersRequestProtoMsg): _66.QueryDenomOwnersRequest;
                toProto(message: _66.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _66.QueryDenomOwnersRequest): _66.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _66.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.DenomOwner;
                fromPartial(object: Partial<_66.DenomOwner>): _66.DenomOwner;
                fromAmino(object: _66.DenomOwnerAmino): _66.DenomOwner;
                toAmino(message: _66.DenomOwner): _66.DenomOwnerAmino;
                fromAminoMsg(object: _66.DenomOwnerAminoMsg): _66.DenomOwner;
                toAminoMsg(message: _66.DenomOwner): _66.DenomOwnerAminoMsg;
                fromProtoMsg(message: _66.DenomOwnerProtoMsg): _66.DenomOwner;
                toProto(message: _66.DenomOwner): Uint8Array;
                toProtoMsg(message: _66.DenomOwner): _66.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _66.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryDenomOwnersResponse;
                fromPartial(object: Partial<_66.QueryDenomOwnersResponse>): _66.QueryDenomOwnersResponse;
                fromAmino(object: _66.QueryDenomOwnersResponseAmino): _66.QueryDenomOwnersResponse;
                toAmino(message: _66.QueryDenomOwnersResponse): _66.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _66.QueryDenomOwnersResponseAminoMsg): _66.QueryDenomOwnersResponse;
                toAminoMsg(message: _66.QueryDenomOwnersResponse): _66.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _66.QueryDenomOwnersResponseProtoMsg): _66.QueryDenomOwnersResponse;
                toProto(message: _66.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _66.QueryDenomOwnersResponse): _66.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _66.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySendEnabledRequest;
                fromPartial(object: Partial<_66.QuerySendEnabledRequest>): _66.QuerySendEnabledRequest;
                fromAmino(object: _66.QuerySendEnabledRequestAmino): _66.QuerySendEnabledRequest;
                toAmino(message: _66.QuerySendEnabledRequest): _66.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _66.QuerySendEnabledRequestAminoMsg): _66.QuerySendEnabledRequest;
                toAminoMsg(message: _66.QuerySendEnabledRequest): _66.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _66.QuerySendEnabledRequestProtoMsg): _66.QuerySendEnabledRequest;
                toProto(message: _66.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _66.QuerySendEnabledRequest): _66.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _66.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QuerySendEnabledResponse;
                fromPartial(object: Partial<_66.QuerySendEnabledResponse>): _66.QuerySendEnabledResponse;
                fromAmino(object: _66.QuerySendEnabledResponseAmino): _66.QuerySendEnabledResponse;
                toAmino(message: _66.QuerySendEnabledResponse): _66.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _66.QuerySendEnabledResponseAminoMsg): _66.QuerySendEnabledResponse;
                toAminoMsg(message: _66.QuerySendEnabledResponse): _66.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _66.QuerySendEnabledResponseProtoMsg): _66.QuerySendEnabledResponse;
                toProto(message: _66.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _66.QuerySendEnabledResponse): _66.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _65.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.GenesisState;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                toAminoMsg(message: _65.GenesisState): _65.GenesisStateAminoMsg;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _65.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.Balance;
                fromPartial(object: Partial<_65.Balance>): _65.Balance;
                fromAmino(object: _65.BalanceAmino): _65.Balance;
                toAmino(message: _65.Balance): _65.BalanceAmino;
                fromAminoMsg(object: _65.BalanceAminoMsg): _65.Balance;
                toAminoMsg(message: _65.Balance): _65.BalanceAminoMsg;
                fromProtoMsg(message: _65.BalanceProtoMsg): _65.Balance;
                toProto(message: _65.Balance): Uint8Array;
                toProtoMsg(message: _65.Balance): _65.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _64.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Params;
                fromPartial(object: Partial<_64.Params>): _64.Params;
                fromAmino(object: _64.ParamsAmino): _64.Params;
                toAmino(message: _64.Params): _64.ParamsAmino;
                fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                toProto(message: _64.Params): Uint8Array;
                toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _64.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.SendEnabled;
                fromPartial(object: Partial<_64.SendEnabled>): _64.SendEnabled;
                fromAmino(object: _64.SendEnabledAmino): _64.SendEnabled;
                toAmino(message: _64.SendEnabled): _64.SendEnabledAmino;
                fromAminoMsg(object: _64.SendEnabledAminoMsg): _64.SendEnabled;
                toAminoMsg(message: _64.SendEnabled): _64.SendEnabledAminoMsg;
                fromProtoMsg(message: _64.SendEnabledProtoMsg): _64.SendEnabled;
                toProto(message: _64.SendEnabled): Uint8Array;
                toProtoMsg(message: _64.SendEnabled): _64.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _64.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Input;
                fromPartial(object: Partial<_64.Input>): _64.Input;
                fromAmino(object: _64.InputAmino): _64.Input;
                toAmino(message: _64.Input): _64.InputAmino;
                fromAminoMsg(object: _64.InputAminoMsg): _64.Input;
                toAminoMsg(message: _64.Input): _64.InputAminoMsg;
                fromProtoMsg(message: _64.InputProtoMsg): _64.Input;
                toProto(message: _64.Input): Uint8Array;
                toProtoMsg(message: _64.Input): _64.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _64.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Output;
                fromPartial(object: Partial<_64.Output>): _64.Output;
                fromAmino(object: _64.OutputAmino): _64.Output;
                toAmino(message: _64.Output): _64.OutputAmino;
                fromAminoMsg(object: _64.OutputAminoMsg): _64.Output;
                toAminoMsg(message: _64.Output): _64.OutputAminoMsg;
                fromProtoMsg(message: _64.OutputProtoMsg): _64.Output;
                toProto(message: _64.Output): Uint8Array;
                toProtoMsg(message: _64.Output): _64.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _64.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Supply;
                fromPartial(object: Partial<_64.Supply>): _64.Supply;
                fromAmino(object: _64.SupplyAmino): _64.Supply;
                toAmino(message: _64.Supply): _64.SupplyAmino;
                fromAminoMsg(object: _64.SupplyAminoMsg): _64.Supply;
                toAminoMsg(message: _64.Supply): _64.SupplyAminoMsg;
                fromProtoMsg(message: _64.SupplyProtoMsg): _64.Supply;
                toProto(message: _64.Supply): Uint8Array;
                toProtoMsg(message: _64.Supply): _64.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _64.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.DenomUnit;
                fromPartial(object: Partial<_64.DenomUnit>): _64.DenomUnit;
                fromAmino(object: _64.DenomUnitAmino): _64.DenomUnit;
                toAmino(message: _64.DenomUnit): _64.DenomUnitAmino;
                fromAminoMsg(object: _64.DenomUnitAminoMsg): _64.DenomUnit;
                toAminoMsg(message: _64.DenomUnit): _64.DenomUnitAminoMsg;
                fromProtoMsg(message: _64.DenomUnitProtoMsg): _64.DenomUnit;
                toProto(message: _64.DenomUnit): Uint8Array;
                toProtoMsg(message: _64.DenomUnit): _64.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _64.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Metadata;
                fromPartial(object: Partial<_64.Metadata>): _64.Metadata;
                fromAmino(object: _64.MetadataAmino): _64.Metadata;
                toAmino(message: _64.Metadata): _64.MetadataAmino;
                fromAminoMsg(object: _64.MetadataAminoMsg): _64.Metadata;
                toAminoMsg(message: _64.Metadata): _64.MetadataAminoMsg;
                fromProtoMsg(message: _64.MetadataProtoMsg): _64.Metadata;
                toProto(message: _64.Metadata): Uint8Array;
                toProtoMsg(message: _64.Metadata): _64.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _63.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.SendAuthorization;
                fromPartial(object: Partial<_63.SendAuthorization>): _63.SendAuthorization;
                fromAmino(object: _63.SendAuthorizationAmino): _63.SendAuthorization;
                toAmino(message: _63.SendAuthorization): _63.SendAuthorizationAmino;
                fromAminoMsg(object: _63.SendAuthorizationAminoMsg): _63.SendAuthorization;
                toAminoMsg(message: _63.SendAuthorization): _63.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _63.SendAuthorizationProtoMsg): _63.SendAuthorization;
                toProto(message: _63.SendAuthorization): Uint8Array;
                toProtoMsg(message: _63.SendAuthorization): _63.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _68.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.Module;
                    fromPartial(object: Partial<_68.Module>): _68.Module;
                    fromAmino(object: _68.ModuleAmino): _68.Module;
                    toAmino(message: _68.Module): _68.ModuleAmino;
                    fromAminoMsg(object: _68.ModuleAminoMsg): _68.Module;
                    toAminoMsg(message: _68.Module): _68.ModuleAminoMsg;
                    fromProtoMsg(message: _68.ModuleProtoMsg): _68.Module;
                    toProto(message: _68.Module): Uint8Array;
                    toProtoMsg(message: _68.Module): _68.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _70.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.GenesisOwners;
                fromPartial(object: Partial<_70.GenesisOwners>): _70.GenesisOwners;
                fromAmino(object: _70.GenesisOwnersAmino): _70.GenesisOwners;
                toAmino(message: _70.GenesisOwners): _70.GenesisOwnersAmino;
                fromAminoMsg(object: _70.GenesisOwnersAminoMsg): _70.GenesisOwners;
                toAminoMsg(message: _70.GenesisOwners): _70.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _70.GenesisOwnersProtoMsg): _70.GenesisOwners;
                toProto(message: _70.GenesisOwners): Uint8Array;
                toProtoMsg(message: _70.GenesisOwners): _70.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.GenesisState;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _69.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.Capability;
                fromPartial(object: Partial<_69.Capability>): _69.Capability;
                fromAmino(object: _69.CapabilityAmino): _69.Capability;
                toAmino(message: _69.Capability): _69.CapabilityAmino;
                fromAminoMsg(object: _69.CapabilityAminoMsg): _69.Capability;
                toAminoMsg(message: _69.Capability): _69.CapabilityAminoMsg;
                fromProtoMsg(message: _69.CapabilityProtoMsg): _69.Capability;
                toProto(message: _69.Capability): Uint8Array;
                toProtoMsg(message: _69.Capability): _69.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _69.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.Owner;
                fromPartial(object: Partial<_69.Owner>): _69.Owner;
                fromAmino(object: _69.OwnerAmino): _69.Owner;
                toAmino(message: _69.Owner): _69.OwnerAmino;
                fromAminoMsg(object: _69.OwnerAminoMsg): _69.Owner;
                toAminoMsg(message: _69.Owner): _69.OwnerAminoMsg;
                fromProtoMsg(message: _69.OwnerProtoMsg): _69.Owner;
                toProto(message: _69.Owner): Uint8Array;
                toProtoMsg(message: _69.Owner): _69.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _69.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.CapabilityOwners;
                fromPartial(object: Partial<_69.CapabilityOwners>): _69.CapabilityOwners;
                fromAmino(object: _69.CapabilityOwnersAmino): _69.CapabilityOwners;
                toAmino(message: _69.CapabilityOwners): _69.CapabilityOwnersAmino;
                fromAminoMsg(object: _69.CapabilityOwnersAminoMsg): _69.CapabilityOwners;
                toAminoMsg(message: _69.CapabilityOwners): _69.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _69.CapabilityOwnersProtoMsg): _69.CapabilityOwners;
                toProto(message: _69.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _69.CapabilityOwners): _69.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _71.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Module;
                    fromPartial(object: Partial<_71.Module>): _71.Module;
                    fromAmino(object: _71.ModuleAmino): _71.Module;
                    toAmino(message: _71.Module): _71.ModuleAmino;
                    fromAminoMsg(object: _71.ModuleAminoMsg): _71.Module;
                    toAminoMsg(message: _71.Module): _71.ModuleAminoMsg;
                    fromProtoMsg(message: _71.ModuleProtoMsg): _71.Module;
                    toProto(message: _71.Module): Uint8Array;
                    toProtoMsg(message: _71.Module): _71.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _73.MsgUpdateParams) => _73.MsgUpdateParamsAmino;
                    fromAmino: (object: _73.MsgUpdateParamsAmino) => _73.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _73.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgUpdateParams;
                fromPartial(object: Partial<_73.MsgUpdateParams>): _73.MsgUpdateParams;
                fromAmino(object: _73.MsgUpdateParamsAmino): _73.MsgUpdateParams;
                toAmino(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsAminoMsg): _73.MsgUpdateParams;
                toAminoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsProtoMsg): _73.MsgUpdateParams;
                toProto(message: _73.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _73.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_73.MsgUpdateParamsResponse>): _73.MsgUpdateParamsResponse;
                fromAmino(_: _73.MsgUpdateParamsResponseAmino): _73.MsgUpdateParamsResponse;
                toAmino(_: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsResponseAminoMsg): _73.MsgUpdateParamsResponse;
                toAminoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsResponseProtoMsg): _73.MsgUpdateParamsResponse;
                toProto(message: _73.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _72.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryParamsRequest;
                fromPartial(_: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
                fromAmino(_: _72.QueryParamsRequestAmino): _72.QueryParamsRequest;
                toAmino(_: _72.QueryParamsRequest): _72.QueryParamsRequestAmino;
                fromAminoMsg(object: _72.QueryParamsRequestAminoMsg): _72.QueryParamsRequest;
                toAminoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryParamsRequestProtoMsg): _72.QueryParamsRequest;
                toProto(message: _72.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _72.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryParamsResponse;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
                fromAmino(object: _72.QueryParamsResponseAmino): _72.QueryParamsResponse;
                toAmino(message: _72.QueryParamsResponse): _72.QueryParamsResponseAmino;
                fromAminoMsg(object: _72.QueryParamsResponseAminoMsg): _72.QueryParamsResponse;
                toAminoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryParamsResponseProtoMsg): _72.QueryParamsResponse;
                toProto(message: _72.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.Module;
                    fromPartial(object: Partial<_74.Module>): _74.Module;
                    fromAmino(object: _74.ModuleAmino): _74.Module;
                    toAmino(message: _74.Module): _74.ModuleAmino;
                    fromAminoMsg(object: _74.ModuleAminoMsg): _74.Module;
                    toAminoMsg(message: _74.Module): _74.ModuleAminoMsg;
                    fromProtoMsg(message: _74.ModuleProtoMsg): _74.Module;
                    toProto(message: _74.Module): Uint8Array;
                    toProtoMsg(message: _74.Module): _74.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _76.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _76.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _76.MsgVerifyInvariant;
                    };
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _76.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _76.MsgVerifyInvariant;
                    };
                    updateParams(value: _76.MsgUpdateParams): {
                        typeUrl: string;
                        value: _76.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _76.MsgVerifyInvariant) => _76.MsgVerifyInvariantAmino;
                    fromAmino: (object: _76.MsgVerifyInvariantAmino) => _76.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _76.MsgUpdateParams) => _76.MsgUpdateParamsAmino;
                    fromAmino: (object: _76.MsgUpdateParamsAmino) => _76.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _76.MsgVerifyInvariant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.MsgVerifyInvariant;
                fromPartial(object: Partial<_76.MsgVerifyInvariant>): _76.MsgVerifyInvariant;
                fromAmino(object: _76.MsgVerifyInvariantAmino): _76.MsgVerifyInvariant;
                toAmino(message: _76.MsgVerifyInvariant): _76.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _76.MsgVerifyInvariantAminoMsg): _76.MsgVerifyInvariant;
                toAminoMsg(message: _76.MsgVerifyInvariant): _76.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _76.MsgVerifyInvariantProtoMsg): _76.MsgVerifyInvariant;
                toProto(message: _76.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _76.MsgVerifyInvariant): _76.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _76.MsgVerifyInvariantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_76.MsgVerifyInvariantResponse>): _76.MsgVerifyInvariantResponse;
                fromAmino(_: _76.MsgVerifyInvariantResponseAmino): _76.MsgVerifyInvariantResponse;
                toAmino(_: _76.MsgVerifyInvariantResponse): _76.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _76.MsgVerifyInvariantResponseAminoMsg): _76.MsgVerifyInvariantResponse;
                toAminoMsg(message: _76.MsgVerifyInvariantResponse): _76.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _76.MsgVerifyInvariantResponseProtoMsg): _76.MsgVerifyInvariantResponse;
                toProto(message: _76.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _76.MsgVerifyInvariantResponse): _76.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _76.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.MsgUpdateParams;
                fromPartial(object: Partial<_76.MsgUpdateParams>): _76.MsgUpdateParams;
                fromAmino(object: _76.MsgUpdateParamsAmino): _76.MsgUpdateParams;
                toAmino(message: _76.MsgUpdateParams): _76.MsgUpdateParamsAmino;
                fromAminoMsg(object: _76.MsgUpdateParamsAminoMsg): _76.MsgUpdateParams;
                toAminoMsg(message: _76.MsgUpdateParams): _76.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateParamsProtoMsg): _76.MsgUpdateParams;
                toProto(message: _76.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateParams): _76.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _76.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_76.MsgUpdateParamsResponse>): _76.MsgUpdateParamsResponse;
                fromAmino(_: _76.MsgUpdateParamsResponseAmino): _76.MsgUpdateParamsResponse;
                toAmino(_: _76.MsgUpdateParamsResponse): _76.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _76.MsgUpdateParamsResponseAminoMsg): _76.MsgUpdateParamsResponse;
                toAminoMsg(message: _76.MsgUpdateParamsResponse): _76.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _76.MsgUpdateParamsResponseProtoMsg): _76.MsgUpdateParamsResponse;
                toProto(message: _76.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _76.MsgUpdateParamsResponse): _76.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _75.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.GenesisState;
                fromPartial(object: Partial<_75.GenesisState>): _75.GenesisState;
                fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                toProto(message: _75.GenesisState): Uint8Array;
                toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _77.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PubKey;
                fromPartial(object: Partial<_77.PubKey>): _77.PubKey;
                fromAmino(object: _77.PubKeyAmino): _77.PubKey;
                toAmino(message: _77.PubKey): _77.PubKeyAmino;
                fromAminoMsg(object: _77.PubKeyAminoMsg): _77.PubKey;
                toAminoMsg(message: _77.PubKey): _77.PubKeyAminoMsg;
                fromProtoMsg(message: _77.PubKeyProtoMsg): _77.PubKey;
                toProto(message: _77.PubKey): Uint8Array;
                toProtoMsg(message: _77.PubKey): _77.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _77.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.PrivKey;
                fromPartial(object: Partial<_77.PrivKey>): _77.PrivKey;
                fromAmino(object: _77.PrivKeyAmino): _77.PrivKey;
                toAmino(message: _77.PrivKey): _77.PrivKeyAmino;
                fromAminoMsg(object: _77.PrivKeyAminoMsg): _77.PrivKey;
                toAminoMsg(message: _77.PrivKey): _77.PrivKeyAminoMsg;
                fromProtoMsg(message: _77.PrivKeyProtoMsg): _77.PrivKey;
                toProto(message: _77.PrivKey): Uint8Array;
                toProtoMsg(message: _77.PrivKey): _77.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _78.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.BIP44Params;
                    fromPartial(object: Partial<_78.BIP44Params>): _78.BIP44Params;
                    fromAmino(object: _78.BIP44ParamsAmino): _78.BIP44Params;
                    toAmino(message: _78.BIP44Params): _78.BIP44ParamsAmino;
                    fromAminoMsg(object: _78.BIP44ParamsAminoMsg): _78.BIP44Params;
                    toAminoMsg(message: _78.BIP44Params): _78.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _78.BIP44ParamsProtoMsg): _78.BIP44Params;
                    toProto(message: _78.BIP44Params): Uint8Array;
                    toProtoMsg(message: _78.BIP44Params): _78.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _79.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Record;
                    fromPartial(object: Partial<_79.Record>): _79.Record;
                    fromAmino(object: _79.RecordAmino): _79.Record;
                    toAmino(message: _79.Record): _79.RecordAmino;
                    fromAminoMsg(object: _79.RecordAminoMsg): _79.Record;
                    toAminoMsg(message: _79.Record): _79.RecordAminoMsg;
                    fromProtoMsg(message: _79.RecordProtoMsg): _79.Record;
                    toProto(message: _79.Record): Uint8Array;
                    toProtoMsg(message: _79.Record): _79.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _79.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Record_Local;
                    fromPartial(object: Partial<_79.Record_Local>): _79.Record_Local;
                    fromAmino(object: _79.Record_LocalAmino): _79.Record_Local;
                    toAmino(message: _79.Record_Local): _79.Record_LocalAmino;
                    fromAminoMsg(object: _79.Record_LocalAminoMsg): _79.Record_Local;
                    toAminoMsg(message: _79.Record_Local): _79.Record_LocalAminoMsg;
                    fromProtoMsg(message: _79.Record_LocalProtoMsg): _79.Record_Local;
                    toProto(message: _79.Record_Local): Uint8Array;
                    toProtoMsg(message: _79.Record_Local): _79.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _79.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Record_Ledger;
                    fromPartial(object: Partial<_79.Record_Ledger>): _79.Record_Ledger;
                    fromAmino(object: _79.Record_LedgerAmino): _79.Record_Ledger;
                    toAmino(message: _79.Record_Ledger): _79.Record_LedgerAmino;
                    fromAminoMsg(object: _79.Record_LedgerAminoMsg): _79.Record_Ledger;
                    toAminoMsg(message: _79.Record_Ledger): _79.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _79.Record_LedgerProtoMsg): _79.Record_Ledger;
                    toProto(message: _79.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _79.Record_Ledger): _79.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _79.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Record_Multi;
                    fromPartial(_: Partial<_79.Record_Multi>): _79.Record_Multi;
                    fromAmino(_: _79.Record_MultiAmino): _79.Record_Multi;
                    toAmino(_: _79.Record_Multi): _79.Record_MultiAmino;
                    fromAminoMsg(object: _79.Record_MultiAminoMsg): _79.Record_Multi;
                    toAminoMsg(message: _79.Record_Multi): _79.Record_MultiAminoMsg;
                    fromProtoMsg(message: _79.Record_MultiProtoMsg): _79.Record_Multi;
                    toProto(message: _79.Record_Multi): Uint8Array;
                    toProtoMsg(message: _79.Record_Multi): _79.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _79.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Record_Offline;
                    fromPartial(_: Partial<_79.Record_Offline>): _79.Record_Offline;
                    fromAmino(_: _79.Record_OfflineAmino): _79.Record_Offline;
                    toAmino(_: _79.Record_Offline): _79.Record_OfflineAmino;
                    fromAminoMsg(object: _79.Record_OfflineAminoMsg): _79.Record_Offline;
                    toAminoMsg(message: _79.Record_Offline): _79.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _79.Record_OfflineProtoMsg): _79.Record_Offline;
                    toProto(message: _79.Record_Offline): Uint8Array;
                    toProtoMsg(message: _79.Record_Offline): _79.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _80.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.LegacyAminoPubKey;
                fromPartial(object: Partial<_80.LegacyAminoPubKey>): _80.LegacyAminoPubKey;
                fromAmino(object: _80.LegacyAminoPubKeyAmino): _80.LegacyAminoPubKey;
                toAmino(message: _80.LegacyAminoPubKey): _80.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _80.LegacyAminoPubKeyAminoMsg): _80.LegacyAminoPubKey;
                toAminoMsg(message: _80.LegacyAminoPubKey): _80.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _80.LegacyAminoPubKeyProtoMsg): _80.LegacyAminoPubKey;
                toProto(message: _80.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _80.LegacyAminoPubKey): _80.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _81.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.PubKey;
                fromPartial(object: Partial<_81.PubKey>): _81.PubKey;
                fromAmino(object: _81.PubKeyAmino): _81.PubKey;
                toAmino(message: _81.PubKey): _81.PubKeyAmino;
                fromAminoMsg(object: _81.PubKeyAminoMsg): _81.PubKey;
                toAminoMsg(message: _81.PubKey): _81.PubKeyAminoMsg;
                fromProtoMsg(message: _81.PubKeyProtoMsg): _81.PubKey;
                toProto(message: _81.PubKey): Uint8Array;
                toProtoMsg(message: _81.PubKey): _81.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _81.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.PrivKey;
                fromPartial(object: Partial<_81.PrivKey>): _81.PrivKey;
                fromAmino(object: _81.PrivKeyAmino): _81.PrivKey;
                toAmino(message: _81.PrivKey): _81.PrivKeyAmino;
                fromAminoMsg(object: _81.PrivKeyAminoMsg): _81.PrivKey;
                toAminoMsg(message: _81.PrivKey): _81.PrivKeyAminoMsg;
                fromProtoMsg(message: _81.PrivKeyProtoMsg): _81.PrivKey;
                toProto(message: _81.PrivKey): Uint8Array;
                toProtoMsg(message: _81.PrivKey): _81.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _82.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.PubKey;
                fromPartial(object: Partial<_82.PubKey>): _82.PubKey;
                fromAmino(object: _82.PubKeyAmino): _82.PubKey;
                toAmino(message: _82.PubKey): _82.PubKeyAmino;
                fromAminoMsg(object: _82.PubKeyAminoMsg): _82.PubKey;
                toAminoMsg(message: _82.PubKey): _82.PubKeyAminoMsg;
                fromProtoMsg(message: _82.PubKeyProtoMsg): _82.PubKey;
                toProto(message: _82.PubKey): Uint8Array;
                toProtoMsg(message: _82.PubKey): _82.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _82.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.PrivKey;
                fromPartial(object: Partial<_82.PrivKey>): _82.PrivKey;
                fromAmino(object: _82.PrivKeyAmino): _82.PrivKey;
                toAmino(message: _82.PrivKey): _82.PrivKeyAmino;
                fromAminoMsg(object: _82.PrivKeyAminoMsg): _82.PrivKey;
                toAminoMsg(message: _82.PrivKey): _82.PrivKeyAminoMsg;
                fromProtoMsg(message: _82.PrivKeyProtoMsg): _82.PrivKey;
                toProto(message: _82.PrivKey): Uint8Array;
                toProtoMsg(message: _82.PrivKey): _82.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _83.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Module;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                    fromAmino(object: _83.ModuleAmino): _83.Module;
                    toAmino(message: _83.Module): _83.ModuleAmino;
                    fromAminoMsg(object: _83.ModuleAminoMsg): _83.Module;
                    toAminoMsg(message: _83.Module): _83.ModuleAminoMsg;
                    fromProtoMsg(message: _83.ModuleProtoMsg): _83.Module;
                    toProto(message: _83.Module): Uint8Array;
                    toProtoMsg(message: _83.Module): _83.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                validatorDistributionInfo(request: _86.QueryValidatorDistributionInfoRequest): Promise<_86.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _86.QueryValidatorOutstandingRewardsRequest): Promise<_86.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _86.QueryValidatorCommissionRequest): Promise<_86.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _86.QueryValidatorSlashesRequest): Promise<_86.QueryValidatorSlashesResponse>;
                delegationRewards(request: _86.QueryDelegationRewardsRequest): Promise<_86.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _86.QueryDelegationTotalRewardsRequest): Promise<_86.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _86.QueryDelegatorWithdrawAddressRequest): Promise<_86.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _86.QueryCommunityPoolRequest): Promise<_86.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _247.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateParams(value: _87.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    communityPoolSpend(value: _87.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                    updateParams(value: _87.MsgUpdateParams): {
                        typeUrl: string;
                        value: _87.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _87.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _87.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _87.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _87.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _87.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _87.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _87.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _87.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _87.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _87.MsgFundCommunityPool;
                    };
                    updateParams(value: _87.MsgUpdateParams): {
                        typeUrl: string;
                        value: _87.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _87.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _87.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _87.MsgSetWithdrawAddress) => _87.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _87.MsgSetWithdrawAddressAmino) => _87.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _87.MsgWithdrawDelegatorReward) => _87.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _87.MsgWithdrawDelegatorRewardAmino) => _87.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _87.MsgWithdrawValidatorCommission) => _87.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _87.MsgWithdrawValidatorCommissionAmino) => _87.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _87.MsgFundCommunityPool) => _87.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _87.MsgFundCommunityPoolAmino) => _87.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _87.MsgUpdateParams) => _87.MsgUpdateParamsAmino;
                    fromAmino: (object: _87.MsgUpdateParamsAmino) => _87.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _87.MsgCommunityPoolSpend) => _87.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _87.MsgCommunityPoolSpendAmino) => _87.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _87.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_87.MsgSetWithdrawAddress>): _87.MsgSetWithdrawAddress;
                fromAmino(object: _87.MsgSetWithdrawAddressAmino): _87.MsgSetWithdrawAddress;
                toAmino(message: _87.MsgSetWithdrawAddress): _87.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _87.MsgSetWithdrawAddressAminoMsg): _87.MsgSetWithdrawAddress;
                toAminoMsg(message: _87.MsgSetWithdrawAddress): _87.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _87.MsgSetWithdrawAddressProtoMsg): _87.MsgSetWithdrawAddress;
                toProto(message: _87.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _87.MsgSetWithdrawAddress): _87.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _87.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_87.MsgSetWithdrawAddressResponse>): _87.MsgSetWithdrawAddressResponse;
                fromAmino(_: _87.MsgSetWithdrawAddressResponseAmino): _87.MsgSetWithdrawAddressResponse;
                toAmino(_: _87.MsgSetWithdrawAddressResponse): _87.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _87.MsgSetWithdrawAddressResponseAminoMsg): _87.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _87.MsgSetWithdrawAddressResponse): _87.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _87.MsgSetWithdrawAddressResponseProtoMsg): _87.MsgSetWithdrawAddressResponse;
                toProto(message: _87.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _87.MsgSetWithdrawAddressResponse): _87.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_87.MsgWithdrawDelegatorReward>): _87.MsgWithdrawDelegatorReward;
                fromAmino(object: _87.MsgWithdrawDelegatorRewardAmino): _87.MsgWithdrawDelegatorReward;
                toAmino(message: _87.MsgWithdrawDelegatorReward): _87.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _87.MsgWithdrawDelegatorRewardAminoMsg): _87.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _87.MsgWithdrawDelegatorReward): _87.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawDelegatorRewardProtoMsg): _87.MsgWithdrawDelegatorReward;
                toProto(message: _87.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawDelegatorReward): _87.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: Partial<_87.MsgWithdrawDelegatorRewardResponse>): _87.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _87.MsgWithdrawDelegatorRewardResponseAmino): _87.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _87.MsgWithdrawDelegatorRewardResponse): _87.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _87.MsgWithdrawDelegatorRewardResponseAminoMsg): _87.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _87.MsgWithdrawDelegatorRewardResponse): _87.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawDelegatorRewardResponseProtoMsg): _87.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _87.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawDelegatorRewardResponse): _87.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_87.MsgWithdrawValidatorCommission>): _87.MsgWithdrawValidatorCommission;
                fromAmino(object: _87.MsgWithdrawValidatorCommissionAmino): _87.MsgWithdrawValidatorCommission;
                toAmino(message: _87.MsgWithdrawValidatorCommission): _87.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _87.MsgWithdrawValidatorCommissionAminoMsg): _87.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _87.MsgWithdrawValidatorCommission): _87.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawValidatorCommissionProtoMsg): _87.MsgWithdrawValidatorCommission;
                toProto(message: _87.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawValidatorCommission): _87.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _87.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: Partial<_87.MsgWithdrawValidatorCommissionResponse>): _87.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _87.MsgWithdrawValidatorCommissionResponseAmino): _87.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _87.MsgWithdrawValidatorCommissionResponse): _87.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _87.MsgWithdrawValidatorCommissionResponseAminoMsg): _87.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _87.MsgWithdrawValidatorCommissionResponse): _87.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _87.MsgWithdrawValidatorCommissionResponseProtoMsg): _87.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _87.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _87.MsgWithdrawValidatorCommissionResponse): _87.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _87.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgFundCommunityPool;
                fromPartial(object: Partial<_87.MsgFundCommunityPool>): _87.MsgFundCommunityPool;
                fromAmino(object: _87.MsgFundCommunityPoolAmino): _87.MsgFundCommunityPool;
                toAmino(message: _87.MsgFundCommunityPool): _87.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _87.MsgFundCommunityPoolAminoMsg): _87.MsgFundCommunityPool;
                toAminoMsg(message: _87.MsgFundCommunityPool): _87.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _87.MsgFundCommunityPoolProtoMsg): _87.MsgFundCommunityPool;
                toProto(message: _87.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _87.MsgFundCommunityPool): _87.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _87.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_87.MsgFundCommunityPoolResponse>): _87.MsgFundCommunityPoolResponse;
                fromAmino(_: _87.MsgFundCommunityPoolResponseAmino): _87.MsgFundCommunityPoolResponse;
                toAmino(_: _87.MsgFundCommunityPoolResponse): _87.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _87.MsgFundCommunityPoolResponseAminoMsg): _87.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _87.MsgFundCommunityPoolResponse): _87.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _87.MsgFundCommunityPoolResponseProtoMsg): _87.MsgFundCommunityPoolResponse;
                toProto(message: _87.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _87.MsgFundCommunityPoolResponse): _87.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _87.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgUpdateParams;
                fromPartial(object: Partial<_87.MsgUpdateParams>): _87.MsgUpdateParams;
                fromAmino(object: _87.MsgUpdateParamsAmino): _87.MsgUpdateParams;
                toAmino(message: _87.MsgUpdateParams): _87.MsgUpdateParamsAmino;
                fromAminoMsg(object: _87.MsgUpdateParamsAminoMsg): _87.MsgUpdateParams;
                toAminoMsg(message: _87.MsgUpdateParams): _87.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateParamsProtoMsg): _87.MsgUpdateParams;
                toProto(message: _87.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateParams): _87.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _87.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_87.MsgUpdateParamsResponse>): _87.MsgUpdateParamsResponse;
                fromAmino(_: _87.MsgUpdateParamsResponseAmino): _87.MsgUpdateParamsResponse;
                toAmino(_: _87.MsgUpdateParamsResponse): _87.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _87.MsgUpdateParamsResponseAminoMsg): _87.MsgUpdateParamsResponse;
                toAminoMsg(message: _87.MsgUpdateParamsResponse): _87.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _87.MsgUpdateParamsResponseProtoMsg): _87.MsgUpdateParamsResponse;
                toProto(message: _87.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _87.MsgUpdateParamsResponse): _87.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _87.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgCommunityPoolSpend;
                fromPartial(object: Partial<_87.MsgCommunityPoolSpend>): _87.MsgCommunityPoolSpend;
                fromAmino(object: _87.MsgCommunityPoolSpendAmino): _87.MsgCommunityPoolSpend;
                toAmino(message: _87.MsgCommunityPoolSpend): _87.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _87.MsgCommunityPoolSpendAminoMsg): _87.MsgCommunityPoolSpend;
                toAminoMsg(message: _87.MsgCommunityPoolSpend): _87.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _87.MsgCommunityPoolSpendProtoMsg): _87.MsgCommunityPoolSpend;
                toProto(message: _87.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _87.MsgCommunityPoolSpend): _87.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _87.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MsgCommunityPoolSpendResponse;
                fromPartial(_: Partial<_87.MsgCommunityPoolSpendResponse>): _87.MsgCommunityPoolSpendResponse;
                fromAmino(_: _87.MsgCommunityPoolSpendResponseAmino): _87.MsgCommunityPoolSpendResponse;
                toAmino(_: _87.MsgCommunityPoolSpendResponse): _87.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _87.MsgCommunityPoolSpendResponseAminoMsg): _87.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _87.MsgCommunityPoolSpendResponse): _87.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _87.MsgCommunityPoolSpendResponseProtoMsg): _87.MsgCommunityPoolSpendResponse;
                toProto(message: _87.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _87.MsgCommunityPoolSpendResponse): _87.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _86.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryParamsRequest;
                fromPartial(_: Partial<_86.QueryParamsRequest>): _86.QueryParamsRequest;
                fromAmino(_: _86.QueryParamsRequestAmino): _86.QueryParamsRequest;
                toAmino(_: _86.QueryParamsRequest): _86.QueryParamsRequestAmino;
                fromAminoMsg(object: _86.QueryParamsRequestAminoMsg): _86.QueryParamsRequest;
                toAminoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryParamsRequestProtoMsg): _86.QueryParamsRequest;
                toProto(message: _86.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryParamsRequest): _86.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _86.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryParamsResponse;
                fromPartial(object: Partial<_86.QueryParamsResponse>): _86.QueryParamsResponse;
                fromAmino(object: _86.QueryParamsResponseAmino): _86.QueryParamsResponse;
                toAmino(message: _86.QueryParamsResponse): _86.QueryParamsResponseAmino;
                fromAminoMsg(object: _86.QueryParamsResponseAminoMsg): _86.QueryParamsResponse;
                toAminoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryParamsResponseProtoMsg): _86.QueryParamsResponse;
                toProto(message: _86.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryParamsResponse): _86.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorDistributionInfoRequest;
                fromPartial(object: Partial<_86.QueryValidatorDistributionInfoRequest>): _86.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _86.QueryValidatorDistributionInfoRequestAmino): _86.QueryValidatorDistributionInfoRequest;
                toAmino(message: _86.QueryValidatorDistributionInfoRequest): _86.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorDistributionInfoRequestAminoMsg): _86.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _86.QueryValidatorDistributionInfoRequest): _86.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorDistributionInfoRequestProtoMsg): _86.QueryValidatorDistributionInfoRequest;
                toProto(message: _86.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorDistributionInfoRequest): _86.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorDistributionInfoResponse;
                fromPartial(object: Partial<_86.QueryValidatorDistributionInfoResponse>): _86.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _86.QueryValidatorDistributionInfoResponseAmino): _86.QueryValidatorDistributionInfoResponse;
                toAmino(message: _86.QueryValidatorDistributionInfoResponse): _86.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorDistributionInfoResponseAminoMsg): _86.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _86.QueryValidatorDistributionInfoResponse): _86.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorDistributionInfoResponseProtoMsg): _86.QueryValidatorDistributionInfoResponse;
                toProto(message: _86.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorDistributionInfoResponse): _86.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_86.QueryValidatorOutstandingRewardsRequest>): _86.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _86.QueryValidatorOutstandingRewardsRequestAmino): _86.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _86.QueryValidatorOutstandingRewardsRequest): _86.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorOutstandingRewardsRequestAminoMsg): _86.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _86.QueryValidatorOutstandingRewardsRequest): _86.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorOutstandingRewardsRequestProtoMsg): _86.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _86.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorOutstandingRewardsRequest): _86.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_86.QueryValidatorOutstandingRewardsResponse>): _86.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _86.QueryValidatorOutstandingRewardsResponseAmino): _86.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _86.QueryValidatorOutstandingRewardsResponse): _86.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorOutstandingRewardsResponseAminoMsg): _86.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _86.QueryValidatorOutstandingRewardsResponse): _86.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorOutstandingRewardsResponseProtoMsg): _86.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _86.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorOutstandingRewardsResponse): _86.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_86.QueryValidatorCommissionRequest>): _86.QueryValidatorCommissionRequest;
                fromAmino(object: _86.QueryValidatorCommissionRequestAmino): _86.QueryValidatorCommissionRequest;
                toAmino(message: _86.QueryValidatorCommissionRequest): _86.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorCommissionRequestAminoMsg): _86.QueryValidatorCommissionRequest;
                toAminoMsg(message: _86.QueryValidatorCommissionRequest): _86.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorCommissionRequestProtoMsg): _86.QueryValidatorCommissionRequest;
                toProto(message: _86.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorCommissionRequest): _86.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_86.QueryValidatorCommissionResponse>): _86.QueryValidatorCommissionResponse;
                fromAmino(object: _86.QueryValidatorCommissionResponseAmino): _86.QueryValidatorCommissionResponse;
                toAmino(message: _86.QueryValidatorCommissionResponse): _86.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorCommissionResponseAminoMsg): _86.QueryValidatorCommissionResponse;
                toAminoMsg(message: _86.QueryValidatorCommissionResponse): _86.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorCommissionResponseProtoMsg): _86.QueryValidatorCommissionResponse;
                toProto(message: _86.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorCommissionResponse): _86.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _86.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_86.QueryValidatorSlashesRequest>): _86.QueryValidatorSlashesRequest;
                fromAmino(object: _86.QueryValidatorSlashesRequestAmino): _86.QueryValidatorSlashesRequest;
                toAmino(message: _86.QueryValidatorSlashesRequest): _86.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _86.QueryValidatorSlashesRequestAminoMsg): _86.QueryValidatorSlashesRequest;
                toAminoMsg(message: _86.QueryValidatorSlashesRequest): _86.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorSlashesRequestProtoMsg): _86.QueryValidatorSlashesRequest;
                toProto(message: _86.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorSlashesRequest): _86.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _86.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_86.QueryValidatorSlashesResponse>): _86.QueryValidatorSlashesResponse;
                fromAmino(object: _86.QueryValidatorSlashesResponseAmino): _86.QueryValidatorSlashesResponse;
                toAmino(message: _86.QueryValidatorSlashesResponse): _86.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _86.QueryValidatorSlashesResponseAminoMsg): _86.QueryValidatorSlashesResponse;
                toAminoMsg(message: _86.QueryValidatorSlashesResponse): _86.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _86.QueryValidatorSlashesResponseProtoMsg): _86.QueryValidatorSlashesResponse;
                toProto(message: _86.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _86.QueryValidatorSlashesResponse): _86.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_86.QueryDelegationRewardsRequest>): _86.QueryDelegationRewardsRequest;
                fromAmino(object: _86.QueryDelegationRewardsRequestAmino): _86.QueryDelegationRewardsRequest;
                toAmino(message: _86.QueryDelegationRewardsRequest): _86.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegationRewardsRequestAminoMsg): _86.QueryDelegationRewardsRequest;
                toAminoMsg(message: _86.QueryDelegationRewardsRequest): _86.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationRewardsRequestProtoMsg): _86.QueryDelegationRewardsRequest;
                toProto(message: _86.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationRewardsRequest): _86.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_86.QueryDelegationRewardsResponse>): _86.QueryDelegationRewardsResponse;
                fromAmino(object: _86.QueryDelegationRewardsResponseAmino): _86.QueryDelegationRewardsResponse;
                toAmino(message: _86.QueryDelegationRewardsResponse): _86.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegationRewardsResponseAminoMsg): _86.QueryDelegationRewardsResponse;
                toAminoMsg(message: _86.QueryDelegationRewardsResponse): _86.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationRewardsResponseProtoMsg): _86.QueryDelegationRewardsResponse;
                toProto(message: _86.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationRewardsResponse): _86.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_86.QueryDelegationTotalRewardsRequest>): _86.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _86.QueryDelegationTotalRewardsRequestAmino): _86.QueryDelegationTotalRewardsRequest;
                toAmino(message: _86.QueryDelegationTotalRewardsRequest): _86.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegationTotalRewardsRequestAminoMsg): _86.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _86.QueryDelegationTotalRewardsRequest): _86.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationTotalRewardsRequestProtoMsg): _86.QueryDelegationTotalRewardsRequest;
                toProto(message: _86.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationTotalRewardsRequest): _86.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_86.QueryDelegationTotalRewardsResponse>): _86.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _86.QueryDelegationTotalRewardsResponseAmino): _86.QueryDelegationTotalRewardsResponse;
                toAmino(message: _86.QueryDelegationTotalRewardsResponse): _86.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegationTotalRewardsResponseAminoMsg): _86.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _86.QueryDelegationTotalRewardsResponse): _86.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegationTotalRewardsResponseProtoMsg): _86.QueryDelegationTotalRewardsResponse;
                toProto(message: _86.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegationTotalRewardsResponse): _86.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsRequest>): _86.QueryDelegatorValidatorsRequest;
                fromAmino(object: _86.QueryDelegatorValidatorsRequestAmino): _86.QueryDelegatorValidatorsRequest;
                toAmino(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorsRequestAminoMsg): _86.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorsRequestProtoMsg): _86.QueryDelegatorValidatorsRequest;
                toProto(message: _86.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorsRequest): _86.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_86.QueryDelegatorValidatorsResponse>): _86.QueryDelegatorValidatorsResponse;
                fromAmino(object: _86.QueryDelegatorValidatorsResponseAmino): _86.QueryDelegatorValidatorsResponse;
                toAmino(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorValidatorsResponseAminoMsg): _86.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorValidatorsResponseProtoMsg): _86.QueryDelegatorValidatorsResponse;
                toProto(message: _86.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorValidatorsResponse): _86.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_86.QueryDelegatorWithdrawAddressRequest>): _86.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _86.QueryDelegatorWithdrawAddressRequestAmino): _86.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _86.QueryDelegatorWithdrawAddressRequest): _86.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _86.QueryDelegatorWithdrawAddressRequestAminoMsg): _86.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _86.QueryDelegatorWithdrawAddressRequest): _86.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorWithdrawAddressRequestProtoMsg): _86.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _86.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorWithdrawAddressRequest): _86.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _86.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_86.QueryDelegatorWithdrawAddressResponse>): _86.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _86.QueryDelegatorWithdrawAddressResponseAmino): _86.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _86.QueryDelegatorWithdrawAddressResponse): _86.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _86.QueryDelegatorWithdrawAddressResponseAminoMsg): _86.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _86.QueryDelegatorWithdrawAddressResponse): _86.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _86.QueryDelegatorWithdrawAddressResponseProtoMsg): _86.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _86.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _86.QueryDelegatorWithdrawAddressResponse): _86.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _86.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_86.QueryCommunityPoolRequest>): _86.QueryCommunityPoolRequest;
                fromAmino(_: _86.QueryCommunityPoolRequestAmino): _86.QueryCommunityPoolRequest;
                toAmino(_: _86.QueryCommunityPoolRequest): _86.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _86.QueryCommunityPoolRequestAminoMsg): _86.QueryCommunityPoolRequest;
                toAminoMsg(message: _86.QueryCommunityPoolRequest): _86.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _86.QueryCommunityPoolRequestProtoMsg): _86.QueryCommunityPoolRequest;
                toProto(message: _86.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _86.QueryCommunityPoolRequest): _86.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _86.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_86.QueryCommunityPoolResponse>): _86.QueryCommunityPoolResponse;
                fromAmino(object: _86.QueryCommunityPoolResponseAmino): _86.QueryCommunityPoolResponse;
                toAmino(message: _86.QueryCommunityPoolResponse): _86.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _86.QueryCommunityPoolResponseAminoMsg): _86.QueryCommunityPoolResponse;
                toAminoMsg(message: _86.QueryCommunityPoolResponse): _86.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _86.QueryCommunityPoolResponseProtoMsg): _86.QueryCommunityPoolResponse;
                toProto(message: _86.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _86.QueryCommunityPoolResponse): _86.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _85.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_85.DelegatorWithdrawInfo>): _85.DelegatorWithdrawInfo;
                fromAmino(object: _85.DelegatorWithdrawInfoAmino): _85.DelegatorWithdrawInfo;
                toAmino(message: _85.DelegatorWithdrawInfo): _85.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _85.DelegatorWithdrawInfoAminoMsg): _85.DelegatorWithdrawInfo;
                toAminoMsg(message: _85.DelegatorWithdrawInfo): _85.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _85.DelegatorWithdrawInfoProtoMsg): _85.DelegatorWithdrawInfo;
                toProto(message: _85.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _85.DelegatorWithdrawInfo): _85.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorOutstandingRewardsRecord>): _85.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _85.ValidatorOutstandingRewardsRecordAmino): _85.ValidatorOutstandingRewardsRecord;
                toAmino(message: _85.ValidatorOutstandingRewardsRecord): _85.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _85.ValidatorOutstandingRewardsRecordAminoMsg): _85.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _85.ValidatorOutstandingRewardsRecord): _85.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorOutstandingRewardsRecordProtoMsg): _85.ValidatorOutstandingRewardsRecord;
                toProto(message: _85.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorOutstandingRewardsRecord): _85.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_85.ValidatorAccumulatedCommissionRecord>): _85.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _85.ValidatorAccumulatedCommissionRecordAmino): _85.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _85.ValidatorAccumulatedCommissionRecord): _85.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _85.ValidatorAccumulatedCommissionRecordAminoMsg): _85.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _85.ValidatorAccumulatedCommissionRecord): _85.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorAccumulatedCommissionRecordProtoMsg): _85.ValidatorAccumulatedCommissionRecord;
                toProto(message: _85.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorAccumulatedCommissionRecord): _85.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorHistoricalRewardsRecord>): _85.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _85.ValidatorHistoricalRewardsRecordAmino): _85.ValidatorHistoricalRewardsRecord;
                toAmino(message: _85.ValidatorHistoricalRewardsRecord): _85.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _85.ValidatorHistoricalRewardsRecordAminoMsg): _85.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _85.ValidatorHistoricalRewardsRecord): _85.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorHistoricalRewardsRecordProtoMsg): _85.ValidatorHistoricalRewardsRecord;
                toProto(message: _85.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorHistoricalRewardsRecord): _85.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_85.ValidatorCurrentRewardsRecord>): _85.ValidatorCurrentRewardsRecord;
                fromAmino(object: _85.ValidatorCurrentRewardsRecordAmino): _85.ValidatorCurrentRewardsRecord;
                toAmino(message: _85.ValidatorCurrentRewardsRecord): _85.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _85.ValidatorCurrentRewardsRecordAminoMsg): _85.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _85.ValidatorCurrentRewardsRecord): _85.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorCurrentRewardsRecordProtoMsg): _85.ValidatorCurrentRewardsRecord;
                toProto(message: _85.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorCurrentRewardsRecord): _85.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _85.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_85.DelegatorStartingInfoRecord>): _85.DelegatorStartingInfoRecord;
                fromAmino(object: _85.DelegatorStartingInfoRecordAmino): _85.DelegatorStartingInfoRecord;
                toAmino(message: _85.DelegatorStartingInfoRecord): _85.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _85.DelegatorStartingInfoRecordAminoMsg): _85.DelegatorStartingInfoRecord;
                toAminoMsg(message: _85.DelegatorStartingInfoRecord): _85.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _85.DelegatorStartingInfoRecordProtoMsg): _85.DelegatorStartingInfoRecord;
                toProto(message: _85.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _85.DelegatorStartingInfoRecord): _85.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _85.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_85.ValidatorSlashEventRecord>): _85.ValidatorSlashEventRecord;
                fromAmino(object: _85.ValidatorSlashEventRecordAmino): _85.ValidatorSlashEventRecord;
                toAmino(message: _85.ValidatorSlashEventRecord): _85.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _85.ValidatorSlashEventRecordAminoMsg): _85.ValidatorSlashEventRecord;
                toAminoMsg(message: _85.ValidatorSlashEventRecord): _85.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _85.ValidatorSlashEventRecordProtoMsg): _85.ValidatorSlashEventRecord;
                toProto(message: _85.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _85.ValidatorSlashEventRecord): _85.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.GenesisState;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _84.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.Params;
                fromPartial(object: Partial<_84.Params>): _84.Params;
                fromAmino(object: _84.ParamsAmino): _84.Params;
                toAmino(message: _84.Params): _84.ParamsAmino;
                fromAminoMsg(object: _84.ParamsAminoMsg): _84.Params;
                toAminoMsg(message: _84.Params): _84.ParamsAminoMsg;
                fromProtoMsg(message: _84.ParamsProtoMsg): _84.Params;
                toProto(message: _84.Params): Uint8Array;
                toProtoMsg(message: _84.Params): _84.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _84.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_84.ValidatorHistoricalRewards>): _84.ValidatorHistoricalRewards;
                fromAmino(object: _84.ValidatorHistoricalRewardsAmino): _84.ValidatorHistoricalRewards;
                toAmino(message: _84.ValidatorHistoricalRewards): _84.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _84.ValidatorHistoricalRewardsAminoMsg): _84.ValidatorHistoricalRewards;
                toAminoMsg(message: _84.ValidatorHistoricalRewards): _84.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _84.ValidatorHistoricalRewardsProtoMsg): _84.ValidatorHistoricalRewards;
                toProto(message: _84.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _84.ValidatorHistoricalRewards): _84.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _84.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.ValidatorCurrentRewards;
                fromPartial(object: Partial<_84.ValidatorCurrentRewards>): _84.ValidatorCurrentRewards;
                fromAmino(object: _84.ValidatorCurrentRewardsAmino): _84.ValidatorCurrentRewards;
                toAmino(message: _84.ValidatorCurrentRewards): _84.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _84.ValidatorCurrentRewardsAminoMsg): _84.ValidatorCurrentRewards;
                toAminoMsg(message: _84.ValidatorCurrentRewards): _84.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _84.ValidatorCurrentRewardsProtoMsg): _84.ValidatorCurrentRewards;
                toProto(message: _84.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _84.ValidatorCurrentRewards): _84.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _84.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_84.ValidatorAccumulatedCommission>): _84.ValidatorAccumulatedCommission;
                fromAmino(object: _84.ValidatorAccumulatedCommissionAmino): _84.ValidatorAccumulatedCommission;
                toAmino(message: _84.ValidatorAccumulatedCommission): _84.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _84.ValidatorAccumulatedCommissionAminoMsg): _84.ValidatorAccumulatedCommission;
                toAminoMsg(message: _84.ValidatorAccumulatedCommission): _84.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _84.ValidatorAccumulatedCommissionProtoMsg): _84.ValidatorAccumulatedCommission;
                toProto(message: _84.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _84.ValidatorAccumulatedCommission): _84.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _84.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_84.ValidatorOutstandingRewards>): _84.ValidatorOutstandingRewards;
                fromAmino(object: _84.ValidatorOutstandingRewardsAmino): _84.ValidatorOutstandingRewards;
                toAmino(message: _84.ValidatorOutstandingRewards): _84.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _84.ValidatorOutstandingRewardsAminoMsg): _84.ValidatorOutstandingRewards;
                toAminoMsg(message: _84.ValidatorOutstandingRewards): _84.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _84.ValidatorOutstandingRewardsProtoMsg): _84.ValidatorOutstandingRewards;
                toProto(message: _84.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _84.ValidatorOutstandingRewards): _84.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _84.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.ValidatorSlashEvent;
                fromPartial(object: Partial<_84.ValidatorSlashEvent>): _84.ValidatorSlashEvent;
                fromAmino(object: _84.ValidatorSlashEventAmino): _84.ValidatorSlashEvent;
                toAmino(message: _84.ValidatorSlashEvent): _84.ValidatorSlashEventAmino;
                fromAminoMsg(object: _84.ValidatorSlashEventAminoMsg): _84.ValidatorSlashEvent;
                toAminoMsg(message: _84.ValidatorSlashEvent): _84.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _84.ValidatorSlashEventProtoMsg): _84.ValidatorSlashEvent;
                toProto(message: _84.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _84.ValidatorSlashEvent): _84.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _84.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.ValidatorSlashEvents;
                fromPartial(object: Partial<_84.ValidatorSlashEvents>): _84.ValidatorSlashEvents;
                fromAmino(object: _84.ValidatorSlashEventsAmino): _84.ValidatorSlashEvents;
                toAmino(message: _84.ValidatorSlashEvents): _84.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _84.ValidatorSlashEventsAminoMsg): _84.ValidatorSlashEvents;
                toAminoMsg(message: _84.ValidatorSlashEvents): _84.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _84.ValidatorSlashEventsProtoMsg): _84.ValidatorSlashEvents;
                toProto(message: _84.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _84.ValidatorSlashEvents): _84.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _84.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.FeePool;
                fromPartial(object: Partial<_84.FeePool>): _84.FeePool;
                fromAmino(object: _84.FeePoolAmino): _84.FeePool;
                toAmino(message: _84.FeePool): _84.FeePoolAmino;
                fromAminoMsg(object: _84.FeePoolAminoMsg): _84.FeePool;
                toAminoMsg(message: _84.FeePool): _84.FeePoolAminoMsg;
                fromProtoMsg(message: _84.FeePoolProtoMsg): _84.FeePool;
                toProto(message: _84.FeePool): Uint8Array;
                toProtoMsg(message: _84.FeePool): _84.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _84.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_84.CommunityPoolSpendProposal>): _84.CommunityPoolSpendProposal;
                fromAmino(object: _84.CommunityPoolSpendProposalAmino): _84.CommunityPoolSpendProposal;
                toAmino(message: _84.CommunityPoolSpendProposal): _84.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _84.CommunityPoolSpendProposalAminoMsg): _84.CommunityPoolSpendProposal;
                toAminoMsg(message: _84.CommunityPoolSpendProposal): _84.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _84.CommunityPoolSpendProposalProtoMsg): _84.CommunityPoolSpendProposal;
                toProto(message: _84.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _84.CommunityPoolSpendProposal): _84.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _84.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.DelegatorStartingInfo;
                fromPartial(object: Partial<_84.DelegatorStartingInfo>): _84.DelegatorStartingInfo;
                fromAmino(object: _84.DelegatorStartingInfoAmino): _84.DelegatorStartingInfo;
                toAmino(message: _84.DelegatorStartingInfo): _84.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _84.DelegatorStartingInfoAminoMsg): _84.DelegatorStartingInfo;
                toAminoMsg(message: _84.DelegatorStartingInfo): _84.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _84.DelegatorStartingInfoProtoMsg): _84.DelegatorStartingInfo;
                toProto(message: _84.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _84.DelegatorStartingInfo): _84.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _84.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.DelegationDelegatorReward;
                fromPartial(object: Partial<_84.DelegationDelegatorReward>): _84.DelegationDelegatorReward;
                fromAmino(object: _84.DelegationDelegatorRewardAmino): _84.DelegationDelegatorReward;
                toAmino(message: _84.DelegationDelegatorReward): _84.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _84.DelegationDelegatorRewardAminoMsg): _84.DelegationDelegatorReward;
                toAminoMsg(message: _84.DelegationDelegatorReward): _84.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _84.DelegationDelegatorRewardProtoMsg): _84.DelegationDelegatorReward;
                toProto(message: _84.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _84.DelegationDelegatorReward): _84.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _84.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_84.CommunityPoolSpendProposalWithDeposit>): _84.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _84.CommunityPoolSpendProposalWithDepositAmino): _84.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _84.CommunityPoolSpendProposalWithDeposit): _84.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _84.CommunityPoolSpendProposalWithDepositAminoMsg): _84.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _84.CommunityPoolSpendProposalWithDeposit): _84.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _84.CommunityPoolSpendProposalWithDepositProtoMsg): _84.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _84.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _84.CommunityPoolSpendProposalWithDeposit): _84.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _88.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.Module;
                    fromPartial(_: Partial<_88.Module>): _88.Module;
                    fromAmino(_: _88.ModuleAmino): _88.Module;
                    toAmino(_: _88.Module): _88.ModuleAmino;
                    fromAminoMsg(object: _88.ModuleAminoMsg): _88.Module;
                    toAminoMsg(message: _88.Module): _88.ModuleAminoMsg;
                    fromProtoMsg(message: _88.ModuleProtoMsg): _88.Module;
                    toProto(message: _88.Module): Uint8Array;
                    toProtoMsg(message: _88.Module): _88.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _269.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _91.QueryEvidenceRequest): Promise<_91.QueryEvidenceResponse>;
                allEvidence(request?: _91.QueryAllEvidenceRequest): Promise<_91.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _248.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _92.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _92.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _92.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _92.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _92.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _92.MsgSubmitEvidence) => _92.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _92.MsgSubmitEvidenceAmino) => _92.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _92.MsgSubmitEvidence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.MsgSubmitEvidence;
                fromPartial(object: Partial<_92.MsgSubmitEvidence>): _92.MsgSubmitEvidence;
                fromAmino(object: _92.MsgSubmitEvidenceAmino): _92.MsgSubmitEvidence;
                toAmino(message: _92.MsgSubmitEvidence): _92.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _92.MsgSubmitEvidenceAminoMsg): _92.MsgSubmitEvidence;
                toAminoMsg(message: _92.MsgSubmitEvidence): _92.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _92.MsgSubmitEvidenceProtoMsg): _92.MsgSubmitEvidence;
                toProto(message: _92.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _92.MsgSubmitEvidence): _92.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _92.MsgSubmitEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_92.MsgSubmitEvidenceResponse>): _92.MsgSubmitEvidenceResponse;
                fromAmino(object: _92.MsgSubmitEvidenceResponseAmino): _92.MsgSubmitEvidenceResponse;
                toAmino(message: _92.MsgSubmitEvidenceResponse): _92.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _92.MsgSubmitEvidenceResponseAminoMsg): _92.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _92.MsgSubmitEvidenceResponse): _92.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _92.MsgSubmitEvidenceResponseProtoMsg): _92.MsgSubmitEvidenceResponse;
                toProto(message: _92.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _92.MsgSubmitEvidenceResponse): _92.MsgSubmitEvidenceResponseProtoMsg;
            };
            Cosmos_evidencev1beta1Evidence_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_evidencev1beta1Evidence_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _91.QueryEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.QueryEvidenceRequest;
                fromPartial(object: Partial<_91.QueryEvidenceRequest>): _91.QueryEvidenceRequest;
                fromAmino(object: _91.QueryEvidenceRequestAmino): _91.QueryEvidenceRequest;
                toAmino(message: _91.QueryEvidenceRequest): _91.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _91.QueryEvidenceRequestAminoMsg): _91.QueryEvidenceRequest;
                toAminoMsg(message: _91.QueryEvidenceRequest): _91.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _91.QueryEvidenceRequestProtoMsg): _91.QueryEvidenceRequest;
                toProto(message: _91.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _91.QueryEvidenceRequest): _91.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _91.QueryEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.QueryEvidenceResponse;
                fromPartial(object: Partial<_91.QueryEvidenceResponse>): _91.QueryEvidenceResponse;
                fromAmino(object: _91.QueryEvidenceResponseAmino): _91.QueryEvidenceResponse;
                toAmino(message: _91.QueryEvidenceResponse): _91.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _91.QueryEvidenceResponseAminoMsg): _91.QueryEvidenceResponse;
                toAminoMsg(message: _91.QueryEvidenceResponse): _91.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _91.QueryEvidenceResponseProtoMsg): _91.QueryEvidenceResponse;
                toProto(message: _91.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _91.QueryEvidenceResponse): _91.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _91.QueryAllEvidenceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_91.QueryAllEvidenceRequest>): _91.QueryAllEvidenceRequest;
                fromAmino(object: _91.QueryAllEvidenceRequestAmino): _91.QueryAllEvidenceRequest;
                toAmino(message: _91.QueryAllEvidenceRequest): _91.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _91.QueryAllEvidenceRequestAminoMsg): _91.QueryAllEvidenceRequest;
                toAminoMsg(message: _91.QueryAllEvidenceRequest): _91.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _91.QueryAllEvidenceRequestProtoMsg): _91.QueryAllEvidenceRequest;
                toProto(message: _91.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _91.QueryAllEvidenceRequest): _91.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _91.QueryAllEvidenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_91.QueryAllEvidenceResponse>): _91.QueryAllEvidenceResponse;
                fromAmino(object: _91.QueryAllEvidenceResponseAmino): _91.QueryAllEvidenceResponse;
                toAmino(message: _91.QueryAllEvidenceResponse): _91.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _91.QueryAllEvidenceResponseAminoMsg): _91.QueryAllEvidenceResponse;
                toAminoMsg(message: _91.QueryAllEvidenceResponse): _91.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _91.QueryAllEvidenceResponseProtoMsg): _91.QueryAllEvidenceResponse;
                toProto(message: _91.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _91.QueryAllEvidenceResponse): _91.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _90.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.GenesisState;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
                fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                toProto(message: _90.GenesisState): Uint8Array;
                toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _89.Equivocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.Equivocation;
                fromPartial(object: Partial<_89.Equivocation>): _89.Equivocation;
                fromAmino(object: _89.EquivocationAmino): _89.Equivocation;
                toAmino(message: _89.Equivocation): _89.EquivocationAmino;
                fromAminoMsg(object: _89.EquivocationAminoMsg): _89.Equivocation;
                toAminoMsg(message: _89.Equivocation): _89.EquivocationAminoMsg;
                fromProtoMsg(message: _89.EquivocationProtoMsg): _89.Equivocation;
                toProto(message: _89.Equivocation): Uint8Array;
                toProtoMsg(message: _89.Equivocation): _89.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _93.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.Module;
                    fromPartial(_: Partial<_93.Module>): _93.Module;
                    fromAmino(_: _93.ModuleAmino): _93.Module;
                    toAmino(_: _93.Module): _93.ModuleAmino;
                    fromAminoMsg(object: _93.ModuleAminoMsg): _93.Module;
                    toAminoMsg(message: _93.Module): _93.ModuleAminoMsg;
                    fromProtoMsg(message: _93.ModuleProtoMsg): _93.Module;
                    toProto(message: _93.Module): Uint8Array;
                    toProtoMsg(message: _93.Module): _93.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _96.QueryAllowanceRequest): Promise<_96.QueryAllowanceResponse>;
                allowances(request: _96.QueryAllowancesRequest): Promise<_96.QueryAllowancesResponse>;
                allowancesByGranter(request: _96.QueryAllowancesByGranterRequest): Promise<_96.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _97.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _97.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _97.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _97.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _97.MsgGrantAllowance) => _97.MsgGrantAllowanceAmino;
                    fromAmino: (object: _97.MsgGrantAllowanceAmino) => _97.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _97.MsgRevokeAllowance) => _97.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _97.MsgRevokeAllowanceAmino) => _97.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _97.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.MsgGrantAllowance;
                fromPartial(object: Partial<_97.MsgGrantAllowance>): _97.MsgGrantAllowance;
                fromAmino(object: _97.MsgGrantAllowanceAmino): _97.MsgGrantAllowance;
                toAmino(message: _97.MsgGrantAllowance): _97.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _97.MsgGrantAllowanceAminoMsg): _97.MsgGrantAllowance;
                toAminoMsg(message: _97.MsgGrantAllowance): _97.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _97.MsgGrantAllowanceProtoMsg): _97.MsgGrantAllowance;
                toProto(message: _97.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _97.MsgGrantAllowance): _97.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _97.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.MsgGrantAllowanceResponse;
                fromPartial(_: Partial<_97.MsgGrantAllowanceResponse>): _97.MsgGrantAllowanceResponse;
                fromAmino(_: _97.MsgGrantAllowanceResponseAmino): _97.MsgGrantAllowanceResponse;
                toAmino(_: _97.MsgGrantAllowanceResponse): _97.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _97.MsgGrantAllowanceResponseAminoMsg): _97.MsgGrantAllowanceResponse;
                toAminoMsg(message: _97.MsgGrantAllowanceResponse): _97.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _97.MsgGrantAllowanceResponseProtoMsg): _97.MsgGrantAllowanceResponse;
                toProto(message: _97.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _97.MsgGrantAllowanceResponse): _97.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _97.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.MsgRevokeAllowance;
                fromPartial(object: Partial<_97.MsgRevokeAllowance>): _97.MsgRevokeAllowance;
                fromAmino(object: _97.MsgRevokeAllowanceAmino): _97.MsgRevokeAllowance;
                toAmino(message: _97.MsgRevokeAllowance): _97.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _97.MsgRevokeAllowanceAminoMsg): _97.MsgRevokeAllowance;
                toAminoMsg(message: _97.MsgRevokeAllowance): _97.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _97.MsgRevokeAllowanceProtoMsg): _97.MsgRevokeAllowance;
                toProto(message: _97.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _97.MsgRevokeAllowance): _97.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _97.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.MsgRevokeAllowanceResponse;
                fromPartial(_: Partial<_97.MsgRevokeAllowanceResponse>): _97.MsgRevokeAllowanceResponse;
                fromAmino(_: _97.MsgRevokeAllowanceResponseAmino): _97.MsgRevokeAllowanceResponse;
                toAmino(_: _97.MsgRevokeAllowanceResponse): _97.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _97.MsgRevokeAllowanceResponseAminoMsg): _97.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _97.MsgRevokeAllowanceResponse): _97.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _97.MsgRevokeAllowanceResponseProtoMsg): _97.MsgRevokeAllowanceResponse;
                toProto(message: _97.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _97.MsgRevokeAllowanceResponse): _97.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _94.BasicAllowance | _94.PeriodicAllowance | _94.AllowedMsgAllowance | import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryAllowanceRequest;
                fromPartial(object: Partial<_96.QueryAllowanceRequest>): _96.QueryAllowanceRequest;
                fromAmino(object: _96.QueryAllowanceRequestAmino): _96.QueryAllowanceRequest;
                toAmino(message: _96.QueryAllowanceRequest): _96.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _96.QueryAllowanceRequestAminoMsg): _96.QueryAllowanceRequest;
                toAminoMsg(message: _96.QueryAllowanceRequest): _96.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllowanceRequestProtoMsg): _96.QueryAllowanceRequest;
                toProto(message: _96.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllowanceRequest): _96.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryAllowanceResponse;
                fromPartial(object: Partial<_96.QueryAllowanceResponse>): _96.QueryAllowanceResponse;
                fromAmino(object: _96.QueryAllowanceResponseAmino): _96.QueryAllowanceResponse;
                toAmino(message: _96.QueryAllowanceResponse): _96.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _96.QueryAllowanceResponseAminoMsg): _96.QueryAllowanceResponse;
                toAminoMsg(message: _96.QueryAllowanceResponse): _96.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllowanceResponseProtoMsg): _96.QueryAllowanceResponse;
                toProto(message: _96.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllowanceResponse): _96.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryAllowancesRequest;
                fromPartial(object: Partial<_96.QueryAllowancesRequest>): _96.QueryAllowancesRequest;
                fromAmino(object: _96.QueryAllowancesRequestAmino): _96.QueryAllowancesRequest;
                toAmino(message: _96.QueryAllowancesRequest): _96.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _96.QueryAllowancesRequestAminoMsg): _96.QueryAllowancesRequest;
                toAminoMsg(message: _96.QueryAllowancesRequest): _96.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesRequestProtoMsg): _96.QueryAllowancesRequest;
                toProto(message: _96.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesRequest): _96.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryAllowancesResponse;
                fromPartial(object: Partial<_96.QueryAllowancesResponse>): _96.QueryAllowancesResponse;
                fromAmino(object: _96.QueryAllowancesResponseAmino): _96.QueryAllowancesResponse;
                toAmino(message: _96.QueryAllowancesResponse): _96.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _96.QueryAllowancesResponseAminoMsg): _96.QueryAllowancesResponse;
                toAminoMsg(message: _96.QueryAllowancesResponse): _96.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesResponseProtoMsg): _96.QueryAllowancesResponse;
                toProto(message: _96.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesResponse): _96.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryAllowancesByGranterRequest;
                fromPartial(object: Partial<_96.QueryAllowancesByGranterRequest>): _96.QueryAllowancesByGranterRequest;
                fromAmino(object: _96.QueryAllowancesByGranterRequestAmino): _96.QueryAllowancesByGranterRequest;
                toAmino(message: _96.QueryAllowancesByGranterRequest): _96.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _96.QueryAllowancesByGranterRequestAminoMsg): _96.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _96.QueryAllowancesByGranterRequest): _96.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesByGranterRequestProtoMsg): _96.QueryAllowancesByGranterRequest;
                toProto(message: _96.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesByGranterRequest): _96.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _96.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.QueryAllowancesByGranterResponse;
                fromPartial(object: Partial<_96.QueryAllowancesByGranterResponse>): _96.QueryAllowancesByGranterResponse;
                fromAmino(object: _96.QueryAllowancesByGranterResponseAmino): _96.QueryAllowancesByGranterResponse;
                toAmino(message: _96.QueryAllowancesByGranterResponse): _96.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _96.QueryAllowancesByGranterResponseAminoMsg): _96.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _96.QueryAllowancesByGranterResponse): _96.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllowancesByGranterResponseProtoMsg): _96.QueryAllowancesByGranterResponse;
                toProto(message: _96.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllowancesByGranterResponse): _96.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _95.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.GenesisState;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                toAminoMsg(message: _95.GenesisState): _95.GenesisStateAminoMsg;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _94.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.BasicAllowance;
                fromPartial(object: Partial<_94.BasicAllowance>): _94.BasicAllowance;
                fromAmino(object: _94.BasicAllowanceAmino): _94.BasicAllowance;
                toAmino(message: _94.BasicAllowance): _94.BasicAllowanceAmino;
                fromAminoMsg(object: _94.BasicAllowanceAminoMsg): _94.BasicAllowance;
                toAminoMsg(message: _94.BasicAllowance): _94.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _94.BasicAllowanceProtoMsg): _94.BasicAllowance;
                toProto(message: _94.BasicAllowance): Uint8Array;
                toProtoMsg(message: _94.BasicAllowance): _94.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _94.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.PeriodicAllowance;
                fromPartial(object: Partial<_94.PeriodicAllowance>): _94.PeriodicAllowance;
                fromAmino(object: _94.PeriodicAllowanceAmino): _94.PeriodicAllowance;
                toAmino(message: _94.PeriodicAllowance): _94.PeriodicAllowanceAmino;
                fromAminoMsg(object: _94.PeriodicAllowanceAminoMsg): _94.PeriodicAllowance;
                toAminoMsg(message: _94.PeriodicAllowance): _94.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _94.PeriodicAllowanceProtoMsg): _94.PeriodicAllowance;
                toProto(message: _94.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _94.PeriodicAllowance): _94.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _94.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.AllowedMsgAllowance;
                fromPartial(object: Partial<_94.AllowedMsgAllowance>): _94.AllowedMsgAllowance;
                fromAmino(object: _94.AllowedMsgAllowanceAmino): _94.AllowedMsgAllowance;
                toAmino(message: _94.AllowedMsgAllowance): _94.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _94.AllowedMsgAllowanceAminoMsg): _94.AllowedMsgAllowance;
                toAminoMsg(message: _94.AllowedMsgAllowance): _94.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _94.AllowedMsgAllowanceProtoMsg): _94.AllowedMsgAllowance;
                toProto(message: _94.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _94.AllowedMsgAllowance): _94.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _94.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.Grant;
                fromPartial(object: Partial<_94.Grant>): _94.Grant;
                fromAmino(object: _94.GrantAmino): _94.Grant;
                toAmino(message: _94.Grant): _94.GrantAmino;
                fromAminoMsg(object: _94.GrantAminoMsg): _94.Grant;
                toAminoMsg(message: _94.Grant): _94.GrantAminoMsg;
                fromProtoMsg(message: _94.GrantProtoMsg): _94.Grant;
                toProto(message: _94.Grant): Uint8Array;
                toProtoMsg(message: _94.Grant): _94.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _98.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.Module;
                    fromPartial(_: Partial<_98.Module>): _98.Module;
                    fromAmino(_: _98.ModuleAmino): _98.Module;
                    toAmino(_: _98.Module): _98.ModuleAmino;
                    fromAminoMsg(object: _98.ModuleAminoMsg): _98.Module;
                    toAminoMsg(message: _98.Module): _98.ModuleAminoMsg;
                    fromProtoMsg(message: _98.ModuleProtoMsg): _98.Module;
                    toProto(message: _98.Module): Uint8Array;
                    toProtoMsg(message: _98.Module): _98.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _99.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.GenesisState;
                fromPartial(object: Partial<_99.GenesisState>): _99.GenesisState;
                fromAmino(object: _99.GenesisStateAmino): _99.GenesisState;
                toAmino(message: _99.GenesisState): _99.GenesisStateAmino;
                fromAminoMsg(object: _99.GenesisStateAminoMsg): _99.GenesisState;
                toAminoMsg(message: _99.GenesisState): _99.GenesisStateAminoMsg;
                fromProtoMsg(message: _99.GenesisStateProtoMsg): _99.GenesisState;
                toProto(message: _99.GenesisState): Uint8Array;
                toProtoMsg(message: _99.GenesisState): _99.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _100.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Module;
                    fromPartial(object: Partial<_100.Module>): _100.Module;
                    fromAmino(object: _100.ModuleAmino): _100.Module;
                    toAmino(message: _100.Module): _100.ModuleAmino;
                    fromAminoMsg(object: _100.ModuleAminoMsg): _100.Module;
                    toAminoMsg(message: _100.Module): _100.ModuleAminoMsg;
                    fromProtoMsg(message: _100.ModuleProtoMsg): _100.Module;
                    toProto(message: _100.Module): Uint8Array;
                    toProtoMsg(message: _100.Module): _100.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _103.QueryProposalRequest): Promise<_103.QueryProposalResponse>;
                proposals(request: _103.QueryProposalsRequest): Promise<_103.QueryProposalsResponse>;
                vote(request: _103.QueryVoteRequest): Promise<_103.QueryVoteResponse>;
                votes(request: _103.QueryVotesRequest): Promise<_103.QueryVotesResponse>;
                params(request: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                deposit(request: _103.QueryDepositRequest): Promise<_103.QueryDepositResponse>;
                deposits(request: _103.QueryDepositsRequest): Promise<_103.QueryDepositsResponse>;
                tallyResult(request: _103.QueryTallyResultRequest): Promise<_103.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    execLegacyContent(value: _104.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    voteWeighted(value: _104.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    deposit(value: _104.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _104.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _104.MsgExecLegacyContent;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    voteWeighted(value: _104.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _104.MsgVoteWeighted;
                    };
                    deposit(value: _104.MsgDeposit): {
                        typeUrl: string;
                        value: _104.MsgDeposit;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _104.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _104.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _104.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _104.MsgExecLegacyContent;
                    };
                    vote(value: _104.MsgVote): {
                        typeUrl: string;
                        value: _104.MsgVote;
                    };
                    voteWeighted(value: _104.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _104.MsgVoteWeighted;
                    };
                    deposit(value: _104.MsgDeposit): {
                        typeUrl: string;
                        value: _104.MsgDeposit;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _104.MsgSubmitProposal) => _104.MsgSubmitProposalAmino;
                    fromAmino: (object: _104.MsgSubmitProposalAmino) => _104.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _104.MsgExecLegacyContent) => _104.MsgExecLegacyContentAmino;
                    fromAmino: (object: _104.MsgExecLegacyContentAmino) => _104.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _104.MsgVote) => _104.MsgVoteAmino;
                    fromAmino: (object: _104.MsgVoteAmino) => _104.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _104.MsgVoteWeighted) => _104.MsgVoteWeightedAmino;
                    fromAmino: (object: _104.MsgVoteWeightedAmino) => _104.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _104.MsgDeposit) => _104.MsgDepositAmino;
                    fromAmino: (object: _104.MsgDepositAmino) => _104.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateParams) => _104.MsgUpdateParamsAmino;
                    fromAmino: (object: _104.MsgUpdateParamsAmino) => _104.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _104.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgSubmitProposal;
                fromPartial(object: Partial<_104.MsgSubmitProposal>): _104.MsgSubmitProposal;
                fromAmino(object: _104.MsgSubmitProposalAmino): _104.MsgSubmitProposal;
                toAmino(message: _104.MsgSubmitProposal): _104.MsgSubmitProposalAmino;
                fromAminoMsg(object: _104.MsgSubmitProposalAminoMsg): _104.MsgSubmitProposal;
                toAminoMsg(message: _104.MsgSubmitProposal): _104.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _104.MsgSubmitProposalProtoMsg): _104.MsgSubmitProposal;
                toProto(message: _104.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _104.MsgSubmitProposal): _104.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _104.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_104.MsgSubmitProposalResponse>): _104.MsgSubmitProposalResponse;
                fromAmino(object: _104.MsgSubmitProposalResponseAmino): _104.MsgSubmitProposalResponse;
                toAmino(message: _104.MsgSubmitProposalResponse): _104.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _104.MsgSubmitProposalResponseAminoMsg): _104.MsgSubmitProposalResponse;
                toAminoMsg(message: _104.MsgSubmitProposalResponse): _104.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _104.MsgSubmitProposalResponseProtoMsg): _104.MsgSubmitProposalResponse;
                toProto(message: _104.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _104.MsgSubmitProposalResponse): _104.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _104.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgExecLegacyContent;
                fromPartial(object: Partial<_104.MsgExecLegacyContent>): _104.MsgExecLegacyContent;
                fromAmino(object: _104.MsgExecLegacyContentAmino): _104.MsgExecLegacyContent;
                toAmino(message: _104.MsgExecLegacyContent): _104.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _104.MsgExecLegacyContentAminoMsg): _104.MsgExecLegacyContent;
                toAminoMsg(message: _104.MsgExecLegacyContent): _104.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _104.MsgExecLegacyContentProtoMsg): _104.MsgExecLegacyContent;
                toProto(message: _104.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _104.MsgExecLegacyContent): _104.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _104.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgExecLegacyContentResponse;
                fromPartial(_: Partial<_104.MsgExecLegacyContentResponse>): _104.MsgExecLegacyContentResponse;
                fromAmino(_: _104.MsgExecLegacyContentResponseAmino): _104.MsgExecLegacyContentResponse;
                toAmino(_: _104.MsgExecLegacyContentResponse): _104.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _104.MsgExecLegacyContentResponseAminoMsg): _104.MsgExecLegacyContentResponse;
                toAminoMsg(message: _104.MsgExecLegacyContentResponse): _104.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _104.MsgExecLegacyContentResponseProtoMsg): _104.MsgExecLegacyContentResponse;
                toProto(message: _104.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _104.MsgExecLegacyContentResponse): _104.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _104.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgVote;
                fromPartial(object: Partial<_104.MsgVote>): _104.MsgVote;
                fromAmino(object: _104.MsgVoteAmino): _104.MsgVote;
                toAmino(message: _104.MsgVote): _104.MsgVoteAmino;
                fromAminoMsg(object: _104.MsgVoteAminoMsg): _104.MsgVote;
                toAminoMsg(message: _104.MsgVote): _104.MsgVoteAminoMsg;
                fromProtoMsg(message: _104.MsgVoteProtoMsg): _104.MsgVote;
                toProto(message: _104.MsgVote): Uint8Array;
                toProtoMsg(message: _104.MsgVote): _104.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _104.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgVoteResponse;
                fromPartial(_: Partial<_104.MsgVoteResponse>): _104.MsgVoteResponse;
                fromAmino(_: _104.MsgVoteResponseAmino): _104.MsgVoteResponse;
                toAmino(_: _104.MsgVoteResponse): _104.MsgVoteResponseAmino;
                fromAminoMsg(object: _104.MsgVoteResponseAminoMsg): _104.MsgVoteResponse;
                toAminoMsg(message: _104.MsgVoteResponse): _104.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _104.MsgVoteResponseProtoMsg): _104.MsgVoteResponse;
                toProto(message: _104.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _104.MsgVoteResponse): _104.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _104.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgVoteWeighted;
                fromPartial(object: Partial<_104.MsgVoteWeighted>): _104.MsgVoteWeighted;
                fromAmino(object: _104.MsgVoteWeightedAmino): _104.MsgVoteWeighted;
                toAmino(message: _104.MsgVoteWeighted): _104.MsgVoteWeightedAmino;
                fromAminoMsg(object: _104.MsgVoteWeightedAminoMsg): _104.MsgVoteWeighted;
                toAminoMsg(message: _104.MsgVoteWeighted): _104.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _104.MsgVoteWeightedProtoMsg): _104.MsgVoteWeighted;
                toProto(message: _104.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _104.MsgVoteWeighted): _104.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _104.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_104.MsgVoteWeightedResponse>): _104.MsgVoteWeightedResponse;
                fromAmino(_: _104.MsgVoteWeightedResponseAmino): _104.MsgVoteWeightedResponse;
                toAmino(_: _104.MsgVoteWeightedResponse): _104.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _104.MsgVoteWeightedResponseAminoMsg): _104.MsgVoteWeightedResponse;
                toAminoMsg(message: _104.MsgVoteWeightedResponse): _104.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _104.MsgVoteWeightedResponseProtoMsg): _104.MsgVoteWeightedResponse;
                toProto(message: _104.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _104.MsgVoteWeightedResponse): _104.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _104.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgDeposit;
                fromPartial(object: Partial<_104.MsgDeposit>): _104.MsgDeposit;
                fromAmino(object: _104.MsgDepositAmino): _104.MsgDeposit;
                toAmino(message: _104.MsgDeposit): _104.MsgDepositAmino;
                fromAminoMsg(object: _104.MsgDepositAminoMsg): _104.MsgDeposit;
                toAminoMsg(message: _104.MsgDeposit): _104.MsgDepositAminoMsg;
                fromProtoMsg(message: _104.MsgDepositProtoMsg): _104.MsgDeposit;
                toProto(message: _104.MsgDeposit): Uint8Array;
                toProtoMsg(message: _104.MsgDeposit): _104.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _104.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgDepositResponse;
                fromPartial(_: Partial<_104.MsgDepositResponse>): _104.MsgDepositResponse;
                fromAmino(_: _104.MsgDepositResponseAmino): _104.MsgDepositResponse;
                toAmino(_: _104.MsgDepositResponse): _104.MsgDepositResponseAmino;
                fromAminoMsg(object: _104.MsgDepositResponseAminoMsg): _104.MsgDepositResponse;
                toAminoMsg(message: _104.MsgDepositResponse): _104.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _104.MsgDepositResponseProtoMsg): _104.MsgDepositResponse;
                toProto(message: _104.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _104.MsgDepositResponse): _104.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _104.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpdateParams;
                fromPartial(object: Partial<_104.MsgUpdateParams>): _104.MsgUpdateParams;
                fromAmino(object: _104.MsgUpdateParamsAmino): _104.MsgUpdateParams;
                toAmino(message: _104.MsgUpdateParams): _104.MsgUpdateParamsAmino;
                fromAminoMsg(object: _104.MsgUpdateParamsAminoMsg): _104.MsgUpdateParams;
                toAminoMsg(message: _104.MsgUpdateParams): _104.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateParamsProtoMsg): _104.MsgUpdateParams;
                toProto(message: _104.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateParams): _104.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_104.MsgUpdateParamsResponse>): _104.MsgUpdateParamsResponse;
                fromAmino(_: _104.MsgUpdateParamsResponseAmino): _104.MsgUpdateParamsResponse;
                toAmino(_: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateParamsResponseAminoMsg): _104.MsgUpdateParamsResponse;
                toAminoMsg(message: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateParamsResponseProtoMsg): _104.MsgUpdateParamsResponse;
                toProto(message: _104.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _84.CommunityPoolSpendProposal | _84.CommunityPoolSpendProposalWithDeposit | _106.TextProposal | _132.ParameterChangeProposal | _153.SoftwareUpgradeProposal | _153.CancelSoftwareUpgradeProposal | import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _103.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryProposalRequest;
                fromPartial(object: Partial<_103.QueryProposalRequest>): _103.QueryProposalRequest;
                fromAmino(object: _103.QueryProposalRequestAmino): _103.QueryProposalRequest;
                toAmino(message: _103.QueryProposalRequest): _103.QueryProposalRequestAmino;
                fromAminoMsg(object: _103.QueryProposalRequestAminoMsg): _103.QueryProposalRequest;
                toAminoMsg(message: _103.QueryProposalRequest): _103.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _103.QueryProposalRequestProtoMsg): _103.QueryProposalRequest;
                toProto(message: _103.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _103.QueryProposalRequest): _103.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _103.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryProposalResponse;
                fromPartial(object: Partial<_103.QueryProposalResponse>): _103.QueryProposalResponse;
                fromAmino(object: _103.QueryProposalResponseAmino): _103.QueryProposalResponse;
                toAmino(message: _103.QueryProposalResponse): _103.QueryProposalResponseAmino;
                fromAminoMsg(object: _103.QueryProposalResponseAminoMsg): _103.QueryProposalResponse;
                toAminoMsg(message: _103.QueryProposalResponse): _103.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _103.QueryProposalResponseProtoMsg): _103.QueryProposalResponse;
                toProto(message: _103.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _103.QueryProposalResponse): _103.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _103.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryProposalsRequest;
                fromPartial(object: Partial<_103.QueryProposalsRequest>): _103.QueryProposalsRequest;
                fromAmino(object: _103.QueryProposalsRequestAmino): _103.QueryProposalsRequest;
                toAmino(message: _103.QueryProposalsRequest): _103.QueryProposalsRequestAmino;
                fromAminoMsg(object: _103.QueryProposalsRequestAminoMsg): _103.QueryProposalsRequest;
                toAminoMsg(message: _103.QueryProposalsRequest): _103.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryProposalsRequestProtoMsg): _103.QueryProposalsRequest;
                toProto(message: _103.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryProposalsRequest): _103.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _103.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryProposalsResponse;
                fromPartial(object: Partial<_103.QueryProposalsResponse>): _103.QueryProposalsResponse;
                fromAmino(object: _103.QueryProposalsResponseAmino): _103.QueryProposalsResponse;
                toAmino(message: _103.QueryProposalsResponse): _103.QueryProposalsResponseAmino;
                fromAminoMsg(object: _103.QueryProposalsResponseAminoMsg): _103.QueryProposalsResponse;
                toAminoMsg(message: _103.QueryProposalsResponse): _103.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryProposalsResponseProtoMsg): _103.QueryProposalsResponse;
                toProto(message: _103.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryProposalsResponse): _103.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _103.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryVoteRequest;
                fromPartial(object: Partial<_103.QueryVoteRequest>): _103.QueryVoteRequest;
                fromAmino(object: _103.QueryVoteRequestAmino): _103.QueryVoteRequest;
                toAmino(message: _103.QueryVoteRequest): _103.QueryVoteRequestAmino;
                fromAminoMsg(object: _103.QueryVoteRequestAminoMsg): _103.QueryVoteRequest;
                toAminoMsg(message: _103.QueryVoteRequest): _103.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _103.QueryVoteRequestProtoMsg): _103.QueryVoteRequest;
                toProto(message: _103.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _103.QueryVoteRequest): _103.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _103.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryVoteResponse;
                fromPartial(object: Partial<_103.QueryVoteResponse>): _103.QueryVoteResponse;
                fromAmino(object: _103.QueryVoteResponseAmino): _103.QueryVoteResponse;
                toAmino(message: _103.QueryVoteResponse): _103.QueryVoteResponseAmino;
                fromAminoMsg(object: _103.QueryVoteResponseAminoMsg): _103.QueryVoteResponse;
                toAminoMsg(message: _103.QueryVoteResponse): _103.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _103.QueryVoteResponseProtoMsg): _103.QueryVoteResponse;
                toProto(message: _103.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _103.QueryVoteResponse): _103.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _103.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryVotesRequest;
                fromPartial(object: Partial<_103.QueryVotesRequest>): _103.QueryVotesRequest;
                fromAmino(object: _103.QueryVotesRequestAmino): _103.QueryVotesRequest;
                toAmino(message: _103.QueryVotesRequest): _103.QueryVotesRequestAmino;
                fromAminoMsg(object: _103.QueryVotesRequestAminoMsg): _103.QueryVotesRequest;
                toAminoMsg(message: _103.QueryVotesRequest): _103.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _103.QueryVotesRequestProtoMsg): _103.QueryVotesRequest;
                toProto(message: _103.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _103.QueryVotesRequest): _103.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _103.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryVotesResponse;
                fromPartial(object: Partial<_103.QueryVotesResponse>): _103.QueryVotesResponse;
                fromAmino(object: _103.QueryVotesResponseAmino): _103.QueryVotesResponse;
                toAmino(message: _103.QueryVotesResponse): _103.QueryVotesResponseAmino;
                fromAminoMsg(object: _103.QueryVotesResponseAminoMsg): _103.QueryVotesResponse;
                toAminoMsg(message: _103.QueryVotesResponse): _103.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _103.QueryVotesResponseProtoMsg): _103.QueryVotesResponse;
                toProto(message: _103.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _103.QueryVotesResponse): _103.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryParamsRequest;
                fromPartial(object: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                fromAmino(object: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                toAmino(message: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                toProto(message: _103.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryParamsResponse;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                toProto(message: _103.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _103.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryDepositRequest;
                fromPartial(object: Partial<_103.QueryDepositRequest>): _103.QueryDepositRequest;
                fromAmino(object: _103.QueryDepositRequestAmino): _103.QueryDepositRequest;
                toAmino(message: _103.QueryDepositRequest): _103.QueryDepositRequestAmino;
                fromAminoMsg(object: _103.QueryDepositRequestAminoMsg): _103.QueryDepositRequest;
                toAminoMsg(message: _103.QueryDepositRequest): _103.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDepositRequestProtoMsg): _103.QueryDepositRequest;
                toProto(message: _103.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDepositRequest): _103.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _103.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryDepositResponse;
                fromPartial(object: Partial<_103.QueryDepositResponse>): _103.QueryDepositResponse;
                fromAmino(object: _103.QueryDepositResponseAmino): _103.QueryDepositResponse;
                toAmino(message: _103.QueryDepositResponse): _103.QueryDepositResponseAmino;
                fromAminoMsg(object: _103.QueryDepositResponseAminoMsg): _103.QueryDepositResponse;
                toAminoMsg(message: _103.QueryDepositResponse): _103.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDepositResponseProtoMsg): _103.QueryDepositResponse;
                toProto(message: _103.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDepositResponse): _103.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _103.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryDepositsRequest;
                fromPartial(object: Partial<_103.QueryDepositsRequest>): _103.QueryDepositsRequest;
                fromAmino(object: _103.QueryDepositsRequestAmino): _103.QueryDepositsRequest;
                toAmino(message: _103.QueryDepositsRequest): _103.QueryDepositsRequestAmino;
                fromAminoMsg(object: _103.QueryDepositsRequestAminoMsg): _103.QueryDepositsRequest;
                toAminoMsg(message: _103.QueryDepositsRequest): _103.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryDepositsRequestProtoMsg): _103.QueryDepositsRequest;
                toProto(message: _103.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryDepositsRequest): _103.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _103.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryDepositsResponse;
                fromPartial(object: Partial<_103.QueryDepositsResponse>): _103.QueryDepositsResponse;
                fromAmino(object: _103.QueryDepositsResponseAmino): _103.QueryDepositsResponse;
                toAmino(message: _103.QueryDepositsResponse): _103.QueryDepositsResponseAmino;
                fromAminoMsg(object: _103.QueryDepositsResponseAminoMsg): _103.QueryDepositsResponse;
                toAminoMsg(message: _103.QueryDepositsResponse): _103.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryDepositsResponseProtoMsg): _103.QueryDepositsResponse;
                toProto(message: _103.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryDepositsResponse): _103.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _103.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryTallyResultRequest;
                fromPartial(object: Partial<_103.QueryTallyResultRequest>): _103.QueryTallyResultRequest;
                fromAmino(object: _103.QueryTallyResultRequestAmino): _103.QueryTallyResultRequest;
                toAmino(message: _103.QueryTallyResultRequest): _103.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _103.QueryTallyResultRequestAminoMsg): _103.QueryTallyResultRequest;
                toAminoMsg(message: _103.QueryTallyResultRequest): _103.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _103.QueryTallyResultRequestProtoMsg): _103.QueryTallyResultRequest;
                toProto(message: _103.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _103.QueryTallyResultRequest): _103.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _103.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryTallyResultResponse;
                fromPartial(object: Partial<_103.QueryTallyResultResponse>): _103.QueryTallyResultResponse;
                fromAmino(object: _103.QueryTallyResultResponseAmino): _103.QueryTallyResultResponse;
                toAmino(message: _103.QueryTallyResultResponse): _103.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _103.QueryTallyResultResponseAminoMsg): _103.QueryTallyResultResponse;
                toAminoMsg(message: _103.QueryTallyResultResponse): _103.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _103.QueryTallyResultResponseProtoMsg): _103.QueryTallyResultResponse;
                toProto(message: _103.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _103.QueryTallyResultResponse): _103.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _102.VoteOption;
            voteOptionToJSON(object: _102.VoteOption): string;
            proposalStatusFromJSON(object: any): _102.ProposalStatus;
            proposalStatusToJSON(object: _102.ProposalStatus): string;
            VoteOption: typeof _102.VoteOption;
            VoteOptionSDKType: typeof _102.VoteOption;
            VoteOptionAmino: typeof _102.VoteOption;
            ProposalStatus: typeof _102.ProposalStatus;
            ProposalStatusSDKType: typeof _102.ProposalStatus;
            ProposalStatusAmino: typeof _102.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _102.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.WeightedVoteOption;
                fromPartial(object: Partial<_102.WeightedVoteOption>): _102.WeightedVoteOption;
                fromAmino(object: _102.WeightedVoteOptionAmino): _102.WeightedVoteOption;
                toAmino(message: _102.WeightedVoteOption): _102.WeightedVoteOptionAmino;
                fromAminoMsg(object: _102.WeightedVoteOptionAminoMsg): _102.WeightedVoteOption;
                toAminoMsg(message: _102.WeightedVoteOption): _102.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _102.WeightedVoteOptionProtoMsg): _102.WeightedVoteOption;
                toProto(message: _102.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _102.WeightedVoteOption): _102.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _102.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.Deposit;
                fromPartial(object: Partial<_102.Deposit>): _102.Deposit;
                fromAmino(object: _102.DepositAmino): _102.Deposit;
                toAmino(message: _102.Deposit): _102.DepositAmino;
                fromAminoMsg(object: _102.DepositAminoMsg): _102.Deposit;
                toAminoMsg(message: _102.Deposit): _102.DepositAminoMsg;
                fromProtoMsg(message: _102.DepositProtoMsg): _102.Deposit;
                toProto(message: _102.Deposit): Uint8Array;
                toProtoMsg(message: _102.Deposit): _102.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _102.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.Proposal;
                fromPartial(object: Partial<_102.Proposal>): _102.Proposal;
                fromAmino(object: _102.ProposalAmino): _102.Proposal;
                toAmino(message: _102.Proposal): _102.ProposalAmino;
                fromAminoMsg(object: _102.ProposalAminoMsg): _102.Proposal;
                toAminoMsg(message: _102.Proposal): _102.ProposalAminoMsg;
                fromProtoMsg(message: _102.ProposalProtoMsg): _102.Proposal;
                toProto(message: _102.Proposal): Uint8Array;
                toProtoMsg(message: _102.Proposal): _102.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _102.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.TallyResult;
                fromPartial(object: Partial<_102.TallyResult>): _102.TallyResult;
                fromAmino(object: _102.TallyResultAmino): _102.TallyResult;
                toAmino(message: _102.TallyResult): _102.TallyResultAmino;
                fromAminoMsg(object: _102.TallyResultAminoMsg): _102.TallyResult;
                toAminoMsg(message: _102.TallyResult): _102.TallyResultAminoMsg;
                fromProtoMsg(message: _102.TallyResultProtoMsg): _102.TallyResult;
                toProto(message: _102.TallyResult): Uint8Array;
                toProtoMsg(message: _102.TallyResult): _102.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _102.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.Vote;
                fromPartial(object: Partial<_102.Vote>): _102.Vote;
                fromAmino(object: _102.VoteAmino): _102.Vote;
                toAmino(message: _102.Vote): _102.VoteAmino;
                fromAminoMsg(object: _102.VoteAminoMsg): _102.Vote;
                toAminoMsg(message: _102.Vote): _102.VoteAminoMsg;
                fromProtoMsg(message: _102.VoteProtoMsg): _102.Vote;
                toProto(message: _102.Vote): Uint8Array;
                toProtoMsg(message: _102.Vote): _102.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _102.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.DepositParams;
                fromPartial(object: Partial<_102.DepositParams>): _102.DepositParams;
                fromAmino(object: _102.DepositParamsAmino): _102.DepositParams;
                toAmino(message: _102.DepositParams): _102.DepositParamsAmino;
                fromAminoMsg(object: _102.DepositParamsAminoMsg): _102.DepositParams;
                toAminoMsg(message: _102.DepositParams): _102.DepositParamsAminoMsg;
                fromProtoMsg(message: _102.DepositParamsProtoMsg): _102.DepositParams;
                toProto(message: _102.DepositParams): Uint8Array;
                toProtoMsg(message: _102.DepositParams): _102.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _102.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.VotingParams;
                fromPartial(object: Partial<_102.VotingParams>): _102.VotingParams;
                fromAmino(object: _102.VotingParamsAmino): _102.VotingParams;
                toAmino(message: _102.VotingParams): _102.VotingParamsAmino;
                fromAminoMsg(object: _102.VotingParamsAminoMsg): _102.VotingParams;
                toAminoMsg(message: _102.VotingParams): _102.VotingParamsAminoMsg;
                fromProtoMsg(message: _102.VotingParamsProtoMsg): _102.VotingParams;
                toProto(message: _102.VotingParams): Uint8Array;
                toProtoMsg(message: _102.VotingParams): _102.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _102.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.TallyParams;
                fromPartial(object: Partial<_102.TallyParams>): _102.TallyParams;
                fromAmino(object: _102.TallyParamsAmino): _102.TallyParams;
                toAmino(message: _102.TallyParams): _102.TallyParamsAmino;
                fromAminoMsg(object: _102.TallyParamsAminoMsg): _102.TallyParams;
                toAminoMsg(message: _102.TallyParams): _102.TallyParamsAminoMsg;
                fromProtoMsg(message: _102.TallyParamsProtoMsg): _102.TallyParams;
                toProto(message: _102.TallyParams): Uint8Array;
                toProtoMsg(message: _102.TallyParams): _102.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _102.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.Params;
                fromPartial(object: Partial<_102.Params>): _102.Params;
                fromAmino(object: _102.ParamsAmino): _102.Params;
                toAmino(message: _102.Params): _102.ParamsAmino;
                fromAminoMsg(object: _102.ParamsAminoMsg): _102.Params;
                toAminoMsg(message: _102.Params): _102.ParamsAminoMsg;
                fromProtoMsg(message: _102.ParamsProtoMsg): _102.Params;
                toProto(message: _102.Params): Uint8Array;
                toProtoMsg(message: _102.Params): _102.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _101.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.GenesisState;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _107.QueryProposalRequest): Promise<_107.QueryProposalResponse>;
                proposals(request: _107.QueryProposalsRequest): Promise<_107.QueryProposalsResponse>;
                vote(request: _107.QueryVoteRequest): Promise<_107.QueryVoteResponse>;
                votes(request: _107.QueryVotesRequest): Promise<_107.QueryVotesResponse>;
                params(request: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                deposit(request: _107.QueryDepositRequest): Promise<_107.QueryDepositResponse>;
                deposits(request: _107.QueryDepositsRequest): Promise<_107.QueryDepositsResponse>;
                tallyResult(request: _107.QueryTallyResultRequest): Promise<_107.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _251.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _108.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    vote(value: _108.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    voteWeighted(value: _108.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    deposit(value: _108.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _108.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _108.MsgSubmitProposal;
                    };
                    vote(value: _108.MsgVote): {
                        typeUrl: string;
                        value: _108.MsgVote;
                    };
                    voteWeighted(value: _108.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _108.MsgVoteWeighted;
                    };
                    deposit(value: _108.MsgDeposit): {
                        typeUrl: string;
                        value: _108.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _108.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _108.MsgSubmitProposal;
                    };
                    vote(value: _108.MsgVote): {
                        typeUrl: string;
                        value: _108.MsgVote;
                    };
                    voteWeighted(value: _108.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _108.MsgVoteWeighted;
                    };
                    deposit(value: _108.MsgDeposit): {
                        typeUrl: string;
                        value: _108.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _108.MsgSubmitProposal) => _108.MsgSubmitProposalAmino;
                    fromAmino: (object: _108.MsgSubmitProposalAmino) => _108.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _108.MsgVote) => _108.MsgVoteAmino;
                    fromAmino: (object: _108.MsgVoteAmino) => _108.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _108.MsgVoteWeighted) => _108.MsgVoteWeightedAmino;
                    fromAmino: (object: _108.MsgVoteWeightedAmino) => _108.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _108.MsgDeposit) => _108.MsgDepositAmino;
                    fromAmino: (object: _108.MsgDepositAmino) => _108.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _108.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgSubmitProposal;
                fromPartial(object: Partial<_108.MsgSubmitProposal>): _108.MsgSubmitProposal;
                fromAmino(object: _108.MsgSubmitProposalAmino): _108.MsgSubmitProposal;
                toAmino(message: _108.MsgSubmitProposal): _108.MsgSubmitProposalAmino;
                fromAminoMsg(object: _108.MsgSubmitProposalAminoMsg): _108.MsgSubmitProposal;
                toAminoMsg(message: _108.MsgSubmitProposal): _108.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _108.MsgSubmitProposalProtoMsg): _108.MsgSubmitProposal;
                toProto(message: _108.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _108.MsgSubmitProposal): _108.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _108.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_108.MsgSubmitProposalResponse>): _108.MsgSubmitProposalResponse;
                fromAmino(object: _108.MsgSubmitProposalResponseAmino): _108.MsgSubmitProposalResponse;
                toAmino(message: _108.MsgSubmitProposalResponse): _108.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _108.MsgSubmitProposalResponseAminoMsg): _108.MsgSubmitProposalResponse;
                toAminoMsg(message: _108.MsgSubmitProposalResponse): _108.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _108.MsgSubmitProposalResponseProtoMsg): _108.MsgSubmitProposalResponse;
                toProto(message: _108.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _108.MsgSubmitProposalResponse): _108.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _108.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgVote;
                fromPartial(object: Partial<_108.MsgVote>): _108.MsgVote;
                fromAmino(object: _108.MsgVoteAmino): _108.MsgVote;
                toAmino(message: _108.MsgVote): _108.MsgVoteAmino;
                fromAminoMsg(object: _108.MsgVoteAminoMsg): _108.MsgVote;
                toAminoMsg(message: _108.MsgVote): _108.MsgVoteAminoMsg;
                fromProtoMsg(message: _108.MsgVoteProtoMsg): _108.MsgVote;
                toProto(message: _108.MsgVote): Uint8Array;
                toProtoMsg(message: _108.MsgVote): _108.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _108.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgVoteResponse;
                fromPartial(_: Partial<_108.MsgVoteResponse>): _108.MsgVoteResponse;
                fromAmino(_: _108.MsgVoteResponseAmino): _108.MsgVoteResponse;
                toAmino(_: _108.MsgVoteResponse): _108.MsgVoteResponseAmino;
                fromAminoMsg(object: _108.MsgVoteResponseAminoMsg): _108.MsgVoteResponse;
                toAminoMsg(message: _108.MsgVoteResponse): _108.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _108.MsgVoteResponseProtoMsg): _108.MsgVoteResponse;
                toProto(message: _108.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _108.MsgVoteResponse): _108.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _108.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgVoteWeighted;
                fromPartial(object: Partial<_108.MsgVoteWeighted>): _108.MsgVoteWeighted;
                fromAmino(object: _108.MsgVoteWeightedAmino): _108.MsgVoteWeighted;
                toAmino(message: _108.MsgVoteWeighted): _108.MsgVoteWeightedAmino;
                fromAminoMsg(object: _108.MsgVoteWeightedAminoMsg): _108.MsgVoteWeighted;
                toAminoMsg(message: _108.MsgVoteWeighted): _108.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _108.MsgVoteWeightedProtoMsg): _108.MsgVoteWeighted;
                toProto(message: _108.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _108.MsgVoteWeighted): _108.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _108.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgVoteWeightedResponse;
                fromPartial(_: Partial<_108.MsgVoteWeightedResponse>): _108.MsgVoteWeightedResponse;
                fromAmino(_: _108.MsgVoteWeightedResponseAmino): _108.MsgVoteWeightedResponse;
                toAmino(_: _108.MsgVoteWeightedResponse): _108.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _108.MsgVoteWeightedResponseAminoMsg): _108.MsgVoteWeightedResponse;
                toAminoMsg(message: _108.MsgVoteWeightedResponse): _108.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _108.MsgVoteWeightedResponseProtoMsg): _108.MsgVoteWeightedResponse;
                toProto(message: _108.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _108.MsgVoteWeightedResponse): _108.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _108.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgDeposit;
                fromPartial(object: Partial<_108.MsgDeposit>): _108.MsgDeposit;
                fromAmino(object: _108.MsgDepositAmino): _108.MsgDeposit;
                toAmino(message: _108.MsgDeposit): _108.MsgDepositAmino;
                fromAminoMsg(object: _108.MsgDepositAminoMsg): _108.MsgDeposit;
                toAminoMsg(message: _108.MsgDeposit): _108.MsgDepositAminoMsg;
                fromProtoMsg(message: _108.MsgDepositProtoMsg): _108.MsgDeposit;
                toProto(message: _108.MsgDeposit): Uint8Array;
                toProtoMsg(message: _108.MsgDeposit): _108.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _108.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.MsgDepositResponse;
                fromPartial(_: Partial<_108.MsgDepositResponse>): _108.MsgDepositResponse;
                fromAmino(_: _108.MsgDepositResponseAmino): _108.MsgDepositResponse;
                toAmino(_: _108.MsgDepositResponse): _108.MsgDepositResponseAmino;
                fromAminoMsg(object: _108.MsgDepositResponseAminoMsg): _108.MsgDepositResponse;
                toAminoMsg(message: _108.MsgDepositResponse): _108.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _108.MsgDepositResponseProtoMsg): _108.MsgDepositResponse;
                toProto(message: _108.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _108.MsgDepositResponse): _108.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _84.CommunityPoolSpendProposal | _84.CommunityPoolSpendProposalWithDeposit | _106.TextProposal | _132.ParameterChangeProposal | _153.SoftwareUpgradeProposal | _153.CancelSoftwareUpgradeProposal | import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _107.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryProposalRequest;
                fromPartial(object: Partial<_107.QueryProposalRequest>): _107.QueryProposalRequest;
                fromAmino(object: _107.QueryProposalRequestAmino): _107.QueryProposalRequest;
                toAmino(message: _107.QueryProposalRequest): _107.QueryProposalRequestAmino;
                fromAminoMsg(object: _107.QueryProposalRequestAminoMsg): _107.QueryProposalRequest;
                toAminoMsg(message: _107.QueryProposalRequest): _107.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _107.QueryProposalRequestProtoMsg): _107.QueryProposalRequest;
                toProto(message: _107.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _107.QueryProposalRequest): _107.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _107.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryProposalResponse;
                fromPartial(object: Partial<_107.QueryProposalResponse>): _107.QueryProposalResponse;
                fromAmino(object: _107.QueryProposalResponseAmino): _107.QueryProposalResponse;
                toAmino(message: _107.QueryProposalResponse): _107.QueryProposalResponseAmino;
                fromAminoMsg(object: _107.QueryProposalResponseAminoMsg): _107.QueryProposalResponse;
                toAminoMsg(message: _107.QueryProposalResponse): _107.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _107.QueryProposalResponseProtoMsg): _107.QueryProposalResponse;
                toProto(message: _107.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _107.QueryProposalResponse): _107.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _107.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryProposalsRequest;
                fromPartial(object: Partial<_107.QueryProposalsRequest>): _107.QueryProposalsRequest;
                fromAmino(object: _107.QueryProposalsRequestAmino): _107.QueryProposalsRequest;
                toAmino(message: _107.QueryProposalsRequest): _107.QueryProposalsRequestAmino;
                fromAminoMsg(object: _107.QueryProposalsRequestAminoMsg): _107.QueryProposalsRequest;
                toAminoMsg(message: _107.QueryProposalsRequest): _107.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryProposalsRequestProtoMsg): _107.QueryProposalsRequest;
                toProto(message: _107.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryProposalsRequest): _107.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _107.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryProposalsResponse;
                fromPartial(object: Partial<_107.QueryProposalsResponse>): _107.QueryProposalsResponse;
                fromAmino(object: _107.QueryProposalsResponseAmino): _107.QueryProposalsResponse;
                toAmino(message: _107.QueryProposalsResponse): _107.QueryProposalsResponseAmino;
                fromAminoMsg(object: _107.QueryProposalsResponseAminoMsg): _107.QueryProposalsResponse;
                toAminoMsg(message: _107.QueryProposalsResponse): _107.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryProposalsResponseProtoMsg): _107.QueryProposalsResponse;
                toProto(message: _107.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryProposalsResponse): _107.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _107.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryVoteRequest;
                fromPartial(object: Partial<_107.QueryVoteRequest>): _107.QueryVoteRequest;
                fromAmino(object: _107.QueryVoteRequestAmino): _107.QueryVoteRequest;
                toAmino(message: _107.QueryVoteRequest): _107.QueryVoteRequestAmino;
                fromAminoMsg(object: _107.QueryVoteRequestAminoMsg): _107.QueryVoteRequest;
                toAminoMsg(message: _107.QueryVoteRequest): _107.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _107.QueryVoteRequestProtoMsg): _107.QueryVoteRequest;
                toProto(message: _107.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _107.QueryVoteRequest): _107.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _107.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryVoteResponse;
                fromPartial(object: Partial<_107.QueryVoteResponse>): _107.QueryVoteResponse;
                fromAmino(object: _107.QueryVoteResponseAmino): _107.QueryVoteResponse;
                toAmino(message: _107.QueryVoteResponse): _107.QueryVoteResponseAmino;
                fromAminoMsg(object: _107.QueryVoteResponseAminoMsg): _107.QueryVoteResponse;
                toAminoMsg(message: _107.QueryVoteResponse): _107.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _107.QueryVoteResponseProtoMsg): _107.QueryVoteResponse;
                toProto(message: _107.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _107.QueryVoteResponse): _107.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _107.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryVotesRequest;
                fromPartial(object: Partial<_107.QueryVotesRequest>): _107.QueryVotesRequest;
                fromAmino(object: _107.QueryVotesRequestAmino): _107.QueryVotesRequest;
                toAmino(message: _107.QueryVotesRequest): _107.QueryVotesRequestAmino;
                fromAminoMsg(object: _107.QueryVotesRequestAminoMsg): _107.QueryVotesRequest;
                toAminoMsg(message: _107.QueryVotesRequest): _107.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _107.QueryVotesRequestProtoMsg): _107.QueryVotesRequest;
                toProto(message: _107.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _107.QueryVotesRequest): _107.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _107.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryVotesResponse;
                fromPartial(object: Partial<_107.QueryVotesResponse>): _107.QueryVotesResponse;
                fromAmino(object: _107.QueryVotesResponseAmino): _107.QueryVotesResponse;
                toAmino(message: _107.QueryVotesResponse): _107.QueryVotesResponseAmino;
                fromAminoMsg(object: _107.QueryVotesResponseAminoMsg): _107.QueryVotesResponse;
                toAminoMsg(message: _107.QueryVotesResponse): _107.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _107.QueryVotesResponseProtoMsg): _107.QueryVotesResponse;
                toProto(message: _107.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _107.QueryVotesResponse): _107.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _107.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryParamsRequest;
                fromPartial(object: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                fromAmino(object: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                toAmino(message: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                toProto(message: _107.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _107.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryParamsResponse;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                toProto(message: _107.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _107.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDepositRequest;
                fromPartial(object: Partial<_107.QueryDepositRequest>): _107.QueryDepositRequest;
                fromAmino(object: _107.QueryDepositRequestAmino): _107.QueryDepositRequest;
                toAmino(message: _107.QueryDepositRequest): _107.QueryDepositRequestAmino;
                fromAminoMsg(object: _107.QueryDepositRequestAminoMsg): _107.QueryDepositRequest;
                toAminoMsg(message: _107.QueryDepositRequest): _107.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDepositRequestProtoMsg): _107.QueryDepositRequest;
                toProto(message: _107.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDepositRequest): _107.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _107.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDepositResponse;
                fromPartial(object: Partial<_107.QueryDepositResponse>): _107.QueryDepositResponse;
                fromAmino(object: _107.QueryDepositResponseAmino): _107.QueryDepositResponse;
                toAmino(message: _107.QueryDepositResponse): _107.QueryDepositResponseAmino;
                fromAminoMsg(object: _107.QueryDepositResponseAminoMsg): _107.QueryDepositResponse;
                toAminoMsg(message: _107.QueryDepositResponse): _107.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDepositResponseProtoMsg): _107.QueryDepositResponse;
                toProto(message: _107.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDepositResponse): _107.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDepositsRequest;
                fromPartial(object: Partial<_107.QueryDepositsRequest>): _107.QueryDepositsRequest;
                fromAmino(object: _107.QueryDepositsRequestAmino): _107.QueryDepositsRequest;
                toAmino(message: _107.QueryDepositsRequest): _107.QueryDepositsRequestAmino;
                fromAminoMsg(object: _107.QueryDepositsRequestAminoMsg): _107.QueryDepositsRequest;
                toAminoMsg(message: _107.QueryDepositsRequest): _107.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDepositsRequestProtoMsg): _107.QueryDepositsRequest;
                toProto(message: _107.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDepositsRequest): _107.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDepositsResponse;
                fromPartial(object: Partial<_107.QueryDepositsResponse>): _107.QueryDepositsResponse;
                fromAmino(object: _107.QueryDepositsResponseAmino): _107.QueryDepositsResponse;
                toAmino(message: _107.QueryDepositsResponse): _107.QueryDepositsResponseAmino;
                fromAminoMsg(object: _107.QueryDepositsResponseAminoMsg): _107.QueryDepositsResponse;
                toAminoMsg(message: _107.QueryDepositsResponse): _107.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDepositsResponseProtoMsg): _107.QueryDepositsResponse;
                toProto(message: _107.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDepositsResponse): _107.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _107.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryTallyResultRequest;
                fromPartial(object: Partial<_107.QueryTallyResultRequest>): _107.QueryTallyResultRequest;
                fromAmino(object: _107.QueryTallyResultRequestAmino): _107.QueryTallyResultRequest;
                toAmino(message: _107.QueryTallyResultRequest): _107.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _107.QueryTallyResultRequestAminoMsg): _107.QueryTallyResultRequest;
                toAminoMsg(message: _107.QueryTallyResultRequest): _107.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _107.QueryTallyResultRequestProtoMsg): _107.QueryTallyResultRequest;
                toProto(message: _107.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _107.QueryTallyResultRequest): _107.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _107.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryTallyResultResponse;
                fromPartial(object: Partial<_107.QueryTallyResultResponse>): _107.QueryTallyResultResponse;
                fromAmino(object: _107.QueryTallyResultResponseAmino): _107.QueryTallyResultResponse;
                toAmino(message: _107.QueryTallyResultResponse): _107.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _107.QueryTallyResultResponseAminoMsg): _107.QueryTallyResultResponse;
                toAminoMsg(message: _107.QueryTallyResultResponse): _107.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _107.QueryTallyResultResponseProtoMsg): _107.QueryTallyResultResponse;
                toProto(message: _107.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _107.QueryTallyResultResponse): _107.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _106.VoteOption;
            voteOptionToJSON(object: _106.VoteOption): string;
            proposalStatusFromJSON(object: any): _106.ProposalStatus;
            proposalStatusToJSON(object: _106.ProposalStatus): string;
            VoteOption: typeof _106.VoteOption;
            VoteOptionSDKType: typeof _106.VoteOption;
            VoteOptionAmino: typeof _106.VoteOption;
            ProposalStatus: typeof _106.ProposalStatus;
            ProposalStatusSDKType: typeof _106.ProposalStatus;
            ProposalStatusAmino: typeof _106.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _106.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.WeightedVoteOption;
                fromPartial(object: Partial<_106.WeightedVoteOption>): _106.WeightedVoteOption;
                fromAmino(object: _106.WeightedVoteOptionAmino): _106.WeightedVoteOption;
                toAmino(message: _106.WeightedVoteOption): _106.WeightedVoteOptionAmino;
                fromAminoMsg(object: _106.WeightedVoteOptionAminoMsg): _106.WeightedVoteOption;
                toAminoMsg(message: _106.WeightedVoteOption): _106.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _106.WeightedVoteOptionProtoMsg): _106.WeightedVoteOption;
                toProto(message: _106.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _106.WeightedVoteOption): _106.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _106.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.TextProposal;
                fromPartial(object: Partial<_106.TextProposal>): _106.TextProposal;
                fromAmino(object: _106.TextProposalAmino): _106.TextProposal;
                toAmino(message: _106.TextProposal): _106.TextProposalAmino;
                fromAminoMsg(object: _106.TextProposalAminoMsg): _106.TextProposal;
                toAminoMsg(message: _106.TextProposal): _106.TextProposalAminoMsg;
                fromProtoMsg(message: _106.TextProposalProtoMsg): _106.TextProposal;
                toProto(message: _106.TextProposal): Uint8Array;
                toProtoMsg(message: _106.TextProposal): _106.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _106.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Deposit;
                fromPartial(object: Partial<_106.Deposit>): _106.Deposit;
                fromAmino(object: _106.DepositAmino): _106.Deposit;
                toAmino(message: _106.Deposit): _106.DepositAmino;
                fromAminoMsg(object: _106.DepositAminoMsg): _106.Deposit;
                toAminoMsg(message: _106.Deposit): _106.DepositAminoMsg;
                fromProtoMsg(message: _106.DepositProtoMsg): _106.Deposit;
                toProto(message: _106.Deposit): Uint8Array;
                toProtoMsg(message: _106.Deposit): _106.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _106.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Proposal;
                fromPartial(object: Partial<_106.Proposal>): _106.Proposal;
                fromAmino(object: _106.ProposalAmino): _106.Proposal;
                toAmino(message: _106.Proposal): _106.ProposalAmino;
                fromAminoMsg(object: _106.ProposalAminoMsg): _106.Proposal;
                toAminoMsg(message: _106.Proposal): _106.ProposalAminoMsg;
                fromProtoMsg(message: _106.ProposalProtoMsg): _106.Proposal;
                toProto(message: _106.Proposal): Uint8Array;
                toProtoMsg(message: _106.Proposal): _106.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _106.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.TallyResult;
                fromPartial(object: Partial<_106.TallyResult>): _106.TallyResult;
                fromAmino(object: _106.TallyResultAmino): _106.TallyResult;
                toAmino(message: _106.TallyResult): _106.TallyResultAmino;
                fromAminoMsg(object: _106.TallyResultAminoMsg): _106.TallyResult;
                toAminoMsg(message: _106.TallyResult): _106.TallyResultAminoMsg;
                fromProtoMsg(message: _106.TallyResultProtoMsg): _106.TallyResult;
                toProto(message: _106.TallyResult): Uint8Array;
                toProtoMsg(message: _106.TallyResult): _106.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _106.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Vote;
                fromPartial(object: Partial<_106.Vote>): _106.Vote;
                fromAmino(object: _106.VoteAmino): _106.Vote;
                toAmino(message: _106.Vote): _106.VoteAmino;
                fromAminoMsg(object: _106.VoteAminoMsg): _106.Vote;
                toAminoMsg(message: _106.Vote): _106.VoteAminoMsg;
                fromProtoMsg(message: _106.VoteProtoMsg): _106.Vote;
                toProto(message: _106.Vote): Uint8Array;
                toProtoMsg(message: _106.Vote): _106.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _106.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.DepositParams;
                fromPartial(object: Partial<_106.DepositParams>): _106.DepositParams;
                fromAmino(object: _106.DepositParamsAmino): _106.DepositParams;
                toAmino(message: _106.DepositParams): _106.DepositParamsAmino;
                fromAminoMsg(object: _106.DepositParamsAminoMsg): _106.DepositParams;
                toAminoMsg(message: _106.DepositParams): _106.DepositParamsAminoMsg;
                fromProtoMsg(message: _106.DepositParamsProtoMsg): _106.DepositParams;
                toProto(message: _106.DepositParams): Uint8Array;
                toProtoMsg(message: _106.DepositParams): _106.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _106.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.VotingParams;
                fromPartial(object: Partial<_106.VotingParams>): _106.VotingParams;
                fromAmino(object: _106.VotingParamsAmino): _106.VotingParams;
                toAmino(message: _106.VotingParams): _106.VotingParamsAmino;
                fromAminoMsg(object: _106.VotingParamsAminoMsg): _106.VotingParams;
                toAminoMsg(message: _106.VotingParams): _106.VotingParamsAminoMsg;
                fromProtoMsg(message: _106.VotingParamsProtoMsg): _106.VotingParams;
                toProto(message: _106.VotingParams): Uint8Array;
                toProtoMsg(message: _106.VotingParams): _106.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _106.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.TallyParams;
                fromPartial(object: Partial<_106.TallyParams>): _106.TallyParams;
                fromAmino(object: _106.TallyParamsAmino): _106.TallyParams;
                toAmino(message: _106.TallyParams): _106.TallyParamsAmino;
                fromAminoMsg(object: _106.TallyParamsAminoMsg): _106.TallyParams;
                toAminoMsg(message: _106.TallyParams): _106.TallyParamsAminoMsg;
                fromProtoMsg(message: _106.TallyParamsProtoMsg): _106.TallyParams;
                toProto(message: _106.TallyParams): Uint8Array;
                toProtoMsg(message: _106.TallyParams): _106.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _105.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.GenesisState;
                fromPartial(object: Partial<_105.GenesisState>): _105.GenesisState;
                fromAmino(object: _105.GenesisStateAmino): _105.GenesisState;
                toAmino(message: _105.GenesisState): _105.GenesisStateAmino;
                fromAminoMsg(object: _105.GenesisStateAminoMsg): _105.GenesisState;
                toAminoMsg(message: _105.GenesisState): _105.GenesisStateAminoMsg;
                fromProtoMsg(message: _105.GenesisStateProtoMsg): _105.GenesisState;
                toProto(message: _105.GenesisState): Uint8Array;
                toProtoMsg(message: _105.GenesisState): _105.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _109.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Module;
                    fromPartial(object: Partial<_109.Module>): _109.Module;
                    fromAmino(object: _109.ModuleAmino): _109.Module;
                    toAmino(message: _109.Module): _109.ModuleAmino;
                    fromAminoMsg(object: _109.ModuleAminoMsg): _109.Module;
                    toAminoMsg(message: _109.Module): _109.ModuleAminoMsg;
                    fromProtoMsg(message: _109.ModuleProtoMsg): _109.Module;
                    toProto(message: _109.Module): Uint8Array;
                    toProtoMsg(message: _109.Module): _109.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _112.QueryGroupInfoRequest): Promise<_112.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _112.QueryGroupPolicyInfoRequest): Promise<_112.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _112.QueryGroupMembersRequest): Promise<_112.QueryGroupMembersResponse>;
                groupsByAdmin(request: _112.QueryGroupsByAdminRequest): Promise<_112.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _112.QueryGroupPoliciesByGroupRequest): Promise<_112.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _112.QueryGroupPoliciesByAdminRequest): Promise<_112.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _112.QueryProposalRequest): Promise<_112.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _112.QueryProposalsByGroupPolicyRequest): Promise<_112.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _112.QueryVoteByProposalVoterRequest): Promise<_112.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _112.QueryVotesByProposalRequest): Promise<_112.QueryVotesByProposalResponse>;
                votesByVoter(request: _112.QueryVotesByVoterRequest): Promise<_112.QueryVotesByVoterResponse>;
                groupsByMember(request: _112.QueryGroupsByMemberRequest): Promise<_112.QueryGroupsByMemberResponse>;
                tallyResult(request: _112.QueryTallyResultRequest): Promise<_112.QueryTallyResultResponse>;
                groups(request?: _112.QueryGroupsRequest): Promise<_112.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _252.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _113.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateGroupMembers(value: _113.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateGroupAdmin(value: _113.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateGroupMetadata(value: _113.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    createGroupPolicy(value: _113.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    createGroupWithPolicy(value: _113.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateGroupPolicyAdmin(value: _113.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateGroupPolicyDecisionPolicy(value: _113.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateGroupPolicyMetadata(value: _113.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    submitProposal(value: _113.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    withdrawProposal(value: _113.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    vote(value: _113.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    exec(value: _113.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    leaveGroup(value: _113.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _113.MsgCreateGroup): {
                        typeUrl: string;
                        value: _113.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _113.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _113.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _113.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _113.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _113.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _113.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _113.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _113.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _113.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _113.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _113.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _113.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _113.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _113.MsgWithdrawProposal;
                    };
                    vote(value: _113.MsgVote): {
                        typeUrl: string;
                        value: _113.MsgVote;
                    };
                    exec(value: _113.MsgExec): {
                        typeUrl: string;
                        value: _113.MsgExec;
                    };
                    leaveGroup(value: _113.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _113.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _113.MsgCreateGroup): {
                        typeUrl: string;
                        value: _113.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _113.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _113.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _113.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _113.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _113.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _113.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _113.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _113.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _113.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _113.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _113.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _113.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _113.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _113.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _113.MsgWithdrawProposal;
                    };
                    vote(value: _113.MsgVote): {
                        typeUrl: string;
                        value: _113.MsgVote;
                    };
                    exec(value: _113.MsgExec): {
                        typeUrl: string;
                        value: _113.MsgExec;
                    };
                    leaveGroup(value: _113.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _113.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _113.MsgCreateGroup) => _113.MsgCreateGroupAmino;
                    fromAmino: (object: _113.MsgCreateGroupAmino) => _113.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateGroupMembers) => _113.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _113.MsgUpdateGroupMembersAmino) => _113.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateGroupAdmin) => _113.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _113.MsgUpdateGroupAdminAmino) => _113.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateGroupMetadata) => _113.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _113.MsgUpdateGroupMetadataAmino) => _113.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _113.MsgCreateGroupPolicy) => _113.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _113.MsgCreateGroupPolicyAmino) => _113.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _113.MsgCreateGroupWithPolicy) => _113.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _113.MsgCreateGroupWithPolicyAmino) => _113.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateGroupPolicyAdmin) => _113.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _113.MsgUpdateGroupPolicyAdminAmino) => _113.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateGroupPolicyDecisionPolicy) => _113.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _113.MsgUpdateGroupPolicyDecisionPolicyAmino) => _113.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _113.MsgUpdateGroupPolicyMetadata) => _113.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _113.MsgUpdateGroupPolicyMetadataAmino) => _113.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _113.MsgSubmitProposal) => _113.MsgSubmitProposalAmino;
                    fromAmino: (object: _113.MsgSubmitProposalAmino) => _113.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _113.MsgWithdrawProposal) => _113.MsgWithdrawProposalAmino;
                    fromAmino: (object: _113.MsgWithdrawProposalAmino) => _113.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _113.MsgVote) => _113.MsgVoteAmino;
                    fromAmino: (object: _113.MsgVoteAmino) => _113.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _113.MsgExec) => _113.MsgExecAmino;
                    fromAmino: (object: _113.MsgExecAmino) => _113.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _113.MsgLeaveGroup) => _113.MsgLeaveGroupAmino;
                    fromAmino: (object: _113.MsgLeaveGroupAmino) => _113.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _114.VoteOption;
            voteOptionToJSON(object: _114.VoteOption): string;
            proposalStatusFromJSON(object: any): _114.ProposalStatus;
            proposalStatusToJSON(object: _114.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _114.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _114.ProposalExecutorResult): string;
            VoteOption: typeof _114.VoteOption;
            VoteOptionSDKType: typeof _114.VoteOption;
            VoteOptionAmino: typeof _114.VoteOption;
            ProposalStatus: typeof _114.ProposalStatus;
            ProposalStatusSDKType: typeof _114.ProposalStatus;
            ProposalStatusAmino: typeof _114.ProposalStatus;
            ProposalExecutorResult: typeof _114.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _114.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _114.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _114.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.Member;
                fromPartial(object: Partial<_114.Member>): _114.Member;
                fromAmino(object: _114.MemberAmino): _114.Member;
                toAmino(message: _114.Member): _114.MemberAmino;
                fromAminoMsg(object: _114.MemberAminoMsg): _114.Member;
                toAminoMsg(message: _114.Member): _114.MemberAminoMsg;
                fromProtoMsg(message: _114.MemberProtoMsg): _114.Member;
                toProto(message: _114.Member): Uint8Array;
                toProtoMsg(message: _114.Member): _114.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _114.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MemberRequest;
                fromPartial(object: Partial<_114.MemberRequest>): _114.MemberRequest;
                fromAmino(object: _114.MemberRequestAmino): _114.MemberRequest;
                toAmino(message: _114.MemberRequest): _114.MemberRequestAmino;
                fromAminoMsg(object: _114.MemberRequestAminoMsg): _114.MemberRequest;
                toAminoMsg(message: _114.MemberRequest): _114.MemberRequestAminoMsg;
                fromProtoMsg(message: _114.MemberRequestProtoMsg): _114.MemberRequest;
                toProto(message: _114.MemberRequest): Uint8Array;
                toProtoMsg(message: _114.MemberRequest): _114.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _114.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_114.ThresholdDecisionPolicy>): _114.ThresholdDecisionPolicy;
                fromAmino(object: _114.ThresholdDecisionPolicyAmino): _114.ThresholdDecisionPolicy;
                toAmino(message: _114.ThresholdDecisionPolicy): _114.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _114.ThresholdDecisionPolicyAminoMsg): _114.ThresholdDecisionPolicy;
                toAminoMsg(message: _114.ThresholdDecisionPolicy): _114.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _114.ThresholdDecisionPolicyProtoMsg): _114.ThresholdDecisionPolicy;
                toProto(message: _114.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _114.ThresholdDecisionPolicy): _114.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _114.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.PercentageDecisionPolicy;
                fromPartial(object: Partial<_114.PercentageDecisionPolicy>): _114.PercentageDecisionPolicy;
                fromAmino(object: _114.PercentageDecisionPolicyAmino): _114.PercentageDecisionPolicy;
                toAmino(message: _114.PercentageDecisionPolicy): _114.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _114.PercentageDecisionPolicyAminoMsg): _114.PercentageDecisionPolicy;
                toAminoMsg(message: _114.PercentageDecisionPolicy): _114.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _114.PercentageDecisionPolicyProtoMsg): _114.PercentageDecisionPolicy;
                toProto(message: _114.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _114.PercentageDecisionPolicy): _114.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _114.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.DecisionPolicyWindows;
                fromPartial(object: Partial<_114.DecisionPolicyWindows>): _114.DecisionPolicyWindows;
                fromAmino(object: _114.DecisionPolicyWindowsAmino): _114.DecisionPolicyWindows;
                toAmino(message: _114.DecisionPolicyWindows): _114.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _114.DecisionPolicyWindowsAminoMsg): _114.DecisionPolicyWindows;
                toAminoMsg(message: _114.DecisionPolicyWindows): _114.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _114.DecisionPolicyWindowsProtoMsg): _114.DecisionPolicyWindows;
                toProto(message: _114.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _114.DecisionPolicyWindows): _114.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _114.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.GroupInfo;
                fromPartial(object: Partial<_114.GroupInfo>): _114.GroupInfo;
                fromAmino(object: _114.GroupInfoAmino): _114.GroupInfo;
                toAmino(message: _114.GroupInfo): _114.GroupInfoAmino;
                fromAminoMsg(object: _114.GroupInfoAminoMsg): _114.GroupInfo;
                toAminoMsg(message: _114.GroupInfo): _114.GroupInfoAminoMsg;
                fromProtoMsg(message: _114.GroupInfoProtoMsg): _114.GroupInfo;
                toProto(message: _114.GroupInfo): Uint8Array;
                toProtoMsg(message: _114.GroupInfo): _114.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _114.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.GroupMember;
                fromPartial(object: Partial<_114.GroupMember>): _114.GroupMember;
                fromAmino(object: _114.GroupMemberAmino): _114.GroupMember;
                toAmino(message: _114.GroupMember): _114.GroupMemberAmino;
                fromAminoMsg(object: _114.GroupMemberAminoMsg): _114.GroupMember;
                toAminoMsg(message: _114.GroupMember): _114.GroupMemberAminoMsg;
                fromProtoMsg(message: _114.GroupMemberProtoMsg): _114.GroupMember;
                toProto(message: _114.GroupMember): Uint8Array;
                toProtoMsg(message: _114.GroupMember): _114.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _114.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.GroupPolicyInfo;
                fromPartial(object: Partial<_114.GroupPolicyInfo>): _114.GroupPolicyInfo;
                fromAmino(object: _114.GroupPolicyInfoAmino): _114.GroupPolicyInfo;
                toAmino(message: _114.GroupPolicyInfo): _114.GroupPolicyInfoAmino;
                fromAminoMsg(object: _114.GroupPolicyInfoAminoMsg): _114.GroupPolicyInfo;
                toAminoMsg(message: _114.GroupPolicyInfo): _114.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _114.GroupPolicyInfoProtoMsg): _114.GroupPolicyInfo;
                toProto(message: _114.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _114.GroupPolicyInfo): _114.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _114.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.Proposal;
                fromPartial(object: Partial<_114.Proposal>): _114.Proposal;
                fromAmino(object: _114.ProposalAmino): _114.Proposal;
                toAmino(message: _114.Proposal): _114.ProposalAmino;
                fromAminoMsg(object: _114.ProposalAminoMsg): _114.Proposal;
                toAminoMsg(message: _114.Proposal): _114.ProposalAminoMsg;
                fromProtoMsg(message: _114.ProposalProtoMsg): _114.Proposal;
                toProto(message: _114.Proposal): Uint8Array;
                toProtoMsg(message: _114.Proposal): _114.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _114.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.TallyResult;
                fromPartial(object: Partial<_114.TallyResult>): _114.TallyResult;
                fromAmino(object: _114.TallyResultAmino): _114.TallyResult;
                toAmino(message: _114.TallyResult): _114.TallyResultAmino;
                fromAminoMsg(object: _114.TallyResultAminoMsg): _114.TallyResult;
                toAminoMsg(message: _114.TallyResult): _114.TallyResultAminoMsg;
                fromProtoMsg(message: _114.TallyResultProtoMsg): _114.TallyResult;
                toProto(message: _114.TallyResult): Uint8Array;
                toProtoMsg(message: _114.TallyResult): _114.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _114.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.Vote;
                fromPartial(object: Partial<_114.Vote>): _114.Vote;
                fromAmino(object: _114.VoteAmino): _114.Vote;
                toAmino(message: _114.Vote): _114.VoteAmino;
                fromAminoMsg(object: _114.VoteAminoMsg): _114.Vote;
                toAminoMsg(message: _114.Vote): _114.VoteAminoMsg;
                fromProtoMsg(message: _114.VoteProtoMsg): _114.Vote;
                toProto(message: _114.Vote): Uint8Array;
                toProtoMsg(message: _114.Vote): _114.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _114.ThresholdDecisionPolicy | _114.PercentageDecisionPolicy | import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _113.Exec;
            execToJSON(object: _113.Exec): string;
            Exec: typeof _113.Exec;
            ExecSDKType: typeof _113.Exec;
            ExecAmino: typeof _113.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _113.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgCreateGroup;
                fromPartial(object: Partial<_113.MsgCreateGroup>): _113.MsgCreateGroup;
                fromAmino(object: _113.MsgCreateGroupAmino): _113.MsgCreateGroup;
                toAmino(message: _113.MsgCreateGroup): _113.MsgCreateGroupAmino;
                fromAminoMsg(object: _113.MsgCreateGroupAminoMsg): _113.MsgCreateGroup;
                toAminoMsg(message: _113.MsgCreateGroup): _113.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _113.MsgCreateGroupProtoMsg): _113.MsgCreateGroup;
                toProto(message: _113.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _113.MsgCreateGroup): _113.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _113.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgCreateGroupResponse;
                fromPartial(object: Partial<_113.MsgCreateGroupResponse>): _113.MsgCreateGroupResponse;
                fromAmino(object: _113.MsgCreateGroupResponseAmino): _113.MsgCreateGroupResponse;
                toAmino(message: _113.MsgCreateGroupResponse): _113.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _113.MsgCreateGroupResponseAminoMsg): _113.MsgCreateGroupResponse;
                toAminoMsg(message: _113.MsgCreateGroupResponse): _113.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _113.MsgCreateGroupResponseProtoMsg): _113.MsgCreateGroupResponse;
                toProto(message: _113.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _113.MsgCreateGroupResponse): _113.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _113.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_113.MsgUpdateGroupMembers>): _113.MsgUpdateGroupMembers;
                fromAmino(object: _113.MsgUpdateGroupMembersAmino): _113.MsgUpdateGroupMembers;
                toAmino(message: _113.MsgUpdateGroupMembers): _113.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupMembersAminoMsg): _113.MsgUpdateGroupMembers;
                toAminoMsg(message: _113.MsgUpdateGroupMembers): _113.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupMembersProtoMsg): _113.MsgUpdateGroupMembers;
                toProto(message: _113.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupMembers): _113.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_113.MsgUpdateGroupMembersResponse>): _113.MsgUpdateGroupMembersResponse;
                fromAmino(_: _113.MsgUpdateGroupMembersResponseAmino): _113.MsgUpdateGroupMembersResponse;
                toAmino(_: _113.MsgUpdateGroupMembersResponse): _113.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupMembersResponseAminoMsg): _113.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _113.MsgUpdateGroupMembersResponse): _113.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupMembersResponseProtoMsg): _113.MsgUpdateGroupMembersResponse;
                toProto(message: _113.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupMembersResponse): _113.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _113.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_113.MsgUpdateGroupAdmin>): _113.MsgUpdateGroupAdmin;
                fromAmino(object: _113.MsgUpdateGroupAdminAmino): _113.MsgUpdateGroupAdmin;
                toAmino(message: _113.MsgUpdateGroupAdmin): _113.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupAdminAminoMsg): _113.MsgUpdateGroupAdmin;
                toAminoMsg(message: _113.MsgUpdateGroupAdmin): _113.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupAdminProtoMsg): _113.MsgUpdateGroupAdmin;
                toProto(message: _113.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupAdmin): _113.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_113.MsgUpdateGroupAdminResponse>): _113.MsgUpdateGroupAdminResponse;
                fromAmino(_: _113.MsgUpdateGroupAdminResponseAmino): _113.MsgUpdateGroupAdminResponse;
                toAmino(_: _113.MsgUpdateGroupAdminResponse): _113.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupAdminResponseAminoMsg): _113.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _113.MsgUpdateGroupAdminResponse): _113.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupAdminResponseProtoMsg): _113.MsgUpdateGroupAdminResponse;
                toProto(message: _113.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupAdminResponse): _113.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _113.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_113.MsgUpdateGroupMetadata>): _113.MsgUpdateGroupMetadata;
                fromAmino(object: _113.MsgUpdateGroupMetadataAmino): _113.MsgUpdateGroupMetadata;
                toAmino(message: _113.MsgUpdateGroupMetadata): _113.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupMetadataAminoMsg): _113.MsgUpdateGroupMetadata;
                toAminoMsg(message: _113.MsgUpdateGroupMetadata): _113.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupMetadataProtoMsg): _113.MsgUpdateGroupMetadata;
                toProto(message: _113.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupMetadata): _113.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_113.MsgUpdateGroupMetadataResponse>): _113.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _113.MsgUpdateGroupMetadataResponseAmino): _113.MsgUpdateGroupMetadataResponse;
                toAmino(_: _113.MsgUpdateGroupMetadataResponse): _113.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupMetadataResponseAminoMsg): _113.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _113.MsgUpdateGroupMetadataResponse): _113.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupMetadataResponseProtoMsg): _113.MsgUpdateGroupMetadataResponse;
                toProto(message: _113.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupMetadataResponse): _113.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _113.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgCreateGroupPolicy;
                fromPartial(object: Partial<_113.MsgCreateGroupPolicy>): _113.MsgCreateGroupPolicy;
                fromAmino(object: _113.MsgCreateGroupPolicyAmino): _113.MsgCreateGroupPolicy;
                toAmino(message: _113.MsgCreateGroupPolicy): _113.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _113.MsgCreateGroupPolicyAminoMsg): _113.MsgCreateGroupPolicy;
                toAminoMsg(message: _113.MsgCreateGroupPolicy): _113.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _113.MsgCreateGroupPolicyProtoMsg): _113.MsgCreateGroupPolicy;
                toProto(message: _113.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _113.MsgCreateGroupPolicy): _113.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _113.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgCreateGroupPolicyResponse;
                fromPartial(object: Partial<_113.MsgCreateGroupPolicyResponse>): _113.MsgCreateGroupPolicyResponse;
                fromAmino(object: _113.MsgCreateGroupPolicyResponseAmino): _113.MsgCreateGroupPolicyResponse;
                toAmino(message: _113.MsgCreateGroupPolicyResponse): _113.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _113.MsgCreateGroupPolicyResponseAminoMsg): _113.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _113.MsgCreateGroupPolicyResponse): _113.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _113.MsgCreateGroupPolicyResponseProtoMsg): _113.MsgCreateGroupPolicyResponse;
                toProto(message: _113.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _113.MsgCreateGroupPolicyResponse): _113.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _113.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupPolicyAdmin;
                fromPartial(object: Partial<_113.MsgUpdateGroupPolicyAdmin>): _113.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _113.MsgUpdateGroupPolicyAdminAmino): _113.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _113.MsgUpdateGroupPolicyAdmin): _113.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupPolicyAdminAminoMsg): _113.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _113.MsgUpdateGroupPolicyAdmin): _113.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupPolicyAdminProtoMsg): _113.MsgUpdateGroupPolicyAdmin;
                toProto(message: _113.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupPolicyAdmin): _113.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupPolicyAdminResponse;
                fromPartial(_: Partial<_113.MsgUpdateGroupPolicyAdminResponse>): _113.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _113.MsgUpdateGroupPolicyAdminResponseAmino): _113.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _113.MsgUpdateGroupPolicyAdminResponse): _113.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupPolicyAdminResponseAminoMsg): _113.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _113.MsgUpdateGroupPolicyAdminResponse): _113.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupPolicyAdminResponseProtoMsg): _113.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _113.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupPolicyAdminResponse): _113.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _113.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgCreateGroupWithPolicy;
                fromPartial(object: Partial<_113.MsgCreateGroupWithPolicy>): _113.MsgCreateGroupWithPolicy;
                fromAmino(object: _113.MsgCreateGroupWithPolicyAmino): _113.MsgCreateGroupWithPolicy;
                toAmino(message: _113.MsgCreateGroupWithPolicy): _113.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _113.MsgCreateGroupWithPolicyAminoMsg): _113.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _113.MsgCreateGroupWithPolicy): _113.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _113.MsgCreateGroupWithPolicyProtoMsg): _113.MsgCreateGroupWithPolicy;
                toProto(message: _113.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _113.MsgCreateGroupWithPolicy): _113.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _113.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgCreateGroupWithPolicyResponse;
                fromPartial(object: Partial<_113.MsgCreateGroupWithPolicyResponse>): _113.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _113.MsgCreateGroupWithPolicyResponseAmino): _113.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _113.MsgCreateGroupWithPolicyResponse): _113.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _113.MsgCreateGroupWithPolicyResponseAminoMsg): _113.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _113.MsgCreateGroupWithPolicyResponse): _113.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _113.MsgCreateGroupWithPolicyResponseProtoMsg): _113.MsgCreateGroupWithPolicyResponse;
                toProto(message: _113.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _113.MsgCreateGroupWithPolicyResponse): _113.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _113.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupPolicyDecisionPolicy;
                fromPartial(object: Partial<_113.MsgUpdateGroupPolicyDecisionPolicy>): _113.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _113.MsgUpdateGroupPolicyDecisionPolicyAmino): _113.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _113.MsgUpdateGroupPolicyDecisionPolicy): _113.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _113.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _113.MsgUpdateGroupPolicyDecisionPolicy): _113.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _113.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _113.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupPolicyDecisionPolicy): _113.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromPartial(_: Partial<_113.MsgUpdateGroupPolicyDecisionPolicyResponse>): _113.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _113.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _113.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _113.MsgUpdateGroupPolicyDecisionPolicyResponse): _113.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _113.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _113.MsgUpdateGroupPolicyDecisionPolicyResponse): _113.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _113.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _113.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupPolicyDecisionPolicyResponse): _113.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _113.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupPolicyMetadata;
                fromPartial(object: Partial<_113.MsgUpdateGroupPolicyMetadata>): _113.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _113.MsgUpdateGroupPolicyMetadataAmino): _113.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _113.MsgUpdateGroupPolicyMetadata): _113.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupPolicyMetadataAminoMsg): _113.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _113.MsgUpdateGroupPolicyMetadata): _113.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupPolicyMetadataProtoMsg): _113.MsgUpdateGroupPolicyMetadata;
                toProto(message: _113.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupPolicyMetadata): _113.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _113.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgUpdateGroupPolicyMetadataResponse;
                fromPartial(_: Partial<_113.MsgUpdateGroupPolicyMetadataResponse>): _113.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _113.MsgUpdateGroupPolicyMetadataResponseAmino): _113.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _113.MsgUpdateGroupPolicyMetadataResponse): _113.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _113.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _113.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _113.MsgUpdateGroupPolicyMetadataResponse): _113.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _113.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _113.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _113.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _113.MsgUpdateGroupPolicyMetadataResponse): _113.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _113.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgSubmitProposal;
                fromPartial(object: Partial<_113.MsgSubmitProposal>): _113.MsgSubmitProposal;
                fromAmino(object: _113.MsgSubmitProposalAmino): _113.MsgSubmitProposal;
                toAmino(message: _113.MsgSubmitProposal): _113.MsgSubmitProposalAmino;
                fromAminoMsg(object: _113.MsgSubmitProposalAminoMsg): _113.MsgSubmitProposal;
                toAminoMsg(message: _113.MsgSubmitProposal): _113.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _113.MsgSubmitProposalProtoMsg): _113.MsgSubmitProposal;
                toProto(message: _113.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _113.MsgSubmitProposal): _113.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _113.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_113.MsgSubmitProposalResponse>): _113.MsgSubmitProposalResponse;
                fromAmino(object: _113.MsgSubmitProposalResponseAmino): _113.MsgSubmitProposalResponse;
                toAmino(message: _113.MsgSubmitProposalResponse): _113.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _113.MsgSubmitProposalResponseAminoMsg): _113.MsgSubmitProposalResponse;
                toAminoMsg(message: _113.MsgSubmitProposalResponse): _113.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _113.MsgSubmitProposalResponseProtoMsg): _113.MsgSubmitProposalResponse;
                toProto(message: _113.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _113.MsgSubmitProposalResponse): _113.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _113.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgWithdrawProposal;
                fromPartial(object: Partial<_113.MsgWithdrawProposal>): _113.MsgWithdrawProposal;
                fromAmino(object: _113.MsgWithdrawProposalAmino): _113.MsgWithdrawProposal;
                toAmino(message: _113.MsgWithdrawProposal): _113.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _113.MsgWithdrawProposalAminoMsg): _113.MsgWithdrawProposal;
                toAminoMsg(message: _113.MsgWithdrawProposal): _113.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _113.MsgWithdrawProposalProtoMsg): _113.MsgWithdrawProposal;
                toProto(message: _113.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _113.MsgWithdrawProposal): _113.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _113.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgWithdrawProposalResponse;
                fromPartial(_: Partial<_113.MsgWithdrawProposalResponse>): _113.MsgWithdrawProposalResponse;
                fromAmino(_: _113.MsgWithdrawProposalResponseAmino): _113.MsgWithdrawProposalResponse;
                toAmino(_: _113.MsgWithdrawProposalResponse): _113.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _113.MsgWithdrawProposalResponseAminoMsg): _113.MsgWithdrawProposalResponse;
                toAminoMsg(message: _113.MsgWithdrawProposalResponse): _113.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _113.MsgWithdrawProposalResponseProtoMsg): _113.MsgWithdrawProposalResponse;
                toProto(message: _113.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _113.MsgWithdrawProposalResponse): _113.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _113.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgVote;
                fromPartial(object: Partial<_113.MsgVote>): _113.MsgVote;
                fromAmino(object: _113.MsgVoteAmino): _113.MsgVote;
                toAmino(message: _113.MsgVote): _113.MsgVoteAmino;
                fromAminoMsg(object: _113.MsgVoteAminoMsg): _113.MsgVote;
                toAminoMsg(message: _113.MsgVote): _113.MsgVoteAminoMsg;
                fromProtoMsg(message: _113.MsgVoteProtoMsg): _113.MsgVote;
                toProto(message: _113.MsgVote): Uint8Array;
                toProtoMsg(message: _113.MsgVote): _113.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _113.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgVoteResponse;
                fromPartial(_: Partial<_113.MsgVoteResponse>): _113.MsgVoteResponse;
                fromAmino(_: _113.MsgVoteResponseAmino): _113.MsgVoteResponse;
                toAmino(_: _113.MsgVoteResponse): _113.MsgVoteResponseAmino;
                fromAminoMsg(object: _113.MsgVoteResponseAminoMsg): _113.MsgVoteResponse;
                toAminoMsg(message: _113.MsgVoteResponse): _113.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _113.MsgVoteResponseProtoMsg): _113.MsgVoteResponse;
                toProto(message: _113.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _113.MsgVoteResponse): _113.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _113.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgExec;
                fromPartial(object: Partial<_113.MsgExec>): _113.MsgExec;
                fromAmino(object: _113.MsgExecAmino): _113.MsgExec;
                toAmino(message: _113.MsgExec): _113.MsgExecAmino;
                fromAminoMsg(object: _113.MsgExecAminoMsg): _113.MsgExec;
                toAminoMsg(message: _113.MsgExec): _113.MsgExecAminoMsg;
                fromProtoMsg(message: _113.MsgExecProtoMsg): _113.MsgExec;
                toProto(message: _113.MsgExec): Uint8Array;
                toProtoMsg(message: _113.MsgExec): _113.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _113.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgExecResponse;
                fromPartial(object: Partial<_113.MsgExecResponse>): _113.MsgExecResponse;
                fromAmino(object: _113.MsgExecResponseAmino): _113.MsgExecResponse;
                toAmino(message: _113.MsgExecResponse): _113.MsgExecResponseAmino;
                fromAminoMsg(object: _113.MsgExecResponseAminoMsg): _113.MsgExecResponse;
                toAminoMsg(message: _113.MsgExecResponse): _113.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _113.MsgExecResponseProtoMsg): _113.MsgExecResponse;
                toProto(message: _113.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _113.MsgExecResponse): _113.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _113.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgLeaveGroup;
                fromPartial(object: Partial<_113.MsgLeaveGroup>): _113.MsgLeaveGroup;
                fromAmino(object: _113.MsgLeaveGroupAmino): _113.MsgLeaveGroup;
                toAmino(message: _113.MsgLeaveGroup): _113.MsgLeaveGroupAmino;
                fromAminoMsg(object: _113.MsgLeaveGroupAminoMsg): _113.MsgLeaveGroup;
                toAminoMsg(message: _113.MsgLeaveGroup): _113.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _113.MsgLeaveGroupProtoMsg): _113.MsgLeaveGroup;
                toProto(message: _113.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _113.MsgLeaveGroup): _113.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _113.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.MsgLeaveGroupResponse;
                fromPartial(_: Partial<_113.MsgLeaveGroupResponse>): _113.MsgLeaveGroupResponse;
                fromAmino(_: _113.MsgLeaveGroupResponseAmino): _113.MsgLeaveGroupResponse;
                toAmino(_: _113.MsgLeaveGroupResponse): _113.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _113.MsgLeaveGroupResponseAminoMsg): _113.MsgLeaveGroupResponse;
                toAminoMsg(message: _113.MsgLeaveGroupResponse): _113.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _113.MsgLeaveGroupResponseProtoMsg): _113.MsgLeaveGroupResponse;
                toProto(message: _113.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _113.MsgLeaveGroupResponse): _113.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupInfoRequest;
                fromPartial(object: Partial<_112.QueryGroupInfoRequest>): _112.QueryGroupInfoRequest;
                fromAmino(object: _112.QueryGroupInfoRequestAmino): _112.QueryGroupInfoRequest;
                toAmino(message: _112.QueryGroupInfoRequest): _112.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _112.QueryGroupInfoRequestAminoMsg): _112.QueryGroupInfoRequest;
                toAminoMsg(message: _112.QueryGroupInfoRequest): _112.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupInfoRequestProtoMsg): _112.QueryGroupInfoRequest;
                toProto(message: _112.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupInfoRequest): _112.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupInfoResponse;
                fromPartial(object: Partial<_112.QueryGroupInfoResponse>): _112.QueryGroupInfoResponse;
                fromAmino(object: _112.QueryGroupInfoResponseAmino): _112.QueryGroupInfoResponse;
                toAmino(message: _112.QueryGroupInfoResponse): _112.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _112.QueryGroupInfoResponseAminoMsg): _112.QueryGroupInfoResponse;
                toAminoMsg(message: _112.QueryGroupInfoResponse): _112.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupInfoResponseProtoMsg): _112.QueryGroupInfoResponse;
                toProto(message: _112.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupInfoResponse): _112.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupPolicyInfoRequest;
                fromPartial(object: Partial<_112.QueryGroupPolicyInfoRequest>): _112.QueryGroupPolicyInfoRequest;
                fromAmino(object: _112.QueryGroupPolicyInfoRequestAmino): _112.QueryGroupPolicyInfoRequest;
                toAmino(message: _112.QueryGroupPolicyInfoRequest): _112.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _112.QueryGroupPolicyInfoRequestAminoMsg): _112.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _112.QueryGroupPolicyInfoRequest): _112.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupPolicyInfoRequestProtoMsg): _112.QueryGroupPolicyInfoRequest;
                toProto(message: _112.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupPolicyInfoRequest): _112.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupPolicyInfoResponse;
                fromPartial(object: Partial<_112.QueryGroupPolicyInfoResponse>): _112.QueryGroupPolicyInfoResponse;
                fromAmino(object: _112.QueryGroupPolicyInfoResponseAmino): _112.QueryGroupPolicyInfoResponse;
                toAmino(message: _112.QueryGroupPolicyInfoResponse): _112.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _112.QueryGroupPolicyInfoResponseAminoMsg): _112.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _112.QueryGroupPolicyInfoResponse): _112.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupPolicyInfoResponseProtoMsg): _112.QueryGroupPolicyInfoResponse;
                toProto(message: _112.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupPolicyInfoResponse): _112.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupMembersRequest;
                fromPartial(object: Partial<_112.QueryGroupMembersRequest>): _112.QueryGroupMembersRequest;
                fromAmino(object: _112.QueryGroupMembersRequestAmino): _112.QueryGroupMembersRequest;
                toAmino(message: _112.QueryGroupMembersRequest): _112.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _112.QueryGroupMembersRequestAminoMsg): _112.QueryGroupMembersRequest;
                toAminoMsg(message: _112.QueryGroupMembersRequest): _112.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupMembersRequestProtoMsg): _112.QueryGroupMembersRequest;
                toProto(message: _112.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupMembersRequest): _112.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupMembersResponse;
                fromPartial(object: Partial<_112.QueryGroupMembersResponse>): _112.QueryGroupMembersResponse;
                fromAmino(object: _112.QueryGroupMembersResponseAmino): _112.QueryGroupMembersResponse;
                toAmino(message: _112.QueryGroupMembersResponse): _112.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _112.QueryGroupMembersResponseAminoMsg): _112.QueryGroupMembersResponse;
                toAminoMsg(message: _112.QueryGroupMembersResponse): _112.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupMembersResponseProtoMsg): _112.QueryGroupMembersResponse;
                toProto(message: _112.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupMembersResponse): _112.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_112.QueryGroupsByAdminRequest>): _112.QueryGroupsByAdminRequest;
                fromAmino(object: _112.QueryGroupsByAdminRequestAmino): _112.QueryGroupsByAdminRequest;
                toAmino(message: _112.QueryGroupsByAdminRequest): _112.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _112.QueryGroupsByAdminRequestAminoMsg): _112.QueryGroupsByAdminRequest;
                toAminoMsg(message: _112.QueryGroupsByAdminRequest): _112.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupsByAdminRequestProtoMsg): _112.QueryGroupsByAdminRequest;
                toProto(message: _112.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupsByAdminRequest): _112.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_112.QueryGroupsByAdminResponse>): _112.QueryGroupsByAdminResponse;
                fromAmino(object: _112.QueryGroupsByAdminResponseAmino): _112.QueryGroupsByAdminResponse;
                toAmino(message: _112.QueryGroupsByAdminResponse): _112.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _112.QueryGroupsByAdminResponseAminoMsg): _112.QueryGroupsByAdminResponse;
                toAminoMsg(message: _112.QueryGroupsByAdminResponse): _112.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupsByAdminResponseProtoMsg): _112.QueryGroupsByAdminResponse;
                toProto(message: _112.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupsByAdminResponse): _112.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupPoliciesByGroupRequest;
                fromPartial(object: Partial<_112.QueryGroupPoliciesByGroupRequest>): _112.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _112.QueryGroupPoliciesByGroupRequestAmino): _112.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _112.QueryGroupPoliciesByGroupRequest): _112.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _112.QueryGroupPoliciesByGroupRequestAminoMsg): _112.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _112.QueryGroupPoliciesByGroupRequest): _112.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupPoliciesByGroupRequestProtoMsg): _112.QueryGroupPoliciesByGroupRequest;
                toProto(message: _112.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupPoliciesByGroupRequest): _112.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupPoliciesByGroupResponse;
                fromPartial(object: Partial<_112.QueryGroupPoliciesByGroupResponse>): _112.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _112.QueryGroupPoliciesByGroupResponseAmino): _112.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _112.QueryGroupPoliciesByGroupResponse): _112.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _112.QueryGroupPoliciesByGroupResponseAminoMsg): _112.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _112.QueryGroupPoliciesByGroupResponse): _112.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupPoliciesByGroupResponseProtoMsg): _112.QueryGroupPoliciesByGroupResponse;
                toProto(message: _112.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupPoliciesByGroupResponse): _112.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupPoliciesByAdminRequest;
                fromPartial(object: Partial<_112.QueryGroupPoliciesByAdminRequest>): _112.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _112.QueryGroupPoliciesByAdminRequestAmino): _112.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _112.QueryGroupPoliciesByAdminRequest): _112.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _112.QueryGroupPoliciesByAdminRequestAminoMsg): _112.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _112.QueryGroupPoliciesByAdminRequest): _112.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupPoliciesByAdminRequestProtoMsg): _112.QueryGroupPoliciesByAdminRequest;
                toProto(message: _112.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupPoliciesByAdminRequest): _112.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupPoliciesByAdminResponse;
                fromPartial(object: Partial<_112.QueryGroupPoliciesByAdminResponse>): _112.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _112.QueryGroupPoliciesByAdminResponseAmino): _112.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _112.QueryGroupPoliciesByAdminResponse): _112.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _112.QueryGroupPoliciesByAdminResponseAminoMsg): _112.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _112.QueryGroupPoliciesByAdminResponse): _112.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupPoliciesByAdminResponseProtoMsg): _112.QueryGroupPoliciesByAdminResponse;
                toProto(message: _112.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupPoliciesByAdminResponse): _112.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _112.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryProposalRequest;
                fromPartial(object: Partial<_112.QueryProposalRequest>): _112.QueryProposalRequest;
                fromAmino(object: _112.QueryProposalRequestAmino): _112.QueryProposalRequest;
                toAmino(message: _112.QueryProposalRequest): _112.QueryProposalRequestAmino;
                fromAminoMsg(object: _112.QueryProposalRequestAminoMsg): _112.QueryProposalRequest;
                toAminoMsg(message: _112.QueryProposalRequest): _112.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _112.QueryProposalRequestProtoMsg): _112.QueryProposalRequest;
                toProto(message: _112.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _112.QueryProposalRequest): _112.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _112.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryProposalResponse;
                fromPartial(object: Partial<_112.QueryProposalResponse>): _112.QueryProposalResponse;
                fromAmino(object: _112.QueryProposalResponseAmino): _112.QueryProposalResponse;
                toAmino(message: _112.QueryProposalResponse): _112.QueryProposalResponseAmino;
                fromAminoMsg(object: _112.QueryProposalResponseAminoMsg): _112.QueryProposalResponse;
                toAminoMsg(message: _112.QueryProposalResponse): _112.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _112.QueryProposalResponseProtoMsg): _112.QueryProposalResponse;
                toProto(message: _112.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _112.QueryProposalResponse): _112.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _112.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryProposalsByGroupPolicyRequest;
                fromPartial(object: Partial<_112.QueryProposalsByGroupPolicyRequest>): _112.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _112.QueryProposalsByGroupPolicyRequestAmino): _112.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _112.QueryProposalsByGroupPolicyRequest): _112.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _112.QueryProposalsByGroupPolicyRequestAminoMsg): _112.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _112.QueryProposalsByGroupPolicyRequest): _112.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _112.QueryProposalsByGroupPolicyRequestProtoMsg): _112.QueryProposalsByGroupPolicyRequest;
                toProto(message: _112.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _112.QueryProposalsByGroupPolicyRequest): _112.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _112.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryProposalsByGroupPolicyResponse;
                fromPartial(object: Partial<_112.QueryProposalsByGroupPolicyResponse>): _112.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _112.QueryProposalsByGroupPolicyResponseAmino): _112.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _112.QueryProposalsByGroupPolicyResponse): _112.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _112.QueryProposalsByGroupPolicyResponseAminoMsg): _112.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _112.QueryProposalsByGroupPolicyResponse): _112.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _112.QueryProposalsByGroupPolicyResponseProtoMsg): _112.QueryProposalsByGroupPolicyResponse;
                toProto(message: _112.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _112.QueryProposalsByGroupPolicyResponse): _112.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _112.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_112.QueryVoteByProposalVoterRequest>): _112.QueryVoteByProposalVoterRequest;
                fromAmino(object: _112.QueryVoteByProposalVoterRequestAmino): _112.QueryVoteByProposalVoterRequest;
                toAmino(message: _112.QueryVoteByProposalVoterRequest): _112.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _112.QueryVoteByProposalVoterRequestAminoMsg): _112.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _112.QueryVoteByProposalVoterRequest): _112.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _112.QueryVoteByProposalVoterRequestProtoMsg): _112.QueryVoteByProposalVoterRequest;
                toProto(message: _112.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _112.QueryVoteByProposalVoterRequest): _112.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _112.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_112.QueryVoteByProposalVoterResponse>): _112.QueryVoteByProposalVoterResponse;
                fromAmino(object: _112.QueryVoteByProposalVoterResponseAmino): _112.QueryVoteByProposalVoterResponse;
                toAmino(message: _112.QueryVoteByProposalVoterResponse): _112.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _112.QueryVoteByProposalVoterResponseAminoMsg): _112.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _112.QueryVoteByProposalVoterResponse): _112.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _112.QueryVoteByProposalVoterResponseProtoMsg): _112.QueryVoteByProposalVoterResponse;
                toProto(message: _112.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _112.QueryVoteByProposalVoterResponse): _112.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _112.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_112.QueryVotesByProposalRequest>): _112.QueryVotesByProposalRequest;
                fromAmino(object: _112.QueryVotesByProposalRequestAmino): _112.QueryVotesByProposalRequest;
                toAmino(message: _112.QueryVotesByProposalRequest): _112.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _112.QueryVotesByProposalRequestAminoMsg): _112.QueryVotesByProposalRequest;
                toAminoMsg(message: _112.QueryVotesByProposalRequest): _112.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _112.QueryVotesByProposalRequestProtoMsg): _112.QueryVotesByProposalRequest;
                toProto(message: _112.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _112.QueryVotesByProposalRequest): _112.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _112.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_112.QueryVotesByProposalResponse>): _112.QueryVotesByProposalResponse;
                fromAmino(object: _112.QueryVotesByProposalResponseAmino): _112.QueryVotesByProposalResponse;
                toAmino(message: _112.QueryVotesByProposalResponse): _112.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _112.QueryVotesByProposalResponseAminoMsg): _112.QueryVotesByProposalResponse;
                toAminoMsg(message: _112.QueryVotesByProposalResponse): _112.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _112.QueryVotesByProposalResponseProtoMsg): _112.QueryVotesByProposalResponse;
                toProto(message: _112.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _112.QueryVotesByProposalResponse): _112.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _112.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_112.QueryVotesByVoterRequest>): _112.QueryVotesByVoterRequest;
                fromAmino(object: _112.QueryVotesByVoterRequestAmino): _112.QueryVotesByVoterRequest;
                toAmino(message: _112.QueryVotesByVoterRequest): _112.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _112.QueryVotesByVoterRequestAminoMsg): _112.QueryVotesByVoterRequest;
                toAminoMsg(message: _112.QueryVotesByVoterRequest): _112.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _112.QueryVotesByVoterRequestProtoMsg): _112.QueryVotesByVoterRequest;
                toProto(message: _112.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _112.QueryVotesByVoterRequest): _112.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _112.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_112.QueryVotesByVoterResponse>): _112.QueryVotesByVoterResponse;
                fromAmino(object: _112.QueryVotesByVoterResponseAmino): _112.QueryVotesByVoterResponse;
                toAmino(message: _112.QueryVotesByVoterResponse): _112.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _112.QueryVotesByVoterResponseAminoMsg): _112.QueryVotesByVoterResponse;
                toAminoMsg(message: _112.QueryVotesByVoterResponse): _112.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _112.QueryVotesByVoterResponseProtoMsg): _112.QueryVotesByVoterResponse;
                toProto(message: _112.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _112.QueryVotesByVoterResponse): _112.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupsByMemberRequest;
                fromPartial(object: Partial<_112.QueryGroupsByMemberRequest>): _112.QueryGroupsByMemberRequest;
                fromAmino(object: _112.QueryGroupsByMemberRequestAmino): _112.QueryGroupsByMemberRequest;
                toAmino(message: _112.QueryGroupsByMemberRequest): _112.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _112.QueryGroupsByMemberRequestAminoMsg): _112.QueryGroupsByMemberRequest;
                toAminoMsg(message: _112.QueryGroupsByMemberRequest): _112.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupsByMemberRequestProtoMsg): _112.QueryGroupsByMemberRequest;
                toProto(message: _112.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupsByMemberRequest): _112.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupsByMemberResponse;
                fromPartial(object: Partial<_112.QueryGroupsByMemberResponse>): _112.QueryGroupsByMemberResponse;
                fromAmino(object: _112.QueryGroupsByMemberResponseAmino): _112.QueryGroupsByMemberResponse;
                toAmino(message: _112.QueryGroupsByMemberResponse): _112.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _112.QueryGroupsByMemberResponseAminoMsg): _112.QueryGroupsByMemberResponse;
                toAminoMsg(message: _112.QueryGroupsByMemberResponse): _112.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupsByMemberResponseProtoMsg): _112.QueryGroupsByMemberResponse;
                toProto(message: _112.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupsByMemberResponse): _112.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _112.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryTallyResultRequest;
                fromPartial(object: Partial<_112.QueryTallyResultRequest>): _112.QueryTallyResultRequest;
                fromAmino(object: _112.QueryTallyResultRequestAmino): _112.QueryTallyResultRequest;
                toAmino(message: _112.QueryTallyResultRequest): _112.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _112.QueryTallyResultRequestAminoMsg): _112.QueryTallyResultRequest;
                toAminoMsg(message: _112.QueryTallyResultRequest): _112.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _112.QueryTallyResultRequestProtoMsg): _112.QueryTallyResultRequest;
                toProto(message: _112.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _112.QueryTallyResultRequest): _112.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _112.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryTallyResultResponse;
                fromPartial(object: Partial<_112.QueryTallyResultResponse>): _112.QueryTallyResultResponse;
                fromAmino(object: _112.QueryTallyResultResponseAmino): _112.QueryTallyResultResponse;
                toAmino(message: _112.QueryTallyResultResponse): _112.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _112.QueryTallyResultResponseAminoMsg): _112.QueryTallyResultResponse;
                toAminoMsg(message: _112.QueryTallyResultResponse): _112.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _112.QueryTallyResultResponseProtoMsg): _112.QueryTallyResultResponse;
                toProto(message: _112.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _112.QueryTallyResultResponse): _112.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _112.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupsRequest;
                fromPartial(object: Partial<_112.QueryGroupsRequest>): _112.QueryGroupsRequest;
                fromAmino(object: _112.QueryGroupsRequestAmino): _112.QueryGroupsRequest;
                toAmino(message: _112.QueryGroupsRequest): _112.QueryGroupsRequestAmino;
                fromAminoMsg(object: _112.QueryGroupsRequestAminoMsg): _112.QueryGroupsRequest;
                toAminoMsg(message: _112.QueryGroupsRequest): _112.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryGroupsRequestProtoMsg): _112.QueryGroupsRequest;
                toProto(message: _112.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryGroupsRequest): _112.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _112.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryGroupsResponse;
                fromPartial(object: Partial<_112.QueryGroupsResponse>): _112.QueryGroupsResponse;
                fromAmino(object: _112.QueryGroupsResponseAmino): _112.QueryGroupsResponse;
                toAmino(message: _112.QueryGroupsResponse): _112.QueryGroupsResponseAmino;
                fromAminoMsg(object: _112.QueryGroupsResponseAminoMsg): _112.QueryGroupsResponse;
                toAminoMsg(message: _112.QueryGroupsResponse): _112.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryGroupsResponseProtoMsg): _112.QueryGroupsResponse;
                toProto(message: _112.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryGroupsResponse): _112.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.GenesisState;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _110.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventCreateGroup;
                fromPartial(object: Partial<_110.EventCreateGroup>): _110.EventCreateGroup;
                fromAmino(object: _110.EventCreateGroupAmino): _110.EventCreateGroup;
                toAmino(message: _110.EventCreateGroup): _110.EventCreateGroupAmino;
                fromAminoMsg(object: _110.EventCreateGroupAminoMsg): _110.EventCreateGroup;
                toAminoMsg(message: _110.EventCreateGroup): _110.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _110.EventCreateGroupProtoMsg): _110.EventCreateGroup;
                toProto(message: _110.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _110.EventCreateGroup): _110.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _110.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventUpdateGroup;
                fromPartial(object: Partial<_110.EventUpdateGroup>): _110.EventUpdateGroup;
                fromAmino(object: _110.EventUpdateGroupAmino): _110.EventUpdateGroup;
                toAmino(message: _110.EventUpdateGroup): _110.EventUpdateGroupAmino;
                fromAminoMsg(object: _110.EventUpdateGroupAminoMsg): _110.EventUpdateGroup;
                toAminoMsg(message: _110.EventUpdateGroup): _110.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _110.EventUpdateGroupProtoMsg): _110.EventUpdateGroup;
                toProto(message: _110.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _110.EventUpdateGroup): _110.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _110.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventCreateGroupPolicy;
                fromPartial(object: Partial<_110.EventCreateGroupPolicy>): _110.EventCreateGroupPolicy;
                fromAmino(object: _110.EventCreateGroupPolicyAmino): _110.EventCreateGroupPolicy;
                toAmino(message: _110.EventCreateGroupPolicy): _110.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _110.EventCreateGroupPolicyAminoMsg): _110.EventCreateGroupPolicy;
                toAminoMsg(message: _110.EventCreateGroupPolicy): _110.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _110.EventCreateGroupPolicyProtoMsg): _110.EventCreateGroupPolicy;
                toProto(message: _110.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _110.EventCreateGroupPolicy): _110.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _110.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventUpdateGroupPolicy;
                fromPartial(object: Partial<_110.EventUpdateGroupPolicy>): _110.EventUpdateGroupPolicy;
                fromAmino(object: _110.EventUpdateGroupPolicyAmino): _110.EventUpdateGroupPolicy;
                toAmino(message: _110.EventUpdateGroupPolicy): _110.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _110.EventUpdateGroupPolicyAminoMsg): _110.EventUpdateGroupPolicy;
                toAminoMsg(message: _110.EventUpdateGroupPolicy): _110.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _110.EventUpdateGroupPolicyProtoMsg): _110.EventUpdateGroupPolicy;
                toProto(message: _110.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _110.EventUpdateGroupPolicy): _110.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _110.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventSubmitProposal;
                fromPartial(object: Partial<_110.EventSubmitProposal>): _110.EventSubmitProposal;
                fromAmino(object: _110.EventSubmitProposalAmino): _110.EventSubmitProposal;
                toAmino(message: _110.EventSubmitProposal): _110.EventSubmitProposalAmino;
                fromAminoMsg(object: _110.EventSubmitProposalAminoMsg): _110.EventSubmitProposal;
                toAminoMsg(message: _110.EventSubmitProposal): _110.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _110.EventSubmitProposalProtoMsg): _110.EventSubmitProposal;
                toProto(message: _110.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _110.EventSubmitProposal): _110.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _110.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventWithdrawProposal;
                fromPartial(object: Partial<_110.EventWithdrawProposal>): _110.EventWithdrawProposal;
                fromAmino(object: _110.EventWithdrawProposalAmino): _110.EventWithdrawProposal;
                toAmino(message: _110.EventWithdrawProposal): _110.EventWithdrawProposalAmino;
                fromAminoMsg(object: _110.EventWithdrawProposalAminoMsg): _110.EventWithdrawProposal;
                toAminoMsg(message: _110.EventWithdrawProposal): _110.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _110.EventWithdrawProposalProtoMsg): _110.EventWithdrawProposal;
                toProto(message: _110.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _110.EventWithdrawProposal): _110.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _110.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventVote;
                fromPartial(object: Partial<_110.EventVote>): _110.EventVote;
                fromAmino(object: _110.EventVoteAmino): _110.EventVote;
                toAmino(message: _110.EventVote): _110.EventVoteAmino;
                fromAminoMsg(object: _110.EventVoteAminoMsg): _110.EventVote;
                toAminoMsg(message: _110.EventVote): _110.EventVoteAminoMsg;
                fromProtoMsg(message: _110.EventVoteProtoMsg): _110.EventVote;
                toProto(message: _110.EventVote): Uint8Array;
                toProtoMsg(message: _110.EventVote): _110.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _110.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventExec;
                fromPartial(object: Partial<_110.EventExec>): _110.EventExec;
                fromAmino(object: _110.EventExecAmino): _110.EventExec;
                toAmino(message: _110.EventExec): _110.EventExecAmino;
                fromAminoMsg(object: _110.EventExecAminoMsg): _110.EventExec;
                toAminoMsg(message: _110.EventExec): _110.EventExecAminoMsg;
                fromProtoMsg(message: _110.EventExecProtoMsg): _110.EventExec;
                toProto(message: _110.EventExec): Uint8Array;
                toProtoMsg(message: _110.EventExec): _110.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _110.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventLeaveGroup;
                fromPartial(object: Partial<_110.EventLeaveGroup>): _110.EventLeaveGroup;
                fromAmino(object: _110.EventLeaveGroupAmino): _110.EventLeaveGroup;
                toAmino(message: _110.EventLeaveGroup): _110.EventLeaveGroupAmino;
                fromAminoMsg(object: _110.EventLeaveGroupAminoMsg): _110.EventLeaveGroup;
                toAminoMsg(message: _110.EventLeaveGroup): _110.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _110.EventLeaveGroupProtoMsg): _110.EventLeaveGroup;
                toProto(message: _110.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _110.EventLeaveGroup): _110.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _110.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.EventProposalPruned;
                fromPartial(object: Partial<_110.EventProposalPruned>): _110.EventProposalPruned;
                fromAmino(object: _110.EventProposalPrunedAmino): _110.EventProposalPruned;
                toAmino(message: _110.EventProposalPruned): _110.EventProposalPrunedAmino;
                fromAminoMsg(object: _110.EventProposalPrunedAminoMsg): _110.EventProposalPruned;
                toAminoMsg(message: _110.EventProposalPruned): _110.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _110.EventProposalPrunedProtoMsg): _110.EventProposalPruned;
                toProto(message: _110.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _110.EventProposalPruned): _110.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _115.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.Module;
                    fromPartial(object: Partial<_115.Module>): _115.Module;
                    fromAmino(object: _115.ModuleAmino): _115.Module;
                    toAmino(message: _115.Module): _115.ModuleAmino;
                    fromAminoMsg(object: _115.ModuleAminoMsg): _115.Module;
                    toAminoMsg(message: _115.Module): _115.ModuleAminoMsg;
                    fromProtoMsg(message: _115.ModuleProtoMsg): _115.Module;
                    toProto(message: _115.Module): Uint8Array;
                    toProtoMsg(message: _115.Module): _115.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                inflation(request?: _118.QueryInflationRequest): Promise<_118.QueryInflationResponse>;
                annualProvisions(request?: _118.QueryAnnualProvisionsRequest): Promise<_118.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _253.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _119.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _119.MsgUpdateParams): {
                        typeUrl: string;
                        value: _119.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _119.MsgUpdateParams): {
                        typeUrl: string;
                        value: _119.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _119.MsgUpdateParams) => _119.MsgUpdateParamsAmino;
                    fromAmino: (object: _119.MsgUpdateParamsAmino) => _119.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _119.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgUpdateParams;
                fromPartial(object: Partial<_119.MsgUpdateParams>): _119.MsgUpdateParams;
                fromAmino(object: _119.MsgUpdateParamsAmino): _119.MsgUpdateParams;
                toAmino(message: _119.MsgUpdateParams): _119.MsgUpdateParamsAmino;
                fromAminoMsg(object: _119.MsgUpdateParamsAminoMsg): _119.MsgUpdateParams;
                toAminoMsg(message: _119.MsgUpdateParams): _119.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _119.MsgUpdateParamsProtoMsg): _119.MsgUpdateParams;
                toProto(message: _119.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _119.MsgUpdateParams): _119.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _119.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_119.MsgUpdateParamsResponse>): _119.MsgUpdateParamsResponse;
                fromAmino(_: _119.MsgUpdateParamsResponseAmino): _119.MsgUpdateParamsResponse;
                toAmino(_: _119.MsgUpdateParamsResponse): _119.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _119.MsgUpdateParamsResponseAminoMsg): _119.MsgUpdateParamsResponse;
                toAminoMsg(message: _119.MsgUpdateParamsResponse): _119.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _119.MsgUpdateParamsResponseProtoMsg): _119.MsgUpdateParamsResponse;
                toProto(message: _119.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _119.MsgUpdateParamsResponse): _119.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _118.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryParamsRequest;
                fromPartial(_: Partial<_118.QueryParamsRequest>): _118.QueryParamsRequest;
                fromAmino(_: _118.QueryParamsRequestAmino): _118.QueryParamsRequest;
                toAmino(_: _118.QueryParamsRequest): _118.QueryParamsRequestAmino;
                fromAminoMsg(object: _118.QueryParamsRequestAminoMsg): _118.QueryParamsRequest;
                toAminoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryParamsRequestProtoMsg): _118.QueryParamsRequest;
                toProto(message: _118.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryParamsRequest): _118.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _118.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryParamsResponse;
                fromPartial(object: Partial<_118.QueryParamsResponse>): _118.QueryParamsResponse;
                fromAmino(object: _118.QueryParamsResponseAmino): _118.QueryParamsResponse;
                toAmino(message: _118.QueryParamsResponse): _118.QueryParamsResponseAmino;
                fromAminoMsg(object: _118.QueryParamsResponseAminoMsg): _118.QueryParamsResponse;
                toAminoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryParamsResponseProtoMsg): _118.QueryParamsResponse;
                toProto(message: _118.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryParamsResponse): _118.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _118.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryInflationRequest;
                fromPartial(_: Partial<_118.QueryInflationRequest>): _118.QueryInflationRequest;
                fromAmino(_: _118.QueryInflationRequestAmino): _118.QueryInflationRequest;
                toAmino(_: _118.QueryInflationRequest): _118.QueryInflationRequestAmino;
                fromAminoMsg(object: _118.QueryInflationRequestAminoMsg): _118.QueryInflationRequest;
                toAminoMsg(message: _118.QueryInflationRequest): _118.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _118.QueryInflationRequestProtoMsg): _118.QueryInflationRequest;
                toProto(message: _118.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _118.QueryInflationRequest): _118.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _118.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryInflationResponse;
                fromPartial(object: Partial<_118.QueryInflationResponse>): _118.QueryInflationResponse;
                fromAmino(object: _118.QueryInflationResponseAmino): _118.QueryInflationResponse;
                toAmino(message: _118.QueryInflationResponse): _118.QueryInflationResponseAmino;
                fromAminoMsg(object: _118.QueryInflationResponseAminoMsg): _118.QueryInflationResponse;
                toAminoMsg(message: _118.QueryInflationResponse): _118.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _118.QueryInflationResponseProtoMsg): _118.QueryInflationResponse;
                toProto(message: _118.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _118.QueryInflationResponse): _118.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _118.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_118.QueryAnnualProvisionsRequest>): _118.QueryAnnualProvisionsRequest;
                fromAmino(_: _118.QueryAnnualProvisionsRequestAmino): _118.QueryAnnualProvisionsRequest;
                toAmino(_: _118.QueryAnnualProvisionsRequest): _118.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _118.QueryAnnualProvisionsRequestAminoMsg): _118.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _118.QueryAnnualProvisionsRequest): _118.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _118.QueryAnnualProvisionsRequestProtoMsg): _118.QueryAnnualProvisionsRequest;
                toProto(message: _118.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _118.QueryAnnualProvisionsRequest): _118.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _118.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_118.QueryAnnualProvisionsResponse>): _118.QueryAnnualProvisionsResponse;
                fromAmino(object: _118.QueryAnnualProvisionsResponseAmino): _118.QueryAnnualProvisionsResponse;
                toAmino(message: _118.QueryAnnualProvisionsResponse): _118.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _118.QueryAnnualProvisionsResponseAminoMsg): _118.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _118.QueryAnnualProvisionsResponse): _118.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _118.QueryAnnualProvisionsResponseProtoMsg): _118.QueryAnnualProvisionsResponse;
                toProto(message: _118.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _118.QueryAnnualProvisionsResponse): _118.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _117.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.Minter;
                fromPartial(object: Partial<_117.Minter>): _117.Minter;
                fromAmino(object: _117.MinterAmino): _117.Minter;
                toAmino(message: _117.Minter): _117.MinterAmino;
                fromAminoMsg(object: _117.MinterAminoMsg): _117.Minter;
                toAminoMsg(message: _117.Minter): _117.MinterAminoMsg;
                fromProtoMsg(message: _117.MinterProtoMsg): _117.Minter;
                toProto(message: _117.Minter): Uint8Array;
                toProtoMsg(message: _117.Minter): _117.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _117.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.Params;
                fromPartial(object: Partial<_117.Params>): _117.Params;
                fromAmino(object: _117.ParamsAmino): _117.Params;
                toAmino(message: _117.Params): _117.ParamsAmino;
                fromAminoMsg(object: _117.ParamsAminoMsg): _117.Params;
                toAminoMsg(message: _117.Params): _117.ParamsAminoMsg;
                fromProtoMsg(message: _117.ParamsProtoMsg): _117.Params;
                toProto(message: _117.Params): Uint8Array;
                toProtoMsg(message: _117.Params): _117.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _116.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.GenesisState;
                fromPartial(object: Partial<_116.GenesisState>): _116.GenesisState;
                fromAmino(object: _116.GenesisStateAmino): _116.GenesisState;
                toAmino(message: _116.GenesisState): _116.GenesisStateAmino;
                fromAminoMsg(object: _116.GenesisStateAminoMsg): _116.GenesisState;
                toAminoMsg(message: _116.GenesisState): _116.GenesisStateAminoMsg;
                fromProtoMsg(message: _116.GenesisStateProtoMsg): _116.GenesisState;
                toProto(message: _116.GenesisState): Uint8Array;
                toProtoMsg(message: _116.GenesisState): _116.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _121.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.Module;
                    fromPartial(_: Partial<_121.Module>): _121.Module;
                    fromAmino(_: _121.ModuleAmino): _121.Module;
                    toAmino(_: _121.Module): _121.ModuleAmino;
                    fromAminoMsg(object: _121.ModuleAminoMsg): _121.Module;
                    toAminoMsg(message: _121.Module): _121.ModuleAminoMsg;
                    fromProtoMsg(message: _121.ModuleProtoMsg): _121.Module;
                    toProto(message: _121.Module): Uint8Array;
                    toProtoMsg(message: _121.Module): _121.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _125.QueryBalanceRequest): Promise<_125.QueryBalanceResponse>;
                owner(request: _125.QueryOwnerRequest): Promise<_125.QueryOwnerResponse>;
                supply(request: _125.QuerySupplyRequest): Promise<_125.QuerySupplyResponse>;
                nFTs(request: _125.QueryNFTsRequest): Promise<_125.QueryNFTsResponse>;
                nFT(request: _125.QueryNFTRequest): Promise<_125.QueryNFTResponse>;
                class(request: _125.QueryClassRequest): Promise<_125.QueryClassResponse>;
                classes(request?: _125.QueryClassesRequest): Promise<_125.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _126.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    send(value: _126.MsgSend): {
                        typeUrl: string;
                        value: _126.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _126.MsgSend): {
                        typeUrl: string;
                        value: _126.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _126.MsgSend) => _126.MsgSendAmino;
                    fromAmino: (object: _126.MsgSendAmino) => _126.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _126.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.MsgSend;
                fromPartial(object: Partial<_126.MsgSend>): _126.MsgSend;
                fromAmino(object: _126.MsgSendAmino): _126.MsgSend;
                toAmino(message: _126.MsgSend): _126.MsgSendAmino;
                fromAminoMsg(object: _126.MsgSendAminoMsg): _126.MsgSend;
                toAminoMsg(message: _126.MsgSend): _126.MsgSendAminoMsg;
                fromProtoMsg(message: _126.MsgSendProtoMsg): _126.MsgSend;
                toProto(message: _126.MsgSend): Uint8Array;
                toProtoMsg(message: _126.MsgSend): _126.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _126.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.MsgSendResponse;
                fromPartial(_: Partial<_126.MsgSendResponse>): _126.MsgSendResponse;
                fromAmino(_: _126.MsgSendResponseAmino): _126.MsgSendResponse;
                toAmino(_: _126.MsgSendResponse): _126.MsgSendResponseAmino;
                fromAminoMsg(object: _126.MsgSendResponseAminoMsg): _126.MsgSendResponse;
                toAminoMsg(message: _126.MsgSendResponse): _126.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _126.MsgSendResponseProtoMsg): _126.MsgSendResponse;
                toProto(message: _126.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _126.MsgSendResponse): _126.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _125.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryBalanceRequest;
                fromPartial(object: Partial<_125.QueryBalanceRequest>): _125.QueryBalanceRequest;
                fromAmino(object: _125.QueryBalanceRequestAmino): _125.QueryBalanceRequest;
                toAmino(message: _125.QueryBalanceRequest): _125.QueryBalanceRequestAmino;
                fromAminoMsg(object: _125.QueryBalanceRequestAminoMsg): _125.QueryBalanceRequest;
                toAminoMsg(message: _125.QueryBalanceRequest): _125.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _125.QueryBalanceRequestProtoMsg): _125.QueryBalanceRequest;
                toProto(message: _125.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _125.QueryBalanceRequest): _125.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _125.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryBalanceResponse;
                fromPartial(object: Partial<_125.QueryBalanceResponse>): _125.QueryBalanceResponse;
                fromAmino(object: _125.QueryBalanceResponseAmino): _125.QueryBalanceResponse;
                toAmino(message: _125.QueryBalanceResponse): _125.QueryBalanceResponseAmino;
                fromAminoMsg(object: _125.QueryBalanceResponseAminoMsg): _125.QueryBalanceResponse;
                toAminoMsg(message: _125.QueryBalanceResponse): _125.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _125.QueryBalanceResponseProtoMsg): _125.QueryBalanceResponse;
                toProto(message: _125.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _125.QueryBalanceResponse): _125.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _125.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryOwnerRequest;
                fromPartial(object: Partial<_125.QueryOwnerRequest>): _125.QueryOwnerRequest;
                fromAmino(object: _125.QueryOwnerRequestAmino): _125.QueryOwnerRequest;
                toAmino(message: _125.QueryOwnerRequest): _125.QueryOwnerRequestAmino;
                fromAminoMsg(object: _125.QueryOwnerRequestAminoMsg): _125.QueryOwnerRequest;
                toAminoMsg(message: _125.QueryOwnerRequest): _125.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _125.QueryOwnerRequestProtoMsg): _125.QueryOwnerRequest;
                toProto(message: _125.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _125.QueryOwnerRequest): _125.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _125.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryOwnerResponse;
                fromPartial(object: Partial<_125.QueryOwnerResponse>): _125.QueryOwnerResponse;
                fromAmino(object: _125.QueryOwnerResponseAmino): _125.QueryOwnerResponse;
                toAmino(message: _125.QueryOwnerResponse): _125.QueryOwnerResponseAmino;
                fromAminoMsg(object: _125.QueryOwnerResponseAminoMsg): _125.QueryOwnerResponse;
                toAminoMsg(message: _125.QueryOwnerResponse): _125.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _125.QueryOwnerResponseProtoMsg): _125.QueryOwnerResponse;
                toProto(message: _125.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _125.QueryOwnerResponse): _125.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _125.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QuerySupplyRequest;
                fromPartial(object: Partial<_125.QuerySupplyRequest>): _125.QuerySupplyRequest;
                fromAmino(object: _125.QuerySupplyRequestAmino): _125.QuerySupplyRequest;
                toAmino(message: _125.QuerySupplyRequest): _125.QuerySupplyRequestAmino;
                fromAminoMsg(object: _125.QuerySupplyRequestAminoMsg): _125.QuerySupplyRequest;
                toAminoMsg(message: _125.QuerySupplyRequest): _125.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _125.QuerySupplyRequestProtoMsg): _125.QuerySupplyRequest;
                toProto(message: _125.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _125.QuerySupplyRequest): _125.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _125.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QuerySupplyResponse;
                fromPartial(object: Partial<_125.QuerySupplyResponse>): _125.QuerySupplyResponse;
                fromAmino(object: _125.QuerySupplyResponseAmino): _125.QuerySupplyResponse;
                toAmino(message: _125.QuerySupplyResponse): _125.QuerySupplyResponseAmino;
                fromAminoMsg(object: _125.QuerySupplyResponseAminoMsg): _125.QuerySupplyResponse;
                toAminoMsg(message: _125.QuerySupplyResponse): _125.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _125.QuerySupplyResponseProtoMsg): _125.QuerySupplyResponse;
                toProto(message: _125.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _125.QuerySupplyResponse): _125.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _125.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryNFTsRequest;
                fromPartial(object: Partial<_125.QueryNFTsRequest>): _125.QueryNFTsRequest;
                fromAmino(object: _125.QueryNFTsRequestAmino): _125.QueryNFTsRequest;
                toAmino(message: _125.QueryNFTsRequest): _125.QueryNFTsRequestAmino;
                fromAminoMsg(object: _125.QueryNFTsRequestAminoMsg): _125.QueryNFTsRequest;
                toAminoMsg(message: _125.QueryNFTsRequest): _125.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryNFTsRequestProtoMsg): _125.QueryNFTsRequest;
                toProto(message: _125.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryNFTsRequest): _125.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _125.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryNFTsResponse;
                fromPartial(object: Partial<_125.QueryNFTsResponse>): _125.QueryNFTsResponse;
                fromAmino(object: _125.QueryNFTsResponseAmino): _125.QueryNFTsResponse;
                toAmino(message: _125.QueryNFTsResponse): _125.QueryNFTsResponseAmino;
                fromAminoMsg(object: _125.QueryNFTsResponseAminoMsg): _125.QueryNFTsResponse;
                toAminoMsg(message: _125.QueryNFTsResponse): _125.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryNFTsResponseProtoMsg): _125.QueryNFTsResponse;
                toProto(message: _125.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryNFTsResponse): _125.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _125.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryNFTRequest;
                fromPartial(object: Partial<_125.QueryNFTRequest>): _125.QueryNFTRequest;
                fromAmino(object: _125.QueryNFTRequestAmino): _125.QueryNFTRequest;
                toAmino(message: _125.QueryNFTRequest): _125.QueryNFTRequestAmino;
                fromAminoMsg(object: _125.QueryNFTRequestAminoMsg): _125.QueryNFTRequest;
                toAminoMsg(message: _125.QueryNFTRequest): _125.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _125.QueryNFTRequestProtoMsg): _125.QueryNFTRequest;
                toProto(message: _125.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _125.QueryNFTRequest): _125.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _125.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryNFTResponse;
                fromPartial(object: Partial<_125.QueryNFTResponse>): _125.QueryNFTResponse;
                fromAmino(object: _125.QueryNFTResponseAmino): _125.QueryNFTResponse;
                toAmino(message: _125.QueryNFTResponse): _125.QueryNFTResponseAmino;
                fromAminoMsg(object: _125.QueryNFTResponseAminoMsg): _125.QueryNFTResponse;
                toAminoMsg(message: _125.QueryNFTResponse): _125.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _125.QueryNFTResponseProtoMsg): _125.QueryNFTResponse;
                toProto(message: _125.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _125.QueryNFTResponse): _125.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _125.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryClassRequest;
                fromPartial(object: Partial<_125.QueryClassRequest>): _125.QueryClassRequest;
                fromAmino(object: _125.QueryClassRequestAmino): _125.QueryClassRequest;
                toAmino(message: _125.QueryClassRequest): _125.QueryClassRequestAmino;
                fromAminoMsg(object: _125.QueryClassRequestAminoMsg): _125.QueryClassRequest;
                toAminoMsg(message: _125.QueryClassRequest): _125.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _125.QueryClassRequestProtoMsg): _125.QueryClassRequest;
                toProto(message: _125.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _125.QueryClassRequest): _125.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _125.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryClassResponse;
                fromPartial(object: Partial<_125.QueryClassResponse>): _125.QueryClassResponse;
                fromAmino(object: _125.QueryClassResponseAmino): _125.QueryClassResponse;
                toAmino(message: _125.QueryClassResponse): _125.QueryClassResponseAmino;
                fromAminoMsg(object: _125.QueryClassResponseAminoMsg): _125.QueryClassResponse;
                toAminoMsg(message: _125.QueryClassResponse): _125.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _125.QueryClassResponseProtoMsg): _125.QueryClassResponse;
                toProto(message: _125.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _125.QueryClassResponse): _125.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _125.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryClassesRequest;
                fromPartial(object: Partial<_125.QueryClassesRequest>): _125.QueryClassesRequest;
                fromAmino(object: _125.QueryClassesRequestAmino): _125.QueryClassesRequest;
                toAmino(message: _125.QueryClassesRequest): _125.QueryClassesRequestAmino;
                fromAminoMsg(object: _125.QueryClassesRequestAminoMsg): _125.QueryClassesRequest;
                toAminoMsg(message: _125.QueryClassesRequest): _125.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _125.QueryClassesRequestProtoMsg): _125.QueryClassesRequest;
                toProto(message: _125.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _125.QueryClassesRequest): _125.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _125.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryClassesResponse;
                fromPartial(object: Partial<_125.QueryClassesResponse>): _125.QueryClassesResponse;
                fromAmino(object: _125.QueryClassesResponseAmino): _125.QueryClassesResponse;
                toAmino(message: _125.QueryClassesResponse): _125.QueryClassesResponseAmino;
                fromAminoMsg(object: _125.QueryClassesResponseAminoMsg): _125.QueryClassesResponse;
                toAminoMsg(message: _125.QueryClassesResponse): _125.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _125.QueryClassesResponseProtoMsg): _125.QueryClassesResponse;
                toProto(message: _125.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _125.QueryClassesResponse): _125.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _124.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Class;
                fromPartial(object: Partial<_124.Class>): _124.Class;
                fromAmino(object: _124.ClassAmino): _124.Class;
                toAmino(message: _124.Class): _124.ClassAmino;
                fromAminoMsg(object: _124.ClassAminoMsg): _124.Class;
                toAminoMsg(message: _124.Class): _124.ClassAminoMsg;
                fromProtoMsg(message: _124.ClassProtoMsg): _124.Class;
                toProto(message: _124.Class): Uint8Array;
                toProtoMsg(message: _124.Class): _124.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _124.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.NFT;
                fromPartial(object: Partial<_124.NFT>): _124.NFT;
                fromAmino(object: _124.NFTAmino): _124.NFT;
                toAmino(message: _124.NFT): _124.NFTAmino;
                fromAminoMsg(object: _124.NFTAminoMsg): _124.NFT;
                toAminoMsg(message: _124.NFT): _124.NFTAminoMsg;
                fromProtoMsg(message: _124.NFTProtoMsg): _124.NFT;
                toProto(message: _124.NFT): Uint8Array;
                toProtoMsg(message: _124.NFT): _124.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _123.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.GenesisState;
                fromPartial(object: Partial<_123.GenesisState>): _123.GenesisState;
                fromAmino(object: _123.GenesisStateAmino): _123.GenesisState;
                toAmino(message: _123.GenesisState): _123.GenesisStateAmino;
                fromAminoMsg(object: _123.GenesisStateAminoMsg): _123.GenesisState;
                toAminoMsg(message: _123.GenesisState): _123.GenesisStateAminoMsg;
                fromProtoMsg(message: _123.GenesisStateProtoMsg): _123.GenesisState;
                toProto(message: _123.GenesisState): Uint8Array;
                toProtoMsg(message: _123.GenesisState): _123.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _123.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Entry;
                fromPartial(object: Partial<_123.Entry>): _123.Entry;
                fromAmino(object: _123.EntryAmino): _123.Entry;
                toAmino(message: _123.Entry): _123.EntryAmino;
                fromAminoMsg(object: _123.EntryAminoMsg): _123.Entry;
                toAminoMsg(message: _123.Entry): _123.EntryAminoMsg;
                fromProtoMsg(message: _123.EntryProtoMsg): _123.Entry;
                toProto(message: _123.Entry): Uint8Array;
                toProtoMsg(message: _123.Entry): _123.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _122.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.EventSend;
                fromPartial(object: Partial<_122.EventSend>): _122.EventSend;
                fromAmino(object: _122.EventSendAmino): _122.EventSend;
                toAmino(message: _122.EventSend): _122.EventSendAmino;
                fromAminoMsg(object: _122.EventSendAminoMsg): _122.EventSend;
                toAminoMsg(message: _122.EventSend): _122.EventSendAminoMsg;
                fromProtoMsg(message: _122.EventSendProtoMsg): _122.EventSend;
                toProto(message: _122.EventSend): Uint8Array;
                toProtoMsg(message: _122.EventSend): _122.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _122.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.EventMint;
                fromPartial(object: Partial<_122.EventMint>): _122.EventMint;
                fromAmino(object: _122.EventMintAmino): _122.EventMint;
                toAmino(message: _122.EventMint): _122.EventMintAmino;
                fromAminoMsg(object: _122.EventMintAminoMsg): _122.EventMint;
                toAminoMsg(message: _122.EventMint): _122.EventMintAminoMsg;
                fromProtoMsg(message: _122.EventMintProtoMsg): _122.EventMint;
                toProto(message: _122.EventMint): Uint8Array;
                toProtoMsg(message: _122.EventMint): _122.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _122.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.EventBurn;
                fromPartial(object: Partial<_122.EventBurn>): _122.EventBurn;
                fromAmino(object: _122.EventBurnAmino): _122.EventBurn;
                toAmino(message: _122.EventBurn): _122.EventBurnAmino;
                fromAminoMsg(object: _122.EventBurnAminoMsg): _122.EventBurn;
                toAminoMsg(message: _122.EventBurn): _122.EventBurnAminoMsg;
                fromProtoMsg(message: _122.EventBurnProtoMsg): _122.EventBurn;
                toProto(message: _122.EventBurn): Uint8Array;
                toProtoMsg(message: _122.EventBurn): _122.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _127.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.Module;
                    fromPartial(_: Partial<_127.Module>): _127.Module;
                    fromAmino(_: _127.ModuleAmino): _127.Module;
                    toAmino(_: _127.Module): _127.ModuleAmino;
                    fromAminoMsg(object: _127.ModuleAminoMsg): _127.Module;
                    toAminoMsg(message: _127.Module): _127.ModuleAminoMsg;
                    fromProtoMsg(message: _127.ModuleProtoMsg): _127.Module;
                    toProto(message: _127.Module): Uint8Array;
                    toProtoMsg(message: _127.Module): _127.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _276.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _128.GetRequest): Promise<_128.GetResponse>;
                    list(request: _128.ListRequest): Promise<_128.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _128.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.GetRequest;
                    fromPartial(object: Partial<_128.GetRequest>): _128.GetRequest;
                    fromAmino(object: _128.GetRequestAmino): _128.GetRequest;
                    toAmino(message: _128.GetRequest): _128.GetRequestAmino;
                    fromAminoMsg(object: _128.GetRequestAminoMsg): _128.GetRequest;
                    toAminoMsg(message: _128.GetRequest): _128.GetRequestAminoMsg;
                    fromProtoMsg(message: _128.GetRequestProtoMsg): _128.GetRequest;
                    toProto(message: _128.GetRequest): Uint8Array;
                    toProtoMsg(message: _128.GetRequest): _128.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _128.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.GetResponse;
                    fromPartial(object: Partial<_128.GetResponse>): _128.GetResponse;
                    fromAmino(object: _128.GetResponseAmino): _128.GetResponse;
                    toAmino(message: _128.GetResponse): _128.GetResponseAmino;
                    fromAminoMsg(object: _128.GetResponseAminoMsg): _128.GetResponse;
                    toAminoMsg(message: _128.GetResponse): _128.GetResponseAminoMsg;
                    fromProtoMsg(message: _128.GetResponseProtoMsg): _128.GetResponse;
                    toProto(message: _128.GetResponse): Uint8Array;
                    toProtoMsg(message: _128.GetResponse): _128.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _128.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ListRequest;
                    fromPartial(object: Partial<_128.ListRequest>): _128.ListRequest;
                    fromAmino(object: _128.ListRequestAmino): _128.ListRequest;
                    toAmino(message: _128.ListRequest): _128.ListRequestAmino;
                    fromAminoMsg(object: _128.ListRequestAminoMsg): _128.ListRequest;
                    toAminoMsg(message: _128.ListRequest): _128.ListRequestAminoMsg;
                    fromProtoMsg(message: _128.ListRequestProtoMsg): _128.ListRequest;
                    toProto(message: _128.ListRequest): Uint8Array;
                    toProtoMsg(message: _128.ListRequest): _128.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _128.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ListRequest_Prefix;
                    fromPartial(object: Partial<_128.ListRequest_Prefix>): _128.ListRequest_Prefix;
                    fromAmino(object: _128.ListRequest_PrefixAmino): _128.ListRequest_Prefix;
                    toAmino(message: _128.ListRequest_Prefix): _128.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _128.ListRequest_PrefixAminoMsg): _128.ListRequest_Prefix;
                    toAminoMsg(message: _128.ListRequest_Prefix): _128.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _128.ListRequest_PrefixProtoMsg): _128.ListRequest_Prefix;
                    toProto(message: _128.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _128.ListRequest_Prefix): _128.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _128.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ListRequest_Range;
                    fromPartial(object: Partial<_128.ListRequest_Range>): _128.ListRequest_Range;
                    fromAmino(object: _128.ListRequest_RangeAmino): _128.ListRequest_Range;
                    toAmino(message: _128.ListRequest_Range): _128.ListRequest_RangeAmino;
                    fromAminoMsg(object: _128.ListRequest_RangeAminoMsg): _128.ListRequest_Range;
                    toAminoMsg(message: _128.ListRequest_Range): _128.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _128.ListRequest_RangeProtoMsg): _128.ListRequest_Range;
                    toProto(message: _128.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _128.ListRequest_Range): _128.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _128.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ListResponse;
                    fromPartial(object: Partial<_128.ListResponse>): _128.ListResponse;
                    fromAmino(object: _128.ListResponseAmino): _128.ListResponse;
                    toAmino(message: _128.ListResponse): _128.ListResponseAmino;
                    fromAminoMsg(object: _128.ListResponseAminoMsg): _128.ListResponse;
                    toAminoMsg(message: _128.ListResponse): _128.ListResponseAminoMsg;
                    fromProtoMsg(message: _128.ListResponseProtoMsg): _128.ListResponse;
                    toProto(message: _128.ListResponse): Uint8Array;
                    toProtoMsg(message: _128.ListResponse): _128.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _128.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.IndexValue;
                    fromPartial(object: Partial<_128.IndexValue>): _128.IndexValue;
                    fromAmino(object: _128.IndexValueAmino): _128.IndexValue;
                    toAmino(message: _128.IndexValue): _128.IndexValueAmino;
                    fromAminoMsg(object: _128.IndexValueAminoMsg): _128.IndexValue;
                    toAminoMsg(message: _128.IndexValue): _128.IndexValueAminoMsg;
                    fromProtoMsg(message: _128.IndexValueProtoMsg): _128.IndexValue;
                    toProto(message: _128.IndexValue): Uint8Array;
                    toProtoMsg(message: _128.IndexValue): _128.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _129.TableDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.TableDescriptor;
                fromPartial(object: Partial<_129.TableDescriptor>): _129.TableDescriptor;
                fromAmino(object: _129.TableDescriptorAmino): _129.TableDescriptor;
                toAmino(message: _129.TableDescriptor): _129.TableDescriptorAmino;
                fromAminoMsg(object: _129.TableDescriptorAminoMsg): _129.TableDescriptor;
                toAminoMsg(message: _129.TableDescriptor): _129.TableDescriptorAminoMsg;
                fromProtoMsg(message: _129.TableDescriptorProtoMsg): _129.TableDescriptor;
                toProto(message: _129.TableDescriptor): Uint8Array;
                toProtoMsg(message: _129.TableDescriptor): _129.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _129.PrimaryKeyDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.PrimaryKeyDescriptor;
                fromPartial(object: Partial<_129.PrimaryKeyDescriptor>): _129.PrimaryKeyDescriptor;
                fromAmino(object: _129.PrimaryKeyDescriptorAmino): _129.PrimaryKeyDescriptor;
                toAmino(message: _129.PrimaryKeyDescriptor): _129.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _129.PrimaryKeyDescriptorAminoMsg): _129.PrimaryKeyDescriptor;
                toAminoMsg(message: _129.PrimaryKeyDescriptor): _129.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _129.PrimaryKeyDescriptorProtoMsg): _129.PrimaryKeyDescriptor;
                toProto(message: _129.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _129.PrimaryKeyDescriptor): _129.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _129.SecondaryIndexDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.SecondaryIndexDescriptor;
                fromPartial(object: Partial<_129.SecondaryIndexDescriptor>): _129.SecondaryIndexDescriptor;
                fromAmino(object: _129.SecondaryIndexDescriptorAmino): _129.SecondaryIndexDescriptor;
                toAmino(message: _129.SecondaryIndexDescriptor): _129.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _129.SecondaryIndexDescriptorAminoMsg): _129.SecondaryIndexDescriptor;
                toAminoMsg(message: _129.SecondaryIndexDescriptor): _129.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _129.SecondaryIndexDescriptorProtoMsg): _129.SecondaryIndexDescriptor;
                toProto(message: _129.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _129.SecondaryIndexDescriptor): _129.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _129.SingletonDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.SingletonDescriptor;
                fromPartial(object: Partial<_129.SingletonDescriptor>): _129.SingletonDescriptor;
                fromAmino(object: _129.SingletonDescriptorAmino): _129.SingletonDescriptor;
                toAmino(message: _129.SingletonDescriptor): _129.SingletonDescriptorAmino;
                fromAminoMsg(object: _129.SingletonDescriptorAminoMsg): _129.SingletonDescriptor;
                toAminoMsg(message: _129.SingletonDescriptor): _129.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _129.SingletonDescriptorProtoMsg): _129.SingletonDescriptor;
                toProto(message: _129.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _129.SingletonDescriptor): _129.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _130.StorageType;
            storageTypeToJSON(object: _130.StorageType): string;
            StorageType: typeof _130.StorageType;
            StorageTypeSDKType: typeof _130.StorageType;
            StorageTypeAmino: typeof _130.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _130.ModuleSchemaDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.ModuleSchemaDescriptor;
                fromPartial(object: Partial<_130.ModuleSchemaDescriptor>): _130.ModuleSchemaDescriptor;
                fromAmino(object: _130.ModuleSchemaDescriptorAmino): _130.ModuleSchemaDescriptor;
                toAmino(message: _130.ModuleSchemaDescriptor): _130.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _130.ModuleSchemaDescriptorAminoMsg): _130.ModuleSchemaDescriptor;
                toAminoMsg(message: _130.ModuleSchemaDescriptor): _130.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _130.ModuleSchemaDescriptorProtoMsg): _130.ModuleSchemaDescriptor;
                toProto(message: _130.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _130.ModuleSchemaDescriptor): _130.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _130.ModuleSchemaDescriptor_FileEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.ModuleSchemaDescriptor_FileEntry;
                fromPartial(object: Partial<_130.ModuleSchemaDescriptor_FileEntry>): _130.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _130.ModuleSchemaDescriptor_FileEntryAmino): _130.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _130.ModuleSchemaDescriptor_FileEntry): _130.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _130.ModuleSchemaDescriptor_FileEntryAminoMsg): _130.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _130.ModuleSchemaDescriptor_FileEntry): _130.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _130.ModuleSchemaDescriptor_FileEntryProtoMsg): _130.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _130.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _130.ModuleSchemaDescriptor_FileEntry): _130.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _131.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _131.Module;
                    fromPartial(_: Partial<_131.Module>): _131.Module;
                    fromAmino(_: _131.ModuleAmino): _131.Module;
                    toAmino(_: _131.Module): _131.ModuleAmino;
                    fromAminoMsg(object: _131.ModuleAminoMsg): _131.Module;
                    toAminoMsg(message: _131.Module): _131.ModuleAminoMsg;
                    fromProtoMsg(message: _131.ModuleProtoMsg): _131.Module;
                    toProto(message: _131.Module): Uint8Array;
                    toProtoMsg(message: _131.Module): _131.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                subspaces(request?: _133.QuerySubspacesRequest): Promise<_133.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _133.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.QueryParamsRequest;
                fromPartial(object: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
                fromAmino(object: _133.QueryParamsRequestAmino): _133.QueryParamsRequest;
                toAmino(message: _133.QueryParamsRequest): _133.QueryParamsRequestAmino;
                fromAminoMsg(object: _133.QueryParamsRequestAminoMsg): _133.QueryParamsRequest;
                toAminoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _133.QueryParamsRequestProtoMsg): _133.QueryParamsRequest;
                toProto(message: _133.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _133.QueryParamsRequest): _133.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _133.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.QueryParamsResponse;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
                fromAmino(object: _133.QueryParamsResponseAmino): _133.QueryParamsResponse;
                toAmino(message: _133.QueryParamsResponse): _133.QueryParamsResponseAmino;
                fromAminoMsg(object: _133.QueryParamsResponseAminoMsg): _133.QueryParamsResponse;
                toAminoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _133.QueryParamsResponseProtoMsg): _133.QueryParamsResponse;
                toProto(message: _133.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _133.QueryParamsResponse): _133.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _133.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.QuerySubspacesRequest;
                fromPartial(_: Partial<_133.QuerySubspacesRequest>): _133.QuerySubspacesRequest;
                fromAmino(_: _133.QuerySubspacesRequestAmino): _133.QuerySubspacesRequest;
                toAmino(_: _133.QuerySubspacesRequest): _133.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _133.QuerySubspacesRequestAminoMsg): _133.QuerySubspacesRequest;
                toAminoMsg(message: _133.QuerySubspacesRequest): _133.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _133.QuerySubspacesRequestProtoMsg): _133.QuerySubspacesRequest;
                toProto(message: _133.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _133.QuerySubspacesRequest): _133.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _133.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.QuerySubspacesResponse;
                fromPartial(object: Partial<_133.QuerySubspacesResponse>): _133.QuerySubspacesResponse;
                fromAmino(object: _133.QuerySubspacesResponseAmino): _133.QuerySubspacesResponse;
                toAmino(message: _133.QuerySubspacesResponse): _133.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _133.QuerySubspacesResponseAminoMsg): _133.QuerySubspacesResponse;
                toAminoMsg(message: _133.QuerySubspacesResponse): _133.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _133.QuerySubspacesResponseProtoMsg): _133.QuerySubspacesResponse;
                toProto(message: _133.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _133.QuerySubspacesResponse): _133.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _133.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _133.Subspace;
                fromPartial(object: Partial<_133.Subspace>): _133.Subspace;
                fromAmino(object: _133.SubspaceAmino): _133.Subspace;
                toAmino(message: _133.Subspace): _133.SubspaceAmino;
                fromAminoMsg(object: _133.SubspaceAminoMsg): _133.Subspace;
                toAminoMsg(message: _133.Subspace): _133.SubspaceAminoMsg;
                fromProtoMsg(message: _133.SubspaceProtoMsg): _133.Subspace;
                toProto(message: _133.Subspace): Uint8Array;
                toProtoMsg(message: _133.Subspace): _133.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _132.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.ParameterChangeProposal;
                fromPartial(object: Partial<_132.ParameterChangeProposal>): _132.ParameterChangeProposal;
                fromAmino(object: _132.ParameterChangeProposalAmino): _132.ParameterChangeProposal;
                toAmino(message: _132.ParameterChangeProposal): _132.ParameterChangeProposalAmino;
                fromAminoMsg(object: _132.ParameterChangeProposalAminoMsg): _132.ParameterChangeProposal;
                toAminoMsg(message: _132.ParameterChangeProposal): _132.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _132.ParameterChangeProposalProtoMsg): _132.ParameterChangeProposal;
                toProto(message: _132.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _132.ParameterChangeProposal): _132.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _132.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _132.ParamChange;
                fromPartial(object: Partial<_132.ParamChange>): _132.ParamChange;
                fromAmino(object: _132.ParamChangeAmino): _132.ParamChange;
                toAmino(message: _132.ParamChange): _132.ParamChangeAmino;
                fromAminoMsg(object: _132.ParamChangeAminoMsg): _132.ParamChange;
                toAminoMsg(message: _132.ParamChange): _132.ParamChangeAminoMsg;
                fromProtoMsg(message: _132.ParamChangeProtoMsg): _132.ParamChange;
                toProto(message: _132.ParamChange): Uint8Array;
                toProtoMsg(message: _132.ParamChange): _132.ParamChangeProtoMsg;
            };
        };
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _134.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.FileDescriptorsRequest;
                fromPartial(_: Partial<_134.FileDescriptorsRequest>): _134.FileDescriptorsRequest;
                fromAmino(_: _134.FileDescriptorsRequestAmino): _134.FileDescriptorsRequest;
                toAmino(_: _134.FileDescriptorsRequest): _134.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _134.FileDescriptorsRequestAminoMsg): _134.FileDescriptorsRequest;
                toAminoMsg(message: _134.FileDescriptorsRequest): _134.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _134.FileDescriptorsRequestProtoMsg): _134.FileDescriptorsRequest;
                toProto(message: _134.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _134.FileDescriptorsRequest): _134.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _134.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _134.FileDescriptorsResponse;
                fromPartial(object: Partial<_134.FileDescriptorsResponse>): _134.FileDescriptorsResponse;
                fromAmino(object: _134.FileDescriptorsResponseAmino): _134.FileDescriptorsResponse;
                toAmino(message: _134.FileDescriptorsResponse): _134.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _134.FileDescriptorsResponseAminoMsg): _134.FileDescriptorsResponse;
                toAminoMsg(message: _134.FileDescriptorsResponse): _134.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _134.FileDescriptorsResponseProtoMsg): _134.FileDescriptorsResponse;
                toProto(message: _134.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _134.FileDescriptorsResponse): _134.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _135.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _135.Module;
                    fromPartial(object: Partial<_135.Module>): _135.Module;
                    fromAmino(object: _135.ModuleAmino): _135.Module;
                    toAmino(message: _135.Module): _135.ModuleAmino;
                    fromAminoMsg(object: _135.ModuleAminoMsg): _135.Module;
                    toAminoMsg(message: _135.Module): _135.ModuleAminoMsg;
                    fromProtoMsg(message: _135.ModuleProtoMsg): _135.Module;
                    toProto(message: _135.Module): Uint8Array;
                    toProtoMsg(message: _135.Module): _135.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                signingInfo(request: _137.QuerySigningInfoRequest): Promise<_137.QuerySigningInfoResponse>;
                signingInfos(request?: _137.QuerySigningInfosRequest): Promise<_137.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _139.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    unjail(value: _139.MsgUnjail): {
                        typeUrl: string;
                        value: _139.MsgUnjail;
                    };
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _139.MsgUnjail): {
                        typeUrl: string;
                        value: _139.MsgUnjail;
                    };
                    updateParams(value: _139.MsgUpdateParams): {
                        typeUrl: string;
                        value: _139.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUnjail) => _139.MsgUnjailAmino;
                    fromAmino: (object: _139.MsgUnjailAmino) => _139.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _139.MsgUpdateParams) => _139.MsgUpdateParamsAmino;
                    fromAmino: (object: _139.MsgUpdateParamsAmino) => _139.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _139.MsgUnjail, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgUnjail;
                fromPartial(object: Partial<_139.MsgUnjail>): _139.MsgUnjail;
                fromAmino(object: _139.MsgUnjailAmino): _139.MsgUnjail;
                toAmino(message: _139.MsgUnjail): _139.MsgUnjailAmino;
                fromAminoMsg(object: _139.MsgUnjailAminoMsg): _139.MsgUnjail;
                toAminoMsg(message: _139.MsgUnjail): _139.MsgUnjailAminoMsg;
                fromProtoMsg(message: _139.MsgUnjailProtoMsg): _139.MsgUnjail;
                toProto(message: _139.MsgUnjail): Uint8Array;
                toProtoMsg(message: _139.MsgUnjail): _139.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _139.MsgUnjailResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgUnjailResponse;
                fromPartial(_: Partial<_139.MsgUnjailResponse>): _139.MsgUnjailResponse;
                fromAmino(_: _139.MsgUnjailResponseAmino): _139.MsgUnjailResponse;
                toAmino(_: _139.MsgUnjailResponse): _139.MsgUnjailResponseAmino;
                fromAminoMsg(object: _139.MsgUnjailResponseAminoMsg): _139.MsgUnjailResponse;
                toAminoMsg(message: _139.MsgUnjailResponse): _139.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUnjailResponseProtoMsg): _139.MsgUnjailResponse;
                toProto(message: _139.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUnjailResponse): _139.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _139.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgUpdateParams;
                fromPartial(object: Partial<_139.MsgUpdateParams>): _139.MsgUpdateParams;
                fromAmino(object: _139.MsgUpdateParamsAmino): _139.MsgUpdateParams;
                toAmino(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAmino;
                fromAminoMsg(object: _139.MsgUpdateParamsAminoMsg): _139.MsgUpdateParams;
                toAminoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateParamsProtoMsg): _139.MsgUpdateParams;
                toProto(message: _139.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateParams): _139.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _139.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _139.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_139.MsgUpdateParamsResponse>): _139.MsgUpdateParamsResponse;
                fromAmino(_: _139.MsgUpdateParamsResponseAmino): _139.MsgUpdateParamsResponse;
                toAmino(_: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _139.MsgUpdateParamsResponseAminoMsg): _139.MsgUpdateParamsResponse;
                toAminoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _139.MsgUpdateParamsResponseProtoMsg): _139.MsgUpdateParamsResponse;
                toProto(message: _139.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _139.MsgUpdateParamsResponse): _139.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _138.ValidatorSigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.ValidatorSigningInfo;
                fromPartial(object: Partial<_138.ValidatorSigningInfo>): _138.ValidatorSigningInfo;
                fromAmino(object: _138.ValidatorSigningInfoAmino): _138.ValidatorSigningInfo;
                toAmino(message: _138.ValidatorSigningInfo): _138.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _138.ValidatorSigningInfoAminoMsg): _138.ValidatorSigningInfo;
                toAminoMsg(message: _138.ValidatorSigningInfo): _138.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _138.ValidatorSigningInfoProtoMsg): _138.ValidatorSigningInfo;
                toProto(message: _138.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _138.ValidatorSigningInfo): _138.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _138.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _138.Params;
                fromPartial(object: Partial<_138.Params>): _138.Params;
                fromAmino(object: _138.ParamsAmino): _138.Params;
                toAmino(message: _138.Params): _138.ParamsAmino;
                fromAminoMsg(object: _138.ParamsAminoMsg): _138.Params;
                toAminoMsg(message: _138.Params): _138.ParamsAminoMsg;
                fromProtoMsg(message: _138.ParamsProtoMsg): _138.Params;
                toProto(message: _138.Params): Uint8Array;
                toProtoMsg(message: _138.Params): _138.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _137.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.QueryParamsRequest;
                fromPartial(_: Partial<_137.QueryParamsRequest>): _137.QueryParamsRequest;
                fromAmino(_: _137.QueryParamsRequestAmino): _137.QueryParamsRequest;
                toAmino(_: _137.QueryParamsRequest): _137.QueryParamsRequestAmino;
                fromAminoMsg(object: _137.QueryParamsRequestAminoMsg): _137.QueryParamsRequest;
                toAminoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _137.QueryParamsRequestProtoMsg): _137.QueryParamsRequest;
                toProto(message: _137.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _137.QueryParamsRequest): _137.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _137.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.QueryParamsResponse;
                fromPartial(object: Partial<_137.QueryParamsResponse>): _137.QueryParamsResponse;
                fromAmino(object: _137.QueryParamsResponseAmino): _137.QueryParamsResponse;
                toAmino(message: _137.QueryParamsResponse): _137.QueryParamsResponseAmino;
                fromAminoMsg(object: _137.QueryParamsResponseAminoMsg): _137.QueryParamsResponse;
                toAminoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _137.QueryParamsResponseProtoMsg): _137.QueryParamsResponse;
                toProto(message: _137.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _137.QueryParamsResponse): _137.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _137.QuerySigningInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.QuerySigningInfoRequest;
                fromPartial(object: Partial<_137.QuerySigningInfoRequest>): _137.QuerySigningInfoRequest;
                fromAmino(object: _137.QuerySigningInfoRequestAmino): _137.QuerySigningInfoRequest;
                toAmino(message: _137.QuerySigningInfoRequest): _137.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _137.QuerySigningInfoRequestAminoMsg): _137.QuerySigningInfoRequest;
                toAminoMsg(message: _137.QuerySigningInfoRequest): _137.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _137.QuerySigningInfoRequestProtoMsg): _137.QuerySigningInfoRequest;
                toProto(message: _137.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QuerySigningInfoRequest): _137.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _137.QuerySigningInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.QuerySigningInfoResponse;
                fromPartial(object: Partial<_137.QuerySigningInfoResponse>): _137.QuerySigningInfoResponse;
                fromAmino(object: _137.QuerySigningInfoResponseAmino): _137.QuerySigningInfoResponse;
                toAmino(message: _137.QuerySigningInfoResponse): _137.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _137.QuerySigningInfoResponseAminoMsg): _137.QuerySigningInfoResponse;
                toAminoMsg(message: _137.QuerySigningInfoResponse): _137.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _137.QuerySigningInfoResponseProtoMsg): _137.QuerySigningInfoResponse;
                toProto(message: _137.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QuerySigningInfoResponse): _137.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _137.QuerySigningInfosRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.QuerySigningInfosRequest;
                fromPartial(object: Partial<_137.QuerySigningInfosRequest>): _137.QuerySigningInfosRequest;
                fromAmino(object: _137.QuerySigningInfosRequestAmino): _137.QuerySigningInfosRequest;
                toAmino(message: _137.QuerySigningInfosRequest): _137.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _137.QuerySigningInfosRequestAminoMsg): _137.QuerySigningInfosRequest;
                toAminoMsg(message: _137.QuerySigningInfosRequest): _137.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _137.QuerySigningInfosRequestProtoMsg): _137.QuerySigningInfosRequest;
                toProto(message: _137.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _137.QuerySigningInfosRequest): _137.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _137.QuerySigningInfosResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _137.QuerySigningInfosResponse;
                fromPartial(object: Partial<_137.QuerySigningInfosResponse>): _137.QuerySigningInfosResponse;
                fromAmino(object: _137.QuerySigningInfosResponseAmino): _137.QuerySigningInfosResponse;
                toAmino(message: _137.QuerySigningInfosResponse): _137.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _137.QuerySigningInfosResponseAminoMsg): _137.QuerySigningInfosResponse;
                toAminoMsg(message: _137.QuerySigningInfosResponse): _137.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _137.QuerySigningInfosResponseProtoMsg): _137.QuerySigningInfosResponse;
                toProto(message: _137.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _137.QuerySigningInfosResponse): _137.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.GenesisState;
                fromPartial(object: Partial<_136.GenesisState>): _136.GenesisState;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _136.SigningInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.SigningInfo;
                fromPartial(object: Partial<_136.SigningInfo>): _136.SigningInfo;
                fromAmino(object: _136.SigningInfoAmino): _136.SigningInfo;
                toAmino(message: _136.SigningInfo): _136.SigningInfoAmino;
                fromAminoMsg(object: _136.SigningInfoAminoMsg): _136.SigningInfo;
                toAminoMsg(message: _136.SigningInfo): _136.SigningInfoAminoMsg;
                fromProtoMsg(message: _136.SigningInfoProtoMsg): _136.SigningInfo;
                toProto(message: _136.SigningInfo): Uint8Array;
                toProtoMsg(message: _136.SigningInfo): _136.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _136.ValidatorMissedBlocks, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.ValidatorMissedBlocks;
                fromPartial(object: Partial<_136.ValidatorMissedBlocks>): _136.ValidatorMissedBlocks;
                fromAmino(object: _136.ValidatorMissedBlocksAmino): _136.ValidatorMissedBlocks;
                toAmino(message: _136.ValidatorMissedBlocks): _136.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _136.ValidatorMissedBlocksAminoMsg): _136.ValidatorMissedBlocks;
                toAminoMsg(message: _136.ValidatorMissedBlocks): _136.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _136.ValidatorMissedBlocksProtoMsg): _136.ValidatorMissedBlocks;
                toProto(message: _136.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _136.ValidatorMissedBlocks): _136.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _136.MissedBlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _136.MissedBlock;
                fromPartial(object: Partial<_136.MissedBlock>): _136.MissedBlock;
                fromAmino(object: _136.MissedBlockAmino): _136.MissedBlock;
                toAmino(message: _136.MissedBlock): _136.MissedBlockAmino;
                fromAminoMsg(object: _136.MissedBlockAminoMsg): _136.MissedBlock;
                toAminoMsg(message: _136.MissedBlock): _136.MissedBlockAminoMsg;
                fromProtoMsg(message: _136.MissedBlockProtoMsg): _136.MissedBlock;
                toProto(message: _136.MissedBlock): Uint8Array;
                toProtoMsg(message: _136.MissedBlock): _136.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _140.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _140.Module;
                    fromPartial(object: Partial<_140.Module>): _140.Module;
                    fromAmino(object: _140.ModuleAmino): _140.Module;
                    toAmino(message: _140.Module): _140.ModuleAmino;
                    fromAminoMsg(object: _140.ModuleAminoMsg): _140.Module;
                    toAminoMsg(message: _140.Module): _140.ModuleAminoMsg;
                    fromProtoMsg(message: _140.ModuleProtoMsg): _140.Module;
                    toProto(message: _140.Module): Uint8Array;
                    toProtoMsg(message: _140.Module): _140.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _143.QueryValidatorsRequest): Promise<_143.QueryValidatorsResponse>;
                validator(request: _143.QueryValidatorRequest): Promise<_143.QueryValidatorResponse>;
                validatorDelegations(request: _143.QueryValidatorDelegationsRequest): Promise<_143.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _143.QueryValidatorUnbondingDelegationsRequest): Promise<_143.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _143.QueryDelegationRequest): Promise<_143.QueryDelegationResponse>;
                unbondingDelegation(request: _143.QueryUnbondingDelegationRequest): Promise<_143.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _143.QueryDelegatorDelegationsRequest): Promise<_143.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _143.QueryDelegatorUnbondingDelegationsRequest): Promise<_143.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _143.QueryRedelegationsRequest): Promise<_143.QueryRedelegationsResponse>;
                delegatorValidators(request: _143.QueryDelegatorValidatorsRequest): Promise<_143.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _143.QueryDelegatorValidatorRequest): Promise<_143.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _143.QueryHistoricalInfoRequest): Promise<_143.QueryHistoricalInfoResponse>;
                pool(request?: _143.QueryPoolRequest): Promise<_143.QueryPoolResponse>;
                params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _145.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    editValidator(value: _145.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    delegate(value: _145.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    beginRedelegate(value: _145.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    undelegate(value: _145.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    cancelUnbondingDelegation(value: _145.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _145.MsgCreateValidator): {
                        typeUrl: string;
                        value: _145.MsgCreateValidator;
                    };
                    editValidator(value: _145.MsgEditValidator): {
                        typeUrl: string;
                        value: _145.MsgEditValidator;
                    };
                    delegate(value: _145.MsgDelegate): {
                        typeUrl: string;
                        value: _145.MsgDelegate;
                    };
                    beginRedelegate(value: _145.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _145.MsgBeginRedelegate;
                    };
                    undelegate(value: _145.MsgUndelegate): {
                        typeUrl: string;
                        value: _145.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _145.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _145.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _145.MsgCreateValidator): {
                        typeUrl: string;
                        value: _145.MsgCreateValidator;
                    };
                    editValidator(value: _145.MsgEditValidator): {
                        typeUrl: string;
                        value: _145.MsgEditValidator;
                    };
                    delegate(value: _145.MsgDelegate): {
                        typeUrl: string;
                        value: _145.MsgDelegate;
                    };
                    beginRedelegate(value: _145.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _145.MsgBeginRedelegate;
                    };
                    undelegate(value: _145.MsgUndelegate): {
                        typeUrl: string;
                        value: _145.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _145.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _145.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _145.MsgUpdateParams): {
                        typeUrl: string;
                        value: _145.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _145.MsgCreateValidator) => _145.MsgCreateValidatorAmino;
                    fromAmino: (object: _145.MsgCreateValidatorAmino) => _145.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _145.MsgEditValidator) => _145.MsgEditValidatorAmino;
                    fromAmino: (object: _145.MsgEditValidatorAmino) => _145.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _145.MsgDelegate) => _145.MsgDelegateAmino;
                    fromAmino: (object: _145.MsgDelegateAmino) => _145.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _145.MsgBeginRedelegate) => _145.MsgBeginRedelegateAmino;
                    fromAmino: (object: _145.MsgBeginRedelegateAmino) => _145.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _145.MsgUndelegate) => _145.MsgUndelegateAmino;
                    fromAmino: (object: _145.MsgUndelegateAmino) => _145.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _145.MsgCancelUnbondingDelegation) => _145.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _145.MsgCancelUnbondingDelegationAmino) => _145.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _145.MsgUpdateParams) => _145.MsgUpdateParamsAmino;
                    fromAmino: (object: _145.MsgUpdateParamsAmino) => _145.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _145.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgCreateValidator;
                fromPartial(object: Partial<_145.MsgCreateValidator>): _145.MsgCreateValidator;
                fromAmino(object: _145.MsgCreateValidatorAmino): _145.MsgCreateValidator;
                toAmino(message: _145.MsgCreateValidator): _145.MsgCreateValidatorAmino;
                fromAminoMsg(object: _145.MsgCreateValidatorAminoMsg): _145.MsgCreateValidator;
                toAminoMsg(message: _145.MsgCreateValidator): _145.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _145.MsgCreateValidatorProtoMsg): _145.MsgCreateValidator;
                toProto(message: _145.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _145.MsgCreateValidator): _145.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _145.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_145.MsgCreateValidatorResponse>): _145.MsgCreateValidatorResponse;
                fromAmino(_: _145.MsgCreateValidatorResponseAmino): _145.MsgCreateValidatorResponse;
                toAmino(_: _145.MsgCreateValidatorResponse): _145.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _145.MsgCreateValidatorResponseAminoMsg): _145.MsgCreateValidatorResponse;
                toAminoMsg(message: _145.MsgCreateValidatorResponse): _145.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _145.MsgCreateValidatorResponseProtoMsg): _145.MsgCreateValidatorResponse;
                toProto(message: _145.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _145.MsgCreateValidatorResponse): _145.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _145.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgEditValidator;
                fromPartial(object: Partial<_145.MsgEditValidator>): _145.MsgEditValidator;
                fromAmino(object: _145.MsgEditValidatorAmino): _145.MsgEditValidator;
                toAmino(message: _145.MsgEditValidator): _145.MsgEditValidatorAmino;
                fromAminoMsg(object: _145.MsgEditValidatorAminoMsg): _145.MsgEditValidator;
                toAminoMsg(message: _145.MsgEditValidator): _145.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _145.MsgEditValidatorProtoMsg): _145.MsgEditValidator;
                toProto(message: _145.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _145.MsgEditValidator): _145.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _145.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgEditValidatorResponse;
                fromPartial(_: Partial<_145.MsgEditValidatorResponse>): _145.MsgEditValidatorResponse;
                fromAmino(_: _145.MsgEditValidatorResponseAmino): _145.MsgEditValidatorResponse;
                toAmino(_: _145.MsgEditValidatorResponse): _145.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _145.MsgEditValidatorResponseAminoMsg): _145.MsgEditValidatorResponse;
                toAminoMsg(message: _145.MsgEditValidatorResponse): _145.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _145.MsgEditValidatorResponseProtoMsg): _145.MsgEditValidatorResponse;
                toProto(message: _145.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _145.MsgEditValidatorResponse): _145.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _145.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgDelegate;
                fromPartial(object: Partial<_145.MsgDelegate>): _145.MsgDelegate;
                fromAmino(object: _145.MsgDelegateAmino): _145.MsgDelegate;
                toAmino(message: _145.MsgDelegate): _145.MsgDelegateAmino;
                fromAminoMsg(object: _145.MsgDelegateAminoMsg): _145.MsgDelegate;
                toAminoMsg(message: _145.MsgDelegate): _145.MsgDelegateAminoMsg;
                fromProtoMsg(message: _145.MsgDelegateProtoMsg): _145.MsgDelegate;
                toProto(message: _145.MsgDelegate): Uint8Array;
                toProtoMsg(message: _145.MsgDelegate): _145.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _145.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgDelegateResponse;
                fromPartial(_: Partial<_145.MsgDelegateResponse>): _145.MsgDelegateResponse;
                fromAmino(_: _145.MsgDelegateResponseAmino): _145.MsgDelegateResponse;
                toAmino(_: _145.MsgDelegateResponse): _145.MsgDelegateResponseAmino;
                fromAminoMsg(object: _145.MsgDelegateResponseAminoMsg): _145.MsgDelegateResponse;
                toAminoMsg(message: _145.MsgDelegateResponse): _145.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _145.MsgDelegateResponseProtoMsg): _145.MsgDelegateResponse;
                toProto(message: _145.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _145.MsgDelegateResponse): _145.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _145.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgBeginRedelegate;
                fromPartial(object: Partial<_145.MsgBeginRedelegate>): _145.MsgBeginRedelegate;
                fromAmino(object: _145.MsgBeginRedelegateAmino): _145.MsgBeginRedelegate;
                toAmino(message: _145.MsgBeginRedelegate): _145.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _145.MsgBeginRedelegateAminoMsg): _145.MsgBeginRedelegate;
                toAminoMsg(message: _145.MsgBeginRedelegate): _145.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _145.MsgBeginRedelegateProtoMsg): _145.MsgBeginRedelegate;
                toProto(message: _145.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _145.MsgBeginRedelegate): _145.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _145.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_145.MsgBeginRedelegateResponse>): _145.MsgBeginRedelegateResponse;
                fromAmino(object: _145.MsgBeginRedelegateResponseAmino): _145.MsgBeginRedelegateResponse;
                toAmino(message: _145.MsgBeginRedelegateResponse): _145.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _145.MsgBeginRedelegateResponseAminoMsg): _145.MsgBeginRedelegateResponse;
                toAminoMsg(message: _145.MsgBeginRedelegateResponse): _145.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _145.MsgBeginRedelegateResponseProtoMsg): _145.MsgBeginRedelegateResponse;
                toProto(message: _145.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _145.MsgBeginRedelegateResponse): _145.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _145.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgUndelegate;
                fromPartial(object: Partial<_145.MsgUndelegate>): _145.MsgUndelegate;
                fromAmino(object: _145.MsgUndelegateAmino): _145.MsgUndelegate;
                toAmino(message: _145.MsgUndelegate): _145.MsgUndelegateAmino;
                fromAminoMsg(object: _145.MsgUndelegateAminoMsg): _145.MsgUndelegate;
                toAminoMsg(message: _145.MsgUndelegate): _145.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _145.MsgUndelegateProtoMsg): _145.MsgUndelegate;
                toProto(message: _145.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _145.MsgUndelegate): _145.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _145.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgUndelegateResponse;
                fromPartial(object: Partial<_145.MsgUndelegateResponse>): _145.MsgUndelegateResponse;
                fromAmino(object: _145.MsgUndelegateResponseAmino): _145.MsgUndelegateResponse;
                toAmino(message: _145.MsgUndelegateResponse): _145.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _145.MsgUndelegateResponseAminoMsg): _145.MsgUndelegateResponse;
                toAminoMsg(message: _145.MsgUndelegateResponse): _145.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _145.MsgUndelegateResponseProtoMsg): _145.MsgUndelegateResponse;
                toProto(message: _145.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _145.MsgUndelegateResponse): _145.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _145.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgCancelUnbondingDelegation;
                fromPartial(object: Partial<_145.MsgCancelUnbondingDelegation>): _145.MsgCancelUnbondingDelegation;
                fromAmino(object: _145.MsgCancelUnbondingDelegationAmino): _145.MsgCancelUnbondingDelegation;
                toAmino(message: _145.MsgCancelUnbondingDelegation): _145.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _145.MsgCancelUnbondingDelegationAminoMsg): _145.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _145.MsgCancelUnbondingDelegation): _145.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _145.MsgCancelUnbondingDelegationProtoMsg): _145.MsgCancelUnbondingDelegation;
                toProto(message: _145.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _145.MsgCancelUnbondingDelegation): _145.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _145.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: Partial<_145.MsgCancelUnbondingDelegationResponse>): _145.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _145.MsgCancelUnbondingDelegationResponseAmino): _145.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _145.MsgCancelUnbondingDelegationResponse): _145.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _145.MsgCancelUnbondingDelegationResponseAminoMsg): _145.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _145.MsgCancelUnbondingDelegationResponse): _145.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _145.MsgCancelUnbondingDelegationResponseProtoMsg): _145.MsgCancelUnbondingDelegationResponse;
                toProto(message: _145.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _145.MsgCancelUnbondingDelegationResponse): _145.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _145.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgUpdateParams;
                fromPartial(object: Partial<_145.MsgUpdateParams>): _145.MsgUpdateParams;
                fromAmino(object: _145.MsgUpdateParamsAmino): _145.MsgUpdateParams;
                toAmino(message: _145.MsgUpdateParams): _145.MsgUpdateParamsAmino;
                fromAminoMsg(object: _145.MsgUpdateParamsAminoMsg): _145.MsgUpdateParams;
                toAminoMsg(message: _145.MsgUpdateParams): _145.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _145.MsgUpdateParamsProtoMsg): _145.MsgUpdateParams;
                toProto(message: _145.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateParams): _145.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _145.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _145.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_145.MsgUpdateParamsResponse>): _145.MsgUpdateParamsResponse;
                fromAmino(_: _145.MsgUpdateParamsResponseAmino): _145.MsgUpdateParamsResponse;
                toAmino(_: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _145.MsgUpdateParamsResponseAminoMsg): _145.MsgUpdateParamsResponse;
                toAminoMsg(message: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _145.MsgUpdateParamsResponseProtoMsg): _145.MsgUpdateParamsResponse;
                toProto(message: _145.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _145.MsgUpdateParamsResponse): _145.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey | null;
            bondStatusFromJSON(object: any): _144.BondStatus;
            bondStatusToJSON(object: _144.BondStatus): string;
            infractionFromJSON(object: any): _144.Infraction;
            infractionToJSON(object: _144.Infraction): string;
            BondStatus: typeof _144.BondStatus;
            BondStatusSDKType: typeof _144.BondStatus;
            BondStatusAmino: typeof _144.BondStatus;
            Infraction: typeof _144.Infraction;
            InfractionSDKType: typeof _144.Infraction;
            InfractionAmino: typeof _144.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _144.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.HistoricalInfo;
                fromPartial(object: Partial<_144.HistoricalInfo>): _144.HistoricalInfo;
                fromAmino(object: _144.HistoricalInfoAmino): _144.HistoricalInfo;
                toAmino(message: _144.HistoricalInfo): _144.HistoricalInfoAmino;
                fromAminoMsg(object: _144.HistoricalInfoAminoMsg): _144.HistoricalInfo;
                toAminoMsg(message: _144.HistoricalInfo): _144.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _144.HistoricalInfoProtoMsg): _144.HistoricalInfo;
                toProto(message: _144.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _144.HistoricalInfo): _144.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _144.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.CommissionRates;
                fromPartial(object: Partial<_144.CommissionRates>): _144.CommissionRates;
                fromAmino(object: _144.CommissionRatesAmino): _144.CommissionRates;
                toAmino(message: _144.CommissionRates): _144.CommissionRatesAmino;
                fromAminoMsg(object: _144.CommissionRatesAminoMsg): _144.CommissionRates;
                toAminoMsg(message: _144.CommissionRates): _144.CommissionRatesAminoMsg;
                fromProtoMsg(message: _144.CommissionRatesProtoMsg): _144.CommissionRates;
                toProto(message: _144.CommissionRates): Uint8Array;
                toProtoMsg(message: _144.CommissionRates): _144.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _144.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Commission;
                fromPartial(object: Partial<_144.Commission>): _144.Commission;
                fromAmino(object: _144.CommissionAmino): _144.Commission;
                toAmino(message: _144.Commission): _144.CommissionAmino;
                fromAminoMsg(object: _144.CommissionAminoMsg): _144.Commission;
                toAminoMsg(message: _144.Commission): _144.CommissionAminoMsg;
                fromProtoMsg(message: _144.CommissionProtoMsg): _144.Commission;
                toProto(message: _144.Commission): Uint8Array;
                toProtoMsg(message: _144.Commission): _144.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _144.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Description;
                fromPartial(object: Partial<_144.Description>): _144.Description;
                fromAmino(object: _144.DescriptionAmino): _144.Description;
                toAmino(message: _144.Description): _144.DescriptionAmino;
                fromAminoMsg(object: _144.DescriptionAminoMsg): _144.Description;
                toAminoMsg(message: _144.Description): _144.DescriptionAminoMsg;
                fromProtoMsg(message: _144.DescriptionProtoMsg): _144.Description;
                toProto(message: _144.Description): Uint8Array;
                toProtoMsg(message: _144.Description): _144.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _144.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Validator;
                fromPartial(object: Partial<_144.Validator>): _144.Validator;
                fromAmino(object: _144.ValidatorAmino): _144.Validator;
                toAmino(message: _144.Validator): _144.ValidatorAmino;
                fromAminoMsg(object: _144.ValidatorAminoMsg): _144.Validator;
                toAminoMsg(message: _144.Validator): _144.ValidatorAminoMsg;
                fromProtoMsg(message: _144.ValidatorProtoMsg): _144.Validator;
                toProto(message: _144.Validator): Uint8Array;
                toProtoMsg(message: _144.Validator): _144.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _144.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.ValAddresses;
                fromPartial(object: Partial<_144.ValAddresses>): _144.ValAddresses;
                fromAmino(object: _144.ValAddressesAmino): _144.ValAddresses;
                toAmino(message: _144.ValAddresses): _144.ValAddressesAmino;
                fromAminoMsg(object: _144.ValAddressesAminoMsg): _144.ValAddresses;
                toAminoMsg(message: _144.ValAddresses): _144.ValAddressesAminoMsg;
                fromProtoMsg(message: _144.ValAddressesProtoMsg): _144.ValAddresses;
                toProto(message: _144.ValAddresses): Uint8Array;
                toProtoMsg(message: _144.ValAddresses): _144.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _144.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.DVPair;
                fromPartial(object: Partial<_144.DVPair>): _144.DVPair;
                fromAmino(object: _144.DVPairAmino): _144.DVPair;
                toAmino(message: _144.DVPair): _144.DVPairAmino;
                fromAminoMsg(object: _144.DVPairAminoMsg): _144.DVPair;
                toAminoMsg(message: _144.DVPair): _144.DVPairAminoMsg;
                fromProtoMsg(message: _144.DVPairProtoMsg): _144.DVPair;
                toProto(message: _144.DVPair): Uint8Array;
                toProtoMsg(message: _144.DVPair): _144.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _144.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.DVPairs;
                fromPartial(object: Partial<_144.DVPairs>): _144.DVPairs;
                fromAmino(object: _144.DVPairsAmino): _144.DVPairs;
                toAmino(message: _144.DVPairs): _144.DVPairsAmino;
                fromAminoMsg(object: _144.DVPairsAminoMsg): _144.DVPairs;
                toAminoMsg(message: _144.DVPairs): _144.DVPairsAminoMsg;
                fromProtoMsg(message: _144.DVPairsProtoMsg): _144.DVPairs;
                toProto(message: _144.DVPairs): Uint8Array;
                toProtoMsg(message: _144.DVPairs): _144.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _144.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.DVVTriplet;
                fromPartial(object: Partial<_144.DVVTriplet>): _144.DVVTriplet;
                fromAmino(object: _144.DVVTripletAmino): _144.DVVTriplet;
                toAmino(message: _144.DVVTriplet): _144.DVVTripletAmino;
                fromAminoMsg(object: _144.DVVTripletAminoMsg): _144.DVVTriplet;
                toAminoMsg(message: _144.DVVTriplet): _144.DVVTripletAminoMsg;
                fromProtoMsg(message: _144.DVVTripletProtoMsg): _144.DVVTriplet;
                toProto(message: _144.DVVTriplet): Uint8Array;
                toProtoMsg(message: _144.DVVTriplet): _144.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _144.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.DVVTriplets;
                fromPartial(object: Partial<_144.DVVTriplets>): _144.DVVTriplets;
                fromAmino(object: _144.DVVTripletsAmino): _144.DVVTriplets;
                toAmino(message: _144.DVVTriplets): _144.DVVTripletsAmino;
                fromAminoMsg(object: _144.DVVTripletsAminoMsg): _144.DVVTriplets;
                toAminoMsg(message: _144.DVVTriplets): _144.DVVTripletsAminoMsg;
                fromProtoMsg(message: _144.DVVTripletsProtoMsg): _144.DVVTriplets;
                toProto(message: _144.DVVTriplets): Uint8Array;
                toProtoMsg(message: _144.DVVTriplets): _144.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _144.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Delegation;
                fromPartial(object: Partial<_144.Delegation>): _144.Delegation;
                fromAmino(object: _144.DelegationAmino): _144.Delegation;
                toAmino(message: _144.Delegation): _144.DelegationAmino;
                fromAminoMsg(object: _144.DelegationAminoMsg): _144.Delegation;
                toAminoMsg(message: _144.Delegation): _144.DelegationAminoMsg;
                fromProtoMsg(message: _144.DelegationProtoMsg): _144.Delegation;
                toProto(message: _144.Delegation): Uint8Array;
                toProtoMsg(message: _144.Delegation): _144.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _144.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.UnbondingDelegation;
                fromPartial(object: Partial<_144.UnbondingDelegation>): _144.UnbondingDelegation;
                fromAmino(object: _144.UnbondingDelegationAmino): _144.UnbondingDelegation;
                toAmino(message: _144.UnbondingDelegation): _144.UnbondingDelegationAmino;
                fromAminoMsg(object: _144.UnbondingDelegationAminoMsg): _144.UnbondingDelegation;
                toAminoMsg(message: _144.UnbondingDelegation): _144.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _144.UnbondingDelegationProtoMsg): _144.UnbondingDelegation;
                toProto(message: _144.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _144.UnbondingDelegation): _144.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _144.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.UnbondingDelegationEntry;
                fromPartial(object: Partial<_144.UnbondingDelegationEntry>): _144.UnbondingDelegationEntry;
                fromAmino(object: _144.UnbondingDelegationEntryAmino): _144.UnbondingDelegationEntry;
                toAmino(message: _144.UnbondingDelegationEntry): _144.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _144.UnbondingDelegationEntryAminoMsg): _144.UnbondingDelegationEntry;
                toAminoMsg(message: _144.UnbondingDelegationEntry): _144.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _144.UnbondingDelegationEntryProtoMsg): _144.UnbondingDelegationEntry;
                toProto(message: _144.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _144.UnbondingDelegationEntry): _144.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _144.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.RedelegationEntry;
                fromPartial(object: Partial<_144.RedelegationEntry>): _144.RedelegationEntry;
                fromAmino(object: _144.RedelegationEntryAmino): _144.RedelegationEntry;
                toAmino(message: _144.RedelegationEntry): _144.RedelegationEntryAmino;
                fromAminoMsg(object: _144.RedelegationEntryAminoMsg): _144.RedelegationEntry;
                toAminoMsg(message: _144.RedelegationEntry): _144.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _144.RedelegationEntryProtoMsg): _144.RedelegationEntry;
                toProto(message: _144.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _144.RedelegationEntry): _144.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _144.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Redelegation;
                fromPartial(object: Partial<_144.Redelegation>): _144.Redelegation;
                fromAmino(object: _144.RedelegationAmino): _144.Redelegation;
                toAmino(message: _144.Redelegation): _144.RedelegationAmino;
                fromAminoMsg(object: _144.RedelegationAminoMsg): _144.Redelegation;
                toAminoMsg(message: _144.Redelegation): _144.RedelegationAminoMsg;
                fromProtoMsg(message: _144.RedelegationProtoMsg): _144.Redelegation;
                toProto(message: _144.Redelegation): Uint8Array;
                toProtoMsg(message: _144.Redelegation): _144.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _144.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Params;
                fromPartial(object: Partial<_144.Params>): _144.Params;
                fromAmino(object: _144.ParamsAmino): _144.Params;
                toAmino(message: _144.Params): _144.ParamsAmino;
                fromAminoMsg(object: _144.ParamsAminoMsg): _144.Params;
                toAminoMsg(message: _144.Params): _144.ParamsAminoMsg;
                fromProtoMsg(message: _144.ParamsProtoMsg): _144.Params;
                toProto(message: _144.Params): Uint8Array;
                toProtoMsg(message: _144.Params): _144.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _144.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.DelegationResponse;
                fromPartial(object: Partial<_144.DelegationResponse>): _144.DelegationResponse;
                fromAmino(object: _144.DelegationResponseAmino): _144.DelegationResponse;
                toAmino(message: _144.DelegationResponse): _144.DelegationResponseAmino;
                fromAminoMsg(object: _144.DelegationResponseAminoMsg): _144.DelegationResponse;
                toAminoMsg(message: _144.DelegationResponse): _144.DelegationResponseAminoMsg;
                fromProtoMsg(message: _144.DelegationResponseProtoMsg): _144.DelegationResponse;
                toProto(message: _144.DelegationResponse): Uint8Array;
                toProtoMsg(message: _144.DelegationResponse): _144.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _144.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.RedelegationEntryResponse;
                fromPartial(object: Partial<_144.RedelegationEntryResponse>): _144.RedelegationEntryResponse;
                fromAmino(object: _144.RedelegationEntryResponseAmino): _144.RedelegationEntryResponse;
                toAmino(message: _144.RedelegationEntryResponse): _144.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _144.RedelegationEntryResponseAminoMsg): _144.RedelegationEntryResponse;
                toAminoMsg(message: _144.RedelegationEntryResponse): _144.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _144.RedelegationEntryResponseProtoMsg): _144.RedelegationEntryResponse;
                toProto(message: _144.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _144.RedelegationEntryResponse): _144.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _144.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.RedelegationResponse;
                fromPartial(object: Partial<_144.RedelegationResponse>): _144.RedelegationResponse;
                fromAmino(object: _144.RedelegationResponseAmino): _144.RedelegationResponse;
                toAmino(message: _144.RedelegationResponse): _144.RedelegationResponseAmino;
                fromAminoMsg(object: _144.RedelegationResponseAminoMsg): _144.RedelegationResponse;
                toAminoMsg(message: _144.RedelegationResponse): _144.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _144.RedelegationResponseProtoMsg): _144.RedelegationResponse;
                toProto(message: _144.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _144.RedelegationResponse): _144.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _144.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.Pool;
                fromPartial(object: Partial<_144.Pool>): _144.Pool;
                fromAmino(object: _144.PoolAmino): _144.Pool;
                toAmino(message: _144.Pool): _144.PoolAmino;
                fromAminoMsg(object: _144.PoolAminoMsg): _144.Pool;
                toAminoMsg(message: _144.Pool): _144.PoolAminoMsg;
                fromProtoMsg(message: _144.PoolProtoMsg): _144.Pool;
                toProto(message: _144.Pool): Uint8Array;
                toProtoMsg(message: _144.Pool): _144.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _144.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _144.ValidatorUpdates;
                fromPartial(object: Partial<_144.ValidatorUpdates>): _144.ValidatorUpdates;
                fromAmino(object: _144.ValidatorUpdatesAmino): _144.ValidatorUpdates;
                toAmino(message: _144.ValidatorUpdates): _144.ValidatorUpdatesAmino;
                fromAminoMsg(object: _144.ValidatorUpdatesAminoMsg): _144.ValidatorUpdates;
                toAminoMsg(message: _144.ValidatorUpdates): _144.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _144.ValidatorUpdatesProtoMsg): _144.ValidatorUpdates;
                toProto(message: _144.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _144.ValidatorUpdates): _144.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _143.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorsRequest;
                fromPartial(object: Partial<_143.QueryValidatorsRequest>): _143.QueryValidatorsRequest;
                fromAmino(object: _143.QueryValidatorsRequestAmino): _143.QueryValidatorsRequest;
                toAmino(message: _143.QueryValidatorsRequest): _143.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _143.QueryValidatorsRequestAminoMsg): _143.QueryValidatorsRequest;
                toAminoMsg(message: _143.QueryValidatorsRequest): _143.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorsRequestProtoMsg): _143.QueryValidatorsRequest;
                toProto(message: _143.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorsRequest): _143.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _143.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorsResponse;
                fromPartial(object: Partial<_143.QueryValidatorsResponse>): _143.QueryValidatorsResponse;
                fromAmino(object: _143.QueryValidatorsResponseAmino): _143.QueryValidatorsResponse;
                toAmino(message: _143.QueryValidatorsResponse): _143.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _143.QueryValidatorsResponseAminoMsg): _143.QueryValidatorsResponse;
                toAminoMsg(message: _143.QueryValidatorsResponse): _143.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorsResponseProtoMsg): _143.QueryValidatorsResponse;
                toProto(message: _143.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorsResponse): _143.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _143.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorRequest;
                fromPartial(object: Partial<_143.QueryValidatorRequest>): _143.QueryValidatorRequest;
                fromAmino(object: _143.QueryValidatorRequestAmino): _143.QueryValidatorRequest;
                toAmino(message: _143.QueryValidatorRequest): _143.QueryValidatorRequestAmino;
                fromAminoMsg(object: _143.QueryValidatorRequestAminoMsg): _143.QueryValidatorRequest;
                toAminoMsg(message: _143.QueryValidatorRequest): _143.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorRequestProtoMsg): _143.QueryValidatorRequest;
                toProto(message: _143.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorRequest): _143.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _143.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorResponse;
                fromPartial(object: Partial<_143.QueryValidatorResponse>): _143.QueryValidatorResponse;
                fromAmino(object: _143.QueryValidatorResponseAmino): _143.QueryValidatorResponse;
                toAmino(message: _143.QueryValidatorResponse): _143.QueryValidatorResponseAmino;
                fromAminoMsg(object: _143.QueryValidatorResponseAminoMsg): _143.QueryValidatorResponse;
                toAminoMsg(message: _143.QueryValidatorResponse): _143.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorResponseProtoMsg): _143.QueryValidatorResponse;
                toProto(message: _143.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorResponse): _143.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _143.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_143.QueryValidatorDelegationsRequest>): _143.QueryValidatorDelegationsRequest;
                fromAmino(object: _143.QueryValidatorDelegationsRequestAmino): _143.QueryValidatorDelegationsRequest;
                toAmino(message: _143.QueryValidatorDelegationsRequest): _143.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _143.QueryValidatorDelegationsRequestAminoMsg): _143.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _143.QueryValidatorDelegationsRequest): _143.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorDelegationsRequestProtoMsg): _143.QueryValidatorDelegationsRequest;
                toProto(message: _143.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorDelegationsRequest): _143.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _143.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_143.QueryValidatorDelegationsResponse>): _143.QueryValidatorDelegationsResponse;
                fromAmino(object: _143.QueryValidatorDelegationsResponseAmino): _143.QueryValidatorDelegationsResponse;
                toAmino(message: _143.QueryValidatorDelegationsResponse): _143.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _143.QueryValidatorDelegationsResponseAminoMsg): _143.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _143.QueryValidatorDelegationsResponse): _143.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorDelegationsResponseProtoMsg): _143.QueryValidatorDelegationsResponse;
                toProto(message: _143.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorDelegationsResponse): _143.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _143.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_143.QueryValidatorUnbondingDelegationsRequest>): _143.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _143.QueryValidatorUnbondingDelegationsRequestAmino): _143.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _143.QueryValidatorUnbondingDelegationsRequest): _143.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _143.QueryValidatorUnbondingDelegationsRequestAminoMsg): _143.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _143.QueryValidatorUnbondingDelegationsRequest): _143.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorUnbondingDelegationsRequestProtoMsg): _143.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _143.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorUnbondingDelegationsRequest): _143.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _143.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_143.QueryValidatorUnbondingDelegationsResponse>): _143.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _143.QueryValidatorUnbondingDelegationsResponseAmino): _143.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _143.QueryValidatorUnbondingDelegationsResponse): _143.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _143.QueryValidatorUnbondingDelegationsResponseAminoMsg): _143.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _143.QueryValidatorUnbondingDelegationsResponse): _143.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryValidatorUnbondingDelegationsResponseProtoMsg): _143.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _143.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryValidatorUnbondingDelegationsResponse): _143.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _143.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegationRequest;
                fromPartial(object: Partial<_143.QueryDelegationRequest>): _143.QueryDelegationRequest;
                fromAmino(object: _143.QueryDelegationRequestAmino): _143.QueryDelegationRequest;
                toAmino(message: _143.QueryDelegationRequest): _143.QueryDelegationRequestAmino;
                fromAminoMsg(object: _143.QueryDelegationRequestAminoMsg): _143.QueryDelegationRequest;
                toAminoMsg(message: _143.QueryDelegationRequest): _143.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDelegationRequestProtoMsg): _143.QueryDelegationRequest;
                toProto(message: _143.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDelegationRequest): _143.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _143.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegationResponse;
                fromPartial(object: Partial<_143.QueryDelegationResponse>): _143.QueryDelegationResponse;
                fromAmino(object: _143.QueryDelegationResponseAmino): _143.QueryDelegationResponse;
                toAmino(message: _143.QueryDelegationResponse): _143.QueryDelegationResponseAmino;
                fromAminoMsg(object: _143.QueryDelegationResponseAminoMsg): _143.QueryDelegationResponse;
                toAminoMsg(message: _143.QueryDelegationResponse): _143.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDelegationResponseProtoMsg): _143.QueryDelegationResponse;
                toProto(message: _143.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDelegationResponse): _143.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _143.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_143.QueryUnbondingDelegationRequest>): _143.QueryUnbondingDelegationRequest;
                fromAmino(object: _143.QueryUnbondingDelegationRequestAmino): _143.QueryUnbondingDelegationRequest;
                toAmino(message: _143.QueryUnbondingDelegationRequest): _143.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _143.QueryUnbondingDelegationRequestAminoMsg): _143.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _143.QueryUnbondingDelegationRequest): _143.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _143.QueryUnbondingDelegationRequestProtoMsg): _143.QueryUnbondingDelegationRequest;
                toProto(message: _143.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _143.QueryUnbondingDelegationRequest): _143.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _143.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_143.QueryUnbondingDelegationResponse>): _143.QueryUnbondingDelegationResponse;
                fromAmino(object: _143.QueryUnbondingDelegationResponseAmino): _143.QueryUnbondingDelegationResponse;
                toAmino(message: _143.QueryUnbondingDelegationResponse): _143.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _143.QueryUnbondingDelegationResponseAminoMsg): _143.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _143.QueryUnbondingDelegationResponse): _143.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _143.QueryUnbondingDelegationResponseProtoMsg): _143.QueryUnbondingDelegationResponse;
                toProto(message: _143.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _143.QueryUnbondingDelegationResponse): _143.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_143.QueryDelegatorDelegationsRequest>): _143.QueryDelegatorDelegationsRequest;
                fromAmino(object: _143.QueryDelegatorDelegationsRequestAmino): _143.QueryDelegatorDelegationsRequest;
                toAmino(message: _143.QueryDelegatorDelegationsRequest): _143.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _143.QueryDelegatorDelegationsRequestAminoMsg): _143.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _143.QueryDelegatorDelegationsRequest): _143.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorDelegationsRequestProtoMsg): _143.QueryDelegatorDelegationsRequest;
                toProto(message: _143.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorDelegationsRequest): _143.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_143.QueryDelegatorDelegationsResponse>): _143.QueryDelegatorDelegationsResponse;
                fromAmino(object: _143.QueryDelegatorDelegationsResponseAmino): _143.QueryDelegatorDelegationsResponse;
                toAmino(message: _143.QueryDelegatorDelegationsResponse): _143.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _143.QueryDelegatorDelegationsResponseAminoMsg): _143.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _143.QueryDelegatorDelegationsResponse): _143.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorDelegationsResponseProtoMsg): _143.QueryDelegatorDelegationsResponse;
                toProto(message: _143.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorDelegationsResponse): _143.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_143.QueryDelegatorUnbondingDelegationsRequest>): _143.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _143.QueryDelegatorUnbondingDelegationsRequestAmino): _143.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _143.QueryDelegatorUnbondingDelegationsRequest): _143.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _143.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _143.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _143.QueryDelegatorUnbondingDelegationsRequest): _143.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _143.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _143.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorUnbondingDelegationsRequest): _143.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_143.QueryDelegatorUnbondingDelegationsResponse>): _143.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _143.QueryDelegatorUnbondingDelegationsResponseAmino): _143.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _143.QueryDelegatorUnbondingDelegationsResponse): _143.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _143.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _143.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _143.QueryDelegatorUnbondingDelegationsResponse): _143.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _143.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _143.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorUnbondingDelegationsResponse): _143.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _143.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryRedelegationsRequest;
                fromPartial(object: Partial<_143.QueryRedelegationsRequest>): _143.QueryRedelegationsRequest;
                fromAmino(object: _143.QueryRedelegationsRequestAmino): _143.QueryRedelegationsRequest;
                toAmino(message: _143.QueryRedelegationsRequest): _143.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _143.QueryRedelegationsRequestAminoMsg): _143.QueryRedelegationsRequest;
                toAminoMsg(message: _143.QueryRedelegationsRequest): _143.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryRedelegationsRequestProtoMsg): _143.QueryRedelegationsRequest;
                toProto(message: _143.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryRedelegationsRequest): _143.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _143.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryRedelegationsResponse;
                fromPartial(object: Partial<_143.QueryRedelegationsResponse>): _143.QueryRedelegationsResponse;
                fromAmino(object: _143.QueryRedelegationsResponseAmino): _143.QueryRedelegationsResponse;
                toAmino(message: _143.QueryRedelegationsResponse): _143.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _143.QueryRedelegationsResponseAminoMsg): _143.QueryRedelegationsResponse;
                toAminoMsg(message: _143.QueryRedelegationsResponse): _143.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryRedelegationsResponseProtoMsg): _143.QueryRedelegationsResponse;
                toProto(message: _143.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryRedelegationsResponse): _143.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorsRequest>): _143.QueryDelegatorValidatorsRequest;
                fromAmino(object: _143.QueryDelegatorValidatorsRequestAmino): _143.QueryDelegatorValidatorsRequest;
                toAmino(message: _143.QueryDelegatorValidatorsRequest): _143.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _143.QueryDelegatorValidatorsRequestAminoMsg): _143.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _143.QueryDelegatorValidatorsRequest): _143.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorValidatorsRequestProtoMsg): _143.QueryDelegatorValidatorsRequest;
                toProto(message: _143.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorValidatorsRequest): _143.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorsResponse>): _143.QueryDelegatorValidatorsResponse;
                fromAmino(object: _143.QueryDelegatorValidatorsResponseAmino): _143.QueryDelegatorValidatorsResponse;
                toAmino(message: _143.QueryDelegatorValidatorsResponse): _143.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _143.QueryDelegatorValidatorsResponseAminoMsg): _143.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _143.QueryDelegatorValidatorsResponse): _143.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorValidatorsResponseProtoMsg): _143.QueryDelegatorValidatorsResponse;
                toProto(message: _143.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorValidatorsResponse): _143.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorRequest>): _143.QueryDelegatorValidatorRequest;
                fromAmino(object: _143.QueryDelegatorValidatorRequestAmino): _143.QueryDelegatorValidatorRequest;
                toAmino(message: _143.QueryDelegatorValidatorRequest): _143.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _143.QueryDelegatorValidatorRequestAminoMsg): _143.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _143.QueryDelegatorValidatorRequest): _143.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorValidatorRequestProtoMsg): _143.QueryDelegatorValidatorRequest;
                toProto(message: _143.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorValidatorRequest): _143.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _143.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_143.QueryDelegatorValidatorResponse>): _143.QueryDelegatorValidatorResponse;
                fromAmino(object: _143.QueryDelegatorValidatorResponseAmino): _143.QueryDelegatorValidatorResponse;
                toAmino(message: _143.QueryDelegatorValidatorResponse): _143.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _143.QueryDelegatorValidatorResponseAminoMsg): _143.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _143.QueryDelegatorValidatorResponse): _143.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _143.QueryDelegatorValidatorResponseProtoMsg): _143.QueryDelegatorValidatorResponse;
                toProto(message: _143.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _143.QueryDelegatorValidatorResponse): _143.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _143.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_143.QueryHistoricalInfoRequest>): _143.QueryHistoricalInfoRequest;
                fromAmino(object: _143.QueryHistoricalInfoRequestAmino): _143.QueryHistoricalInfoRequest;
                toAmino(message: _143.QueryHistoricalInfoRequest): _143.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _143.QueryHistoricalInfoRequestAminoMsg): _143.QueryHistoricalInfoRequest;
                toAminoMsg(message: _143.QueryHistoricalInfoRequest): _143.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _143.QueryHistoricalInfoRequestProtoMsg): _143.QueryHistoricalInfoRequest;
                toProto(message: _143.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _143.QueryHistoricalInfoRequest): _143.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _143.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_143.QueryHistoricalInfoResponse>): _143.QueryHistoricalInfoResponse;
                fromAmino(object: _143.QueryHistoricalInfoResponseAmino): _143.QueryHistoricalInfoResponse;
                toAmino(message: _143.QueryHistoricalInfoResponse): _143.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _143.QueryHistoricalInfoResponseAminoMsg): _143.QueryHistoricalInfoResponse;
                toAminoMsg(message: _143.QueryHistoricalInfoResponse): _143.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _143.QueryHistoricalInfoResponseProtoMsg): _143.QueryHistoricalInfoResponse;
                toProto(message: _143.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _143.QueryHistoricalInfoResponse): _143.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _143.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryPoolRequest;
                fromPartial(_: Partial<_143.QueryPoolRequest>): _143.QueryPoolRequest;
                fromAmino(_: _143.QueryPoolRequestAmino): _143.QueryPoolRequest;
                toAmino(_: _143.QueryPoolRequest): _143.QueryPoolRequestAmino;
                fromAminoMsg(object: _143.QueryPoolRequestAminoMsg): _143.QueryPoolRequest;
                toAminoMsg(message: _143.QueryPoolRequest): _143.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _143.QueryPoolRequestProtoMsg): _143.QueryPoolRequest;
                toProto(message: _143.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _143.QueryPoolRequest): _143.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _143.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryPoolResponse;
                fromPartial(object: Partial<_143.QueryPoolResponse>): _143.QueryPoolResponse;
                fromAmino(object: _143.QueryPoolResponseAmino): _143.QueryPoolResponse;
                toAmino(message: _143.QueryPoolResponse): _143.QueryPoolResponseAmino;
                fromAminoMsg(object: _143.QueryPoolResponseAminoMsg): _143.QueryPoolResponse;
                toAminoMsg(message: _143.QueryPoolResponse): _143.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _143.QueryPoolResponseProtoMsg): _143.QueryPoolResponse;
                toProto(message: _143.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _143.QueryPoolResponse): _143.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _143.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryParamsRequest;
                fromPartial(_: Partial<_143.QueryParamsRequest>): _143.QueryParamsRequest;
                fromAmino(_: _143.QueryParamsRequestAmino): _143.QueryParamsRequest;
                toAmino(_: _143.QueryParamsRequest): _143.QueryParamsRequestAmino;
                fromAminoMsg(object: _143.QueryParamsRequestAminoMsg): _143.QueryParamsRequest;
                toAminoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryParamsRequestProtoMsg): _143.QueryParamsRequest;
                toProto(message: _143.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _143.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _143.QueryParamsResponse;
                fromPartial(object: Partial<_143.QueryParamsResponse>): _143.QueryParamsResponse;
                fromAmino(object: _143.QueryParamsResponseAmino): _143.QueryParamsResponse;
                toAmino(message: _143.QueryParamsResponse): _143.QueryParamsResponseAmino;
                fromAminoMsg(object: _143.QueryParamsResponseAminoMsg): _143.QueryParamsResponse;
                toAminoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryParamsResponseProtoMsg): _143.QueryParamsResponse;
                toProto(message: _143.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _142.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.GenesisState;
                fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
                fromAmino(object: _142.GenesisStateAmino): _142.GenesisState;
                toAmino(message: _142.GenesisState): _142.GenesisStateAmino;
                fromAminoMsg(object: _142.GenesisStateAminoMsg): _142.GenesisState;
                toAminoMsg(message: _142.GenesisState): _142.GenesisStateAminoMsg;
                fromProtoMsg(message: _142.GenesisStateProtoMsg): _142.GenesisState;
                toProto(message: _142.GenesisState): Uint8Array;
                toProtoMsg(message: _142.GenesisState): _142.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _142.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _142.LastValidatorPower;
                fromPartial(object: Partial<_142.LastValidatorPower>): _142.LastValidatorPower;
                fromAmino(object: _142.LastValidatorPowerAmino): _142.LastValidatorPower;
                toAmino(message: _142.LastValidatorPower): _142.LastValidatorPowerAmino;
                fromAminoMsg(object: _142.LastValidatorPowerAminoMsg): _142.LastValidatorPower;
                toAminoMsg(message: _142.LastValidatorPower): _142.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _142.LastValidatorPowerProtoMsg): _142.LastValidatorPower;
                toProto(message: _142.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _142.LastValidatorPower): _142.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _141.AuthorizationType;
            authorizationTypeToJSON(object: _141.AuthorizationType): string;
            AuthorizationType: typeof _141.AuthorizationType;
            AuthorizationTypeSDKType: typeof _141.AuthorizationType;
            AuthorizationTypeAmino: typeof _141.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _141.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.StakeAuthorization;
                fromPartial(object: Partial<_141.StakeAuthorization>): _141.StakeAuthorization;
                fromAmino(object: _141.StakeAuthorizationAmino): _141.StakeAuthorization;
                toAmino(message: _141.StakeAuthorization): _141.StakeAuthorizationAmino;
                fromAminoMsg(object: _141.StakeAuthorizationAminoMsg): _141.StakeAuthorization;
                toAminoMsg(message: _141.StakeAuthorization): _141.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _141.StakeAuthorizationProtoMsg): _141.StakeAuthorization;
                toProto(message: _141.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _141.StakeAuthorization): _141.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _141.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _141.StakeAuthorization_Validators;
                fromPartial(object: Partial<_141.StakeAuthorization_Validators>): _141.StakeAuthorization_Validators;
                fromAmino(object: _141.StakeAuthorization_ValidatorsAmino): _141.StakeAuthorization_Validators;
                toAmino(message: _141.StakeAuthorization_Validators): _141.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _141.StakeAuthorization_ValidatorsAminoMsg): _141.StakeAuthorization_Validators;
                toAminoMsg(message: _141.StakeAuthorization_Validators): _141.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _141.StakeAuthorization_ValidatorsProtoMsg): _141.StakeAuthorization_Validators;
                toProto(message: _141.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _141.StakeAuthorization_Validators): _141.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _146.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _146.Config;
                    fromPartial(object: Partial<_146.Config>): _146.Config;
                    fromAmino(object: _146.ConfigAmino): _146.Config;
                    toAmino(message: _146.Config): _146.ConfigAmino;
                    fromAminoMsg(object: _146.ConfigAminoMsg): _146.Config;
                    toAminoMsg(message: _146.Config): _146.ConfigAminoMsg;
                    fromProtoMsg(message: _146.ConfigProtoMsg): _146.Config;
                    toProto(message: _146.Config): Uint8Array;
                    toProtoMsg(message: _146.Config): _146.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _147.SignMode;
                signModeToJSON(object: _147.SignMode): string;
                SignMode: typeof _147.SignMode;
                SignModeSDKType: typeof _147.SignMode;
                SignModeAmino: typeof _147.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _147.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.SignatureDescriptors;
                    fromPartial(object: Partial<_147.SignatureDescriptors>): _147.SignatureDescriptors;
                    fromAmino(object: _147.SignatureDescriptorsAmino): _147.SignatureDescriptors;
                    toAmino(message: _147.SignatureDescriptors): _147.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _147.SignatureDescriptorsAminoMsg): _147.SignatureDescriptors;
                    toAminoMsg(message: _147.SignatureDescriptors): _147.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _147.SignatureDescriptorsProtoMsg): _147.SignatureDescriptors;
                    toProto(message: _147.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _147.SignatureDescriptors): _147.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _147.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.SignatureDescriptor;
                    fromPartial(object: Partial<_147.SignatureDescriptor>): _147.SignatureDescriptor;
                    fromAmino(object: _147.SignatureDescriptorAmino): _147.SignatureDescriptor;
                    toAmino(message: _147.SignatureDescriptor): _147.SignatureDescriptorAmino;
                    fromAminoMsg(object: _147.SignatureDescriptorAminoMsg): _147.SignatureDescriptor;
                    toAminoMsg(message: _147.SignatureDescriptor): _147.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _147.SignatureDescriptorProtoMsg): _147.SignatureDescriptor;
                    toProto(message: _147.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _147.SignatureDescriptor): _147.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _147.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_147.SignatureDescriptor_Data>): _147.SignatureDescriptor_Data;
                    fromAmino(object: _147.SignatureDescriptor_DataAmino): _147.SignatureDescriptor_Data;
                    toAmino(message: _147.SignatureDescriptor_Data): _147.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _147.SignatureDescriptor_DataAminoMsg): _147.SignatureDescriptor_Data;
                    toAminoMsg(message: _147.SignatureDescriptor_Data): _147.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _147.SignatureDescriptor_DataProtoMsg): _147.SignatureDescriptor_Data;
                    toProto(message: _147.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _147.SignatureDescriptor_Data): _147.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _147.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_147.SignatureDescriptor_Data_Single>): _147.SignatureDescriptor_Data_Single;
                    fromAmino(object: _147.SignatureDescriptor_Data_SingleAmino): _147.SignatureDescriptor_Data_Single;
                    toAmino(message: _147.SignatureDescriptor_Data_Single): _147.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _147.SignatureDescriptor_Data_SingleAminoMsg): _147.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _147.SignatureDescriptor_Data_Single): _147.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _147.SignatureDescriptor_Data_SingleProtoMsg): _147.SignatureDescriptor_Data_Single;
                    toProto(message: _147.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _147.SignatureDescriptor_Data_Single): _147.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _147.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _147.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_147.SignatureDescriptor_Data_Multi>): _147.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _147.SignatureDescriptor_Data_MultiAmino): _147.SignatureDescriptor_Data_Multi;
                    toAmino(message: _147.SignatureDescriptor_Data_Multi): _147.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _147.SignatureDescriptor_Data_MultiAminoMsg): _147.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _147.SignatureDescriptor_Data_Multi): _147.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _147.SignatureDescriptor_Data_MultiProtoMsg): _147.SignatureDescriptor_Data_Multi;
                    toProto(message: _147.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _147.SignatureDescriptor_Data_Multi): _147.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _280.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _148.SimulateRequest): Promise<_148.SimulateResponse>;
                getTx(request: _148.GetTxRequest): Promise<_148.GetTxResponse>;
                broadcastTx(request: _148.BroadcastTxRequest): Promise<_148.BroadcastTxResponse>;
                getTxsEvent(request: _148.GetTxsEventRequest): Promise<_148.GetTxsEventResponse>;
                getBlockWithTxs(request: _148.GetBlockWithTxsRequest): Promise<_148.GetBlockWithTxsResponse>;
                txDecode(request: _148.TxDecodeRequest): Promise<_148.TxDecodeResponse>;
                txEncode(request: _148.TxEncodeRequest): Promise<_148.TxEncodeResponse>;
                txEncodeAmino(request: _148.TxEncodeAminoRequest): Promise<_148.TxEncodeAminoResponse>;
                txDecodeAmino(request: _148.TxDecodeAminoRequest): Promise<_148.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _149.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.Tx;
                fromPartial(object: Partial<_149.Tx>): _149.Tx;
                fromAmino(object: _149.TxAmino): _149.Tx;
                toAmino(message: _149.Tx): _149.TxAmino;
                fromAminoMsg(object: _149.TxAminoMsg): _149.Tx;
                toAminoMsg(message: _149.Tx): _149.TxAminoMsg;
                fromProtoMsg(message: _149.TxProtoMsg): _149.Tx;
                toProto(message: _149.Tx): Uint8Array;
                toProtoMsg(message: _149.Tx): _149.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _149.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.TxRaw;
                fromPartial(object: Partial<_149.TxRaw>): _149.TxRaw;
                fromAmino(object: _149.TxRawAmino): _149.TxRaw;
                toAmino(message: _149.TxRaw): _149.TxRawAmino;
                fromAminoMsg(object: _149.TxRawAminoMsg): _149.TxRaw;
                toAminoMsg(message: _149.TxRaw): _149.TxRawAminoMsg;
                fromProtoMsg(message: _149.TxRawProtoMsg): _149.TxRaw;
                toProto(message: _149.TxRaw): Uint8Array;
                toProtoMsg(message: _149.TxRaw): _149.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _149.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.SignDoc;
                fromPartial(object: Partial<_149.SignDoc>): _149.SignDoc;
                fromAmino(object: _149.SignDocAmino): _149.SignDoc;
                toAmino(message: _149.SignDoc): _149.SignDocAmino;
                fromAminoMsg(object: _149.SignDocAminoMsg): _149.SignDoc;
                toAminoMsg(message: _149.SignDoc): _149.SignDocAminoMsg;
                fromProtoMsg(message: _149.SignDocProtoMsg): _149.SignDoc;
                toProto(message: _149.SignDoc): Uint8Array;
                toProtoMsg(message: _149.SignDoc): _149.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _149.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.SignDocDirectAux;
                fromPartial(object: Partial<_149.SignDocDirectAux>): _149.SignDocDirectAux;
                fromAmino(object: _149.SignDocDirectAuxAmino): _149.SignDocDirectAux;
                toAmino(message: _149.SignDocDirectAux): _149.SignDocDirectAuxAmino;
                fromAminoMsg(object: _149.SignDocDirectAuxAminoMsg): _149.SignDocDirectAux;
                toAminoMsg(message: _149.SignDocDirectAux): _149.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _149.SignDocDirectAuxProtoMsg): _149.SignDocDirectAux;
                toProto(message: _149.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _149.SignDocDirectAux): _149.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _149.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.TxBody;
                fromPartial(object: Partial<_149.TxBody>): _149.TxBody;
                fromAmino(object: _149.TxBodyAmino): _149.TxBody;
                toAmino(message: _149.TxBody): _149.TxBodyAmino;
                fromAminoMsg(object: _149.TxBodyAminoMsg): _149.TxBody;
                toAminoMsg(message: _149.TxBody): _149.TxBodyAminoMsg;
                fromProtoMsg(message: _149.TxBodyProtoMsg): _149.TxBody;
                toProto(message: _149.TxBody): Uint8Array;
                toProtoMsg(message: _149.TxBody): _149.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _149.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.AuthInfo;
                fromPartial(object: Partial<_149.AuthInfo>): _149.AuthInfo;
                fromAmino(object: _149.AuthInfoAmino): _149.AuthInfo;
                toAmino(message: _149.AuthInfo): _149.AuthInfoAmino;
                fromAminoMsg(object: _149.AuthInfoAminoMsg): _149.AuthInfo;
                toAminoMsg(message: _149.AuthInfo): _149.AuthInfoAminoMsg;
                fromProtoMsg(message: _149.AuthInfoProtoMsg): _149.AuthInfo;
                toProto(message: _149.AuthInfo): Uint8Array;
                toProtoMsg(message: _149.AuthInfo): _149.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _149.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.SignerInfo;
                fromPartial(object: Partial<_149.SignerInfo>): _149.SignerInfo;
                fromAmino(object: _149.SignerInfoAmino): _149.SignerInfo;
                toAmino(message: _149.SignerInfo): _149.SignerInfoAmino;
                fromAminoMsg(object: _149.SignerInfoAminoMsg): _149.SignerInfo;
                toAminoMsg(message: _149.SignerInfo): _149.SignerInfoAminoMsg;
                fromProtoMsg(message: _149.SignerInfoProtoMsg): _149.SignerInfo;
                toProto(message: _149.SignerInfo): Uint8Array;
                toProtoMsg(message: _149.SignerInfo): _149.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _149.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.ModeInfo;
                fromPartial(object: Partial<_149.ModeInfo>): _149.ModeInfo;
                fromAmino(object: _149.ModeInfoAmino): _149.ModeInfo;
                toAmino(message: _149.ModeInfo): _149.ModeInfoAmino;
                fromAminoMsg(object: _149.ModeInfoAminoMsg): _149.ModeInfo;
                toAminoMsg(message: _149.ModeInfo): _149.ModeInfoAminoMsg;
                fromProtoMsg(message: _149.ModeInfoProtoMsg): _149.ModeInfo;
                toProto(message: _149.ModeInfo): Uint8Array;
                toProtoMsg(message: _149.ModeInfo): _149.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _149.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.ModeInfo_Single;
                fromPartial(object: Partial<_149.ModeInfo_Single>): _149.ModeInfo_Single;
                fromAmino(object: _149.ModeInfo_SingleAmino): _149.ModeInfo_Single;
                toAmino(message: _149.ModeInfo_Single): _149.ModeInfo_SingleAmino;
                fromAminoMsg(object: _149.ModeInfo_SingleAminoMsg): _149.ModeInfo_Single;
                toAminoMsg(message: _149.ModeInfo_Single): _149.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _149.ModeInfo_SingleProtoMsg): _149.ModeInfo_Single;
                toProto(message: _149.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _149.ModeInfo_Single): _149.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _149.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.ModeInfo_Multi;
                fromPartial(object: Partial<_149.ModeInfo_Multi>): _149.ModeInfo_Multi;
                fromAmino(object: _149.ModeInfo_MultiAmino): _149.ModeInfo_Multi;
                toAmino(message: _149.ModeInfo_Multi): _149.ModeInfo_MultiAmino;
                fromAminoMsg(object: _149.ModeInfo_MultiAminoMsg): _149.ModeInfo_Multi;
                toAminoMsg(message: _149.ModeInfo_Multi): _149.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _149.ModeInfo_MultiProtoMsg): _149.ModeInfo_Multi;
                toProto(message: _149.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _149.ModeInfo_Multi): _149.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _149.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.Fee;
                fromPartial(object: Partial<_149.Fee>): _149.Fee;
                fromAmino(object: _149.FeeAmino): _149.Fee;
                toAmino(message: _149.Fee): _149.FeeAmino;
                fromAminoMsg(object: _149.FeeAminoMsg): _149.Fee;
                toAminoMsg(message: _149.Fee): _149.FeeAminoMsg;
                fromProtoMsg(message: _149.FeeProtoMsg): _149.Fee;
                toProto(message: _149.Fee): Uint8Array;
                toProtoMsg(message: _149.Fee): _149.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _149.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.Tip;
                fromPartial(object: Partial<_149.Tip>): _149.Tip;
                fromAmino(object: _149.TipAmino): _149.Tip;
                toAmino(message: _149.Tip): _149.TipAmino;
                fromAminoMsg(object: _149.TipAminoMsg): _149.Tip;
                toAminoMsg(message: _149.Tip): _149.TipAminoMsg;
                fromProtoMsg(message: _149.TipProtoMsg): _149.Tip;
                toProto(message: _149.Tip): Uint8Array;
                toProtoMsg(message: _149.Tip): _149.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _149.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _149.AuxSignerData;
                fromPartial(object: Partial<_149.AuxSignerData>): _149.AuxSignerData;
                fromAmino(object: _149.AuxSignerDataAmino): _149.AuxSignerData;
                toAmino(message: _149.AuxSignerData): _149.AuxSignerDataAmino;
                fromAminoMsg(object: _149.AuxSignerDataAminoMsg): _149.AuxSignerData;
                toAminoMsg(message: _149.AuxSignerData): _149.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _149.AuxSignerDataProtoMsg): _149.AuxSignerData;
                toProto(message: _149.AuxSignerData): Uint8Array;
                toProtoMsg(message: _149.AuxSignerData): _149.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _148.OrderBy;
            orderByToJSON(object: _148.OrderBy): string;
            broadcastModeFromJSON(object: any): _148.BroadcastMode;
            broadcastModeToJSON(object: _148.BroadcastMode): string;
            OrderBy: typeof _148.OrderBy;
            OrderBySDKType: typeof _148.OrderBy;
            OrderByAmino: typeof _148.OrderBy;
            BroadcastMode: typeof _148.BroadcastMode;
            BroadcastModeSDKType: typeof _148.BroadcastMode;
            BroadcastModeAmino: typeof _148.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _148.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GetTxsEventRequest;
                fromPartial(object: Partial<_148.GetTxsEventRequest>): _148.GetTxsEventRequest;
                fromAmino(object: _148.GetTxsEventRequestAmino): _148.GetTxsEventRequest;
                toAmino(message: _148.GetTxsEventRequest): _148.GetTxsEventRequestAmino;
                fromAminoMsg(object: _148.GetTxsEventRequestAminoMsg): _148.GetTxsEventRequest;
                toAminoMsg(message: _148.GetTxsEventRequest): _148.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _148.GetTxsEventRequestProtoMsg): _148.GetTxsEventRequest;
                toProto(message: _148.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _148.GetTxsEventRequest): _148.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _148.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GetTxsEventResponse;
                fromPartial(object: Partial<_148.GetTxsEventResponse>): _148.GetTxsEventResponse;
                fromAmino(object: _148.GetTxsEventResponseAmino): _148.GetTxsEventResponse;
                toAmino(message: _148.GetTxsEventResponse): _148.GetTxsEventResponseAmino;
                fromAminoMsg(object: _148.GetTxsEventResponseAminoMsg): _148.GetTxsEventResponse;
                toAminoMsg(message: _148.GetTxsEventResponse): _148.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _148.GetTxsEventResponseProtoMsg): _148.GetTxsEventResponse;
                toProto(message: _148.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _148.GetTxsEventResponse): _148.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _148.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.BroadcastTxRequest;
                fromPartial(object: Partial<_148.BroadcastTxRequest>): _148.BroadcastTxRequest;
                fromAmino(object: _148.BroadcastTxRequestAmino): _148.BroadcastTxRequest;
                toAmino(message: _148.BroadcastTxRequest): _148.BroadcastTxRequestAmino;
                fromAminoMsg(object: _148.BroadcastTxRequestAminoMsg): _148.BroadcastTxRequest;
                toAminoMsg(message: _148.BroadcastTxRequest): _148.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _148.BroadcastTxRequestProtoMsg): _148.BroadcastTxRequest;
                toProto(message: _148.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _148.BroadcastTxRequest): _148.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _148.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.BroadcastTxResponse;
                fromPartial(object: Partial<_148.BroadcastTxResponse>): _148.BroadcastTxResponse;
                fromAmino(object: _148.BroadcastTxResponseAmino): _148.BroadcastTxResponse;
                toAmino(message: _148.BroadcastTxResponse): _148.BroadcastTxResponseAmino;
                fromAminoMsg(object: _148.BroadcastTxResponseAminoMsg): _148.BroadcastTxResponse;
                toAminoMsg(message: _148.BroadcastTxResponse): _148.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _148.BroadcastTxResponseProtoMsg): _148.BroadcastTxResponse;
                toProto(message: _148.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _148.BroadcastTxResponse): _148.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _148.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.SimulateRequest;
                fromPartial(object: Partial<_148.SimulateRequest>): _148.SimulateRequest;
                fromAmino(object: _148.SimulateRequestAmino): _148.SimulateRequest;
                toAmino(message: _148.SimulateRequest): _148.SimulateRequestAmino;
                fromAminoMsg(object: _148.SimulateRequestAminoMsg): _148.SimulateRequest;
                toAminoMsg(message: _148.SimulateRequest): _148.SimulateRequestAminoMsg;
                fromProtoMsg(message: _148.SimulateRequestProtoMsg): _148.SimulateRequest;
                toProto(message: _148.SimulateRequest): Uint8Array;
                toProtoMsg(message: _148.SimulateRequest): _148.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _148.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.SimulateResponse;
                fromPartial(object: Partial<_148.SimulateResponse>): _148.SimulateResponse;
                fromAmino(object: _148.SimulateResponseAmino): _148.SimulateResponse;
                toAmino(message: _148.SimulateResponse): _148.SimulateResponseAmino;
                fromAminoMsg(object: _148.SimulateResponseAminoMsg): _148.SimulateResponse;
                toAminoMsg(message: _148.SimulateResponse): _148.SimulateResponseAminoMsg;
                fromProtoMsg(message: _148.SimulateResponseProtoMsg): _148.SimulateResponse;
                toProto(message: _148.SimulateResponse): Uint8Array;
                toProtoMsg(message: _148.SimulateResponse): _148.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _148.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GetTxRequest;
                fromPartial(object: Partial<_148.GetTxRequest>): _148.GetTxRequest;
                fromAmino(object: _148.GetTxRequestAmino): _148.GetTxRequest;
                toAmino(message: _148.GetTxRequest): _148.GetTxRequestAmino;
                fromAminoMsg(object: _148.GetTxRequestAminoMsg): _148.GetTxRequest;
                toAminoMsg(message: _148.GetTxRequest): _148.GetTxRequestAminoMsg;
                fromProtoMsg(message: _148.GetTxRequestProtoMsg): _148.GetTxRequest;
                toProto(message: _148.GetTxRequest): Uint8Array;
                toProtoMsg(message: _148.GetTxRequest): _148.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _148.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GetTxResponse;
                fromPartial(object: Partial<_148.GetTxResponse>): _148.GetTxResponse;
                fromAmino(object: _148.GetTxResponseAmino): _148.GetTxResponse;
                toAmino(message: _148.GetTxResponse): _148.GetTxResponseAmino;
                fromAminoMsg(object: _148.GetTxResponseAminoMsg): _148.GetTxResponse;
                toAminoMsg(message: _148.GetTxResponse): _148.GetTxResponseAminoMsg;
                fromProtoMsg(message: _148.GetTxResponseProtoMsg): _148.GetTxResponse;
                toProto(message: _148.GetTxResponse): Uint8Array;
                toProtoMsg(message: _148.GetTxResponse): _148.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _148.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GetBlockWithTxsRequest;
                fromPartial(object: Partial<_148.GetBlockWithTxsRequest>): _148.GetBlockWithTxsRequest;
                fromAmino(object: _148.GetBlockWithTxsRequestAmino): _148.GetBlockWithTxsRequest;
                toAmino(message: _148.GetBlockWithTxsRequest): _148.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _148.GetBlockWithTxsRequestAminoMsg): _148.GetBlockWithTxsRequest;
                toAminoMsg(message: _148.GetBlockWithTxsRequest): _148.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _148.GetBlockWithTxsRequestProtoMsg): _148.GetBlockWithTxsRequest;
                toProto(message: _148.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _148.GetBlockWithTxsRequest): _148.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _148.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.GetBlockWithTxsResponse;
                fromPartial(object: Partial<_148.GetBlockWithTxsResponse>): _148.GetBlockWithTxsResponse;
                fromAmino(object: _148.GetBlockWithTxsResponseAmino): _148.GetBlockWithTxsResponse;
                toAmino(message: _148.GetBlockWithTxsResponse): _148.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _148.GetBlockWithTxsResponseAminoMsg): _148.GetBlockWithTxsResponse;
                toAminoMsg(message: _148.GetBlockWithTxsResponse): _148.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _148.GetBlockWithTxsResponseProtoMsg): _148.GetBlockWithTxsResponse;
                toProto(message: _148.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _148.GetBlockWithTxsResponse): _148.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _148.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxDecodeRequest;
                fromPartial(object: Partial<_148.TxDecodeRequest>): _148.TxDecodeRequest;
                fromAmino(object: _148.TxDecodeRequestAmino): _148.TxDecodeRequest;
                toAmino(message: _148.TxDecodeRequest): _148.TxDecodeRequestAmino;
                fromAminoMsg(object: _148.TxDecodeRequestAminoMsg): _148.TxDecodeRequest;
                toAminoMsg(message: _148.TxDecodeRequest): _148.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _148.TxDecodeRequestProtoMsg): _148.TxDecodeRequest;
                toProto(message: _148.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _148.TxDecodeRequest): _148.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _148.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxDecodeResponse;
                fromPartial(object: Partial<_148.TxDecodeResponse>): _148.TxDecodeResponse;
                fromAmino(object: _148.TxDecodeResponseAmino): _148.TxDecodeResponse;
                toAmino(message: _148.TxDecodeResponse): _148.TxDecodeResponseAmino;
                fromAminoMsg(object: _148.TxDecodeResponseAminoMsg): _148.TxDecodeResponse;
                toAminoMsg(message: _148.TxDecodeResponse): _148.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _148.TxDecodeResponseProtoMsg): _148.TxDecodeResponse;
                toProto(message: _148.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _148.TxDecodeResponse): _148.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _148.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxEncodeRequest;
                fromPartial(object: Partial<_148.TxEncodeRequest>): _148.TxEncodeRequest;
                fromAmino(object: _148.TxEncodeRequestAmino): _148.TxEncodeRequest;
                toAmino(message: _148.TxEncodeRequest): _148.TxEncodeRequestAmino;
                fromAminoMsg(object: _148.TxEncodeRequestAminoMsg): _148.TxEncodeRequest;
                toAminoMsg(message: _148.TxEncodeRequest): _148.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _148.TxEncodeRequestProtoMsg): _148.TxEncodeRequest;
                toProto(message: _148.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _148.TxEncodeRequest): _148.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _148.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxEncodeResponse;
                fromPartial(object: Partial<_148.TxEncodeResponse>): _148.TxEncodeResponse;
                fromAmino(object: _148.TxEncodeResponseAmino): _148.TxEncodeResponse;
                toAmino(message: _148.TxEncodeResponse): _148.TxEncodeResponseAmino;
                fromAminoMsg(object: _148.TxEncodeResponseAminoMsg): _148.TxEncodeResponse;
                toAminoMsg(message: _148.TxEncodeResponse): _148.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _148.TxEncodeResponseProtoMsg): _148.TxEncodeResponse;
                toProto(message: _148.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _148.TxEncodeResponse): _148.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _148.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxEncodeAminoRequest;
                fromPartial(object: Partial<_148.TxEncodeAminoRequest>): _148.TxEncodeAminoRequest;
                fromAmino(object: _148.TxEncodeAminoRequestAmino): _148.TxEncodeAminoRequest;
                toAmino(message: _148.TxEncodeAminoRequest): _148.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _148.TxEncodeAminoRequestAminoMsg): _148.TxEncodeAminoRequest;
                toAminoMsg(message: _148.TxEncodeAminoRequest): _148.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _148.TxEncodeAminoRequestProtoMsg): _148.TxEncodeAminoRequest;
                toProto(message: _148.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _148.TxEncodeAminoRequest): _148.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _148.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxEncodeAminoResponse;
                fromPartial(object: Partial<_148.TxEncodeAminoResponse>): _148.TxEncodeAminoResponse;
                fromAmino(object: _148.TxEncodeAminoResponseAmino): _148.TxEncodeAminoResponse;
                toAmino(message: _148.TxEncodeAminoResponse): _148.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _148.TxEncodeAminoResponseAminoMsg): _148.TxEncodeAminoResponse;
                toAminoMsg(message: _148.TxEncodeAminoResponse): _148.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _148.TxEncodeAminoResponseProtoMsg): _148.TxEncodeAminoResponse;
                toProto(message: _148.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _148.TxEncodeAminoResponse): _148.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _148.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxDecodeAminoRequest;
                fromPartial(object: Partial<_148.TxDecodeAminoRequest>): _148.TxDecodeAminoRequest;
                fromAmino(object: _148.TxDecodeAminoRequestAmino): _148.TxDecodeAminoRequest;
                toAmino(message: _148.TxDecodeAminoRequest): _148.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _148.TxDecodeAminoRequestAminoMsg): _148.TxDecodeAminoRequest;
                toAminoMsg(message: _148.TxDecodeAminoRequest): _148.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _148.TxDecodeAminoRequestProtoMsg): _148.TxDecodeAminoRequest;
                toProto(message: _148.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _148.TxDecodeAminoRequest): _148.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _148.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _148.TxDecodeAminoResponse;
                fromPartial(object: Partial<_148.TxDecodeAminoResponse>): _148.TxDecodeAminoResponse;
                fromAmino(object: _148.TxDecodeAminoResponseAmino): _148.TxDecodeAminoResponse;
                toAmino(message: _148.TxDecodeAminoResponse): _148.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _148.TxDecodeAminoResponseAminoMsg): _148.TxDecodeAminoResponse;
                toAminoMsg(message: _148.TxDecodeAminoResponse): _148.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _148.TxDecodeAminoResponseProtoMsg): _148.TxDecodeAminoResponse;
                toProto(message: _148.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _148.TxDecodeAminoResponse): _148.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _150.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _150.Module;
                    fromPartial(object: Partial<_150.Module>): _150.Module;
                    fromAmino(object: _150.ModuleAmino): _150.Module;
                    toAmino(message: _150.Module): _150.ModuleAmino;
                    fromAminoMsg(object: _150.ModuleAminoMsg): _150.Module;
                    toAminoMsg(message: _150.Module): _150.ModuleAminoMsg;
                    fromProtoMsg(message: _150.ModuleProtoMsg): _150.Module;
                    toProto(message: _150.Module): Uint8Array;
                    toProtoMsg(message: _150.Module): _150.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _151.QueryCurrentPlanRequest): Promise<_151.QueryCurrentPlanResponse>;
                appliedPlan(request: _151.QueryAppliedPlanRequest): Promise<_151.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _151.QueryUpgradedConsensusStateRequest): Promise<_151.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _151.QueryModuleVersionsRequest): Promise<_151.QueryModuleVersionsResponse>;
                authority(request?: _151.QueryAuthorityRequest): Promise<_151.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _152.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    cancelUpgrade(value: _152.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _152.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _152.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _152.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _152.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _152.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _152.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _152.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _152.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _152.MsgSoftwareUpgrade) => _152.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _152.MsgSoftwareUpgradeAmino) => _152.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _152.MsgCancelUpgrade) => _152.MsgCancelUpgradeAmino;
                    fromAmino: (object: _152.MsgCancelUpgradeAmino) => _152.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _153.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Plan;
                fromPartial(object: Partial<_153.Plan>): _153.Plan;
                fromAmino(object: _153.PlanAmino): _153.Plan;
                toAmino(message: _153.Plan): _153.PlanAmino;
                fromAminoMsg(object: _153.PlanAminoMsg): _153.Plan;
                toAminoMsg(message: _153.Plan): _153.PlanAminoMsg;
                fromProtoMsg(message: _153.PlanProtoMsg): _153.Plan;
                toProto(message: _153.Plan): Uint8Array;
                toProtoMsg(message: _153.Plan): _153.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _153.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_153.SoftwareUpgradeProposal>): _153.SoftwareUpgradeProposal;
                fromAmino(object: _153.SoftwareUpgradeProposalAmino): _153.SoftwareUpgradeProposal;
                toAmino(message: _153.SoftwareUpgradeProposal): _153.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _153.SoftwareUpgradeProposalAminoMsg): _153.SoftwareUpgradeProposal;
                toAminoMsg(message: _153.SoftwareUpgradeProposal): _153.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _153.SoftwareUpgradeProposalProtoMsg): _153.SoftwareUpgradeProposal;
                toProto(message: _153.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _153.SoftwareUpgradeProposal): _153.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _153.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_153.CancelSoftwareUpgradeProposal>): _153.CancelSoftwareUpgradeProposal;
                fromAmino(object: _153.CancelSoftwareUpgradeProposalAmino): _153.CancelSoftwareUpgradeProposal;
                toAmino(message: _153.CancelSoftwareUpgradeProposal): _153.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _153.CancelSoftwareUpgradeProposalAminoMsg): _153.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _153.CancelSoftwareUpgradeProposal): _153.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _153.CancelSoftwareUpgradeProposalProtoMsg): _153.CancelSoftwareUpgradeProposal;
                toProto(message: _153.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _153.CancelSoftwareUpgradeProposal): _153.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _153.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.ModuleVersion;
                fromPartial(object: Partial<_153.ModuleVersion>): _153.ModuleVersion;
                fromAmino(object: _153.ModuleVersionAmino): _153.ModuleVersion;
                toAmino(message: _153.ModuleVersion): _153.ModuleVersionAmino;
                fromAminoMsg(object: _153.ModuleVersionAminoMsg): _153.ModuleVersion;
                toAminoMsg(message: _153.ModuleVersion): _153.ModuleVersionAminoMsg;
                fromProtoMsg(message: _153.ModuleVersionProtoMsg): _153.ModuleVersion;
                toProto(message: _153.ModuleVersion): Uint8Array;
                toProtoMsg(message: _153.ModuleVersion): _153.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _152.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MsgSoftwareUpgrade;
                fromPartial(object: Partial<_152.MsgSoftwareUpgrade>): _152.MsgSoftwareUpgrade;
                fromAmino(object: _152.MsgSoftwareUpgradeAmino): _152.MsgSoftwareUpgrade;
                toAmino(message: _152.MsgSoftwareUpgrade): _152.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _152.MsgSoftwareUpgradeAminoMsg): _152.MsgSoftwareUpgrade;
                toAminoMsg(message: _152.MsgSoftwareUpgrade): _152.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _152.MsgSoftwareUpgradeProtoMsg): _152.MsgSoftwareUpgrade;
                toProto(message: _152.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _152.MsgSoftwareUpgrade): _152.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _152.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MsgSoftwareUpgradeResponse;
                fromPartial(_: Partial<_152.MsgSoftwareUpgradeResponse>): _152.MsgSoftwareUpgradeResponse;
                fromAmino(_: _152.MsgSoftwareUpgradeResponseAmino): _152.MsgSoftwareUpgradeResponse;
                toAmino(_: _152.MsgSoftwareUpgradeResponse): _152.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _152.MsgSoftwareUpgradeResponseAminoMsg): _152.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _152.MsgSoftwareUpgradeResponse): _152.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _152.MsgSoftwareUpgradeResponseProtoMsg): _152.MsgSoftwareUpgradeResponse;
                toProto(message: _152.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _152.MsgSoftwareUpgradeResponse): _152.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _152.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MsgCancelUpgrade;
                fromPartial(object: Partial<_152.MsgCancelUpgrade>): _152.MsgCancelUpgrade;
                fromAmino(object: _152.MsgCancelUpgradeAmino): _152.MsgCancelUpgrade;
                toAmino(message: _152.MsgCancelUpgrade): _152.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _152.MsgCancelUpgradeAminoMsg): _152.MsgCancelUpgrade;
                toAminoMsg(message: _152.MsgCancelUpgrade): _152.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _152.MsgCancelUpgradeProtoMsg): _152.MsgCancelUpgrade;
                toProto(message: _152.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _152.MsgCancelUpgrade): _152.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _152.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MsgCancelUpgradeResponse;
                fromPartial(_: Partial<_152.MsgCancelUpgradeResponse>): _152.MsgCancelUpgradeResponse;
                fromAmino(_: _152.MsgCancelUpgradeResponseAmino): _152.MsgCancelUpgradeResponse;
                toAmino(_: _152.MsgCancelUpgradeResponse): _152.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _152.MsgCancelUpgradeResponseAminoMsg): _152.MsgCancelUpgradeResponse;
                toAminoMsg(message: _152.MsgCancelUpgradeResponse): _152.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _152.MsgCancelUpgradeResponseProtoMsg): _152.MsgCancelUpgradeResponse;
                toProto(message: _152.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _152.MsgCancelUpgradeResponse): _152.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _151.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_151.QueryCurrentPlanRequest>): _151.QueryCurrentPlanRequest;
                fromAmino(_: _151.QueryCurrentPlanRequestAmino): _151.QueryCurrentPlanRequest;
                toAmino(_: _151.QueryCurrentPlanRequest): _151.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _151.QueryCurrentPlanRequestAminoMsg): _151.QueryCurrentPlanRequest;
                toAminoMsg(message: _151.QueryCurrentPlanRequest): _151.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _151.QueryCurrentPlanRequestProtoMsg): _151.QueryCurrentPlanRequest;
                toProto(message: _151.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _151.QueryCurrentPlanRequest): _151.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _151.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_151.QueryCurrentPlanResponse>): _151.QueryCurrentPlanResponse;
                fromAmino(object: _151.QueryCurrentPlanResponseAmino): _151.QueryCurrentPlanResponse;
                toAmino(message: _151.QueryCurrentPlanResponse): _151.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _151.QueryCurrentPlanResponseAminoMsg): _151.QueryCurrentPlanResponse;
                toAminoMsg(message: _151.QueryCurrentPlanResponse): _151.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _151.QueryCurrentPlanResponseProtoMsg): _151.QueryCurrentPlanResponse;
                toProto(message: _151.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _151.QueryCurrentPlanResponse): _151.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _151.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_151.QueryAppliedPlanRequest>): _151.QueryAppliedPlanRequest;
                fromAmino(object: _151.QueryAppliedPlanRequestAmino): _151.QueryAppliedPlanRequest;
                toAmino(message: _151.QueryAppliedPlanRequest): _151.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _151.QueryAppliedPlanRequestAminoMsg): _151.QueryAppliedPlanRequest;
                toAminoMsg(message: _151.QueryAppliedPlanRequest): _151.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _151.QueryAppliedPlanRequestProtoMsg): _151.QueryAppliedPlanRequest;
                toProto(message: _151.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _151.QueryAppliedPlanRequest): _151.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _151.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_151.QueryAppliedPlanResponse>): _151.QueryAppliedPlanResponse;
                fromAmino(object: _151.QueryAppliedPlanResponseAmino): _151.QueryAppliedPlanResponse;
                toAmino(message: _151.QueryAppliedPlanResponse): _151.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _151.QueryAppliedPlanResponseAminoMsg): _151.QueryAppliedPlanResponse;
                toAminoMsg(message: _151.QueryAppliedPlanResponse): _151.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _151.QueryAppliedPlanResponseProtoMsg): _151.QueryAppliedPlanResponse;
                toProto(message: _151.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _151.QueryAppliedPlanResponse): _151.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _151.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_151.QueryUpgradedConsensusStateRequest>): _151.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _151.QueryUpgradedConsensusStateRequestAmino): _151.QueryUpgradedConsensusStateRequest;
                toAmino(message: _151.QueryUpgradedConsensusStateRequest): _151.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _151.QueryUpgradedConsensusStateRequestAminoMsg): _151.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _151.QueryUpgradedConsensusStateRequest): _151.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _151.QueryUpgradedConsensusStateRequestProtoMsg): _151.QueryUpgradedConsensusStateRequest;
                toProto(message: _151.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _151.QueryUpgradedConsensusStateRequest): _151.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _151.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_151.QueryUpgradedConsensusStateResponse>): _151.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _151.QueryUpgradedConsensusStateResponseAmino): _151.QueryUpgradedConsensusStateResponse;
                toAmino(message: _151.QueryUpgradedConsensusStateResponse): _151.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _151.QueryUpgradedConsensusStateResponseAminoMsg): _151.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _151.QueryUpgradedConsensusStateResponse): _151.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _151.QueryUpgradedConsensusStateResponseProtoMsg): _151.QueryUpgradedConsensusStateResponse;
                toProto(message: _151.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _151.QueryUpgradedConsensusStateResponse): _151.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _151.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryModuleVersionsRequest;
                fromPartial(object: Partial<_151.QueryModuleVersionsRequest>): _151.QueryModuleVersionsRequest;
                fromAmino(object: _151.QueryModuleVersionsRequestAmino): _151.QueryModuleVersionsRequest;
                toAmino(message: _151.QueryModuleVersionsRequest): _151.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _151.QueryModuleVersionsRequestAminoMsg): _151.QueryModuleVersionsRequest;
                toAminoMsg(message: _151.QueryModuleVersionsRequest): _151.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _151.QueryModuleVersionsRequestProtoMsg): _151.QueryModuleVersionsRequest;
                toProto(message: _151.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _151.QueryModuleVersionsRequest): _151.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _151.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryModuleVersionsResponse;
                fromPartial(object: Partial<_151.QueryModuleVersionsResponse>): _151.QueryModuleVersionsResponse;
                fromAmino(object: _151.QueryModuleVersionsResponseAmino): _151.QueryModuleVersionsResponse;
                toAmino(message: _151.QueryModuleVersionsResponse): _151.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _151.QueryModuleVersionsResponseAminoMsg): _151.QueryModuleVersionsResponse;
                toAminoMsg(message: _151.QueryModuleVersionsResponse): _151.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _151.QueryModuleVersionsResponseProtoMsg): _151.QueryModuleVersionsResponse;
                toProto(message: _151.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _151.QueryModuleVersionsResponse): _151.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _151.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryAuthorityRequest;
                fromPartial(_: Partial<_151.QueryAuthorityRequest>): _151.QueryAuthorityRequest;
                fromAmino(_: _151.QueryAuthorityRequestAmino): _151.QueryAuthorityRequest;
                toAmino(_: _151.QueryAuthorityRequest): _151.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _151.QueryAuthorityRequestAminoMsg): _151.QueryAuthorityRequest;
                toAminoMsg(message: _151.QueryAuthorityRequest): _151.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _151.QueryAuthorityRequestProtoMsg): _151.QueryAuthorityRequest;
                toProto(message: _151.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _151.QueryAuthorityRequest): _151.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _151.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.QueryAuthorityResponse;
                fromPartial(object: Partial<_151.QueryAuthorityResponse>): _151.QueryAuthorityResponse;
                fromAmino(object: _151.QueryAuthorityResponseAmino): _151.QueryAuthorityResponse;
                toAmino(message: _151.QueryAuthorityResponse): _151.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _151.QueryAuthorityResponseAminoMsg): _151.QueryAuthorityResponse;
                toAminoMsg(message: _151.QueryAuthorityResponse): _151.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _151.QueryAuthorityResponseProtoMsg): _151.QueryAuthorityResponse;
                toProto(message: _151.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _151.QueryAuthorityResponse): _151.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _154.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.Module;
                    fromPartial(_: Partial<_154.Module>): _154.Module;
                    fromAmino(_: _154.ModuleAmino): _154.Module;
                    toAmino(_: _154.Module): _154.ModuleAmino;
                    fromAminoMsg(object: _154.ModuleAminoMsg): _154.Module;
                    toAminoMsg(message: _154.Module): _154.ModuleAminoMsg;
                    fromProtoMsg(message: _154.ModuleProtoMsg): _154.Module;
                    toProto(message: _154.Module): Uint8Array;
                    toProtoMsg(message: _154.Module): _154.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _155.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    createPermanentLockedAccount(value: _155.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                    createPeriodicVestingAccount(value: _155.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array<ArrayBufferLike>;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _155.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _155.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _155.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _155.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _155.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _155.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _155.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _155.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _155.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _155.MsgCreateVestingAccount) => _155.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _155.MsgCreateVestingAccountAmino) => _155.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _155.MsgCreatePermanentLockedAccount) => _155.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _155.MsgCreatePermanentLockedAccountAmino) => _155.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _155.MsgCreatePeriodicVestingAccount) => _155.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _155.MsgCreatePeriodicVestingAccountAmino) => _155.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _156.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.BaseVestingAccount;
                fromPartial(object: Partial<_156.BaseVestingAccount>): _156.BaseVestingAccount;
                fromAmino(object: _156.BaseVestingAccountAmino): _156.BaseVestingAccount;
                toAmino(message: _156.BaseVestingAccount): _156.BaseVestingAccountAmino;
                fromAminoMsg(object: _156.BaseVestingAccountAminoMsg): _156.BaseVestingAccount;
                toAminoMsg(message: _156.BaseVestingAccount): _156.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _156.BaseVestingAccountProtoMsg): _156.BaseVestingAccount;
                toProto(message: _156.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _156.BaseVestingAccount): _156.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _156.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.ContinuousVestingAccount;
                fromPartial(object: Partial<_156.ContinuousVestingAccount>): _156.ContinuousVestingAccount;
                fromAmino(object: _156.ContinuousVestingAccountAmino): _156.ContinuousVestingAccount;
                toAmino(message: _156.ContinuousVestingAccount): _156.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _156.ContinuousVestingAccountAminoMsg): _156.ContinuousVestingAccount;
                toAminoMsg(message: _156.ContinuousVestingAccount): _156.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _156.ContinuousVestingAccountProtoMsg): _156.ContinuousVestingAccount;
                toProto(message: _156.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _156.ContinuousVestingAccount): _156.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _156.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.DelayedVestingAccount;
                fromPartial(object: Partial<_156.DelayedVestingAccount>): _156.DelayedVestingAccount;
                fromAmino(object: _156.DelayedVestingAccountAmino): _156.DelayedVestingAccount;
                toAmino(message: _156.DelayedVestingAccount): _156.DelayedVestingAccountAmino;
                fromAminoMsg(object: _156.DelayedVestingAccountAminoMsg): _156.DelayedVestingAccount;
                toAminoMsg(message: _156.DelayedVestingAccount): _156.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _156.DelayedVestingAccountProtoMsg): _156.DelayedVestingAccount;
                toProto(message: _156.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _156.DelayedVestingAccount): _156.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _156.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.Period;
                fromPartial(object: Partial<_156.Period>): _156.Period;
                fromAmino(object: _156.PeriodAmino): _156.Period;
                toAmino(message: _156.Period): _156.PeriodAmino;
                fromAminoMsg(object: _156.PeriodAminoMsg): _156.Period;
                toAminoMsg(message: _156.Period): _156.PeriodAminoMsg;
                fromProtoMsg(message: _156.PeriodProtoMsg): _156.Period;
                toProto(message: _156.Period): Uint8Array;
                toProtoMsg(message: _156.Period): _156.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _156.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.PeriodicVestingAccount;
                fromPartial(object: Partial<_156.PeriodicVestingAccount>): _156.PeriodicVestingAccount;
                fromAmino(object: _156.PeriodicVestingAccountAmino): _156.PeriodicVestingAccount;
                toAmino(message: _156.PeriodicVestingAccount): _156.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _156.PeriodicVestingAccountAminoMsg): _156.PeriodicVestingAccount;
                toAminoMsg(message: _156.PeriodicVestingAccount): _156.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _156.PeriodicVestingAccountProtoMsg): _156.PeriodicVestingAccount;
                toProto(message: _156.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _156.PeriodicVestingAccount): _156.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _156.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.PermanentLockedAccount;
                fromPartial(object: Partial<_156.PermanentLockedAccount>): _156.PermanentLockedAccount;
                fromAmino(object: _156.PermanentLockedAccountAmino): _156.PermanentLockedAccount;
                toAmino(message: _156.PermanentLockedAccount): _156.PermanentLockedAccountAmino;
                fromAminoMsg(object: _156.PermanentLockedAccountAminoMsg): _156.PermanentLockedAccount;
                toAminoMsg(message: _156.PermanentLockedAccount): _156.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _156.PermanentLockedAccountProtoMsg): _156.PermanentLockedAccount;
                toProto(message: _156.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _156.PermanentLockedAccount): _156.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _155.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.MsgCreateVestingAccount;
                fromPartial(object: Partial<_155.MsgCreateVestingAccount>): _155.MsgCreateVestingAccount;
                fromAmino(object: _155.MsgCreateVestingAccountAmino): _155.MsgCreateVestingAccount;
                toAmino(message: _155.MsgCreateVestingAccount): _155.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _155.MsgCreateVestingAccountAminoMsg): _155.MsgCreateVestingAccount;
                toAminoMsg(message: _155.MsgCreateVestingAccount): _155.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _155.MsgCreateVestingAccountProtoMsg): _155.MsgCreateVestingAccount;
                toProto(message: _155.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _155.MsgCreateVestingAccount): _155.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _155.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_155.MsgCreateVestingAccountResponse>): _155.MsgCreateVestingAccountResponse;
                fromAmino(_: _155.MsgCreateVestingAccountResponseAmino): _155.MsgCreateVestingAccountResponse;
                toAmino(_: _155.MsgCreateVestingAccountResponse): _155.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _155.MsgCreateVestingAccountResponseAminoMsg): _155.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _155.MsgCreateVestingAccountResponse): _155.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _155.MsgCreateVestingAccountResponseProtoMsg): _155.MsgCreateVestingAccountResponse;
                toProto(message: _155.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _155.MsgCreateVestingAccountResponse): _155.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _155.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.MsgCreatePermanentLockedAccount;
                fromPartial(object: Partial<_155.MsgCreatePermanentLockedAccount>): _155.MsgCreatePermanentLockedAccount;
                fromAmino(object: _155.MsgCreatePermanentLockedAccountAmino): _155.MsgCreatePermanentLockedAccount;
                toAmino(message: _155.MsgCreatePermanentLockedAccount): _155.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _155.MsgCreatePermanentLockedAccountAminoMsg): _155.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _155.MsgCreatePermanentLockedAccount): _155.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _155.MsgCreatePermanentLockedAccountProtoMsg): _155.MsgCreatePermanentLockedAccount;
                toProto(message: _155.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _155.MsgCreatePermanentLockedAccount): _155.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _155.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.MsgCreatePermanentLockedAccountResponse;
                fromPartial(_: Partial<_155.MsgCreatePermanentLockedAccountResponse>): _155.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _155.MsgCreatePermanentLockedAccountResponseAmino): _155.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _155.MsgCreatePermanentLockedAccountResponse): _155.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _155.MsgCreatePermanentLockedAccountResponseAminoMsg): _155.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _155.MsgCreatePermanentLockedAccountResponse): _155.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _155.MsgCreatePermanentLockedAccountResponseProtoMsg): _155.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _155.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _155.MsgCreatePermanentLockedAccountResponse): _155.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _155.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.MsgCreatePeriodicVestingAccount;
                fromPartial(object: Partial<_155.MsgCreatePeriodicVestingAccount>): _155.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _155.MsgCreatePeriodicVestingAccountAmino): _155.MsgCreatePeriodicVestingAccount;
                toAmino(message: _155.MsgCreatePeriodicVestingAccount): _155.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _155.MsgCreatePeriodicVestingAccountAminoMsg): _155.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _155.MsgCreatePeriodicVestingAccount): _155.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _155.MsgCreatePeriodicVestingAccountProtoMsg): _155.MsgCreatePeriodicVestingAccount;
                toProto(message: _155.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _155.MsgCreatePeriodicVestingAccount): _155.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _155.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.MsgCreatePeriodicVestingAccountResponse;
                fromPartial(_: Partial<_155.MsgCreatePeriodicVestingAccountResponse>): _155.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _155.MsgCreatePeriodicVestingAccountResponseAmino): _155.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _155.MsgCreatePeriodicVestingAccountResponse): _155.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _155.MsgCreatePeriodicVestingAccountResponseAminoMsg): _155.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _155.MsgCreatePeriodicVestingAccountResponse): _155.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _155.MsgCreatePeriodicVestingAccountResponseProtoMsg): _155.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _155.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _155.MsgCreatePeriodicVestingAccountResponse): _155.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _282.MsgClientImpl;
                };
                authz: {
                    v1beta1: _283.MsgClientImpl;
                };
                bank: {
                    v1beta1: _284.MsgClientImpl;
                };
                consensus: {
                    v1: _285.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _286.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _287.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _288.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _289.MsgClientImpl;
                };
                gov: {
                    v1: _290.MsgClientImpl;
                    v1beta1: _291.MsgClientImpl;
                };
                group: {
                    v1: _292.MsgClientImpl;
                };
                mint: {
                    v1beta1: _293.MsgClientImpl;
                };
                nft: {
                    v1beta1: _294.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _295.MsgClientImpl;
                };
                staking: {
                    v1beta1: _296.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _297.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _298.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _48.QueryConfigRequest): Promise<_48.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _52.QueryAccountsRequest): Promise<_52.QueryAccountsResponse>;
                        account(request: _52.QueryAccountRequest): Promise<_52.QueryAccountResponse>;
                        accountAddressByID(request: _52.QueryAccountAddressByIDRequest): Promise<_52.QueryAccountAddressByIDResponse>;
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        moduleAccounts(request?: _52.QueryModuleAccountsRequest): Promise<_52.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _52.QueryModuleAccountByNameRequest): Promise<_52.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _52.Bech32PrefixRequest): Promise<_52.Bech32PrefixResponse>;
                        addressBytesToString(request: _52.AddressBytesToStringRequest): Promise<_52.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _52.AddressStringToBytesRequest): Promise<_52.AddressStringToBytesResponse>;
                        accountInfo(request: _52.QueryAccountInfoRequest): Promise<_52.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _58.QueryGrantsRequest): Promise<_58.QueryGrantsResponse>;
                        granterGrants(request: _58.QueryGranterGrantsRequest): Promise<_58.QueryGranterGrantsResponse>;
                        granteeGrants(request: _58.QueryGranteeGrantsRequest): Promise<_58.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _61.AppOptionsRequest): Promise<_61.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _66.QueryBalanceRequest): Promise<_66.QueryBalanceResponse>;
                        allBalances(request: _66.QueryAllBalancesRequest): Promise<_66.QueryAllBalancesResponse>;
                        spendableBalances(request: _66.QuerySpendableBalancesRequest): Promise<_66.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _66.QuerySpendableBalanceByDenomRequest): Promise<_66.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _66.QueryTotalSupplyRequest): Promise<_66.QueryTotalSupplyResponse>;
                        supplyOf(request: _66.QuerySupplyOfRequest): Promise<_66.QuerySupplyOfResponse>;
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                        denomMetadata(request: _66.QueryDenomMetadataRequest): Promise<_66.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _66.QueryDenomsMetadataRequest): Promise<_66.QueryDenomsMetadataResponse>;
                        denomOwners(request: _66.QueryDenomOwnersRequest): Promise<_66.QueryDenomOwnersResponse>;
                        sendEnabled(request: _66.QuerySendEnabledRequest): Promise<_66.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _35.ConfigRequest): Promise<_35.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _42.GetNodeInfoRequest): Promise<_42.GetNodeInfoResponse>;
                            getSyncing(request?: _42.GetSyncingRequest): Promise<_42.GetSyncingResponse>;
                            getLatestBlock(request?: _42.GetLatestBlockRequest): Promise<_42.GetLatestBlockResponse>;
                            getBlockByHeight(request: _42.GetBlockByHeightRequest): Promise<_42.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _42.GetLatestValidatorSetRequest): Promise<_42.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _42.GetValidatorSetByHeightRequest): Promise<_42.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _42.ABCIQueryRequest): Promise<_42.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _72.QueryParamsRequest): Promise<_72.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _86.QueryParamsRequest): Promise<_86.QueryParamsResponse>;
                        validatorDistributionInfo(request: _86.QueryValidatorDistributionInfoRequest): Promise<_86.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _86.QueryValidatorOutstandingRewardsRequest): Promise<_86.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _86.QueryValidatorCommissionRequest): Promise<_86.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _86.QueryValidatorSlashesRequest): Promise<_86.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _86.QueryDelegationRewardsRequest): Promise<_86.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _86.QueryDelegationTotalRewardsRequest): Promise<_86.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _86.QueryDelegatorValidatorsRequest): Promise<_86.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _86.QueryDelegatorWithdrawAddressRequest): Promise<_86.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _86.QueryCommunityPoolRequest): Promise<_86.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _91.QueryEvidenceRequest): Promise<_91.QueryEvidenceResponse>;
                        allEvidence(request?: _91.QueryAllEvidenceRequest): Promise<_91.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _96.QueryAllowanceRequest): Promise<_96.QueryAllowanceResponse>;
                        allowances(request: _96.QueryAllowancesRequest): Promise<_96.QueryAllowancesResponse>;
                        allowancesByGranter(request: _96.QueryAllowancesByGranterRequest): Promise<_96.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _103.QueryProposalRequest): Promise<_103.QueryProposalResponse>;
                        proposals(request: _103.QueryProposalsRequest): Promise<_103.QueryProposalsResponse>;
                        vote(request: _103.QueryVoteRequest): Promise<_103.QueryVoteResponse>;
                        votes(request: _103.QueryVotesRequest): Promise<_103.QueryVotesResponse>;
                        params(request: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                        deposit(request: _103.QueryDepositRequest): Promise<_103.QueryDepositResponse>;
                        deposits(request: _103.QueryDepositsRequest): Promise<_103.QueryDepositsResponse>;
                        tallyResult(request: _103.QueryTallyResultRequest): Promise<_103.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _107.QueryProposalRequest): Promise<_107.QueryProposalResponse>;
                        proposals(request: _107.QueryProposalsRequest): Promise<_107.QueryProposalsResponse>;
                        vote(request: _107.QueryVoteRequest): Promise<_107.QueryVoteResponse>;
                        votes(request: _107.QueryVotesRequest): Promise<_107.QueryVotesResponse>;
                        params(request: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        deposit(request: _107.QueryDepositRequest): Promise<_107.QueryDepositResponse>;
                        deposits(request: _107.QueryDepositsRequest): Promise<_107.QueryDepositsResponse>;
                        tallyResult(request: _107.QueryTallyResultRequest): Promise<_107.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _112.QueryGroupInfoRequest): Promise<_112.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _112.QueryGroupPolicyInfoRequest): Promise<_112.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _112.QueryGroupMembersRequest): Promise<_112.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _112.QueryGroupsByAdminRequest): Promise<_112.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _112.QueryGroupPoliciesByGroupRequest): Promise<_112.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _112.QueryGroupPoliciesByAdminRequest): Promise<_112.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _112.QueryProposalRequest): Promise<_112.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _112.QueryProposalsByGroupPolicyRequest): Promise<_112.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _112.QueryVoteByProposalVoterRequest): Promise<_112.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _112.QueryVotesByProposalRequest): Promise<_112.QueryVotesByProposalResponse>;
                        votesByVoter(request: _112.QueryVotesByVoterRequest): Promise<_112.QueryVotesByVoterResponse>;
                        groupsByMember(request: _112.QueryGroupsByMemberRequest): Promise<_112.QueryGroupsByMemberResponse>;
                        tallyResult(request: _112.QueryTallyResultRequest): Promise<_112.QueryTallyResultResponse>;
                        groups(request?: _112.QueryGroupsRequest): Promise<_112.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _118.QueryParamsRequest): Promise<_118.QueryParamsResponse>;
                        inflation(request?: _118.QueryInflationRequest): Promise<_118.QueryInflationResponse>;
                        annualProvisions(request?: _118.QueryAnnualProvisionsRequest): Promise<_118.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _125.QueryBalanceRequest): Promise<_125.QueryBalanceResponse>;
                        owner(request: _125.QueryOwnerRequest): Promise<_125.QueryOwnerResponse>;
                        supply(request: _125.QuerySupplyRequest): Promise<_125.QuerySupplyResponse>;
                        nFTs(request: _125.QueryNFTsRequest): Promise<_125.QueryNFTsResponse>;
                        nFT(request: _125.QueryNFTRequest): Promise<_125.QueryNFTResponse>;
                        class(request: _125.QueryClassRequest): Promise<_125.QueryClassResponse>;
                        classes(request?: _125.QueryClassesRequest): Promise<_125.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _128.GetRequest): Promise<_128.GetResponse>;
                            list(request: _128.ListRequest): Promise<_128.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                        subspaces(request?: _133.QuerySubspacesRequest): Promise<_133.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _137.QueryParamsRequest): Promise<_137.QueryParamsResponse>;
                        signingInfo(request: _137.QuerySigningInfoRequest): Promise<_137.QuerySigningInfoResponse>;
                        signingInfos(request?: _137.QuerySigningInfosRequest): Promise<_137.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _143.QueryValidatorsRequest): Promise<_143.QueryValidatorsResponse>;
                        validator(request: _143.QueryValidatorRequest): Promise<_143.QueryValidatorResponse>;
                        validatorDelegations(request: _143.QueryValidatorDelegationsRequest): Promise<_143.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _143.QueryValidatorUnbondingDelegationsRequest): Promise<_143.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _143.QueryDelegationRequest): Promise<_143.QueryDelegationResponse>;
                        unbondingDelegation(request: _143.QueryUnbondingDelegationRequest): Promise<_143.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _143.QueryDelegatorDelegationsRequest): Promise<_143.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _143.QueryDelegatorUnbondingDelegationsRequest): Promise<_143.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _143.QueryRedelegationsRequest): Promise<_143.QueryRedelegationsResponse>;
                        delegatorValidators(request: _143.QueryDelegatorValidatorsRequest): Promise<_143.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _143.QueryDelegatorValidatorRequest): Promise<_143.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _143.QueryHistoricalInfoRequest): Promise<_143.QueryHistoricalInfoResponse>;
                        pool(request?: _143.QueryPoolRequest): Promise<_143.QueryPoolResponse>;
                        params(request?: _143.QueryParamsRequest): Promise<_143.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _148.SimulateRequest): Promise<_148.SimulateResponse>;
                        getTx(request: _148.GetTxRequest): Promise<_148.GetTxResponse>;
                        broadcastTx(request: _148.BroadcastTxRequest): Promise<_148.BroadcastTxResponse>;
                        getTxsEvent(request: _148.GetTxsEventRequest): Promise<_148.GetTxsEventResponse>;
                        getBlockWithTxs(request: _148.GetBlockWithTxsRequest): Promise<_148.GetBlockWithTxsResponse>;
                        txDecode(request: _148.TxDecodeRequest): Promise<_148.TxDecodeResponse>;
                        txEncode(request: _148.TxEncodeRequest): Promise<_148.TxEncodeResponse>;
                        txEncodeAmino(request: _148.TxEncodeAminoRequest): Promise<_148.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _148.TxDecodeAminoRequest): Promise<_148.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _151.QueryCurrentPlanRequest): Promise<_151.QueryCurrentPlanResponse>;
                        appliedPlan(request: _151.QueryAppliedPlanRequest): Promise<_151.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _151.QueryUpgradedConsensusStateRequest): Promise<_151.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _151.QueryModuleVersionsRequest): Promise<_151.QueryModuleVersionsResponse>;
                        authority(request?: _151.QueryAuthorityRequest): Promise<_151.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _241.LCDQueryClient;
                };
                authz: {
                    v1beta1: _242.LCDQueryClient;
                };
                bank: {
                    v1beta1: _243.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _244.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _245.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _246.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _247.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _248.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _249.LCDQueryClient;
                };
                gov: {
                    v1: _250.LCDQueryClient;
                    v1beta1: _251.LCDQueryClient;
                };
                group: {
                    v1: _252.LCDQueryClient;
                };
                mint: {
                    v1beta1: _253.LCDQueryClient;
                };
                nft: {
                    v1beta1: _254.LCDQueryClient;
                };
                params: {
                    v1beta1: _255.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _256.LCDQueryClient;
                };
                staking: {
                    v1beta1: _257.LCDQueryClient;
                };
                tx: {
                    v1beta1: _258.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _259.LCDQueryClient;
                };
            };
        }>;
    };
}
