+++
title = "Day 02 - 03/07/2026"
weight = 2
+++

## What I've learned

Implement the Product Detail and Order Confirm flows for the Teezy Mobile app.

### 1. Complete Product Detail Screen

- Implement the product detail screen adhering to Figma with full states:
  - Insufficient information selected.
  - Color selected.
  - Size selected.
  - Shirt print image uploaded.
- Integrate API for getting product details and uploading images:
  - `GET /v1/products/:id`.
  - `POST /v1/file/upload-image`.
- Handle selecting product variants by color and size pairs.
- Only allow ordering when color, size, shirt print image are selected, and the variant is in stock.
- Adjust the color selection from a circular color box to a rounded swatch image according to the design requirements.
- Add rating and image upload status.

### 2. Integrate login flow in login required modal

- The login required modal appears when the user is not logged in but clicks order.
- After logging in successfully, the app remembers the previous ordering action and redirects to the order confirmation screen.
- For login errors, display the error directly as text in the form.

### 3. Build Order Confirm screen

- Build the order confirmation screen:
  - Product summary.
  - Shipping information.
  - Payment method: COD and Mock payment success.
  - Standard delivery.
  - Total price.
  - Order CTA.
- Split the UI into smaller components:
  - Header.
  - Product card.
  - Shipping form.
  - Payment method selector.
  - Delivery card.
  - Price summary.
  - Action bar.
  - Success state.

### 4. Integrate 2 payment flows

- Implement 2 order flows:
  - **COD:** call `POST /v1/orders`, the order is in `Pending` state and awaits admin confirmation.
  - **Mock payment:** call `POST /v1/orders`, then call `POST /v1/payments` to change the order to `Confirmed` state.
- Standardize order states:
  - `Pending`.
  - `Confirmed`.
  - `Shipping`.
  - `Completed`.
  - `Cancelled`.
- Add validation for the order confirmation form:
  - Recipient name is required.
  - Phone number is required and in valid format.
  - Shipping address is required and not too short.
  - Note is optional.

### 5. Build Order Success screen

- Redesign the order success screen according to Figma.
- Use `LocalImage` and project asset mapping.
- Separate success display logic into a view-model to support 2 flows:
  - **COD:** progress starts from `Awaiting confirmation`.
  - **Mock payment:** progress starts from `Received`.
- Re-align spacing so the Order Success screen fits on one screen, without vertical scrolling.
- Add CTAs:
  - `Track order` navigates to the Order Detail placeholder screen.
  - `Continue shopping` navigates to Home.
