# GitHub User Explorer
A beginner-friendly React and TypeScript application that allows users to search for GitHub users and explore their profiles and repositories.

## Features

* Search for a GitHub username
* Display GitHub user profile information
* Display avatar, bio, location, company, followers, following, and public repositories
* Browse a user's repositories
* Sort repositories by:
  * Stars
  * Forks
  * Recently updated
  * Name
* Filter repositories by programming language
* View repository details
* Render repository README files as Markdown
* Save recent searches using localStorage
* Display a user not found state
* Display the GitHub API rate limit
* Responsive layout for smaller screens

## GitHub API

This project uses the GitHub REST API: `https://api.github.com`
The application uses public GitHub endpoints, so an API key is not required for basic searches.

## TypeScript

The project uses TypeScript throughout the application.
API responses are represented using interfaces, including:

* `GitHubUser`
* `GitHubRepository`
* `GitHubReadme`
* `GitHubRateLimit`

Component props and React event handlers are also typed.

## How It Works

1. The user enters a GitHub username.
2. The application sends a request to the GitHub API.
3. The user's profile is displayed.
4. The user's repositories are loaded.
5. Repositories can be sorted and filtered.
6. Selecting a repository opens its detail page.
7. The repository README is fetched and rendered as Markdown.
8. Previous searches are saved in the browser's localStorage.

