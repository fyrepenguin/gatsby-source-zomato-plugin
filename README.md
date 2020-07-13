# `gatsby-source-zomato-plugin`

Pulls data from zomato api based on city

## Example

In your gatsby config

```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-zomato-plugin",
      options: {
        // get this at https://developers.zomato.com/api
        apiKey: "your_api_key",
        collection_id: collection_id, // default value is '1'
        entity_id: entity_id,
        entity_type: entity_type, //default value is 'city'
      },
    },
  ],
}
```
