"use client";


import CustomButton from "@/component/ui/CustomButton";
import Styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const SuccessFooter = () => {
  const router = useRouter();

  return (
    <footer className={Styles.footer}>
      <CustomButton variant="primary" onClick={() => router.back()}>
        بازگشت
      </CustomButton>
    </footer>
  );
};

export default SuccessFooter;
