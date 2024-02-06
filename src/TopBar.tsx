const TopBar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 px-16 py-4 ">
      <a className="flex items-center" href="/">
        <img
          className="h-16 rounded mr-2"
          src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/EdcLogo.png"
          alt="EDC Logo"
        />
        <h2 className="">Electronics Design Club @ LSU</h2>
      </a>
      <div className="flex justify-center gap-2 mb-2 items-center gap-8">
        <a href="/about">About</a>
        <a href="/events">Events</a>
      </div>
    </div>
  );
};

export default TopBar;
