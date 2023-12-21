import styles from "../styles/Article.module.css"
import Link from "next/link"

const ArticleItem = ({article}) => {

    // const {slug, frontmatter} = article;
    // const {title, author, image, published, tags} = frontmatter;
    return(
        //nested routing of each article link
        <Link legacyBehavior href="/article/[id]" as={`/article/${article.id}`}>
            {/* we make a card for each article */}
            <a className={styles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
