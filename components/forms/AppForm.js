import { Formik } from 'formik';
import React, { Children } from 'react';

function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
{()=> (
    <>
    {children}
    </>
)}
        </Formik>
    );
}

export default AppForm;