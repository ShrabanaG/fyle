import { render, screen } from '@testing-library/react';
import ClientFeedback from '../components/clientsfeedback/ClientFeedback';

test("Client feedback component renders correctly", () => {
    render(<ClientFeedback />);

    //check the header
    const header = screen.getByText(/client's feedback/i);
    expect(header).toBeInTheDocument();

    //check subheader
    const subheader = screen.getByText(/people say's about us !/i);
    expect(subheader).toBeInTheDocument();

    // Check for main content
    expect(screen.getByText(/Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is/i)).toBeInTheDocument();
    expect(screen.getByText(/reproduced below for those interested. Sections Bonorum et Malorum original./i)).toBeInTheDocument();

    // Check for name
    expect(screen.getByText('JANNAT TUMPA')).toBeInTheDocument();

    // Check for designation
    expect(screen.getByText('- COO, AMERIMAR ENTERPRISES, INC.')).toBeInTheDocument();

})