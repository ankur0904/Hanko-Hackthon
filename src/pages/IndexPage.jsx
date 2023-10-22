import React, { useState, useEffect } from "react";
import MainDrawer from "../components/MainDrawer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import HankoAuth from "../components/HankoAuth";
import userId from "../config/config.js"

function IndexPage() {
    console.log(userId)
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (userId !== null) {
            setUser(userId);
        }
    }, [userId]);
    return (
        <>
            <Header setUser={setUser} />
            {!user && <HankoAuth />}
            {user && <>
                <MainDrawer />
                <Hero />
            </>}

        </>
    )
}

export default IndexPage;