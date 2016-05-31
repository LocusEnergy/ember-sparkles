/* jshint ignore: start */
export default function dateify(collection) {
  return collection.map(c => {
    return { ...c, ts: new Date(c.ts) };
  });
}
