import React, { useState } from "react";

const MealItem = (
  {
    meal,
    onHandleAddMealToCart,
  }) => {

  const [qty, setQty] = useState(1);

  const handleChange = (e) => {
    setQty(e.target.value);
  };

  const handleButtonClick = () => {
    onHandleAddMealToCart({ ...meal, count: qty });
  };

  return (
    <>
      <div className="col-lg-6 menu-item filter-starters">
        <div className="menu-content">
          <a href="/#">{meal.name}</a>
          {/* Cantidad y boton de agregar */}
          <div className="input-group mb-3 d-flex justify-content-end" style={{ zIndex: 3 }}>
            <input type="number" min="1" value={qty} onChange={handleChange} className="form-control" style={{ width: "150px", flex: "none" }} placeholder="Cantidad" aria-label="Cantidad" aria-describedby="button-addon2" />
            <button onClick={handleButtonClick} className="btn btn-sm" style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-plus-circle-fill text-white"></i></button>
          </div>
        </div>
        <div className="menu-ingredients">{meal.description}</div>
        <span>${meal.price}</span>
      </div>      
    </>
  );
};

export default MealItem;
