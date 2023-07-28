// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import Function from '../components/Function';
//
// // Mock API functions
// jest.mock('../api', () => ({
//     deleteCardById: jest.fn(() => Promise.resolve({})),
// }));
//
// // Utility function to render the Function component with props
// const renderFunctionComponent = (props) => {
//     const utils = render(<Function {...props} />);
//     return {
//         ...utils,
//         closeButton: screen.getByText('❌ Close'),
//         editButton: screen.getByText('✏️ Edit'),
//         deleteButton: screen.getByText('🗑️ Delete'),
//     };
// };
//
// // Test case: Function component renders correctly with card details
// test('Function component renders correctly with card details', () => {
//     const cardId = 'card1';
//     const name = 'Test Card';
//     const url = 'http://example.com/test';
//     const description = 'This is a test card';
//     const price = '$10';
//     const time = '2023-07-20T12:00:00Z';
//
//     renderFunctionComponent({
//         cardId,
//         name,
//         url,
//         description,
//         price,
//         time,
//         setVisibility: () => {},
//         callGetAllCardsAPI: () => {},
//     });
//
//     expect(screen.getByText(name)).toBeInTheDocument();
//     expect(screen.getByAltText('item')).toBeInTheDocument();
//     expect(screen.getByText(description)).toBeInTheDocument();
//     expect(screen.getByText(price)).toBeInTheDocument();
//     expect(screen.getByText(`Item added on: ${time}`)).toBeInTheDocument();
// });
//
//
// const waitForEditButton = async () => {
//     let editButton = null;
//     await waitFor(() => {
//         editButton = screen.queryByText('Edit');
//         expect(editButton).toBeInTheDocument();
//     });
//     return editButton;
// };
//
// // Test case: Clicking on the Edit button should open the EditFunction component
// test('Clicking on the Edit button should open the EditFunction component', async () => {
//     const cardId = 'card1';
//     const name = 'Test Card';
//     const url = 'http://example.com/test';
//     const description = 'This is a test card';
//     const price = '$10';
//
//     const { editButton } = renderFunctionComponent({
//         cardId,
//         name,
//         url,
//         description,
//         price,
//         setVisibility: () => {},
//         callGetAllCardsAPI: () => {},
//     });
//
//     fireEvent.click(editButton);
//
//     const editButtonElement = await waitForEditButton();
//
//     // Verify that the "Edit" text is now rendered
//     expect(editButtonElement).toBeInTheDocument();
// });
//


import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Function from '../components/Function';

// Mock API functions
jest.mock('../api', () => ({
    deleteCardById: jest.fn(() => Promise.resolve({})),
}));

// Utility function to render the Function component with props
const renderFunctionComponent = (props) => {
    const utils = render(<Function {...props} />);
    return {
        ...utils,
        closeButton: screen.getByText('❌ Close'),
        editButton: screen.getByText('✏️ Edit'),
        deleteButton: screen.getByText('🗑️ Delete'),
    };
};

// Test case: Function component renders correctly with card details
test('Function component renders correctly with card details', () => {
    const cardId = 'card1';
    const name = 'Test Card';
    const url = 'http://example.com/test';
    const description = 'This is a test card';
    const price = '$10';
    const time = '2023-07-20T12:00:00Z';

    renderFunctionComponent({
        cardId,
        name,
        url,
        description,
        price,
        time,
        setVisibility: () => {},
        callGetAllCardsAPI: () => {},
    });

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByAltText('item')).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByText(`Item added on: ${time}`)).toBeInTheDocument();
});

// Test case: Clicking on the Close button should close the Function component
test('Clicking on the Close button should close the Function component', () => {
    const cardId = 'card1';
    const name = 'Test Card';
    const url = 'http://example.com/test';
    const description = 'This is a test card';
    const price = '$10';

    const { closeButton } = renderFunctionComponent({
        cardId,
        name,
        url,
        description,
        price,
        setVisibility: jest.fn(), // Mocking setVisibility function
        callGetAllCardsAPI: jest.fn(), // Mocking callGetAllCardsAPI function
    });

    fireEvent.click(closeButton);

    // Verify that the Function component is no longer rendered after clicking the Close button
    expect(screen.queryByTestId('Function')).not.toBeInTheDocument();
});

// Test case: Clicking on the Edit button should open the EditFunction component
test('Clicking on the Edit button should open the EditFunction component', () => {
    const cardId = 'card1';
    const name = 'Test Card';
    const url = 'http://example.com/test';
    const description = 'This is a test card';
    const price = '$10';

    const { editButton } = renderFunctionComponent({
        cardId,
        name,
        url,
        description,
        price,
        setVisibility: () => {},
        callGetAllCardsAPI: () => {},
    });

    fireEvent.click(editButton);

    // Verify that the EditFunction component is now rendered
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByAltText('item')).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
});

