import LinkButton from "atoms/LinkButton"

export default function Page({ params, searchParams }) {
  return <div className="flex flex-col items-center justify-center h-screen w-screen bg-red-100">
    <h1 className="text-red-400 font-bold text-[100px]">My Page</h1>
    <LinkButton  href="/home" >Home Page</LinkButton>
  </div>
}