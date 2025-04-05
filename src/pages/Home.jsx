import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" },
];

function Home() {
  return (
    <div className={styles.home}>
      <h1>Blog Home</h1>
      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
