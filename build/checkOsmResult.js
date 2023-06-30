export function checkOsmResult(gc) {
    var _a, _b;
    if (gc.type !== 'GeometryCollection') {
        throw new Error('OSM relation result not a valid GeometryCollection');
    }
    if (((_b = (_a = gc.geometries) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.type) !== 'MultiPolygon') {
        throw new Error('OSM relation result invalid: should only contain a MultiPolygon geometry.');
    }
}
