import React, {useEffect, useState} from 'react';
import {Layout} from "../layout/Layout";
import {Cards} from "../comp/Cards";
import {items} from "../api";
import {Box} from "chakra-ui";

export const MarketPage = ({addToBasket}) => {
    const [itemsData, setItemsData] = useState(null)
    const [page, setPage] = useState(1)
    if (page > 2)
        setPage(2)
    if (page < 1)
        setPage(1)
    useEffect(() => {
        items(page).then(setItemsData)
    }, [page])

    if (itemsData == null) {
        return <></>
    }

    return <Layout>
        <Box>
            <Cards itemsData={itemsData} addToBasket={addToBasket}/>
            <b onClick={()=>setPage(page-1)}>Prev Page</b>
            <b onClick={()=>setPage(page+1)}>Next Page</b>
        </Box>
    </Layout>
}