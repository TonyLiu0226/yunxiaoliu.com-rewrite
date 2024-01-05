import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { MAX_HOME_PAGE_POSTS } from '../constants/constants'
import styles from '../styles/Layout.module.css'
import indexStyles from '../styles/Index.module.css'
import fs from 'fs';
import matter from 'gray-matter';
import ArticleList from "../components/ArticleList.js";

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {
  let postShortList = []
  //limits number of posts displayed on home screen to the most recent MAX_HOME_PAGE_POSTS
  for( var i = posts.length - 1; i >= (posts.length - MAX_HOME_PAGE_POSTS); i--) {
    if (i < 0) {
      break;
    }
    else {
      postShortList.push(posts[i]);
    }
  }
  return (
    <></>
  )
}

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


