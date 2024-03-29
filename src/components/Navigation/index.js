import React from "react";


function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  console.log(props, currentPage);

  return (
    <nav>
      <ul>
        {pages.map((Page) => (
          <li
            className={`${
              currentPage.name === Page.name && "navActive"
            }`}
            key={Page.name}
          >
            <span onClick={() => {
              setCurrentPage(Page);
              }}
            >
              {Page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;