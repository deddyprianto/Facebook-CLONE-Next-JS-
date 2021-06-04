const HeaderIcons = ({ active, Icon }) => {
  return (
    <div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group flex items-center">
      <Icon
        className={`h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-500 ${
          active && "text-blue-500"
        }`}
      />
    </div>
  );
};

export default HeaderIcons;
