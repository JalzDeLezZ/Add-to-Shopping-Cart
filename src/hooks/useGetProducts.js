import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

    useEffect(() => {

        (async () => {
            const {data} = await axios.get(API);
            setProducts(data);
        })();

    }, [setProducts])

    return products;
};

export default useGetProducts;