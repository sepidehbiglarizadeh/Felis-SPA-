import { Link } from "react-router-dom";
import styles from "./BlogsPage.module.css";

const items = [
  { name: "Blog-1", to: "/blogs/1" },
  { name: "Blog-2", to: "/blogs/2" },
  { name: "Blog-3", to: "/blogs/3" },
];

const BlogsPage = () => {
  return (
    <section className={styles.blogsContainer}>
      <div className={styles.wrapper}>
        <h3>Blogs</h3>
        <ul className={styles.blogsList}>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <Link to={{ pathname: item.to, search: "sort=name" }}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est
        ante in nibh. In mollis nunc sed id. Turpis egestas sed tempus urna.
        Imperdiet proin fermentum leo vel orci. Eu feugiat pretium nibh ipsum
        consequat nisl vel pretium. In vitae turpis massa sed elementum.
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Egestas
        maecenas pharetra convallis posuere morbi leo. Vel eros donec ac odio
        tempor orci. Sed tempus urna et pharetra. Eu nisl nunc mi ipsum. A erat
        nam at lectus urna duis convallis convallis tellus. Adipiscing tristique
        risus nec feugiat in fermentum posuere urna nec. Nullam ac tortor vitae
        purus faucibus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Suspendisse in est
        ante in nibh. In mollis nunc sed id. Turpis egestas sed tempus urna.
        Imperdiet proin fermentum leo vel orci. Eu feugiat pretium nibh ipsum
        consequat nisl vel pretium. In vitae turpis massa sed elementum.
        Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Egestas
        maecenas pharetra convallis posuere morbi leo. Vel eros donec ac odio
        tempor orci. Sed tempus urna et pharetra. Eu nisl nunc mi ipsum. A erat
        nam at lectus urna duis convallis convallis tellus. Adipiscing tristique
        risus nec feugiat in fermentum posuere urna nec. Nullam ac tortor vitae
        purus faucibus.
      </p>
    </section>
  );
};

export default BlogsPage;
