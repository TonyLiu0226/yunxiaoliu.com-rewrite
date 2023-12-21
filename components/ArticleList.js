import styles from "../styles/Article.module.css"
import ArticleItem from "../components/ArticleItem.js"

//can pass in specific names as prop
//NO changes to this file needed for reusing it with posts
const ArticleList = ({articles}) => {
    return(
      <div className={styles.grid}>
        {articles.map((article) => (<ArticleItem key={article.id} article={article}/>))}
      </div>  
    )
}
export default ArticleList