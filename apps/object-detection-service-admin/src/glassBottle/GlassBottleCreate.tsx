import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const GlassBottleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="ConfidenceScore" source="confidenceScore" />
        <NumberInput step={1} label="Count" source="count" />
        <DateTimeInput label="DetectionTimestamp" source="detectionTimestamp" />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
