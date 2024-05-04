function Button({ children, type, onClick }) {
  if (type === "download") {
    return (
      <a href="#" download onClick={onClick} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <button
      className={`bg-blue-600 px-4 py-2 rounded-md text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
