// Re-export the message types for easy access
export * from './OmniFlix/onft/v1beta1/tx.js';
export * from './osmosis/tokenfactory/v1beta1/tx.js';

// Import the specific message types for registry
import {
    MsgBurnONFT,
    MsgCreateDenom,
    MsgMintONFT,
    MsgTransferDenom,
    MsgTransferONFT,
    MsgUpdateDenom,
} from './OmniFlix/onft/v1beta1/tx.js';

export const customRegistry = [
    {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgCreateDenom',
        type: MsgCreateDenom,
    },
    {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgUpdateDenom',
        type: MsgUpdateDenom,
    },
    {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgTransferDenom',
        type: MsgTransferDenom,
    },
    {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgMintONFT',
        type: MsgMintONFT,
    },
    {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgTransferONFT',
        type: MsgTransferONFT,
    },
    {
        typeUrl: '/OmniFlix.onft.v1beta1.MsgBurnONFT',
        type: MsgBurnONFT,
    }
];

export const getSigningOmniflixClient = (SigningStargateClient, defaultRegistryTypes) => {
    return class SigningOmniflixClient extends SigningStargateClient {
        constructor(client) {
            super(client);
            this.registry = [...defaultRegistryTypes, ...customRegistry];
        }
    };
};
