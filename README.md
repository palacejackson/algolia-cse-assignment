# Algolia Solutions Assignment

This repo contains my completed CSE assignment.

## Requirements
- Node.js (v16+ recommended)
- An Algolia account

## Getting Started

### 1. Install dependencies
    npm install

### 2. Configure environment variables
Copy `.env.test` and rename it `.env`

Set the following values in `.env`:
   - ALGOLIA_APP_ID=your_app_id
   - ALGOLIA_API_KEY=your_admin_api_key
   - ALGOLIA_INDEX=your_index_name

### 3. Run the data upload script
    node scrips/uploadProducts.js

This script:
- Reads `products.json`
- Applies a 20% discount to all products in the **Cameras & Camcorders** category
- Rounds prices down to the nearest whole number
- Uploads the transformed data to Algolia

### 4. Run the index settings script

    node scripts/setSettings.js

This script:
- Sets searchable attribues
- Sets attributesForFaceting
- Sets custom ranking attibutes

### 5. Run the frontend
    npm start

The UI will query the Algolia index and send view, click and conversion events.
