export function Filter({ onChange, value }) {
  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" onChange={onChange} value={value} name="filter" />
    </div>
  );
}
