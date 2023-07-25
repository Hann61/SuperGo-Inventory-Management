import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "../components/Form";
import api from "../api";

// Mock the api.insertCard function
jest.mock("../api", () => ({
    insertCard: jest.fn((data) => Promise.resolve({ data })),
}));

test("should render the form with input fields and buttons", () => {
    render(<Form />);
    expect(screen.getByLabelText("Image Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Image Description:")).toBeInTheDocument();
    expect(screen.getByLabelText("Image Price:")).toBeInTheDocument();
    expect(screen.getByLabelText("Image URL:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add Item" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Clear Fields" })).toBeInTheDocument();
});

test("should clear input fields when 'Clear Fields' button is clicked", () => {
    render(<Form />);
    const imageNameInput = screen.getByLabelText("Image Name:");
    const imageDescriptionInput = screen.getByLabelText("Image Description:");
    const imagePriceInput = screen.getByLabelText("Image Price:");
    const imageURLInput = screen.getByLabelText("Image URL:");

    fireEvent.change(imageNameInput, { target: { value: "Test Image" } });
    fireEvent.change(imageDescriptionInput, { target: { value: "This is a test image" } });
    fireEvent.change(imagePriceInput, { target: { value: "10" } });
    fireEvent.change(imageURLInput, { target: { value: "http://example.com/test" } });

    expect(imageNameInput.value).toBe("Test Image");
    expect(imageDescriptionInput.value).toBe("This is a test image");
    expect(imagePriceInput.value).toBe("10");
    expect(imageURLInput.value).toBe("http://example.com/test");

    const clearFieldsButton = screen.getByRole("button", { name: "Clear Fields" });
    fireEvent.click(clearFieldsButton);

    expect(imageNameInput.value).toBe("");
    expect(imageDescriptionInput.value).toBe("");
    expect(imagePriceInput.value).toBe("");
    expect(imageURLInput.value).toBe("");
});

