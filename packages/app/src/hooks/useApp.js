import {
  useMemo,
  useContext,
  createContext,
} from 'react';
import useField from './useField';

export const AppContext = createContext({});
export const useAppProvider = () => {
  const emailField = useField({
    validator: value =>
      (value.length === 0 && "No email provided!") ||
      (!value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
        "Invalid email format!") ||
      null,
    id: "email",
    label: "Email Address",
    placeholder: "test@example.com",
    type: "email"
  });
  const nameField = useField({
    validator: value => value.length === 0 && "No Name Provided!",
    id: "name",
    label: "Name",
    placeholder: "John Doe"
  });
  const avatarField = useField({
    validator: value => value.length === 0 && "No Avatar Provided!",
    id: "avatar",
    label: "Avatar",
    placeholder: "//placekitten.com/50/50"
  });
  const coverField = useField({
    validator: value => value.length === 0 && "No Cover Image Provided!",
    id: "cover",
    label: "Cover Image",
    placeholder: "//placekitten.com/600/300"
  });
  const bioField = useField({
    validator: value => value.length === 0 && "No Bio Provided!",
    id: "bio",
    label: "Bio",
    placeholder: "It all started in the winter of '67...'",
    multiline: true,
    inputComponent: "textarea",
    rows: 5
  });
  const fields = [emailField, nameField, avatarField, coverField, bioField];
  const fieldsMap = {
    emailField,
    nameField,
    avatarField,
    coverField,
    bioField
  };
  const isValid = useMemo(
    () => fields.reduce((prev, it) => prev && it, true),
    fields,
  );
  const isDirty = useMemo(
    () => fields.reduce((prev, it) => prev || it, false),
    fields,
  );
  const values = useMemo(
    () => Object
      .entries(fieldsMap)
      .reduce(
        (prev, [name, field]) => ({ ...prev, [name.replace('Field', '')]: field.isValid ? field.value : undefined }),
        {},
      ),
    fields,
  );
  return {
    isValid,
    isDirty,
    fields,
    fieldsMap,
    values,
  };
}

export const useAppFields = () => {
  const { fields } = useContext(AppContext);
  return fields;
};

export const useAppField = field => {
  const { fieldsMap } = useContext(AppContext);
  return fieldsMap[field] || null;
}

export const useAppStatus = () => {
  const { isValid, isDirty } = useContext(AppContext);
  return {
    isValid, 
    isDirty,
  };
}

export const useAppValues = () => {
  const { values } = useContext(AppContext);
  return {
    values
  };
}