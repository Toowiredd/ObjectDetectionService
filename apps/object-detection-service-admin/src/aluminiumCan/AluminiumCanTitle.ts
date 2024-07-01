import { AluminiumCan as TAluminiumCan } from "../api/aluminiumCan/AluminiumCan";

export const ALUMINIUMCAN_TITLE_FIELD = "id";

export const AluminiumCanTitle = (record: TAluminiumCan): string => {
  return record.id?.toString() || String(record.id);
};
