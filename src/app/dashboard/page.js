import { getServerSession } from "next-auth";
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/utils/connectDB';
import User from '@/models/User';

import DashboardPage from "@/template/DashboardPage";

const Dashboard = async () => {
    await connectDB();
    const session = await getServerSession(authOptions);
    const user = await User.findOne({email:session.user.email});

  return <DashboardPage createdAt={user.createdAt}/>;
};

export default Dashboard;
