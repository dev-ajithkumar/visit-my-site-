function Form({ children, onSubmit, innerRef }) {
  return (
    <form
      onSubmit={onSubmit}
      ref={innerRef}
      className="px-4  py-2 flex flex-col justify-center items-center m-6 md:justify-center md:items-center bg-slate-50 md:px-8 md:py-6 rounded-xl"
    >
      {children}
    </form>
  );
}

export default Form;
