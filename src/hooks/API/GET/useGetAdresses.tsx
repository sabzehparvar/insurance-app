import { OrderAddress } from "@/context/FormContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const DEFAULT_ADDRESSES: OrderAddress[] = [
  {
    id: "1",
    name: "خانه",
    details: "تهران، شهرک غرب، بلوار فرحزادی، پلاک ۱۲۳",
  },
  {
    id: "2",
    name: "محل کار",
    details: "تهران، سعادت‌آباد، خیابان یکم، پلاک ۲۰",
  },
  {
    id: "3",
    name: "آدرس پستی",
    details: "تهران، نیاوران، خیابان دربند، پلاک ۵۴",
  },
];

interface GetAddressesResult {
  loading: boolean;
  error: string | null;
}

export const useGetAddresses = (
  addresses: OrderAddress[],
  setAddresses: Dispatch<SetStateAction<OrderAddress[]>>,
): GetAddressesResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAddresses = async (): Promise<void> => {
      if (addresses.length > 0) {
        // Don't fetch if there is already a list
        return;
      }

      setLoading(true);
      setError(null);

      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

      if (!backendUrl) {
        setAddresses(DEFAULT_ADDRESSES);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${backendUrl}/my-addresses/`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("آدرس‌ها بارگذاری نشدند.");
        }

        const result: OrderAddress[] = await response.json();
        setAddresses(result);
      } catch (error) {
        setError("خطا در بارگذاری آدرس‌ها. از آدرس‌های پیش‌فرض استفاده شد.");
        setAddresses(DEFAULT_ADDRESSES);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [addresses.length, setAddresses]);

  return { loading, error };
};
