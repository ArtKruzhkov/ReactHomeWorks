import { Link } from "react-router-dom";
import './ArticlesList.css';

function ArticlesList({ articles }) {
    return (
        <div style={{ paddingBottom: '24px' }}>
            <div className="articles-wrap">
                <h2>Articles list page</h2>
                {articles.map((article) => (
                    <div key={article.id} className="article">
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </div>
                ))}
            </div>
            <Link to='/' className="homePage-link">Back to home page</Link>
        </div>
    );
}

export default ArticlesList;