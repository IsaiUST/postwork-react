import React, { useState } from 'react';

const ModalItem =
    ({
        meal,
        onHandleAddMealToCart
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
                <a href="/#">{meal.name}</a>
                <div className="menu-ingredients">{meal.description}</div>
                <span>${meal.price}</span>
            </>
        );
    };


export default ModalItem;