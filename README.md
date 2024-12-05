# CourseCraft Frontend

## Overview

**CourseCraft** is an LLM-based course recommendation system. 
We aim to help students find courses in their college that match their background, personal interests, career goals, learning gap and other criteria.
We provide personalized recommendation sidecar-ed by a chatbox system that will help answer the user's questions at any time.

### Group Members (in lexicographic order)

|        Name        |             EMail              |   NUID    |
|:------------------:|:------------------------------:|:---------:|
| Darshan Aswathappa | aswathappa.d@northeastern.edu  | 002339267 |
|   James Z. Zhang   |  zhang.jame@northeastern.edu   | 002475939 |
|   Nireeksha Huns   |    huns.n@northeastern.edu     | 002054783 |
|    Yanqing Lou     |    lou.yan@northeastern.edu    | 002083406 |
|    Zhilong Shen    |   shen.zhil@northeastern.edu   | 002470907 |

The CourseCraft Frontend leverages React as its core library for building user interfaces,
enhanced by React Router for efficient navigation and routing. 
Styling is implemented with TailwindCSS and Bootstrap, ensuring a responsive and modern UI, while Radix UI components provide accessible and customizable design elements. State management is handled using Zustand, with forms validated via React Hook Form and Zod. Build and development are powered by Vite, offering fast bundling and hot reloading for a smooth developer experience.

### Pages

The CourseCraft Frontend consists of multiple pages, each catering to specific functionalities for the roles of Admin and User. Here is a breakdown of the pages:

| **Page**              | **Path**                 | **Description**                                                                  |
|-----------------------|--------------------------|----------------------------------------------------------------------------------|
| **Dashboard**         | `/dashboard`             | The main dashboard for users to view their course recommendations.               |
| **Individual Paths**  | `/dashboard/:subjectId`  | Displays detailed information about a specific course or subject path.           |
| **Upload Resume**     | `/upload-resume`         | Allows users to upload resumes for analysis and personalized course matching.    |
| **Settings**          | `/settings`              | Provides options for users to manage their account settings.                     |
| **Resume Options**    | `/resume`                | Displays uploaded resumes and their analysis results.                            |
| **Chatbot**           | `/chatbot`               | A chatbot interface for users to ask questions about courses or recommendations. |
| **Sign Up**           | `/signup`                | Registration page for new users to create an account.                            |
| **Login**             | `/login`                 | Login page for existing users.                                                   |
| **Forgot Password**   | `/forgot-password`       | Page for users to initiate a password reset process.                             |
| **Reset Password**    | `/reset-password/:token` | Page for resetting a user's password using a token.                              |
| **Admin Dashboard**   | `/admin`                 | Admin interface for viewing and managing all users.                              |
| **About**             | `/about`                 | Provides information about the CourseCraft system and its purpose.               |
| **Contact**           | `/contact`               | A page for users to reach out for support or feedback.                           |
| **Verify Email**      | `/verify-email`          | Handles email verification for user accounts.                                    |
| **Fallback Redirect** | `*`                      | Redirects users to `/dashboard` for undefined routes.                            |

These pages collectively ensure a seamless and user-friendly experience, covering all major flows for both Admins and Users. 
The inclusion of protected routes ensures that access is managed based on user authentication and roles.

## How to Run

Follow the steps below to set up and run the project locally:

### Prerequisites
1. Ensure that **Node.js** (version 18 or later) and **npm** are installed on your system.
2. Install the package manager **Vite** globally (optional):
   ```bash
   npm install -g vite
   ```

### Steps to Run the Application
1. Clone the repo:
    ```
   git clone https://github.com/darshan-aswathappa/web-dev-6150-final.git
   ```
2. Install dependencies:
    ```
   npm install
   ```
3. Run the development server:
    ```
   npm start
   ```
This will start the development server. Open your browser and navigate to:
`http://localhost:5173`
4. Build for production

    If you want to create a production-ready build, run:
    ```shell
   npm run build
    ```

5. Preview the Production Build:

    After building for production, preview it locally:
    ```
   npm run serve
   ```
   This will serve the production build on a local server.

## Frontend Related Criteria
`1. Mobile UI friendly/Responsive`
The app is designed responsive and mobile-friendly.

`2. Number of roles - Minimum Admin and User(s)`
Roles in our projects include `admin` and common `user`. 

`3. Login pages - With password encryption(bcrypt)`
Using `bcrypt` for password hashing in `authController.js`

`4. Number of pages - Minimum 6-8`
Over 10 pages implemented. Please refer to **Pages** section.

`5. Number of transactions/flows per role - As per the project`
Resume, chatbot, course recommendation for `user`, and admin dashboard for `admin`. 

`6. Session management`
Using tokens to manage sessions.

`7. Data consistency`
The data is consistent.

`8. End-to-end transaction as per the project`
The flow is complete.

`9. Frontend User interface usage of HTML, CSS, and Bootstrap is mandatory apart from any additional third-party library is fine`
Bootstrap is used and we are using TailwindCSS and Radix UI.

`10. Frontend framework a Angular/React`
Using React.

`12. In the case of e-commerce use payment gateway API`
This is not an e-commerce project, and we have yet to include subscriptions.

`13. External APIs wherever is applicable`
We are using OpenAI's API for vector embedding and Anthropic's API to provide textual result.

`14. Host the web application on the servers like Heroku etc. as a Bonus.`
Hosting on DigitalOcean.

`15. Upload the project on Canvas and Git both and there should not be a major timestamp gap`
Uploading both to Canvas and Git.

`16. CRUD is mandatory if your project has a storage requirement`
CRUD is applied to e.g., User entities.

`17. Should have REST or MVC architecture`
The backend follows a RESTful architecture, implementing REST principles for building APIs.

`18. Following git branching would add extra weightage`
The project follows a Git branching model, with each contributor working on their own branch for specific features or tasks.

`19. There should be functionality-wise commits to git, i.e. as you add new functionality, you should push. Adding Readme and git ignore for node modules is mandatory`
Check commit history for functionality-wise commits. This repo include this `readme.md` and a `.gitignore` file.

`20. Code documentation should be followed (Comments, naming convention)`
Proper documentation and naming convention are enforced.
