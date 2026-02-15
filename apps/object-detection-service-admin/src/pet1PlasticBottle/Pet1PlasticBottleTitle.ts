import { Pet1PlasticBottle as TPet1PlasticBottle } from "../api/pet1PlasticBottle/Pet1PlasticBottle";

export const PET1PLASTICBOTTLE_TITLE_FIELD = "typeField";

export const Pet1PlasticBottleTitle = (record: TPet1PlasticBottle): string => {
  return record.typeField?.toString() || String(record.id);
};
