# Resume Reviewer - Resume Reviewer

GitHub repo: https://github.com/darshan-aswathappa/web-dev-6150-final

Deployed on Vercel: https://web-dev-6150-final.vercel.app

## Purpose of the Website

**ResumeReviewer** is an AI-driven platform designed to assist job seekers in refining their resumes and improving their chances of landing a job. It offers features such as AI-based role selection, resume crafting suggestions, and application tracking, empowering users with tools to stand out in the competitive job market.

### Key Features:

- Role-based suggestions for optimal job targeting
- Detailed AI feedback on resume quality and content
- Tools for refining job applications
- Smart follow-up suggestions to maximize your chances of success

ResumeReviewer helps job seekers at all career stages to polish their resumes, align their experience with desired roles, and improve the quality of job applications.

---

## Group members (in lexicographic order):

|        Name        |             EMail              |   NUID    | Branch              |
|:------------------:|:------------------------------:|:---------:|---------------------|
| Darshan Aswathappa | aswathappa.d@northeastern.edu  | 002339267 | Feature-#82472908   |
|   James Z. Zhang   |  zhang.jame@northeastern.edu   | 002475939 | jameszhang          |
|   Nireeksha Huns   |    huns.n@northeastern.edu     | 002054783 | Feature-nireeksha   |
|    Yanqing Lou     |    lou.yan@northeastern.edu    | 002083406 | Feature-yanqinglou  |
|    Zhilong Shen    |   shen.zhil@northeastern.edu   | 002470907 | feature-zhilongshen |

---

## Getting Started

To run this project locally:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/darshan-aswathappa/web-dev-6150-final.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Launch local live server
   ```bash
   npm start
   ```

---

## Bootstrap Components Used

### Layout Components:

1. **Container**: Used for responsive fixed-width and fluid layouts (`container`, `container-fluid`).
2. **Row**: A flexbox container for organizing content into horizontal rows (`row`).
3. **Column**: Flexible layout columns to control the width of content across different screen sizes (`col-md-3`, `col-12`).
4. **Card**: A versatile container for content, images, and actions (`card`, `card-body`, `card-title`, `card-text`, `card-img-top`).
5. **Media Object**: Used to align images or media alongside text (`media`, `media-body`).

### Content and Text Utilities:

6. **Typography Utilities**: Used for heading, paragraph, and muted text (`h1`, `h5`, `text-muted`).
7. **List Group**: Displays items in a list format (`list-group`, `list-group-item`).
8. **Badge**: Small labeling component to display notifications or tags (`badge`, `badge-secondary`).

### Buttons and Interactions:

9. **Button**: Interactive clickable buttons for actions like form submission or navigation (`btn`, `btn-primary`, `btn-filled-orange`).
10. **Button Group**: For grouping multiple buttons together in a single line (`btn-group`).

### Forms and Inputs:

11. **Form**: Used for creating interactive forms, with Bootstrap styling for inputs and buttons (`form`, `form-group`).
12. **Form Control**: Standard Bootstrap input fields for user data entry (`form-control`).
13. **Input Group**: Groups inputs and buttons together, often used for search fields (`input-group`, `input-group-text`).
14. **Checkbox**: For multi-select options in forms (`form-check`, `form-check-input`, `form-check-label`).

### Spacing and Sizing Utilities:

15. **Margin and Padding Utilities**: Applied to control spacing between elements (`mt-4`, `mb-5`, `ms-2`, `p-3`).
16. **Width Utilities**: Adjusts the width of elements for responsiveness (`w-50`, `w-100`).
17. **Height Utilities**: Controls the height of components like divs or images (`h-100`, `vh-100`).

### Flexbox and Alignment:

18. **Flex Utilities**: Flexbox for aligning and distributing space in containers (`d-flex`, `justify-content-center`, `align-items-center`).
19. **Vertical Alignment**: Aligns content vertically within a flex container (`align-items-center`, `align-self-start`).
20. **Text Alignment**: Centers text or aligns it to the left or right within its container (`text-center`, `text-left`, `text-right`).

---

## Assignment Requirements Checklist

> 1. Create the **login page** and **home page/landing page** based on your project topic.

We have built 8 pages, including [**login page**](https://web-dev-6150-final.vercel.app/sign-in) and [**home page/landing page**](https://web-dev-6150-final.vercel.app/).

> 2. It must have validation for the Login Page, and validation should be the same as Assignment 3 for fields that are part of the Login page.

Validation are implemented both on [**login page**](https://web-dev-6150-final.vercel.app/sign-in) and [**registration page**](https://web-dev-6150-final.vercel.app/register).
`northeastern.edu` domain is required.

> 3. Usage of 16+ bootstrap components

Please kindly check the previous **Bootstrap Components Used** section.

>4. You are allowed to use the existing Bootstrap templates, but you must customize them.
>5. Do not copy-paste existing Templates as it is. **You have to modify the existing template when you use it**; assignment scores will be impacted by doing so.

Templates were used seldom and always modified to serve our project and fit the design.

>6. The website **must** be on **every device**.

All the pages are responsive and tested on different devices. 

>7. The Readme file must contain the purpose of the website and a list of bootstrap components used
>   1. Every team member must work on the group assignments, and which part of the assignment worked on should be clear and **reflected on GitHub History**
>8. There **MUST** be **one** Group project GitHub repository with individual team member branches created and **one MAIN** branch where all changes are merged

Individuals' contributions and GitHub branches and the private GitHub repo link are listed in the leading sections on this document.
All changes are merged into `main` branch for assignment submission.

>9. **zip** file must be submitted on **CANVAS**, and the GitHub URL of the group assignment in the canvas remarks. also, put the team members’ names while submitting the assignment, including the project name.
>10. Do not change the project topic after submission of the project topic and tech stack unless you discuss this with Professor or TAs, as it will be validated at the end for the final project demo and presentation. If the project topic is changed without permission, it will result in -a 20% mark reduction
