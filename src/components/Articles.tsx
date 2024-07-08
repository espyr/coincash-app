import { useEffect, useState } from "react";
import ArticleItem, { Article } from "./ArticleItem";
import "../App.css";
const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setArticles(json.slice(0, 8)));
  }, []);

  return (
    <div>
      <h3>Articles</h3>
      <div
        style={{
          display: "grid",
          gap: "16px",
          padding: "16px",
          boxSizing: "border-box",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {articles.map((articleItem: Article) => (
          <ArticleItem key={articleItem.id} article={articleItem} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
