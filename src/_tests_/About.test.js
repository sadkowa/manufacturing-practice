import { screen, render } from "@testing-library/react";

import About from "../components/About";

describe('<About>', () => {
    test('should display heading "O mnie"', async () => {
        render(<About />)

        const heading = await screen.findByText(/O mnie/i)

        expect(heading).toBeInTheDocument()
    })
    test('should display text "Lorem..."', async () => {
        render(<About />)

        const text = await screen.findByText(/Lorem/i)

        expect(text).toBeInTheDocument()
    })

})