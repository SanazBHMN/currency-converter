function FormInput({
  label,
  id,
  type,
  value,
  onChange,
  placeHolder,
  disabled,
}) {
  return (
    <div className="form-input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeHolder}
        disabled={disabled}
      />
    </div>
  );
}

export default FormInput;
