import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import ArticleList from "../components/ArticleList.js";

const Blog = ({posts}) => {
    
        return <ArticleList articles={posts}>
        </ArticleList>
}

export default Blog


export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('posts');

    // get frontmatter & post number from each post
    const posts = files.map((fileName) => {
        const file = fileName.replace('.md', '');
        const number = file.replace('post', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
          number,
          frontmatter,
        };
    });

    // Return the pages static props
    return {
        props: {
          posts,
        },
    };
}