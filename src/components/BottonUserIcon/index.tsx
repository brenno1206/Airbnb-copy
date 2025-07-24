interface BottonUserProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const BottonUser = (props: BottonUserProps) => {
  return (
    <button className="rounded-xl border-2 flex items-center px-4 py-2 border-gray-400 hover:border-gray-200">
      <span>{props.icon}</span>
      <span>{props.children}</span>
    </button>
  );
};

export default BottonUser;
