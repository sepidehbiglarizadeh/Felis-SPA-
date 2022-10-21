import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./Blog.module.css";
import queryString from "query-string";

const Blog = () => {
  let { id } = useParams();
  const {search}= useLocation();
  const query= queryString.parse(search);

  console.log(query);


  return (
    <section className={styles.blogContainer}>
      <h4>Blog Detail- {id}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est
        ante in nibh. In mollis nunc sed id. Turpis egestas sed tempus urna.
        Imperdiet proin fermentum leo vel orci. Eu feugiat pretium nibh ipsum
        consequat nisl vel pretium. In vitae turpis massa sed elementum.
      </p>
      <Link to={`/blogs/${parseInt(id) + 1}`} className={styles.link}>Go To Next Blog Page</Link>
      <Link to="/blogs" className={styles.link}>Back to BlogsPage</Link>
    </section>
  );
};

export default Blog;
