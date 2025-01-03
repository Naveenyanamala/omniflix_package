import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
  maxCampaignDuration: Duration;
  creationFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/OmniFlix.itc.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  max_campaign_duration?: DurationAmino;
  creation_fee?: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/OmniFlix.itc.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  max_campaign_duration: DurationSDKType;
  creation_fee: CoinSDKType;
}
function createBaseParams(): Params {
  return {
    maxCampaignDuration: Duration.fromPartial({}),
    creationFee: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/OmniFlix.itc.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxCampaignDuration !== undefined) {
      Duration.encode(message.maxCampaignDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(18).fork()).ldelim();
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
          message.maxCampaignDuration = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.creationFee = Coin.decode(reader, reader.uint32());
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
    message.maxCampaignDuration = object.maxCampaignDuration !== undefined && object.maxCampaignDuration !== null ? Duration.fromPartial(object.maxCampaignDuration) : undefined;
    message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_campaign_duration !== undefined && object.max_campaign_duration !== null) {
      message.maxCampaignDuration = Duration.fromAmino(object.max_campaign_duration);
    }
    if (object.creation_fee !== undefined && object.creation_fee !== null) {
      message.creationFee = Coin.fromAmino(object.creation_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_campaign_duration = message.maxCampaignDuration ? Duration.toAmino(message.maxCampaignDuration) : undefined;
    obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
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
      typeUrl: "/OmniFlix.itc.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};