import React, {useEffect, useState} from 'react';
import {Layout} from "../layout/Layout";

export const UserPage = () => {
    const [me, setMe] = useState(null)
    useEffect(async () => {
        setMe(await me())
    }, [])
    if (me == null)
        return <></>
    return <Layout>
        Username: {me.name}
        {me["cards"].map((card, i) =>
            <div key={i}>Card {"activated" ? card.activated : " not activated"} {card.number}</div>
        )}
    </Layout>
}