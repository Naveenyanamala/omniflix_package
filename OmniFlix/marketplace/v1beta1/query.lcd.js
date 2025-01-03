import { setPaginationParams } from "../../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.listings = this.listings.bind(this);
        this.listing = this.listing.bind(this);
        this.listingsByOwner = this.listingsByOwner.bind(this);
        this.listingsByPriceDenom = this.listingsByPriceDenom.bind(this);
        this.listingByNftId = this.listingByNftId.bind(this);
        this.auctions = this.auctions.bind(this);
        this.auction = this.auction.bind(this);
        this.auctionsByOwner = this.auctionsByOwner.bind(this);
        this.auctionsByPriceDenom = this.auctionsByPriceDenom.bind(this);
        this.auctionByNftId = this.auctionByNftId.bind(this);
        this.bids = this.bids.bind(this);
        this.bid = this.bid.bind(this);
    }
    /* Params queries params of the marketplace module. */
    async params(_params = {}) {
        const endpoint = `omniflix/marketplace/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* Listings */
    async listings(params) {
        const options = {
            params: {}
        };
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        if (typeof params?.priceDenom !== "undefined") {
            options.params.price_denom = params.priceDenom;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/listings`;
        return await this.req.get(endpoint, options);
    }
    /* Listing */
    async listing(params) {
        const endpoint = `omniflix/marketplace/v1beta1/listings/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* ListingsByOwner */
    async listingsByOwner(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/listings-by-owner/${params.owner}`;
        return await this.req.get(endpoint, options);
    }
    /* ListingsByPriceDenom */
    async listingsByPriceDenom(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/listings-by-price-denom/${params.priceDenom}`;
        return await this.req.get(endpoint, options);
    }
    /* ListingByNftId */
    async listingByNftId(params) {
        const endpoint = `omniflix/marketplace/v1beta1/listing-by-nft/${params.nftId}`;
        return await this.req.get(endpoint);
    }
    /* auction queries */
    async auctions(params) {
        const options = {
            params: {}
        };
        if (typeof params?.status !== "undefined") {
            options.params.status = params.status;
        }
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        if (typeof params?.priceDenom !== "undefined") {
            options.params.price_denom = params.priceDenom;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/auctions`;
        return await this.req.get(endpoint, options);
    }
    /* Auction */
    async auction(params) {
        const endpoint = `omniflix/marketplace/v1beta1/auctions/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* AuctionsByOwner */
    async auctionsByOwner(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/auctions-by-owner/${params.owner}`;
        return await this.req.get(endpoint, options);
    }
    /* AuctionsByPriceDenom */
    async auctionsByPriceDenom(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/auctions-by-price-denom/${params.priceDenom}`;
        return await this.req.get(endpoint, options);
    }
    /* AuctionByNftId */
    async auctionByNftId(params) {
        const endpoint = `omniflix/marketplace/v1beta1/auction-by-nft/${params.nftId}`;
        return await this.req.get(endpoint);
    }
    /* Bids */
    async bids(params) {
        const options = {
            params: {}
        };
        if (typeof params?.bidder !== "undefined") {
            options.params.bidder = params.bidder;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `omniflix/marketplace/v1beta1/bids`;
        return await this.req.get(endpoint, options);
    }
    /* Bid */
    async bid(params) {
        const endpoint = `omniflix/marketplace/v1beta1/bids/${params.id}`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map