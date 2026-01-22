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
    await index.setSettings({
      attributesForFaceting: [
        'brand',
        'categories',
        'price',
        'type' // to use for personalization
      ],
      searchableAttributes: [
        'categories',
        'brand',
        'name'
      ],
      customRanking: [
        'desc(popularity)',
        'desc(rating)'
      ]
    });
    
    console.log('Settings updated successfully');
    
  } catch (err) {
    console.error('Settings update failed:', err);
    process.exit(1);
  }
})(); 