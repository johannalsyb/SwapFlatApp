    import React from 'react';
import AppForm from '../components/forms/AppForm';
import * as Yup from "yup";
import SubmitButton from '../components/SubmitButton';
import AppFormField from '../components/forms/AppFormField'; 
import { StyleSheet, View } from 'react-native';

const validationSchema = Yup.object().shape(
{
    name: Yup.string().required().label("Name").max(20),
    email: Yup.string().required().label("Email").email(),
    password: Yup.string().required().label("Password").min(5),

}
);

    function RegisterScreen(props) {
        return (
            <View style={styles.container}>
                <AppForm
            initialValues={{name: "", email: "", password: ""}}
            onSubmit={(values)=> console.log(values)}
            validationSchema={validationSchema}
            >
             <AppFormField
               
                icon="shield-account"
                fieldName="home"
                placeholder="Name"
                autoCapitalize="none"
              />
               <AppFormField
                icon="email"
                fieldName="email"
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
               <AppFormField
                fieldName="password"
                icon="key"
                placeholder="password"
                keyboardType="default"
                autoCapitalize="none"
                secureTextEntry
              />
<SubmitButton
                title="REGISTER"
                color="black"
               
              >
               
              </SubmitButton>
            </AppForm>
            </View>
            
        );
    }
    const styles = StyleSheet.create({
        container: {
            margin: 10,
        }
    })

    export default RegisterScreen;