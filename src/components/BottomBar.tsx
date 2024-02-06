const BottomBar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 px-16 py-4 ">
      <div className="flex items-center">
        <a href="https://discord.gg/G4mCM6atHK">
          <img
            className="w-6 ml-12"
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
          />
        </a>
      </div>
      <div className="flex justify-center items-center gap-8">
        <p className="text-xs">
          Engineering Design Club @ LSU &copy; All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default BottomBar;
