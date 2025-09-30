# Levi9 Playwright Practice

This repository contains the work completed during my internship at Levi9, focusing on test automation using Playwright. The project demonstrates both UI (End-to-End) and API (Integration) testing practices.

## Internship Highlights

- Learned and implemented automated testing using Playwright
- Developed both UI and API testing frameworks
- Applied Page Object Model design pattern
- Implemented API testing with proxy pattern
- Used schema validation with AJV

## Project Structure

### Tests
- **end_to_end_testing/**: Contains UI test cases using Playwright for automated browser testing
- **integration_testing/**: Houses API test cases for testing backend services

### Pages (UI Testing)
- **basePage.js**: Base class containing common functionality
  - URL management
  - Page navigation
  - URL retrieval methods
- Other page classes extend basePage.js and implement specific page functionalities:
  - contactUsPage.js
  - loginPage.js
  - productsPage.js
  - testCasePage.js

### Model
Contains user-related data models:
- **LoggedInUser.js**: User model with properties like name and surname
- **SignInUser.js**: Sign-in user model implementation

### Common (API Testing)
- **proxy.js**: Base proxy class with HTTP method templates
  - GET
  - POST
  - DELETE
  - PUT
- Other classes extend the proxy class to implement specific API functionalities:
  - pokemonAPI.js
  - product.js
  - productClient.js

### Utils
Contains JSON schema files used for API response validation with AJV:
- pokemonAbility.json
- pokemonSchema.json
- productSchema.json
- userSchema.json
