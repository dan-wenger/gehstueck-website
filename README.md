# Gehstück Website

Public source code for the website [www.gehstück.ch](www.gehstück.ch). Published using Github Pages.

### Some helpful links:

https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages

### Deployment Workflow

There's a deploy script configured in package.json. It runs svelte's build step and then a gh-pages command that copies the newly created files from the build folder over to the gh-pages branch, from where Github Pages is running the site. Something like that:)