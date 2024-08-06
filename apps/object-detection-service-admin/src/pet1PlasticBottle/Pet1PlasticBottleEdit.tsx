import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const Pet1PlasticBottleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="ConfidenceScore" source="confidenceScore" />
        <NumberInput step={1} label="Count" source="count" />
        <DateTimeInput label="DetectionTimestamp" source="detectionTimestamp" />
        <TextInput label="Type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
