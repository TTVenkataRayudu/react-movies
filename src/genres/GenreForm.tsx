import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from 'yup';
import { generateCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps){
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={
                Yup.object({
                    name: Yup.string().required('This feild is required').max(50,',max lenght is 50 chracters').firstLetterUppercase()
                })
            }
        >
            {(formikProps) => (
                <Form>
                    <TextField feild="name" displayName="Name" />
                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>

            )}

        </Formik>

    )
}

interface genreFormProps {
    model: generateCreationDTO;
    onSubmit(values: generateCreationDTO,
        action: FormikHelpers<generateCreationDTO>): void;
}