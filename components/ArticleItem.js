import styles from "../styles/Article.module.css"
import styled from '@emotion/styled';
import Link from "next/link";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { colors } from '../constants/constants.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const ArticleItem = ({article}) => {
    let i = Math.floor((Math.random() * colors.length));
    console.log(i);
    return(
        //nested routing of each article link
        <Link legacyBehavior href="/article/[id]" as={`/article/${article.number}`}>
            {/* we make a card for each article */}
            <Card data-aos="fade-in" data-aos-duration="1000"
    data-aos-easing="ease-in" sx={{width: "100%", margin: "20px 0", display: "flex", justifyContent: 'space-between'}}>
            <CardMedia
                style={{ width: 280, maxWidth: "35%", cursor:"pointer" }}
                image="/77.jpeg"
                title="green iguana"
            />
            <CardContent sx={{width: "100%", backgroundColor: `${colors[i]}`}}>
                <a className={styles.card}>
                    <div className={styles.divs}>
                        <h1>{article.frontmatter.title} &rarr;</h1>
                        <br></br>
                        <h3>{article.frontmatter.author}</h3>
                        <h3>{article.frontmatter.date}</h3>
                        <h4>Category: {article.frontmatter.category}</h4>
                    </div>
                </a>
            </CardContent>
            </Card>
            
        </Link>
        
    )
}

export default ArticleItem
