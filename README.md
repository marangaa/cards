# Personal Card Collection

This project is a simple web application that displays a collection of personal cards. It's built using HTML, CSS, and JavaScript, and hosted on GitHub Pages.

## Live Site

You can view the live site here: https://your-username.github.io/personal-card-collection/

The site updates automatically when changes are merged into the main branch.

## Project Structure

```
personal-card-collection/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How to Contribute

1. **Fork the Repository**: Click the "Fork" button at the top right of this repository's page on GitHub.

2. **Clone Your Fork**: 
   ```
   git clone https://github.com/your-username/personal-card-collection.git
   cd personal-card-collection
   ```

3. **Create a New Branch**:
   ```
   git checkout -b add-your-name-card
   ```

4. **Add Your Personal Card**:
   - Open `script.js` in a text editor.
   - Find the `cardData` array.
   - Add a new object to the array with your information:
     ```javascript
     {
         name: "Your Name",
         title: "Your Title",
         description: "A brief description about yourself.",
         interests: ["Interest 1", "Interest 2", "Interest 3"],
         imageUrl: "https://via.placeholder.com/300x200"
     }
     ```
   - Replace the placeholder image URL with a link to your own image if desired.

5. **Commit Your Changes**:
   ```
   git add script.js
   git commit -m "Add [Your Name]'s card"
   ```

6. **Push to Your Fork**:
   ```
   git push origin add-your-name-card
   ```

7. **Create a Pull Request**: 
   - Go to the original repository on GitHub.
   - Click "New pull request".
   - Select your fork and the branch you created.
   - Click "Create pull request".

## Guidelines

- Keep your description concise (1-2 sentences).
- List 3-5 interests.
- Use appropriate and respectful content.
- If using a custom image, ensure it's appropriate and you have the rights to use it.

## Viewing Changes

Once your pull request is merged, your changes will automatically appear on the live site within a few minutes.

Thank you for contributing to our Personal Card Collection!