export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
        this.denomsFromCreator = this.denomsFromCreator.bind(this);
    }
    /* Params defines a gRPC query method that returns the tokenfactory module's
     parameters. */
    async params(_params = {}) {
        const endpoint = `osmosis/tokenfactory/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* DenomAuthorityMetadata defines a gRPC query method for fetching
     DenomAuthorityMetadata for a particular denom. */
    async denomAuthorityMetadata(params) {
        const endpoint = `osmosis/tokenfactory/v1beta1/denoms/${params.denom}/authority_metadata`;
        return await this.req.get(endpoint);
    }
    /* DenomsFromCreator defines a gRPC query method for fetching all
     denominations created by a specific admin/creator. */
    async denomsFromCreator(params) {
        const endpoint = `osmosis/tokenfactory/v1beta1/denoms_from_creator/${params.creator}`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map