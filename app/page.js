import Logo from "@/atoms/Logo"
import LinkButton from "@/atoms/LinkButton"

export default function Page({ params, searchParams }) {
  return <div className="flex flex-col items-center justify-center h-screen w-screen bg-red-100">
    <Logo
      src="/images/logo.svg"
      className=''
      width='149'
      height="40"
      alt='MVP Rockets'
    />
    <h1 className="text-red-400 font-bold text-[100px]">My App</h1>
    <LinkButton href="/home" >Home Page</LinkButton>
  </div>
}