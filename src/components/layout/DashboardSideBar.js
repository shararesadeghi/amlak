import styles from "@/layout/DashboardSideBar.module.css";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const DashboardSideBar = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{session.user.email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSideBar;
