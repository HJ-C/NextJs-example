import Head from 'next/head'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import ItemList from '../src/component/itemList';
import { Header, Divider, Loader} from 'semantic-ui-react';

export default function Home() {

  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

    function getData() {
      Axios.get(API_URL).then((res) => {
        console.log(res.data);
        setList(res.data);
        setIsLoading(false)
      });
    }

    useEffect(()=>{
      getData()
    },[])

  return (
    <div>
      <Head>
        <title>HOME | 코딩</title>
      </Head>
       { isLoading && (
         <>
          <Loader active inline='centered'>
            Loading
          </Loader>
         </>
       )}
       { !isLoading && (
         <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
         </>
       )}
    </div>
  )
}
