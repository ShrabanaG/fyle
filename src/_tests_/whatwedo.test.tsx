import { render, screen } from '@testing-library/react';
import WhatWeDo from '../components/whatwedo/WhatWeDo';


test("What We Do renders correctly", () => {
    render(<WhatWeDo />);

    //check the header
    expect(screen.getByText('What We do')).toBeInTheDocument();

    // Check for sub-headers
    expect(screen.getByText('Services provide for you')).toBeInTheDocument();

    // Check for paragraph content
    expect(screen.getByText(/Morbi sed lacus nec risus finibus feugiat et fermentum nibh./i)).toBeInTheDocument();
    expect(screen.getByText(/Pellentesque vitae ante at elit fringilla ac at purus/i)).toBeInTheDocument();
    expect(screen.getByText(/Morbi sed lacus nec risus finibus/i)).toBeInTheDocument();
    expect(screen.getByText(/feugiat et fermentum/i)).toBeInTheDocument();

})