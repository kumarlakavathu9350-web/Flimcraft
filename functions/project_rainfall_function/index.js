const { zcAuth } = require('@zcatalyst/auth');
const { Cache } = require('@zcatalyst/cache');
/**
 * 
 * @param {import('./types/basicio').Context} context 
 * @param {import('./types/basicio').BasicIO} basicIO 
 */
module.exports = async (context, basicIO) => {
	/* 
        BASICIO FUNCTIONALITIES
    */
	basicIO.write('Hello from index.js'); //response stream (accepts only string, throws error if other than string)
	basicIO.getArgument('argument1'); // returns QUERY_PARAM[argument1] || BODY_JSON[argument1] (takes argument from query and body, first preference to query)
	/* 
        CONTEXT FUNCTIONALITIES
    */
	// Initialize the Catalyst app instance
	const app = await zcAuth.init(context);

	// Initialize cache instance
	const cache = new Cache();

	// Get all cache segments
	const cacheResponse = await cache.getAllSegment();
	console.log('Cache Response:', cacheResponse);

	console.log('successfully executed basicio functions');
	context.close(); //end of application
};
