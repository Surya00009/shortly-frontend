import { useState } from "react";
import "./CreateLinkForm.css";

function CreateLinkForm({ onCreate }) {

    const [url, setUrl] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        if (!url.trim()) return;

        await onCreate(url);

        setUrl("");

    }

    return (

        <form
            className="create-form"
            onSubmit={handleSubmit}>

            <input

                type="text"

                placeholder="Enter the URL you want to shorten..."

                value={url}

                onChange={(e) => setUrl(e.target.value)}

            />

            <button>

                Generate Link

            </button>

        </form>

    );

}

export default CreateLinkForm;