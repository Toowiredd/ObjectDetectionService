import { Hdpe2PlasticBottle as THdpe2PlasticBottle } from "../api/hdpe2PlasticBottle/Hdpe2PlasticBottle";

export const HDPE2PLASTICBOTTLE_TITLE_FIELD = "typeField";

export const Hdpe2PlasticBottleTitle = (
  record: THdpe2PlasticBottle
): string => {
  return record.typeField?.toString() || String(record.id);
};
