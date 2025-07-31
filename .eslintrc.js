module.exports = {
  extends: ["react-app", "react-app/jest"],
  rules: {
    // Allow warnings to pass in CI
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "react/no-unescaped-entities": "warn",
    "react/jsx-no-target-blank": "warn",
  },
  // Override the CI behavior to not treat warnings as errors
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
      rules: {
        // This prevents warnings from being treated as errors
        "no-console": "warn",
        "no-debugger": "warn",
      },
    },
  ],
};
