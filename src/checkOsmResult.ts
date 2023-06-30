import { GeometryCollection } from 'geojson'

export function checkOsmResult(gc: GeometryCollection) {
  if (gc.type !== 'GeometryCollection') {
    throw new Error('OSM relation result not a valid GeometryCollection')
  }

  if (gc.geometries?.[0]?.type !== 'MultiPolygon') {
    throw new Error(
      'OSM relation result invalid: should only contain a MultiPolygon geometry.'
    )
  }
}
