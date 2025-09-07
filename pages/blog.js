import fs from 'fs';
import { useEffect} from 'react';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import ArticleList from "../components/ArticleList.js";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Blog = ({posts}) => {
    
        // return <ArticleList articles={posts}>
        // </ArticleList>
        return <Typography variant="h1" className = "text-black dark:text-white">Coming soon! please stay tuned</Typography>
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