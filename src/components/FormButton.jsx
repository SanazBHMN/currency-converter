function FormButton({ buttonInnerText, onClick }) {
  return (
    <div className="form-button">
      <button onClick={onClick}>{buttonInnerText}</button>
    </div>
  );
}

export default FormButton;
