import { ErrorMessage, Field } from "formik";

export default function TextField(props: textFieldProps) {
    return (
        <div className="mb-3">
            <label htmlFor={props.feild}>{props.displayName}</label>
            <Field name={props.feild}  className="form-control" />
            <ErrorMessage name={props.feild}>
                {msg =>
                    <div className="text-danger">{msg}
                    </div>}
            </ErrorMessage>

        </div>
    )
}

interface  textFieldProps{

    feild: string;
    displayName: string;
}