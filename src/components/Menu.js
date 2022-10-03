import React from "react";
import Meals from "./Meals";

const Menu = ({meals}) => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>
            Check our tasty <span>Menu</span>
          </h2>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">
                Show All
              </li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div> */}

        <Meals meals={meals} />
      </div>
    </section>
  );
};

export default Menu;
