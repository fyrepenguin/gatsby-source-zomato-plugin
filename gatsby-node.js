
// get data from zomato api
const axios = require('axios')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, options) => {
  const { apiKey, collection_id = 1, entity_id, entity_type = 'city' } = options
  const { createNode } = actions
  const { data } = await axios({
    method: 'GET',
    headers: {
      "user-key": apiKey
    },
    url: 'https://developers.zomato.com/api/v2.1/search',
    params: {
      "entity_id": entity_id,
      "entity_type": entity_type,
      "collection_id": collection_id
    }
  }).catch(err => console.log(err.message));

  const restaurants = data.restaurants
  restaurants.forEach(res => {
    createNode({
      ...res,
      id: createNodeId(`Restaurant-${res.restaurant.id}`),
      internal: {
        type: 'Restaurant',
        contentDigest: createContentDigest(res)
      }
    })
  })
}