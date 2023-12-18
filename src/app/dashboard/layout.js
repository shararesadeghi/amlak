import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardSideBar from "@/layout/DashboardSideBar";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی پیش آمده است</h3>;
  return (
    <DashboardSideBar role={user.role} email={user.email}>
      {children}
    </DashboardSideBar>
  );
};

export default DashboardLayout;
