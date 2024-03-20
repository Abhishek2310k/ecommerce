import React from 'react'
import "./Products.scss"
import List from '../../Components/List/List'
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Components/Hooks/useFetch.js';


// const []


const Products = () => {

  const catId = parseInt(useParams().id)
  // here useParams() gives us all of the parameters that are coming from the link
  const [maxPrice,setMaxPrice] = useState(1000);
  const [sort,setSort] = useState('asc');

  const {data,loading,err} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  const [selectedSubCats,setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked ? [...selectedSubCats,value] 
      : selectedSubCats.filter((item)=> item!==value )
    )
  }


  return (
    <div className='products'>
      <div className='left'>
        <div className='filter'>
          <h2>Product Categories</h2>
          {data.map((item,index)=>
            <div className='inputItem' key={item.id}>
              <input type='checkbox' id="1" value={item.id} onChange={handleChange}/>
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
          )}
        </div>
        <div className='filter'>
          <h2>Filter By Price</h2>
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(e)=>(setMaxPrice(e.target.value))}/>
          <span>{maxPrice}</span>
        </div>
        <div className='filter'>
          <h2>Sort By</h2>
          <div className='inputItem'>
            <input type='radio' id='asc' name='price' onChange={(e)=>(setSort("asc"))}/>
            <label htmlFor='asc'>Price(Low to High)</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' name='price' onChange={(e)=>(setSort("desc"))}/>
            <label htmlFor='desc'>Price(High to Low)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img 
          className='catImg'
          src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt=''
        />
        {/* htmlFor the rest of the part we are going to get the images using list because in future we will need to upgrade them according to the filters applied*/}
        <List catId={catId} sort={sort} maxPrice={maxPrice} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products