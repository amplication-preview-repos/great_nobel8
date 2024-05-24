import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
