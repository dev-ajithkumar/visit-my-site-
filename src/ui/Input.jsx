function Input({ type, error, name, placeholder }) {
  // if (type === "textarea") {
  //   return (
  //     <div className="flex md:flex-col flex-grow justify-start items-start">
  //       <textarea
  //         name={name}
  //         placeholder={placeholder}
  //         className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 h-28 md:w-3/4"
  //       ></textarea>
  //     </div>
  //   );
  // }

  return (
    <div className="flex md:flex-grow justify-start items-center">
      <input
        className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 md:w-3/4"
        name={name}
        placeholder={placeholder}
      />
      <div className="text-red-500 px-3 ">
        <span>{error}</span>
      </div>
    </div>
  );
}

export default Input;
