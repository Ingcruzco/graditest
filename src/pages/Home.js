import Carousel from '../components/Carousel';
import References from '../components/References';
import Spinner from '../components/Spinner';
import useFetch from '../hooks/useFetch';
import '../styles/home.css'


const URL='https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js';

function Home() {
    
    const {data:response,loading,error}=useFetch(URL);

    if(loading) return <Spinner loading={loading}/>
    console.log(response);
    return (

        <div className='container'>
            <Carousel images={response?.images}/>
            <References data={response}/>
        </div>
    )
}

export default Home