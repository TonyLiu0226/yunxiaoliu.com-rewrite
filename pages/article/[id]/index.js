import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';
//nested routes: Specify route path as directories in pages folder
//then use []
import {useRouter} from 'next/router';
import styles from '../../../styles/ArticleId.module.css';

const article = ({frontmatter, content}) => {

    
    const router = useRouter();
    const {id} = router.query; //save id in case we want to use it in the future
    
    const {title, author, authorImage, date, time, category, tags} = frontmatter;

    return(
        <div>
            <div className={styles.frontmatter}>
            {/* frontmatter content */}
            <h1 className={styles.h1}>{title}</h1>
            <h3 className={styles.h3}>Published by: {author}</h3>
            <img src={authorImage} className={styles.pfp}></img>
            <h3 className={styles.h3}>{date}{' '}{time}</h3>
            <h4 className={styles.h4}>Category: {category}</h4>
            {/* <li>
                {tags.map((tag) => {
                    <h4>{tag}</h4>
                })}
            </li> */}
            </div>
            <br></br>
            {/* main content */}
            <div className={styles.main} dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    )
}

//getstaticpaths generates a path for each route
//returns paths, an array of objects where each object represents a route. Within each object, there is a params property, which has an object containing parameters inside
// [{}, {params: {id: }}, {}]

//getserversideprops gets data upon request only
export const getStaticPaths = () => {
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get the id for each post to create a route with
    const paths = files.map((fileName) => ({
        params: {
            id: fileName.replace(".md", "").replace("post", ""),
        }
    }));
    return{
        paths,
        fallback: false
    };
}

//get the info, but this time instead of for all pages, just for one page
export const getStaticProps = ({params: {id}}) => {
    // get list of files from the posts folder
    const file = fs.readFileSync(`posts/post${id}.md`, 'utf-8');
    const {data: frontmatter, content} = matter(file);
    return {
        props: {
            frontmatter,
            content,
        },
    }
}

export default article