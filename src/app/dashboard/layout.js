import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {redirect} from 'next/navigation';
import DashboardSideBar from "@/layout/DashboardSideBar";

const DashboardLayout = async ({ children }) => {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/signin");
  return <DashboardSideBar>{children}</DashboardSideBar>;
};

export default DashboardLayout;
