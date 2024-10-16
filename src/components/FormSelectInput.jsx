function FormSelectInput({ label, id, options, selectValue, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={selectValue} onChange={onChange}>
        {options.map((option) => (
          <option value={option.optionValue}>{option.optionInnerText}</option>
        ))}
      </select>
    </div>
  );
}

export default FormSelectInput;
