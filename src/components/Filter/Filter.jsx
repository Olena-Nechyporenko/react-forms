import css from './Filter.module.css';
export function Filter({ onChange, value }) {
  return (
    <div>
      <p className={css.filter}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        onChange={onChange}
        value={value}
        name="filter"
      />
    </div>
  );
}
