import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({ restEndpoint }) => {
    const requestClient = new LCDClient({
        restEndpoint
    });
    return {
        cosmos: {
            auth: {
                v1beta1: new (await import("./auth/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            authz: {
                v1beta1: new (await import("./authz/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            bank: {
                v1beta1: new (await import("./bank/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            base: {
                node: {
                    v1beta1: new (await import("./base/node/v1beta1/query.lcd")).LCDQueryClient({
                        requestClient
                    })
                },
                tendermint: {
                    v1beta1: new (await import("./base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
                        requestClient
                    })
                }
            },
            consensus: {
                v1: new (await import("./consensus/v1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            distribution: {
                v1beta1: new (await import("./distribution/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            evidence: {
                v1beta1: new (await import("./evidence/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            feegrant: {
                v1beta1: new (await import("./feegrant/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            gov: {
                v1: new (await import("./gov/v1/query.lcd")).LCDQueryClient({
                    requestClient
                }),
                v1beta1: new (await import("./gov/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            group: {
                v1: new (await import("./group/v1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            mint: {
                v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            nft: {
                v1beta1: new (await import("./nft/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            params: {
                v1beta1: new (await import("./params/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            slashing: {
                v1beta1: new (await import("./slashing/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            staking: {
                v1beta1: new (await import("./staking/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            tx: {
                v1beta1: new (await import("./tx/v1beta1/service.lcd")).LCDQueryClient({
                    requestClient
                })
            },
            upgrade: {
                v1beta1: new (await import("./upgrade/v1beta1/query.lcd")).LCDQueryClient({
                    requestClient
                })
            }
        }
    };
};
//# sourceMappingURL=lcd.js.map