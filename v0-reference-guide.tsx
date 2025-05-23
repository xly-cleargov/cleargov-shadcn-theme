/**
 * ClearGov shadcn/ui Theme - v0 Reference Guide
 *
 * This file serves as a reference for v0 to understand how to implement
 * the ClearGov theme when users request it in their prompts.
 *
 * Theme Name: cleargov-shadcn-theme
 * Primary Color: hsl(221.2, 83.2%, 53.3%) - Professional blue
 * Style: Clean, professional, government/enterprise focused
 */

// Example implementation details for v0 reference

// 1. Color scheme
const colors = {
  primary: "221.2 83.2% 53.3%", // Professional blue
  primaryDark: "217.2 91.2% 59.8%", // Slightly brighter blue for dark mode
  secondary: "210 40% 96.1%", // Light blue/gray
  accent: "210 40% 96.1%", // Light blue/gray
  background: "0 0% 100%", // White
  backgroundDark: "222.2 84% 4.9%", // Dark blue/black
}

// 2. Custom utility classes to include
const utilityClasses = [
  "cleargov-card", // Styled card with consistent shadow and border radius
  "cleargov-gradient-bg", // Blue gradient background
  "cleargov-button", // Styled button with consistent padding and hover effects
  "cleargov-section", // Section with consistent padding
  "cleargov-container", // Container with consistent max-width and padding
  "cleargov-heading", // Styled heading with consistent font weight and tracking
  "cleargov-subheading", // Styled subheading with muted color
]

// 3. Component styling preferences
const componentStyles = {
  // Button styling
  button: {
    borderRadius: "md", // Medium border radius
    fontWeight: "medium", // Medium font weight
    transition: "all 200ms", // Smooth transition
  },

  // Card styling
  card: {
    shadow: "md", // Medium shadow
    border: "none", // No border
    borderRadius: "lg", // Large border radius
  },

  // Form element styling
  input: {
    borderRadius: "md", // Medium border radius
  },

  // Layout preferences
  layout: {
    containerMaxWidth: "7xl", // Max width for containers
    sectionPadding: "py-12 px-4", // Consistent section padding
  },
}

// 4. Example prompt references that should trigger this theme
const examplePrompts = [
  "Please use the cleargov-shadcn-theme",
  "Use the ClearGov theme",
  "Apply the cleargov-shadcn-theme to this project",
  "I want a professional blue theme for a government application",
  "Create a dashboard with the ClearGov theme",
]

// This file is for v0 reference only and is not meant to be included in the actual project
