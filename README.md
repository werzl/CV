# Adam Hewitt - CV 
![CI](https://github.com/werzl/CV/workflows/CI/badge.svg)
![CD](https://github.com/werzl/CV/workflows/CD/badge.svg)

A version controlled CV for Adam Hewitt.<br/> 
See it live: [https://werzl.github.io/CV/](https://werzl.github.io/CV/).

[LinkedIn](https://www.linkedin.com/in/ahewit)

## How it Works
When I set out trying to make this, I wanted to version-control the web pages for the CV, but also the content. I needed a way to quickly make a change and see it propogate instantly on the frontend. I decided to go with GitHub, in order to make it open. An added bonus is a free proof-read; if a friend or potential employer spots a mistake or wants to suggest an improvement, they can create a pull request on this repository! :)

### Content
The content for the CV / Resumé comes from JSON and Markdown files. Each section (Profile, through to Achievements) has their own folder in the ./content directory in this repository. 

The frontend is hosted on GitHub Pages, (thank you Microsoft!).

The React code makes a GET request to the content files in GitHub on page load, it then displays them in styled components.

Thats it! If I want to make a change to the content, I update a JSON or MD file and it appears on the live site within seconds.

### Automation
#### CI
The Continuous Integration workflow runs on a Pull Request into master, it uses Yarn to build the React project and checks for errors. If any errors make it through, the check fails and the fixes need to be made before merging the PR. In the future, when I have Automated tests, this workflow will also test the code as an extra check.

By default, Actions treats warnings as errors.

#### CD
The Continuous Deployment workflow runs on a merge into master. It also uses Yarn to build/test the React code, and if successful Deploys the code to the gh-pages branch. This then automagically updates the GH-Pages site.

