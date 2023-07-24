const FormInput = ({ type, value, placeholder, onChange }) => {
  return (
    <div>
      <input
        className={`my-4 rounded-sm  focus:outline-0 border border-gray py-2 px-1 focus:ring-1 focus:ring-gray-300 focus:ring-opacity-40 placeholder:text-sm text-sm w-full`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
};

export default FormInput;
