function Skill({ children, icon }) {
  return (
    <div>
      <span className="flex justify-start items-center text-md">
        <span>{icon}</span> {children}
      </span>
    </div>
  );
}

export default Skill;
