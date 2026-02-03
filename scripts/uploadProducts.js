import fs from 'fs';
import algoliasearch from 'algoliasearch';
import dotenv from 'dotenv';

dotenv.config({ path: new URL('../.env', import.meta.url) })

const appID = process.env.ALGOLIA_APP_ID;
const apiKey = process.env.ALGOLIA_API_KEY;
const indexName = process.env.ALGOLIA_INDEX;

const client = algoliasearch(appID, apiKey);
const index = client.initIndex(indexName);

(async () => {
  try {
    const rawData = fs.readFileSync(
      new URL('../data/products.json', import.meta.url),
      'utf8'
    );
    let products = JSON.parse(rawData);

    // check for camera category

    const CAMERA_CATEGORY = "cameras & camcorders";

    function isCameraProduct(product) {
      const { categories } = product;

      // for cases where categories attribute is an array

      if (Array.isArray(categories)) {
        return categories.some(
          (c) =>
            typeof c === "string" &&
            c.toLowerCase() === CAMERA_CATEGORY
        );
      }

      // in case categories atribute is a standalone string

      if (typeof categories === "string") {
        return categories.toLowerCase() === CAMERA_CATEGORY;
      }

      return false;
    }

    let discountedCount = 0;

    // apply 20% discount 

    products = products.map((product) => {
      //     const isCameraProduct =
      // Array.isArray(product.categories) &&
      // product.categories.some((c) => typeof c === "string" && c.toLowerCase() === "cameras & camcorders");

      if (isCameraProduct(product) && Number.isFinite(product.price)) {
        discountedCount++;
        return {
          ...product,
          price: Math.floor(product.price * 0.8),
        };
      }

      return product;
    });

    await index.saveObjects(products);
    console.log(`${products.length} products uploaded successfully with ${discountedCount} discounted camera products`);

  } catch (err) {
    console.error('Upload failed:', err);
    process.exit(1);
  }
})();
