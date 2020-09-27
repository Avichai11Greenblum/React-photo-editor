import React from "react";

export default function SidebarItem( {name, active, handleClick} ) {
    return (
        <div>
            <button
                className = {`sidebar-item ${active ? "active" : ""}`}
                onClick = {handleClick}
            >
                {name}
            </button>
        </div>
    )
};
