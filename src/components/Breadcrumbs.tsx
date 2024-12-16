import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { APP_TEXTS } from "constants/textPaths";
import "styles/BreadcrumbsStyles.css"

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>(); 

  const pathSegments = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="breadcrumbs">
      <ul>
        <li>
          <Link to="/">{APP_TEXTS.BREADCRUMBS_PRINCIPAL}</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          if (segment === "product" && isLast && id) {
            return (
              <li key={path}>
                <span>{APP_TEXTS.BREADCRUMB_DETAIL}</span>
              </li>
            );
          }
        })}
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
