"use client";

import Spinner from "@/component/ui/Spinner";
import AddressItem from "./AddressItem";
import Styles from "./styles.module.css";
import { useHandleAddresses } from "@/hooks/context/useHandleAdresses";
const AddressList = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | undefined;
  setSelectedId: (id: string) => void;
}) => {
  const { addresses, loading, error, openDeleteModal } = useHandleAddresses();

  return (
    <div className={Styles.listWrapper}>
      {loading && <Spinner />}
      {error && <p className={Styles.errorMessage}>{error}</p>}
      {!loading && addresses.length === 0 && !error && (
        <p className={Styles.emptyText}>هنوز هیچ آدرسی بارگذاری نشده است.</p>
      )}
      <ul className={Styles.list}>
        {addresses.map((address) => (
          <AddressItem
            address={address}
            key={address.id}
            selectedValue={selectedId}
            onChange={setSelectedId}
            onDelete={openDeleteModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddressList;
