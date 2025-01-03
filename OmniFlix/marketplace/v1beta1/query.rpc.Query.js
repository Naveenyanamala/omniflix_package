import { BinaryReader } from "../../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryListingsRequest, QueryListingsResponse, QueryListingRequest, QueryListingResponse, QueryListingsByOwnerRequest, QueryListingsByOwnerResponse, QueryListingsByPriceDenomRequest, QueryListingsByPriceDenomResponse, QueryListingByNFTIDRequest, QueryAuctionsRequest, QueryAuctionsResponse, QueryAuctionRequest, QueryAuctionResponse, QueryAuctionsByOwnerRequest, QueryAuctionsByPriceDenomRequest, QueryAuctionByNFTIDRequest, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
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
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
    listings(request) {
        const data = QueryListingsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listings", data);
        return promise.then(data => QueryListingsResponse.decode(new BinaryReader(data)));
    }
    listing(request) {
        const data = QueryListingRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Listing", data);
        return promise.then(data => QueryListingResponse.decode(new BinaryReader(data)));
    }
    listingsByOwner(request) {
        const data = QueryListingsByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByOwner", data);
        return promise.then(data => QueryListingsByOwnerResponse.decode(new BinaryReader(data)));
    }
    listingsByPriceDenom(request) {
        const data = QueryListingsByPriceDenomRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingsByPriceDenom", data);
        return promise.then(data => QueryListingsByPriceDenomResponse.decode(new BinaryReader(data)));
    }
    listingByNftId(request) {
        const data = QueryListingByNFTIDRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "ListingByNftId", data);
        return promise.then(data => QueryListingResponse.decode(new BinaryReader(data)));
    }
    auctions(request) {
        const data = QueryAuctionsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auctions", data);
        return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
    }
    auction(request) {
        const data = QueryAuctionRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Auction", data);
        return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
    }
    auctionsByOwner(request) {
        const data = QueryAuctionsByOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByOwner", data);
        return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
    }
    auctionsByPriceDenom(request) {
        const data = QueryAuctionsByPriceDenomRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionsByPriceDenom", data);
        return promise.then(data => QueryAuctionsResponse.decode(new BinaryReader(data)));
    }
    auctionByNftId(request) {
        const data = QueryAuctionByNFTIDRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "AuctionByNftId", data);
        return promise.then(data => QueryAuctionResponse.decode(new BinaryReader(data)));
    }
    bids(request) {
        const data = QueryBidsRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bids", data);
        return promise.then(data => QueryBidsResponse.decode(new BinaryReader(data)));
    }
    bid(request) {
        const data = QueryBidRequest.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Query", "Bid", data);
        return promise.then(data => QueryBidResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        listings(request) {
            return queryService.listings(request);
        },
        listing(request) {
            return queryService.listing(request);
        },
        listingsByOwner(request) {
            return queryService.listingsByOwner(request);
        },
        listingsByPriceDenom(request) {
            return queryService.listingsByPriceDenom(request);
        },
        listingByNftId(request) {
            return queryService.listingByNftId(request);
        },
        auctions(request) {
            return queryService.auctions(request);
        },
        auction(request) {
            return queryService.auction(request);
        },
        auctionsByOwner(request) {
            return queryService.auctionsByOwner(request);
        },
        auctionsByPriceDenom(request) {
            return queryService.auctionsByPriceDenom(request);
        },
        auctionByNftId(request) {
            return queryService.auctionByNftId(request);
        },
        bids(request) {
            return queryService.bids(request);
        },
        bid(request) {
            return queryService.bid(request);
        }
    };
};
//# sourceMappingURL=query.rpc.Query.js.map