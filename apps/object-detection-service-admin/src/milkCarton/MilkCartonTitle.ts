import { MilkCarton as TMilkCarton } from "../api/milkCarton/MilkCarton";

export const MILKCARTON_TITLE_FIELD = "id";

export const MilkCartonTitle = (record: TMilkCarton): string => {
  return record.id?.toString() || String(record.id);
};
