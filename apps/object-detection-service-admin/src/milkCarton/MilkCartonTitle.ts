import { MilkCarton as TMilkCarton } from "../api/milkCarton/MilkCarton";

export const MILKCARTON_TITLE_FIELD = "typeField";

export const MilkCartonTitle = (record: TMilkCarton): string => {
  return record.typeField?.toString() || String(record.id);
};
