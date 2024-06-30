import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children }) {
    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <div className="form">
                    <div className="container my-5 mb-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
