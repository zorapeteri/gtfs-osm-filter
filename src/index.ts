// @ts-ignore
import { get as getGeoJson } from 'osm-geojson'
import gtfsPolygonFilter, {
  type GtfsPolygonFilterProps,
} from 'gtfs-polygon-filter'
import { GeometryCollection, MultiPolygon } from 'geojson'
import { checkOsmResult } from './checkOsmResult.js'

export type GtfsOsmFilterProps = {
  relation: string
} & Pick<GtfsPolygonFilterProps, 'routesFilter' | 'overlapRatio'>

export default async function gtfsOsmFilter({
  relation,
  routesFilter = {},
  overlapRatio = 0.5,
}: GtfsOsmFilterProps) {
  const geojson = await getGeoJson(relation).catch((err: any) => {
    throw new Error(
      `Couldn't fetch polygon for OSM relation. Open https://polygons.openstreetmap.fr/?id=${relation} to generate a polygon, and then run this script again.`
    )
  })
  checkOsmResult(geojson)
  const overlappingRoutes = await gtfsPolygonFilter({
    polygon: geojson as GeometryCollection<MultiPolygon>, // hopefully lol
    routesFilter,
    overlapRatio,
  })

  return overlappingRoutes
}
