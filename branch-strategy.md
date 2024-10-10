## Branching Strategy

### Steps:

1. **Rebase Deployment Branch with Main:**

   - Before starting work on a new feature, rebase the `deployment` branch with the latest `main` branch. This ensures that the deployment branch is up to date with all changes from `main`.

2. **Create Feature Branch:**

   - Once the `deployment` branch is up to date, create a new `feature` branch from the `deployment` branch. This isolates the new feature development from the main and deployment codebases.
   - Name for the feature branch would be the ItemId of the issue.
   - Ex: ItemId = 82472908, feature branch name would be Feature-#82472908

3. **Feature Development and Code Review:**

   - Develop the feature on the `feature` branch.
   - After the feature is completed, submit a pull request for review.
   - Incorporate feedback and ensure the code passes all tests.

4. **Merge to Deployment Branch:**

   - Once the code is reviewed and approved, merge the `feature` branch into the `deployment` branch.
   - Push the changes to the `deployment` branch.

5. **Deployment to Testing Environment:**

   - Deploy the `deployment` branch to the testing environment.
   - Validate that the feature is working as expected and passes all necessary tests.

6. **Merge to Main Branch:**
   - Once the feature has been successfully tested and is confirmed to be working, merge the `deployment` branch into the `main` branch.
   - Deploy the `main` branch to the production environment.
