import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Project from '../components/projects/Projects';
import { ProjectContent } from '../constants';

describe('Project Component renders correctly', () => {
    test('renders initial project image', () => {
        render(<Project />);
        const initialImage = screen.getByAltText('project-image');
        expect(initialImage).toHaveAttribute('src', ProjectContent[0].image);
    });

    test('changes project image on click', () => {
        render(<Project />);

        // Find all project content elements
        const projectContents = screen.getAllByTestId('project-content');

        // Click the second project content
        fireEvent.click(projectContents[1]);

        // Check if the image source has been updated
        const updatedImage = screen.getByAltText('project-image');
        expect(updatedImage).toHaveAttribute('src', ProjectContent[1].image);

        // Check if the second project content has the selected class
        expect(projectContents[1]).toHaveClass('selected');

        // Check if the first project content does not have the selected class
        expect(projectContents[0]).not.toHaveClass('selected');
    });
});
