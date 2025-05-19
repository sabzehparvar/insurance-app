"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Spinner from "@/component/ui/Spinner";

const SelectAddress = dynamic(() => import("../ModalsContent/SelectAdress"), {
  loading: () => <Spinner />,
});

const SubmitError = dynamic(() => import("../ModalsContent/SubmitError"), {
  loading: () => <Spinner />,
});

const DeleteAddress = dynamic(() => import("../ModalsContent/DeleteAddress"), {
  loading: () => <Spinner />,
});

const ModalManager = () => {
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const modal = searchParams.get("modal");

  return (
    <>
      {modal === "address" && <SelectAddress />}

      {modal === "delete" && <DeleteAddress />}

      {modal === "error" && <SubmitError />}
    </>
  );
};

export default ModalManager;
