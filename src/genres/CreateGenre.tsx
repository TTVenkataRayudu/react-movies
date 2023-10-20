import axios from "axios";
import GenreForm from "./GenreForm";
import { generateCreationDTO } from './genres.model'
import { useHistory } from "react-router-dom";
import { urlGenres } from "../endpoints";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";
export default function CreateGenre() {
    const history = useHistory();
    const [errors, setErrors] = useState<string[]>();
    async function create(genre: generateCreationDTO) {
        try {
            await axios.post(urlGenres, genre);
            history.push('/genres')
        }
        catch (error) {
            console.error(error);
            if (error && error.response) {
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Genres</h3>
            <DisplayErrors errors={errors} />
            <GenreForm model={{ name: '' }}
                onSubmit={async (value: any) => {
                    await create(value);
                } }
            />
            
        </>
    )
}