import { GlassBottle as TGlassBottle } from "../api/glassBottle/GlassBottle";

export const GLASSBOTTLE_TITLE_FIELD = "typeField";

export const GlassBottleTitle = (record: TGlassBottle): string => {
  return record.typeField?.toString() || String(record.id);
};
