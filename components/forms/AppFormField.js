import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from '../ErrorMessage';
import { useFormikContext } from "formik"

function AppFormField({fieldName, ...otherProps}) {
   const { touched, setFieldTouched, errors, handleChange } =  useFormikContext();

    return (
        <>
        <AppTextInput
                onBlur={()=> setFieldTouched(fieldName)}
                onChangeText={handleChange(fieldName)}
                {...otherProps}
              />
              { touched[fieldName] && <ErrorMessage error={errors[fieldName]}/>}
        </>
    );
}

export default AppFormField;