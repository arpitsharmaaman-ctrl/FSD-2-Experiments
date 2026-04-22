import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import FormExample from "./Form";

describe("Login Form Component", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("RENDERS email and password fields", () => {
    render(<FormExample />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("SHOWS ERROR when fields are empty", () => {
    render(<FormExample />);

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("All fields are required")).toBeInTheDocument();
  });

  it("SHOWS ERROR for invalid email", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "wrongemail" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      screen.getByText("Please enter a valid email address")
    ).toBeInTheDocument();
  });

  it("SHOWS ERROR for short password", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("Min 6 characters")).toBeInTheDocument();
  });

  it("SHOWS ERROR when checkbox is not checked", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText("You must accept the terms")).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully");
  });
});