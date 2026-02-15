import { SortOrder } from "../../util/SortOrder";

export type MilkCartonOrderByInput = {
  confidenceScore?: SortOrder;
  count?: SortOrder;
  createdAt?: SortOrder;
  detectionTimestamp?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
