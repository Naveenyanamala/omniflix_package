# OmniFlix JavaScript SDK

A JavaScript SDK for interacting with the OmniFlix blockchain. This package provides functionality for NFT operations on the OmniFlix network.

## Installation

```bash
npm install @naveenyanamala/omniflix-js-sdk
```

## Features

- NFT Denom Creation
- NFT Minting
- Marketplace Operations
- ITC Operations

## Usage

```javascript
import { MsgCreateDenom } from '@naveenyanamala/omniflix-js-sdk/OmniFlix/onft/v1beta1/tx.js';

// Example: Create NFT Denom
const denom = MsgCreateDenom.fromPartial({
    id: "your-denom-id",
    symbol: "ONFT",
    name: "Your Collection Name",
    description: "Your Collection Description",
    preview_uri: "https://your-preview-uri.com",
    creator: "your-creator-address"
});
```

## License

MIT
