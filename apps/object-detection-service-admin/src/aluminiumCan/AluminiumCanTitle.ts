import { AluminiumCan as TAluminiumCan } from "../api/aluminiumCan/AluminiumCan";

export const ALUMINIUMCAN_TITLE_FIELD = "typeField";

export const AluminiumCanTitle = (record: TAluminiumCan): string => {
  return record.typeField?.toString() || String(record.id);
};
