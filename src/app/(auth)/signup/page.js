import SignupPage from "@/template/SignupPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = getServerSession(authOptions);
  if (session) redirect("/");
  return <SignupPage />;
};

export default Signup;
