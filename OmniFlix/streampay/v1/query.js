import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { StreamPayment } from "./streampay";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
function createBaseQueryStreamPaymentsRequest() {
    return {
        sender: "",
        recipient: "",
        pagination: undefined
    };
}
export const QueryStreamPaymentsRequest = {
    typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamPaymentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamPaymentsRequest();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamPaymentsRequest();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStreamPaymentsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStreamPaymentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryStreamPaymentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsRequest",
            value: QueryStreamPaymentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStreamPaymentsResponse() {
    return {
        streamPayments: [],
        pagination: undefined
    };
}
export const QueryStreamPaymentsResponse = {
    typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.streamPayments) {
            StreamPayment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamPaymentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamPayments.push(StreamPayment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamPaymentsResponse();
        message.streamPayments = object.streamPayments?.map(e => StreamPayment.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamPaymentsResponse();
        message.streamPayments = object.stream_payments?.map(e => StreamPayment.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.streamPayments) {
            obj.stream_payments = message.streamPayments.map(e => e ? StreamPayment.toAmino(e) : undefined);
        }
        else {
            obj.stream_payments = message.streamPayments;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStreamPaymentsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStreamPaymentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryStreamPaymentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentsResponse",
            value: QueryStreamPaymentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryStreamPaymentRequest() {
    return {
        id: ""
    };
}
export const QueryStreamPaymentRequest = {
    typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamPaymentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamPaymentRequest();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamPaymentRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStreamPaymentRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStreamPaymentRequest.decode(message.value);
    },
    toProto(message) {
        return QueryStreamPaymentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentRequest",
            value: QueryStreamPaymentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStreamPaymentResponse() {
    return {
        streamPayment: undefined
    };
}
export const QueryStreamPaymentResponse = {
    typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.streamPayment !== undefined) {
            StreamPayment.encode(message.streamPayment, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStreamPaymentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamPayment = StreamPayment.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryStreamPaymentResponse();
        message.streamPayment = object.streamPayment !== undefined && object.streamPayment !== null ? StreamPayment.fromPartial(object.streamPayment) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryStreamPaymentResponse();
        if (object.stream_payment !== undefined && object.stream_payment !== null) {
            message.streamPayment = StreamPayment.fromAmino(object.stream_payment);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stream_payment = message.streamPayment ? StreamPayment.toAmino(message.streamPayment) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStreamPaymentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStreamPaymentResponse.decode(message.value);
    },
    toProto(message) {
        return QueryStreamPaymentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.QueryStreamPaymentResponse",
            value: QueryStreamPaymentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/OmniFlix.streampay.v1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryParamsResponse = {
    typeUrl: "/OmniFlix.streampay.v1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
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
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map