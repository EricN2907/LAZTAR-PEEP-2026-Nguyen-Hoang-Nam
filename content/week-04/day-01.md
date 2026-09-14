+++
title = "Day 01 - 08/07/2026"
weight = 1
+++

## Topics Learned

Completed key feature flows for the mobile application, including Product Detail, Order Confirm checkout, and Favorite Products.

### 1. Product Detail Flow

- **Implement Product Detail screen following Figma**:
  - Product detail interface closely aligned with Figma design.
  - Align mobile product detail and orders integration with backend APIs.
- **What changed**:
  - Add Product Detail route and navigation from product list.
  - Use product image swatches with fallback handling.
  - Integrate product detail API and upload image API.
  - Refine auth-required flow: Allow the user to continue their intended action (e.g., checkout or add to cart) after successful login.

### 2. Order Confirm Checkout Flow

- **Implement Order Confirm checkout flow**:
  - Support COD and mock payment.
- **API and business logic integration**:
  - Add create order/payment mobile APIs aligned with backend contracts.
- **UI and input validation**:
  - Add validation to the checkout information form.
  - Add order success state and Figma-aligned UI.

### 3. Favorite Products & Heart Button

- **Implement Favorite Products list screen**:
  - Add infinite scroll for smooth product list loading.
  - Optimize responsive layouts across various device screen sizes.
- **Build interactive components**:
  - Add `FavoriteHeartButton` component aligned with Figma specifications (click like component set) and layout tokens.
- **API integration and Internationalization**:
  - Add get favorite products mobile APIs.
  - Add i18n translations for the feature UI.
