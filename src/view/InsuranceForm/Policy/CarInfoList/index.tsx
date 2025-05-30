import CarInfoListItem from "../CarInfoItem";
import { CarInsurance } from "@/utils/interfaces";
import Styles from "./styles.module.css";

const CarInfoList = ({
    brand,
    model,
    insuranceCompany,
}: Pick<CarInsurance, "brand" | "insuranceCompany" | "model">) => {
    return (
        <dl className={Styles.list}>
            <CarInfoListItem title="شرکت بیمه گر" info={insuranceCompany} />
            <CarInfoListItem title="برند خودرو" info={brand} />
            <CarInfoListItem title="مدل خودرو" info={model} />
        </dl>
    );
};

export default CarInfoList;
