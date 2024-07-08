import Author from "./Author";

export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type ArticleProps = {
  article: Article;
};
const ArticleItem: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div id={article.id.toString()} className="grid-item">
      <img alt="photo" src="https://picsum.photos/400"></img>
      <Author userId={article.userId} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleItem;
