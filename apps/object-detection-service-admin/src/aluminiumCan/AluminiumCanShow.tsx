import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AluminiumCanShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ConfidenceScore" source="confidenceScore" />
        <TextField label="Count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DetectionTimestamp" source="detectionTimestamp" />
        <TextField label="ID" source="id" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
