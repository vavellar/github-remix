import { LoaderFunction } from "remix"
import { GithubApi } from "~/features/github"

export const loader: LoaderFunction = async ({params}) => {
  return  {
    user: await GithubApi.getGitHubUser(params.usernam2e)
  }
}

export function ErrorBoundary() { // this methods is responsable to catch possible errors and shows the error in the interface
  return <h3>Whooops from repos.tsx! user not found</h3>
}

export default function() {
  return <h3>Repos</h3>
}