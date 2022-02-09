import React from 'react';
import MyButton from './MyButton';
import { useFormikContext } from "formik";
import style from '../config/style';


function SubmitButton({title, style}) {
    const {handleSubmit} = useFormikContext()
    return (
        <MyButton
                color="black"
                onPress={handleSubmit}
                title={title}
                style={style}
              >
                {title}
              </MyButton>
    );
}

export default SubmitButton;