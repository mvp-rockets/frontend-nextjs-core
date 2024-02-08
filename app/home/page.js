import BaseTemplate from "@/templates/BaseTemplate";
import { auth } from "@/nextauth/auth"

export default async function Page() {
  const session = await auth();

  return <BaseTemplate auth={session} />
}