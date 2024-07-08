import { useEffect, useState } from "react";
import ArticleItem, { Article } from "./ArticleItem";

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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          {articles.map((articleItem: Article) => (
            <ArticleItem key={articleItem.id} article={articleItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
