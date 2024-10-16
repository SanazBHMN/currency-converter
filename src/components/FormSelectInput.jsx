function FormSelectInput({ label, id, options, selectValue, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={selectValue} onChange={onChange}>
        {options.map((option) => (
          <option key={option.optionValue} value={option.optionValue}>
            {option.optionInnerText}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelectInput;
