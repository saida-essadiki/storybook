import React from "react";
import Banner from "./Banner";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export function FeedbackPage() {
    return (
        <>
            <Sidebar />
            <div className="content">

                <Banner />
                <FeedbackForm />
                <Footer />
                </div>
        </>
    )
}