
import CustomButton from "@/component/ui/CustomButton";
import ModalFooter from "../../ModalFooter";
import ModalHeader from "../../ModalHeader";
import ModalWrapper from "../../ModalWrapper";
import AddressList from "../AdressList";

const SelectAddress = () => {
  return (
    <ModalWrapper>
      <>
        <ModalHeader title="انتخاب آدرس" />

        <AddressList />

        <ModalFooter>
          <CustomButton style={{ width: "100%" }} disabled>
            انتخاب
          </CustomButton>
        </ModalFooter>
      </>
    </ModalWrapper>
  );
};

export default SelectAddress;
