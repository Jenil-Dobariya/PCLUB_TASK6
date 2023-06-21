import React, { useState } from "react";

const DropdownMenu = (props) => {
  const { menuTitle, data } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleMenu}>
        {menuTitle}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="https://www.google.com/" onClick={(event)=>{handleLinkClick(event,"https://www.google.com/")}}>dummy Data</a>
          {data.map((item, index) => (
            <a
              href={item.link}
              key={index}
              onClick={(event) => handleLinkClick(event, item.link)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
