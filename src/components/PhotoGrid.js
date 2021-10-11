import React from 'react'

export default function PhotoGrid({ photos }) {
    return (
        <>
            {photos.length === 0 && <p>No Photos</p>}

            <div className="Photo-Grid">
                {photos.length >= 0 && photos.map(item => (
                    <a href={ item.html_url } target="_blank"  rel="noreferrer">
                        <div className="cards" key={item.id}>
                            <img src={item.avatar_url} alt="" />
                            <p>{item.login}</p>
                        </div>
                    </a>
                ))}
            </div>

        </>
    )
}
