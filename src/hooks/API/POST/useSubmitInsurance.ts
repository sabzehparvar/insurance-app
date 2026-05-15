import { OrderInfo } from "@/context/FormContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useSubmitInsurance = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitInsurance = async (data: OrderInfo): Promise<void> => {
    setLoading(true);

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const useMockSubmit =
      process.env.NEXT_PUBLIC_MOCK_SUBMIT === "true" || !backendUrl;

    if (useMockSubmit) {
      router.replace("/successful-submit");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/order/completion/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const responseData = await response.json().catch(() => null);

      if (responseData?.errors?.length) {
        alert(responseData.errors[0]);
      }

      if (!response.ok) {
        const message =
          responseData?.errors?.[0] ||
          "خطا در ارسال اطلاعات. لطفا دوباره تلاش کنید.";
        throw new Error(message);
      }

      router.replace("/successful-submit");
    } catch (error) {
      alert(error);
      router.push("/?modal=error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitInsurance };
};
