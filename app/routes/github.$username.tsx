import { LoaderFunction, useLoaderData } from "remix";
import { GithubApi, GithubContainer, LoaderData } from "~/features/github";

export const loader: LoaderFunction = async ({params}) => {
  return  {
    user: await GithubApi.getGitHubUser(params.username)
  }
}

export function ErrorBoundary() { // this methods is responsable to catch possible errors and shows the error in the interface
  return <h3>Whooops! user not found</h3>
}

export default function() {
  const { user } = useLoaderData<LoaderData>() // this hooks is responaible to get datas that were returned by api

  return (
    <GithubContainer user={user}/>
  )
}