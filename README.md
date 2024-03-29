# module14-challenge

- model
  - index.js (Define Sequelize models for users, blog posts, and comments)

- config
  - .env (Store environment variables such as database connection details)

- db
  - migration files (Define database schema for users, blog posts, and comments)

- seeds
  - seed files (Populate sample data for users, blog posts, and comments)

- view
  - layouts
    - main.handlebars (Common layout for all pages with navigation links)
  - partials
    - header.handlebars (Header with navigation links)
    - footer.handlebars (Footer section)
  - home.handlebars (Homepage displaying existing blog posts)
  - signup.handlebars (Sign-up page with a form)
  - login.handlebars (Login page with a form)
  - dashboard.handlebars (Dashboard displaying user's blog posts and options)
  - newpost.handlebars (New blog post form)
  - post.handlebars (Individual blog post page)
  - logout.handlebars (Logout confirmation page)

- public
  - css
    - styles.css (CSS styles for the application)
  - js
    - app.js (Frontend JavaScript for interactive features)
  - images
    - logo.png (Logo for the website)

- utils
  - auth.js (Functions for user authentication)
  - session.js (Session management functions)

- controller
  - userController.js (Controller for user-related actions like sign-up, login, logout)
  - postController.js (Controller for blog post-related actions like create, read, update, delete)
  - commentController.js (Controller for comment-related actions like create, read, delete)

- index.js (Main entry point for the application, sets up server, middleware, and routes)

- server.js (Express server configuration)


