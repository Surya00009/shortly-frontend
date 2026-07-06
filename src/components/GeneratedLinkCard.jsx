import "./GeneratedLinkCard.css";

function GeneratedLinkCard({ link }) {

    if (!link) return null;

    function copy() {

        navigator.clipboard.writeText(link.shortUrl);

        alert("Copied Successfully!");

    }

    return (

        <div className="generated-card">

            <h3>

                ✅ Link Generated Successfully

            </h3>

            <div>

                <strong>Original URL</strong>

                <p>{link.originalUrl}</p>

            </div>

            <div>

                <strong>Short URL</strong>

                <p>

                    {link.shortUrl}

                </p>

            </div>

            <div className="generated-buttons">

                <button

                    onClick={copy}>

                    Copy

                </button>

                <a

                    href={link.shortUrl}

                    target="_blank"

                    rel="noreferrer">

                    Open

                </a>

            </div>

        </div>

    );

}

export default GeneratedLinkCard;