import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants/url";

export default function InfiniteLoading(pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: BACKEND_URL + '/getPost',
            params: {
                pageNumber: pageNumber,
                pageLength: 5
            }
        }).then((res) => {
            setPosts((state) => [...state, ...res.data.data])
            setHasMore(res.data.data.length > 0)
            console.log(res.data.data.length)
            setLoading(false)
        }).catch((err) => {
            setError(true)
        })
    }, [pageNumber])

    return { loading, error, posts, hasMore }
}