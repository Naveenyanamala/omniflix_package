import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.campaigns = this.campaigns.bind(this);
        this.campaign = this.campaign.bind(this);
        this.claims = this.claims.bind(this);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `omniflix/itc/v1/params`;
        return await this.req.get(endpoint);
    }
    /* Campaigns */
    async campaigns(params) {
        const options = {
            params: {}
        };
        if (typeof params?.status !== "undefined") {
            options.params.status = params.status;
        }
        if (typeof params?.creator !== "undefined") {
            options.params.creator = params.creator;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/itc/v1/campaigns`;
        return await this.req.get(endpoint, options);
    }
    /* Campaign */
    async campaign(params) {
        const endpoint = `omniflix/itc/v1/campaigns/${params.campaignId}`;
        return await this.req.get(endpoint);
    }
    /* Claims */
    async claims(params) {
        const options = {
            params: {}
        };
        if (typeof params?.campaignId !== "undefined") {
            options.params.campaign_id = params.campaignId;
        }
        if (typeof params?.address !== "undefined") {
            options.params.address = params.address;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/itc/v1/claims`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map