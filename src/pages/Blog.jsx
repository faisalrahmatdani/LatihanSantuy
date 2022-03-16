import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Spinner from "../components/Spinner";

const Blog = () => {
  const [articles, setArticles] = useState([])
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    const getArticles = async () => {
      if(articles.length === 0) {
        setSpinner(true)
      }
      const ress = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-03-14&sortBy=popularity&apiKey=d4a339f445144a9da37c04a4db993c95')
      if(ress.status === 200){
        setArticles(ress.data.articles)
        setSpinner(false)
      }else {
        alert(`Failed to Load ${ress.message}`)
      }
    }  
    getArticles()
  },[])
  {console.log(articles)}
  
  return (
    <>  
      {spinner && (
        <>
        <Spinner/>
        </>
      )}
    <div className="mt-20 md:mr-6 grid grid-cols-1 md:grid-cols-2 gap-3">
      {
        articles.map((article) => (
          <div className="">
            <div className="bg-gray-200 w-5/5 md:w-full min-h-12 px-5 py-5 rounded-lg mx-3 my-3">
              <img src={article.urlToImage} alt="articleImg" />
              <h1 className="text-bold text-2xl my-4">{article.title}</h1>
              <p className="text-sm">{article.description}</p>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )

};

export default Blog;
