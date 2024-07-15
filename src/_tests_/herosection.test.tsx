import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../components/heroSection/HeroSection';
import { HeroImage } from '../assets';



test("Hero Section renders correctly", () => {
    render(<HeroSection />);

    //check the header
    const header = screen.getByText(/Award Winning/i);
    expect(header).toBeInTheDocument();

    //check the sub-header
    const subHeader = screen.getByText(/Digital Marketing Agency/i);
    expect(subHeader).toBeInTheDocument();

    //check the paragraph
    expect(screen.getByText(/Morbi sed lacus nec risus finibus feugiat et fermentum nibh./i)).toBeInTheDocument();
    expect(screen.getByText(/Pellentesque vitae ante at elit fringilla ac at purus/i)).toBeInTheDocument();
    expect(screen.getByText(/Morbi sed lacus nec risus finibus/i)).toBeInTheDocument();
    expect(screen.getByText(/feugiat et fermentum/i)).toBeInTheDocument();

    //check the image
    const heroImage = screen.getByAltText("hero-image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", HeroImage);
    expect(heroImage).toHaveAttribute("alt", "hero-image");
    expect(heroImage).toHaveAttribute("width", "487");
    expect(heroImage).toHaveAttribute("height", "737");

})
