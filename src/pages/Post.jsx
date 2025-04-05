import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

function Post() {
  const { id } = useParams();

  return (
    <div className={styles.post}>
      <h1>📰 Post Details</h1>
      <p>You are viewing the details for <strong>Post {id}</strong>.</p>
      <p>
        This is a sample blog post. In a real-world scenario, you would fetch 
        post content from a database or API.
      </p>
    </div>
  );
}

export default Post;
