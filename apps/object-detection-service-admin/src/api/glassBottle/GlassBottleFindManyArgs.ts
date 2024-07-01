import { GlassBottleWhereInput } from "./GlassBottleWhereInput";
import { GlassBottleOrderByInput } from "./GlassBottleOrderByInput";

export type GlassBottleFindManyArgs = {
  where?: GlassBottleWhereInput;
  orderBy?: Array<GlassBottleOrderByInput>;
  skip?: number;
  take?: number;
};
