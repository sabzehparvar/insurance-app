"use client";


import { useGetAddresses } from "@/hooks/API/GET/useGetAdresses";
import AddressItem from "./AdressItem";
import Styles from "./styles.module.css";

const AddressList = () => {
  const { data: addresses, loading } = useGetAddresses();

  return (
    <ul className={Styles.list}>
      {loading && "Loading..."}
      {addresses.map((address) => (
        <AddressItem
          address={address}
          key={address.id}
          onChange={() => {}}
          onDelete={() => {}}
        />
      ))}
    </ul>
  );
};

export default AddressList;
