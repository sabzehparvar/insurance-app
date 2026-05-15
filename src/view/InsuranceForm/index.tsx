import InsuranceInfo from "./Policy";
import OwnerInfo from "./OwnerInfo";
import Styles from "./styles.module.css";
const InsuranceInformation = () => {
  return (
    <main className={Styles.container}>
      <InsuranceInfo />
      <OwnerInfo />
    </main>
  );
};

export default InsuranceInformation;
