import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import aa from "search-insights";
import { searchBox, hits, pagination, refinementList, configure, rangeSlider } from 'instantsearch.js/es/widgets';
import resultHit from '../templates/result-hit';
import dotenv from 'dotenv';

dotenv.config({ path: new URL('../../.env', import.meta.url) })

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {

    // Initialise Search Insights and persist userToken for personalisation
    aa("init", {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      useCookie: true,
    });

    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
      insights: true,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        enablePersonalization: true,
        personalizationImpact: 75,
      }),
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {
          item: resultHit,
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
      // adding price range slider for improved UX
      rangeSlider({
        container: '#price-facet',
        attribute: 'price',
        pips: false})
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
    
    
  }
}

export default ResultPage;
