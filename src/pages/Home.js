import { useContext } from 'react';
import Carousel from '../components/Carousel';
import Gridproducts from '../components/Gridproducts';
import FormProduct from '../components/References';
import Spinner from '../components/Spinner';
import { ShoppingContext } from '../context/ShoppingContext';
import useFetch from '../hooks/useFetch';
import '../styles/home.css'


const URL='https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js';

function Home() {
    
    const {data:response,loading,error}=useFetch(URL);

    if(loading) return <Spinner loading={loading}/>

    if(error) console.error(error);
    return (

        <div className='container'>
            <Carousel images={response?.images}/>
            <Gridproducts images={response?.images}/>
            <FormProduct data={response}/>
        </div>
    )
}

export default Home