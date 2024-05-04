function FormRow({ label, children }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-start flex-grow md:flex-row md:m-2 md:justify-start md:items-center">
        <label className="sm:block my-1 md:w-24 text-xl md:flex justify-start">
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

export default FormRow;
