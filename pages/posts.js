//all js files placed in pages directory will be a route
//if want to create component, place file in components instead
//use lowercase for pages, uppercase for components

import ArticleList from "../components/ArticleList.js"

const posts = ({posts}) => {
    console.log(posts);
    return(
        <div>
            <h1>About me</h1>
            <ArticleList articles={posts}></ArticleList>
        </div>
    )
}

export default posts

/* REPLACE THIS WITH THE getStaticProps function that fetches data from files in the posts folder
*/
export const getStaticProps = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
    const posts = await res.json();

    //can return json objects props
    return {
        props: {
            posts
        }
    }
}