import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as osmosisTokenfactoryV1beta1TxRegistry from "./tokenfactory/v1beta1/tx.registry";
import * as osmosisTokenfactoryV1beta1TxAmino from "./tokenfactory/v1beta1/tx.amino";
export const osmosisAminoConverters = {
    ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter
};
export const osmosisProtoRegistry = [...osmosisTokenfactoryV1beta1TxRegistry.registry];
export const getSigningOsmosisClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...osmosisProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...osmosisAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningOsmosisClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningOsmosisClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
//# sourceMappingURL=client.js.map