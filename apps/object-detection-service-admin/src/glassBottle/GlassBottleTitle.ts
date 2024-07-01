import { GlassBottle as TGlassBottle } from "../api/glassBottle/GlassBottle";

export const GLASSBOTTLE_TITLE_FIELD = "id";

export const GlassBottleTitle = (record: TGlassBottle): string => {
  return record.id?.toString() || String(record.id);
};
