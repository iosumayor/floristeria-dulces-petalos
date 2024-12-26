import React from "react";
import { Link,useParams } from "react-router-dom";
import { APP_TEXTS } from "constants/textPaths";
import "styles/BreadcrumbsStyles.css"

const Breadcrumbs: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 

  return (
    <nav className="breadcrumbs">
      <ul>
        <li>
          <Link to="/">{APP_TEXTS.BREADCRUMBS_PRINCIPAL}</Link>
        </li>
        {id && (
          <li>
            <Link to={`/product/${id}`}>{APP_TEXTS.BREADCRUMB_DETAIL}</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
