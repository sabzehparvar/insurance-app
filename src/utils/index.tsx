
export interface CarPlate {
  mainCode: string[];
  cityCode: number;
}

export interface CarInsurance {
  plate: CarPlate;
  insuranceCompany: string;
  brand: string;
  model: string;
}
export const CarInsuranceData: CarInsurance = {
  plate: { mainCode: ["64", "ک", "988"], cityCode: 60 },
  insuranceCompany: "پارسیان",
  brand: "پژو",
  model: "206 تیپ 6",
};
