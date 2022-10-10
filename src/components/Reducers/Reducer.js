import actions from "./Actios";
import initialState from "./InitialState";

function reducer(state, action) {

	let meal, quantity, item, id;

	switch (action.type) {

		case actions.ADD_MEAL:
			meal = action.payload.meal;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.meal.id === meal.id);

			if (!item) {
				return {
					...state,
					cart: [...state.cart, { meal, quantity }],
				};
			}

			return reducer(state, {
				type: actions.UPDATE_MEAL,
				payload: {
					id: meal.id,
					quantity,
				},
			});

		case actions.UPDATE_MEAL:
			id = action.payload.id;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.meal.id === id);
			item.quantity += quantity;
			return { ...state, cart: [...state.cart] };

		case actions.SET_MEAL:
			return {
				...state,
				meal: action.payload
			}

		case actions.REMOVE_ALL_FROM_CART: 
		console.log(state)
			return {
				...state,
				cart: state.filter(item => item.id !== action.payload.id),
			};

		case actions.CLEAR_CART: 
			return initialState;

		case actions.REMOVE_ONE_FROM_CART:

			let itmeToDelete = state.cart.find(item => item.id === action.payload.id);
			console.log(itmeToDelete.quantity);
			return itmeToDelete.quantity > 1 ? {
				...state,
				cart: state.cart.map(item => item.id === action.payload ? 
					{...item, quantity: quantity - 1} : item),
			} : {
				...state,
				cart: state.cart.filter(item => item.id !== action.payload),
			};

		default:
			throw new Error("No existe dicha acción");
	}
}

export default reducer;