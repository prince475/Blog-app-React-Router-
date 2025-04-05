import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h1>📝 About This Blog</h1>
      <p>
        Welcome to our blog! Here, we share articles on **web development**, 
        **React best practices**, and **coding tutorials**. Whether you're a 
        beginner or an experienced developer, there's something for you! 🚀
      </p>
      <p>
        Stay tuned for new content, and feel free to explore our posts. 
        Happy coding! 💻✨
      </p>
    </div>
  );
}

export default About;
