import BaseTemplate from "@/templates/BaseTemplate";
import { getAuth } from "hooks/get-auth";

export default async function Page() {
  const { session } = await getAuth();

  return <BaseTemplate auth={session} />
}