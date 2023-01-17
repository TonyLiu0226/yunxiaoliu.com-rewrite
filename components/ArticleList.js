import styles from "../styles/Article.module.css"
import ArticleItem from "../components/ArticleItem.js"

//can pass in specific names as prop
const ArticleList = ({articles}) => {
    return(
      <div className={styles.grid}>
        {articles.map((article) => {
            //extract number and frontmatter
            const {number, frontmatter} = article
            
            //JSX for individual blog listing
            return <ArticleItem key={number} article={article}>
            </ArticleItem>
        })}
      </div>  
    )
}
export default ArticleList