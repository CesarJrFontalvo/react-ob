import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email es requrido'),
        password: Yup.string()
            .required('Password es requrido')
    }
);


const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useHistory();

    const submit = async (values) => {
        await new Promise((r) => setTimeout(r, 1000));
        // alert(JSON.stringify(values, null, 2));
        // We save the data in the localstorage
        await sessionStorage.setItem('credentials', values);
        history.go('/profile');

    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // ** onSubmit Event
                onSubmit={submit}
            >
                {/* We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" className='form-control' placeholder="example@email.com" />

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password" className=' mt-2'>Password</label>
                        <Field
                            className='form-control mt-2'
                            id="password"
                            name="password"
                            placeholder="password"
                            type='password'
                        />
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }
                        <div className='mt-2'>
                            <button className=' btn btn-primary' type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>) : null}
                            <button className='mx-4 btn btn-success' type="button" onClick={() => history.push('/register')}>Register</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Loginformik;
