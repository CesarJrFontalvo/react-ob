import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum'

const TaskFormik = ({ add, length }) => {
    const initialValues = {
        name: "",
        description: "",
        level: LEVELS.NORMAL
    }
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().required('Name is required'),
            description: Yup.string().required('Description is required'),
            level: Yup.string().required('Level is required')
        }
    )
    return (
        <div>
            <Formik
                initialValues={initialValues}
                // *** Yup Validation Schema ***
                validationSchema={taskSchema}
                // ** onSubmit Event
                onSubmit={(values) => {
                    add(values)
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <div className='row'>
                            {/* <label className='text-start mt-4' htmlFor="name">Username</label> */}
                            <Field className='form-control mt-4 ' id="name" type="text" name="name" placeholder=" Task name" />

                            {/* name Errors */}
                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name="name" ></ErrorMessage>
                                )
                            }
                        </div>
                        <div className='row'>

                            {/* <label className='text-start mt-4' htmlFor="description">Description</label> */}
                            <Field className='form-control mt-2 ' id="description" type="text" name="description" placeholder="Task  description" />

                            {/* description Errors */}
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name="description"></ErrorMessage>
                                )
                            }
                        </div>

                        <div className='row'>

                            <Field as="select" className='form-control mt-2 ' name="level" defaultValue={LEVELS.NORMAL} id='level'>
                                <option value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option value={LEVELS.URGENT}>
                                    Urgent
                                </option>
                                <option value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>
                            </Field>
                            {/* level Errors */}
                            {
                                errors.level && touched.level &&
                                (
                                    <ErrorMessage name="level"></ErrorMessage>
                                )
                            }
                        </div>

                        <button type='submit' className='mt-3 btn btn-primary btn-lg ms-2'>
                            {length > 0 ? 'Add New Task' : 'Create your First Task'}
                        </button>

                    </Form>
                )
                }

            </Formik>
        </div>
    )
}

export default TaskFormik
