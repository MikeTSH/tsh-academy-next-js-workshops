require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  "extends": ["next/core-web-vitals", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "@next/next/no-sync-scripts": "off",
    "prettier/prettier": "error"
  }
}
