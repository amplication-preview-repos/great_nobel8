import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <NumberInput step={1} label="score" source="score" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
