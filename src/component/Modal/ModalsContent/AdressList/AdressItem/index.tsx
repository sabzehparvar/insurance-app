import { CloseIcon } from "@/utils/icons";
import Styles from "./styles.module.css";
import CustomInput from "@/component/ui/CustomInput";
import { OrderAddress } from "@/context/FormContext";

interface AddressItemProps {
  address: OrderAddress;
  onDelete: () => void;
  onChange: () => void;
}

const AddressItem = ({ address, onDelete, onChange }: AddressItemProps) => {
  return (
    <li className={Styles.item}>
      <CustomInput
        name={"address"}
        value={address.id}
        onChange={onChange}
        type="radio"
        errorDisabled
      />

      <div className={Styles.info}>
        <label className={Styles.label} htmlFor={address.id}>
          {address.name}
        </label>

        <p className={Styles.text}>{address.details}</p>
      </div>

      <button className={Styles.close} onClick={onDelete}>
        <CloseIcon size={10} color="#FFA5A5" />
      </button>
    </li>
  );
};

export default AddressItem;
