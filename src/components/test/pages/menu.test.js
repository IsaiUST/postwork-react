import { render, screen } from "@testing-library/react";
import Menu from '../../pages/Menu';
import StateContext from "../../Contexts/StateContext";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

// Mock de toda la biblioteca "react-router-dom"
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));


describe("Menu", () => {
	let dispatch;
	let container;

	beforeEach(async () => {
		// jest.fn() crea un mock
		window.fetch = jest.fn();
		dispatch = jest.fn();

		window.fetch.mockResolvedValueOnce({
			json: async () => [
				{
					id: 1,
					name: "Pizza",
					price: 10,
					description: "Italian Pizza",
				},
			],
			ok: true
		});

		const rendered = await act(async () =>
			render(
				<StateContext.Provider value={{ dispatch, state: {} }}>
					 <Menu />
				</StateContext.Provider>, {wrapper: BrowserRouter}
			)
		);

		container = rendered.container;
	});

	it("should render", async () => {
		const menuContainer = container.querySelector("#menu");
		expect(menuContainer).toBeInTheDocument();
	});

    it("should display meals", async () => {
		const name = await screen.findByText("Pizza");
        const description = await screen.findByText("Italian Pizza");
    
		expect(name).toBeInTheDocument();
		expect(description).toBeInTheDocument();
	});

	it("should change quantity of input", async () => {
		const expectedValue = "2";

		const input = screen.getByPlaceholderText("Cantidad");
		expect(input).toBeInTheDocument();

		userEvent.type(input, expectedValue);
		expect(input).toHaveValue(2);
	});
});





