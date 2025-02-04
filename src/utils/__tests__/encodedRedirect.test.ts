import { redirect } from "next/navigation";
import { encodedRedirect } from "../encodedRedirect";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("encodedRedirect", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should redirect with success message", () => {
    encodedRedirect("success", "/dashboard", "Operation successful");
    expect(redirect).toHaveBeenCalledWith("/dashboard?success=Operation%20successful");
  });

  it("should redirect with error message", () => {
    encodedRedirect("error", "/login", "Invalid credentials");
    expect(redirect).toHaveBeenCalledWith("/login?error=Invalid%20credentials");
  });

  it("should properly encode special characters", () => {
    encodedRedirect("success", "/home", "Hello & welcome!");
    expect(redirect).toHaveBeenCalledWith("/home?success=Hello%20%26%20welcome!");
  });

  it("should handle paths with existing query parameters", () => {
    encodedRedirect("error", "/page?param=value", "Error occurred");
    expect(redirect).toHaveBeenCalledWith("/page?param=value?error=Error%20occurred");
  });
});
