import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WhyChooseUs from '../components/whychooseus/WhyChooseUs';
import { whyChooseUsContent } from '../constants';


test('renders Why Choose Us component with correct content', () => {
    render(<WhyChooseUs />);

    // Check for header
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument();

    // Check for sub-header
    expect(screen.getByText('Why We Are best')).toBeInTheDocument();

    // Check for content items
    whyChooseUsContent.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
        expect(screen.getAllByText(item.description)[0]).toBeInTheDocument();
        expect(screen.getByAltText(item.title)).toBeInTheDocument();
    });
});