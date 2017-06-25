# URL shortener Microservice

[freeCodeCamp Backend challenge 4/5](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)

## API

```
GET /api/imagesearch/:search?offset=offset

GET /api/imagesearch/latest
```


---
## User stories:

1. User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2. User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.

3. User Story: I can get a list of the most recently submitted search strings.


----
## Example usage (Search):

```
http://image-search-4000.herokuapp.com/api/imagesearch/kittens?offest=2

```

----
## Example output:

```js
[{
    altText: "Cute Kittens - Pictures - The Wondrous Pics",
    imageUrl: "http://www.bing.com/cr?IG=1C2C2970FC024D36A8A1F49E87082915&CID=1C2317BD75F96C953B271D1174FF6DFE&rd=1&h=2d4JKfMT9y-P0563vcilWs4ub66iJl0q4zac-VUQfXA&v=1&r=http%3a%2f%2fwondrouspics.com%2fwp-content%2fuploads%2f2011%2f12%2fRagdoll_kittens.jpg&p=DevEx,5008.1",
    pageUrl: "http://www.bing.com/cr?IG=1C2C2970FC024D36A8A1F49E87082915&CID=1C2317BD75F96C953B271D1174FF6DFE&rd=1&h=WifyAUomU7VtC5-xPakLkLrB_e652tiv-5-XfGDDLW4&v=1&r=http%3a%2f%2fwondrouspics.com%2fcute-kittens-pictures%2f&p=DevEx,5007.1"
  },
  {
    altText: "Kittens Wallpapers | Fun Animals Wiki, Videos, Pictures, Stories",
    imageUrl: "http://www.bing.com/cr?IG=1C2C2970FC024D36A8A1F49E87082915&CID=1C2317BD75F96C953B271D1174FF6DFE&rd=1&h=HUtihmfdbJZI-wJSde7I2PFNd16smiTFIoMW-GZ18AM&v=1&r=http%3a%2f%2f1.bp.blogspot.com%2f-xzYw9bwU11s%2fT_VUmLlVG2I%2fAAAAAAAAD1o%2fRFswfHEUtAk%2fs1600%2fKittens%2bwallpapers%2b2.jpg&p=DevEx,5014.1",
    pageUrl: "http://www.bing.com/cr?IG=1C2C2970FC024D36A8A1F49E87082915&CID=1C2317BD75F96C953B271D1174FF6DFE&rd=1&h=-BiQJyTwQFS_RvKxMgv7iLpBG7-4GrdPTAmWIN5oCec&v=1&r=http%3a%2f%2fanimaltheory.blogspot.com%2f2012%2f07%2fkittens-wallpapers.html&p=DevEx,5013.1"
  }
]

```

----
## Example usage (Latest):

```
http://image-search-4000.herokuapp.com/api/imagesearch/latest

```

----
## Example output:

```js
[{
    searchString: "kittens",
    searchTime: "2017-06-25T05:03:04.694Z"
  },
  {
    searchString: "cute puppies",
    searchTime: "2017-06-25T04:55:56.053Z"
  },
  {
    searchString: "puppies",
    searchTime: "2017-06-25T04:55:50.873Z"
  },
  {
    searchString: "kittens",
    searchTime: "2017-06-25T04:51:53.306Z"
  },
  {
    searchString: "kittens",
    searchTime: "2017-06-25T04:43:40.950Z"
  }
]


```
