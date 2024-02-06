const TopBar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-16 rounded mr-2"
            src="https://pub-4a5c351e48c34a18817678ead6714bda.r2.dev/EdcLogo.png"
            alt="EDC Logo"
          />
          <h2 className="">Electronics Design Club @ LSU</h2>
        </div>
        <div className="flex justify-center gap-2 mb-2">
          <h3>
            <a href="/">About</a>
          </h3>
          <h3>
            <a href="/resume">Events</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default TopBar;
