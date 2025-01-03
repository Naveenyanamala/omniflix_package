import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.collection = this.collection.bind(this);
        this.iBCCollection = this.iBCCollection.bind(this);
        this.denom = this.denom.bind(this);
        this.iBCDenom = this.iBCDenom.bind(this);
        this.denoms = this.denoms.bind(this);
        this.oNFT = this.oNFT.bind(this);
        this.iBCDenomONFT = this.iBCDenomONFT.bind(this);
        this.ownerONFTs = this.ownerONFTs.bind(this);
        this.ownerIBCDenomONFTs = this.ownerIBCDenomONFTs.bind(this);
        this.supply = this.supply.bind(this);
        this.iBCDenomSupply = this.iBCDenomSupply.bind(this);
        this.params = this.params.bind(this);
    }
    /* Collection */
    async collection(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/onft/v1beta1/collections/${params.denomId}`;
        return await this.req.get(endpoint, options);
    }
    /* IBCCollection */
    async iBCCollection(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/onft/v1beta1/collections/ibc/${params.hash}`;
        return await this.req.get(endpoint, options);
    }
    /* Denom */
    async denom(params) {
        const endpoint = `omniflix/onft/v1beta1/denoms/${params.denomId}`;
        return await this.req.get(endpoint);
    }
    /* IBCDenom */
    async iBCDenom(params) {
        const endpoint = `omniflix/onft/v1beta1/denoms/ibc/${params.hash}`;
        return await this.req.get(endpoint);
    }
    /* Denoms */
    async denoms(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        const endpoint = `omniflix/onft/v1beta1/denoms`;
        return await this.req.get(endpoint, options);
    }
    /* ONFT */
    async oNFT(params) {
        const endpoint = `omniflix/onft/v1beta1/denoms/${params.denomId}/onfts/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* IBCDenomONFT */
    async iBCDenomONFT(params) {
        const endpoint = `omniflix/onft/v1beta1/denoms/ibc/${params.hash}/onfts/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* OwnerONFTs */
    async ownerONFTs(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/onft/v1beta1/onfts/${params.denomId}/${params.owner}`;
        return await this.req.get(endpoint, options);
    }
    /* OwnerIBCDenomONFTs */
    async ownerIBCDenomONFTs(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/onft/v1beta1/onfts/ibc/${params.hash}/${params.owner}`;
        return await this.req.get(endpoint, options);
    }
    /* Supply */
    async supply(params) {
        const options = {
            params: {}
        };
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        const endpoint = `omniflix/onft/v1beta1/denoms/${params.denomId}/supply`;
        return await this.req.get(endpoint, options);
    }
    /* IBCDenomSupply */
    async iBCDenomSupply(params) {
        const options = {
            params: {}
        };
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        const endpoint = `omniflix/onft/v1beta1/denoms/ibc/${params.hash}/supply`;
        return await this.req.get(endpoint, options);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `omniflix/onft/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map