export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `omniflix/alloc/v1beta1/params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map