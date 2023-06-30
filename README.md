## gtfs-osm-filter

Filters routes in a GTFS feed based on whether they overlap with an OpenStreetMap relation (like a city, country or neighbourhood).

To find the OSM relation ID of a place, search for it on [OpenStreetMap](https://www.openstreetmap.org/), then go to https://polygons.openstreetmap.fr/ and submit the relation ID to make sure the geometry of the area you want to cover has been generated.

It includes a route in the returned array, if `overlapRatio` (0.5 by default) of the stops on the route are within the bounds of the provided area.

Works with [`node-gtfs`](https://github.com/blinktaginc/node-gtfs), requires an already open database connection to work.

### install

`npm i gtfs-osm-filter`

### use

```js
import gtfsOsmFilter from 'gtfs-osm-filter'
import { openDb } from 'gtfs'

openDb(config) // see how to do this in node-gtfs readme

const routesThatAreAtLeastTwoThirdsInsideBerlin = await gtfsOsmFilter({
  relation: '62422' // Berlin, Germany
  routesFilter: {
    agency_id: '123', // gets passed into gtfs/getRoutes, to avoid looping through all routes in GTFS feed
  },
  overlapRatio: 0.67,
})

// [
//   {
//     route_id: 'cool_route',
//     agency_id: '123',
//     route_short_name: 'Cool Route',
//     ...
//   },
// ]
```

More detailed example [here](https://github.com/zorapeteri/gtfs-osm-filter/tree/main/example)
