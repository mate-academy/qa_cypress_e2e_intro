# Cypress Inroduction

## Workflow

1. Fork the repo.
1. Clone **your** forked repository.
1. Run the command `npm i`.
1. Create a new branch `git checkout -b testing`.
1. Resolve tasks in the `cypress`/`e2e`/`signIn.cy.js`.
1. Check yourself before submitting the task with a [Cypress checklist](https://mate-academy.github.io/qa-program/checklists/cypress.html).
1. Create a pull request.
1. Do not forget to click on `Re-request review` if you submit the homework after previous review.

## Task

App for testing: `https://react-redux.realworld.io`
Back-up app for testing, if you have any issues with the app above: `https://conduit.mate.academy/`

**Your task** is to automate the next flow:

1. Visit "Sign in" page.
1. Fill in email and password fields as valid data.
1. Click on [Sign In] button.
1. Assert your username appeared in "Site navigation (Header)" menu.

## Test configuration

The Cypress test uses the Mate Conduit backup app by default and public demo
credentials. You can override the target app or credentials with environment
variables:

```bash
CYPRESS_BASE_URL=https://react-redux.realworld.io \
CYPRESS_EMAIL=your@email.com \
CYPRESS_PASSWORD=your-password \
CYPRESS_USERNAME=your-username \
npm test
```

On PowerShell, set the variables with `$env:NAME = 'value'` before running
`npm test`.

