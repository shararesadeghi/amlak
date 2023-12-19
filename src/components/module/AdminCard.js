"use client";

import styles from "@/module/AdminCard.module.css";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const AdminCard = ({ data: { _id, title, description, location, price } }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const publishHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();

    setLoading(false);
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${_id}`, { method: "DELETE" });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <div className={styles.buttons}>
        {loading ? (
          <ThreeDots
            height={45}
            color="#db0505"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "0 100px" }}
            visible={true}
          />
        ) : (
          <button onClick={publishHandler}>انتشار</button>
        )}
        <Link href={`/buy-residential/${_id}`}>مشاهده آگهی</Link>
        {loading ? (
          <ThreeDots
            height={45}
            color="#db0505"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ margin: "0 100px" }}
            visible={true}
          />
        ) : (
          <button onClick={deleteHandler}>حذف</button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default AdminCard;
