import { useState } from "react";
import toast from "react-hot-toast";
import "./LinkTable.css";

function LinkTable({ links, onDelete }) {

    const [search, setSearch] = useState("");

    const filteredLinks = links.filter(link =>
        link.originalUrl.toLowerCase().includes(search.toLowerCase()) ||
        link.shortCode.toLowerCase().includes(search.toLowerCase())
    );

    function truncate(url) {

        if (url.length <= 55) return url;

        return url.substring(0, 55) + "...";

    }

    function copy(shortUrl) {

        navigator.clipboard.writeText(shortUrl);

        toast.success("Link copied successfully!");

    }

    function deleteLink(id) {

        if (window.confirm("Delete this link?")) {

            onDelete(id);

            toast.success("Link deleted successfully!");

        }

    }

    return (

        <>

            <input
                className="search-box"
                placeholder="Search links..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="link-table">

                <thead>

                <tr>

                    <th>Original URL</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                    <th>Actions</th>

                </tr>

                </thead>

                <tbody>

                {

                    filteredLinks.length === 0 ?

                        (

                            <tr>

                                <td colSpan="4" className="empty-row">

                                    No Links Found

                                </td>

                            </tr>

                        )

                        :

                        filteredLinks.map(link => (

                            <tr key={link.id}>

                                <td>

                                    <strong>

                                        🌐 {new URL(link.originalUrl).hostname}

                                    </strong>

                                    <br />

                                    <small>

                                        {truncate(link.originalUrl)}

                                    </small>

                                </td>

                                <td>

                                    <a
                                        href={link.shortUrl}
                                        target="_blank"
                                        rel="noreferrer">

                                        {link.shortUrl}

                                    </a>

                                </td>

                                <td>

                                    {link.clickCount}

                                </td>

                                <td>

                                    <div className="action-buttons">

                                        <button
                                            className="copy-btn"
                                            onClick={() => copy(link.shortUrl)}>

                                            Copy

                                        </button>

                                        <a
                                            className="open-btn"
                                            href={link.shortUrl}
                                            target="_blank"
                                            rel="noreferrer">

                                            Open

                                        </a>

                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteLink(link.id)}>

                                            Delete

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                }

                </tbody>

            </table>

        </>

    );

}

export default LinkTable;