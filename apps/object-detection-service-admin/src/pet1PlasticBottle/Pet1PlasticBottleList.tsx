import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const Pet1PlasticBottleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PET1PlasticBottles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ConfidenceScore" source="confidenceScore" />
        <TextField label="Count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DetectionTimestamp" source="detectionTimestamp" />
        <TextField label="ID" source="id" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
