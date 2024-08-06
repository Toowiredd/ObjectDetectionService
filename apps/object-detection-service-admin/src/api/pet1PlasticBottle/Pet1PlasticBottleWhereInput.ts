import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type Pet1PlasticBottleWhereInput = {
  confidenceScore?: FloatNullableFilter;
  count?: IntNullableFilter;
  detectionTimestamp?: DateTimeNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
