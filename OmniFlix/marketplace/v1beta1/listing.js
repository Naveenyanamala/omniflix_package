import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { Decimal } from "@cosmjs/math";
function createBaseListing() {
    return {
        id: "",
        nftId: "",
        denomId: "",
        price: Coin.fromPartial({}),
        owner: "",
        splitShares: []
    };
}
export const Listing = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Listing",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.nftId !== "") {
            writer.uint32(18).string(message.nftId);
        }
        if (message.denomId !== "") {
            writer.uint32(26).string(message.denomId);
        }
        if (message.price !== undefined) {
            Coin.encode(message.price, writer.uint32(34).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        for (const v of message.splitShares) {
            WeightedAddress.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListing();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.nftId = reader.string();
                    break;
                case 3:
                    message.denomId = reader.string();
                    break;
                case 4:
                    message.price = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.splitShares.push(WeightedAddress.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseListing();
        message.id = object.id ?? "";
        message.nftId = object.nftId ?? "";
        message.denomId = object.denomId ?? "";
        message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
        message.owner = object.owner ?? "";
        message.splitShares = object.splitShares?.map(e => WeightedAddress.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListing();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.denom_id !== undefined && object.denom_id !== null) {
            message.denomId = object.denom_id;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Coin.fromAmino(object.price);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.splitShares = object.split_shares?.map(e => WeightedAddress.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.denom_id = message.denomId === "" ? undefined : message.denomId;
        obj.price = message.price ? Coin.toAmino(message.price) : undefined;
        obj.owner = message.owner === "" ? undefined : message.owner;
        if (message.splitShares) {
            obj.split_shares = message.splitShares.map(e => e ? WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.split_shares = message.splitShares;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Listing.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Listing.decode(message.value);
    },
    toProto(message) {
        return Listing.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.Listing",
            value: Listing.encode(message).finish()
        };
    }
};
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
export const WeightedAddress = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.WeightedAddress",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return WeightedAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.WeightedAddress",
            value: WeightedAddress.encode(message).finish()
        };
    }
};
//# sourceMappingURL=listing.js.map