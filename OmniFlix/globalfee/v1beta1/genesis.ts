import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState - initial state of module */
export interface GenesisState {
  /** Params of this module */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/OmniFlix.globalfee.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState - initial state of module */
export interface GenesisStateAmino {
  /** Params of this module */
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/OmniFlix.globalfee.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
  /**
   * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
   * When multiple coins are defined then they are accepted alternatively.
   * The list must be sorted by denoms asc. No duplicate denoms or zero amount
   * values allowed. For more information see
   * https://docs.cosmos.network/main/modules/auth#concepts
   */
  minimumGasPrices: DecCoin[];
  /**
   * bypass_min_fee_msg_types defines a list of message type urls
   * that are free of fee charge.
   */
  bypassMinFeeMsgTypes: string[];
  /**
   * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
   * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
   * to bypass fee charge.
   */
  maxTotalBypassMinFeeMsgGasUsage: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.globalfee.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
  /**
   * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
   * When multiple coins are defined then they are accepted alternatively.
   * The list must be sorted by denoms asc. No duplicate denoms or zero amount
   * values allowed. For more information see
   * https://docs.cosmos.network/main/modules/auth#concepts
   */
  minimum_gas_prices?: DecCoinAmino[];
  /**
   * bypass_min_fee_msg_types defines a list of message type urls
   * that are free of fee charge.
   */
  bypass_min_fee_msg_types?: string[];
  /**
   * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
   * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
   * to bypass fee charge.
   */
  max_total_bypass_min_fee_msg_gas_usage?: string;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.globalfee.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
  minimum_gas_prices: DecCoinSDKType[];
  bypass_min_fee_msg_types: string[];
  max_total_bypass_min_fee_msg_gas_usage: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/OmniFlix.globalfee.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/OmniFlix.globalfee.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    minimumGasPrices: [],
    bypassMinFeeMsgTypes: [],
    maxTotalBypassMinFeeMsgGasUsage: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/OmniFlix.globalfee.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bypassMinFeeMsgTypes) {
      writer.uint32(18).string(v!);
    }
    if (message.maxTotalBypassMinFeeMsgGasUsage !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxTotalBypassMinFeeMsgGasUsage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.bypassMinFeeMsgTypes.push(reader.string());
          break;
        case 3:
          message.maxTotalBypassMinFeeMsgGasUsage = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map(e => e) || [];
    message.maxTotalBypassMinFeeMsgGasUsage = object.maxTotalBypassMinFeeMsgGasUsage !== undefined && object.maxTotalBypassMinFeeMsgGasUsage !== null ? BigInt(object.maxTotalBypassMinFeeMsgGasUsage.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.minimumGasPrices = object.minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
    message.bypassMinFeeMsgTypes = object.bypass_min_fee_msg_types?.map(e => e) || [];
    if (object.max_total_bypass_min_fee_msg_gas_usage !== undefined && object.max_total_bypass_min_fee_msg_gas_usage !== null) {
      message.maxTotalBypassMinFeeMsgGasUsage = BigInt(object.max_total_bypass_min_fee_msg_gas_usage);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.minimumGasPrices) {
      obj.minimum_gas_prices = message.minimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.minimum_gas_prices = message.minimumGasPrices;
    }
    if (message.bypassMinFeeMsgTypes) {
      obj.bypass_min_fee_msg_types = message.bypassMinFeeMsgTypes.map(e => e);
    } else {
      obj.bypass_min_fee_msg_types = message.bypassMinFeeMsgTypes;
    }
    obj.max_total_bypass_min_fee_msg_gas_usage = message.maxTotalBypassMinFeeMsgGasUsage !== BigInt(0) ? message.maxTotalBypassMinFeeMsgGasUsage?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/OmniFlix.globalfee.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};