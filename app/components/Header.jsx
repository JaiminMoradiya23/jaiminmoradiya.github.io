import React from "react";

const Header = () => {
  return (
    <div className="flex items-center mt-4 h-[70px] uppercase max-w-7xl mx-auto border border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[275px] w-full flex items-center gap-2 px-5 h-full border-e border-[rgba(255,255,255,0.1)]">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        Current Page
      </div>
      <div className="grow text-center text-2xl px-5">Jaimin</div>
      <div className="max-w-[275px] w-full h-full border-s px-5 border-[rgba(255,255,255,0.1)] flex items-center">Menu</div>
    </div>
  );
};

export default Header;
