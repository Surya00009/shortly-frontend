import { useState } from "react";
import toast from "react-hot-toast";
import "./CreateLinkForm.css";

function CreateLinkForm({ onCreate }) {

    const [url, setUrl] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        if (!url.trim()) {

            toast.error("Please enter a URL");

            return;

        }

        const success = await onCreate(url);

        if (success) {

            setUrl("");

        }

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

            <button type="submit">

                Generate Link

            </button>

        </form>

    );

}

export default CreateLinkForm;