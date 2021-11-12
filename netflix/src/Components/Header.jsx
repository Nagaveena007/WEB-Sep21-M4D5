import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <div className="banner-info">
          <h1 className="banner-title">Harry Potter Series</h1>
          <div className="banner-icons">
            <button className="banner-btn">Play</button>
            <button className="banner-btn">My List</button>
          </div>
          <div className="banner-description">
            Harry Potter is an orphaned boy brought up by his unkind Muggle
            (non-magical) aunt and uncle. At the age of eleven, half-giant
            Rubeus Hagrid informs him that he is actually a wizard and that his
            parents were murdered by an evil wizard named Lord Voldemort.
          </div>
        </div>
        <div className="banner-fade"></div>
      </div>
    </header>
  );
};
export default Header;
