import { LoaderFunction, useLoaderData } from "remix";

export interface User {
  login: string
  avatar_url: string
  html_url: string
  bio: string
}

export interface LoaderData {
  user: User
}

export const loader: LoaderFunction = async ({params}) => {
  const response = await fetch(`https://api.github.com/users/${params.username}`)

  return {
    user: await response.json()
  }
}

export default function() {
  const { user } = useLoaderData<LoaderData>()  //this hooks is responsible to get datas that were returned by loader function above

  return (
    <>
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img src={user.avatar_url} alt={user.login}/>
    </>
  )
  
}