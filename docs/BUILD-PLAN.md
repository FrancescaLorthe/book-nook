Feature: Free Shipping Progress Bar
Main Goal: Show a progress bar that tracks how many books are in the cart. When the cart reaches 4 books, free shipping unlocks.

Step 1: Access the cart item count and confirm it updates correctly when books are added.

Step 2: Create a progress percentage calculation based on cart length (max = 4 books).

Step 3: Render a basic progress bar UI component (static version first).

Step 4: Connect the progress percentage dynamically to the progress bar width.

Step 5: Add dynamic message text ~ If under 4 books → “Add X more books for free shipping”, If 4+ books → “You’ve unlocked free shipping!”

Step 6: Cap progress at 100% (prevent overflow if more than 4 books are added).

Step 7: Style the progress bar for clarity (color change when unlocked).