import { Field, Form, Formik } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import { SlMagnifier } from "react-icons/sl";
import { useId } from "react";
import { initValues, searchBarProps } from '../SearchBar/SearchBar.types'
import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar ({ onSearch}: searchBarProps) {
    const id = useId();
    const initialValues: initValues={query: ""} 
     return (
        <Formik initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        onSearch(values.query);
                        if (values.query === "") {
                            toast.error('Please formulate your request.')
                            return
                        }
                        actions.resetForm();}}>
            
            <header className={css.headerCont}>
                <Form className={css.form}>
                    <Field className={css.input} type="text" id={id} name="query" autoComplete="off" autoFocus placeholder="Search images and photos" />
                    <button className={css.button} type="submit"><SlMagnifier className={css.icon} /></button>
                    <Toaster/>
                </Form>
            </header>
        </Formik>
        
    )
}