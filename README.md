# Modulars-using-HTML-CSS-JS

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

This repository contains a collection of modular web components designed for easy integration into your projects. Each component is self-contained and can be reused across different parts of a website or application. The code includes a **responsive image gallery with a modal popup**, as well as other modular UI elements, built with **HTML**, **CSS**, and **vanilla JavaScript**.

## Features:

- **Image Gallery with Modal Popup**: 
  - A simple, responsive image gallery where clicking on an image opens it in a full-screen modal.
  - The modal can be closed by either clicking the close button or clicking outside the modal.
  
- **Modular Design**:
  - Each component (gallery, modal, etc.) is designed to work independently, allowing you to mix and match with other code.
  - The structure is organized to encourage scalability, making it easy to add more components or modify existing ones.

- **No External Libraries**:
  - The components are built using pure **HTML**, **CSS**, and **vanilla JavaScript**. No frameworks or libraries are required, making them lightweight and easy to integrate.

- **Customizable**:
  - The gallery and modal are easily customizable through CSS for different themes or layouts.
  - JavaScript can be extended to add additional functionality, such as animations or image carousels.

- **User-Friendly Interface**:
  - The gallery displays images in a grid layout that adapts to different screen sizes.
  - The modal shows the enlarged image, with an option to close it either via a button or by clicking outside the image.

## Components Included:

- **Image Gallery**:
  - A grid of images that users can click to enlarge.
  
- **Modal Popup**:
  - An overlay that shows the clicked image in a larger view.
  - Click the close button (×) or click outside the image to close the modal.

- **Responsive Design**:
  - The gallery layout adjusts for different screen sizes using media queries, ensuring a smooth user experience on mobile, tablet, and desktop.

## How It Works:

1. **HTML**:
   - The gallery images are placed inside the body with the class `gallery-img`. The modal structure is also defined in the HTML, including a close button and an empty image tag that will be populated with the clicked image.

2. **CSS**:
   - The gallery and modal are styled using CSS. The modal is initially hidden with `display: none`, and its appearance is controlled via Flexbox to center the content.
   - CSS also includes styles for image resizing, modal background, and close button.

3. **JavaScript**:
   - The JavaScript adds interactivity to the page. It listens for clicks on gallery images and displays the corresponding image in the modal.
   - The modal can be closed either by clicking the close button or clicking outside the modal.
   - The modal image source is dynamically updated based on the clicked image.

## Installation:

1. Clone or download the repository.
2. Open the `module.html` file in a web browser.
3. Add more images to the gallery by inserting new `<img>` elements with the class `.gallery-img`.

## Customization:

- Modify the gallery layout by adjusting the CSS grid in the `styles.css` file.
- Add more functionality, such as image navigation, by modifying the `script.js` file.
- Change the modal styling (size, background color, borders) via CSS.

## License:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
