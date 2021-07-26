import './FilterCheckbox.css';

function FilterCheckbox({ label, checked }) {
  return (
    <>
      <label className="filter smoothly">
        <input
          type="checkbox"
          className="filter__hidden-checkbox"
          defaultChecked={checked}
        />
        <span className="filter__pseudo-checkbox smoothly"></span>
        <span className="filter__text">{label}</span>
      </label>
    </>
  );
}

export default FilterCheckbox;
