import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';
import { FooterImage } from '../assets';

describe('Footer Component renders correctly', () => {
    test('renders the footer image correctly', () => {
        render(<Footer />);
        const footerImage = screen.getByAltText('footer-image');

        expect(footerImage).toBeInTheDocument();
        expect(footerImage).toHaveAttribute('src', FooterImage);
        expect(footerImage).toHaveAttribute('alt', 'footer-image');
        expect(footerImage).toHaveAttribute('height', '56');
        expect(footerImage).toHaveAttribute('width', '1170');
    });
});