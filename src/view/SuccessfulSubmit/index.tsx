
import PolicyInformation from "../InsuranceForm/Policy";
import Styles from "./styles.module.css";
import SuccessFooter from "./SuccessFooter";

const SuccessfulSubmit = () => {
  return (
    <div className={Styles.success}>
      <main>
        <PolicyInformation isSuccess={true} />
      </main>

      <SuccessFooter />
    </div>
  );
};

export default SuccessfulSubmit;