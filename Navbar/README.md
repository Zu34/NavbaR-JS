# README

## Overview
This project demonstrates a responsive navigation menu with both desktop and mobile views. It includes:
- A styled navbar with a logo and menu items.
- A toggleable hamburger menu for mobile view.
- A full-screen overlay menu with smooth transitions.
- Custom styling for active menu items and hover effects.

![Theme Setting](./Screen%20Recording.gif)





## Features

### **Responsive Navbar**
- The logo adjusts its size and font style for desktop and mobile views.
- Menu items are spaced and styled differently for desktop and mobile views.
- Active menu item highlighted with custom color and underline using `::before` pseudo-element.

### **Hamburger Menu**
- Opens a full-screen overlay menu on mobile.
- Animated three-line hamburger icon.
- Includes a close button within the overlay.

### **JavaScript Logic**
- Toggles menu visibility using `classList.toggle` for both hamburger and close buttons.
- Shared logic for toggling using a single function to avoid redundancy.

## Key Code Snippets

### **HTML Structure**
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Logo</a>

    <button class="navbar-toggler" id="hamburger" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="overlay" id="menuOverlay">
        <button id="closeMenu">&times;</button>
        <ul class="menu-items">
            <li><a class="menu-link" href="#">Home</a></li>
            <li><a class="menu-link" href="#">Features</a></li>
            <li><a class="menu-link" href="#">Pricing</a></li>
            <li><a class="menu-link" href="#">Contact</a></li>
        </ul>
    </div>
</nav>
```

### **CSS Highlights**
```css
.menu-link {
    color: white;
    font-size: 18px;
    text-decoration: none;
}

.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1050;
    text-align: center;
}

.overlay.active {
    display: block;
}

#hamburger {
    border: none;
    background: transparent;
    cursor: pointer;
}

#hamburger.active .line {
    /* Custom animation styling */
}
```

### **JavaScript Functionality**
```javascript
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');

// Function to toggle the menu
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
};

// Add event listeners for both buttons
hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
```

## Customizations
1. **Google Fonts**: 
   - Added `Montserrat` font for global usage.
   - Example CSS:
     ```css
     body, h1, h2, h3, h4, h5, h6 {
         font-family: 'Montserrat', sans-serif;
     }
     ```

2. **Active Menu Item**:
   - Custom underline effect using `::before` pseudo-element.
   - Example:
     ```css
     .menu-items .active::before {
         content: '';
         display: block;
         height: 2px;
         width: 100%;
         background-color: #007bff;
         margin-top: 5px;
     }
     ```

## Responsive Design
- Mobile-first approach.
- Used media queries to adjust styles for larger screens:
  ```css
  @media (min-width: 992px) {
      .overlay {
          display: flex;
          background-color: transparent;
          height: auto;
      }

      .menu-items {
          display: flex;
          gap: 30px;
      }

      #hamburger, #closeMenu {
          display: none;
      }
  }
  ```

## How to Use
1. Include the HTML structure in your project.
2. Add the provided CSS for styling.
3. Include the JavaScript to enable toggle functionality.
4. Customize styles or menu items as needed.

## Browser Compatibility
- Fully compatible with modern browsers (Chrome, Firefox, Safari, Edge).
- Ensure polyfills for `classList.toggle` if targeting older browsers.

---

### Notes
- Ensure proper inclusion of Google Fonts via a `<link>` tag in the HTML or `@import` in CSS.
- Adjust the `font-size` and `gap` values in media queries to suit your design preferences.
