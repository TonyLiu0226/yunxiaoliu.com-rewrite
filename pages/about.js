//all js files placed in pages directory will be a route
//if want to create component, place file in components instead
//use lowercase for pages, uppercase for components


const about = () => {
    return <h1>Bruh</h1>
}

export default about

/* FETCHING DATA: can do multiple ways:
- getStaticProps() fetches data only upon loading page
- getServerSideProps() fetches data on every request
- getStaticPaths() dynamically generate paths based on data that is being fetched
- All functions must be async, as they use async await
*/
// export const getStaticProps = async() => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const articles = await res.json();

//     //can return json objects props
//     return {
//         props: {
//             articles
//         }
//     }
// }