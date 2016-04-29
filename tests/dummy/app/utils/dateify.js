export default function dateify(collection) {
  return collection.map(({ ts, value }) => {
    return { ts: new Date(ts), value };
  });
}
