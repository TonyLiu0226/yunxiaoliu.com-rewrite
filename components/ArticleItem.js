import styles from "../styles/Article.module.css"
import Link from "next/link"

const ArticleItem = ({article}) => {

    return(
        //nested routing of each article link
        <Link legacyBehavior href="/article/[id]" as={`/article/${article.number}`}>
            {/* we make a card for each article */}
            <a className={styles.card}>
                <h1>{article.frontmatter.title} &rarr;</h1>
                <h3>{article.frontmatter.author}</h3>
                <h3>{article.frontmatter.date}</h3>
                <h4>Category: {article.frontmatter.category}</h4>
            </a>
        </Link>
    )
}

export default ArticleItem
