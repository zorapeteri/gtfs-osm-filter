import { type GtfsPolygonFilterProps } from 'gtfs-polygon-filter';
export type GtfsOsmFilterProps = {
    relation: string;
} & Pick<GtfsPolygonFilterProps, 'routesFilter' | 'overlapRatio'>;
export default function gtfsOsmFilter({ relation, routesFilter, overlapRatio, }: GtfsOsmFilterProps): Promise<import("gtfs-polygon-filter").Route[]>;
