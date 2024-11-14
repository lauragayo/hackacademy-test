import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../src/components/Counter";

describe("<Counter />", () => {
  test("renders the Counter component", () => {
    render(<Counter />);
    const countElement = screen.getByText(/Count: 0/i);
    const buttonElement = screen.getByText(/Increment/i);
    
    expect(countElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });
});
