import invariant from "tiny-invariant"

export const getGitHubUser = async (username?: string) => {

  invariant(username, 'Please provide an username as a string')
  const response = await fetch(`https://api.github.com/users/${username}`)

  const {login, avatar_url, html_url, bio } = await response.json()

  return {login, avatar_url, html_url, bio }

}