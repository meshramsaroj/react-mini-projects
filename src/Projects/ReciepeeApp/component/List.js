import React, { Fragment } from "react";
import { useGetList } from "../Utils/CustomeHooks";
import SearchRecipe from "./SearchRecipe";
import { Card, CardBody, CardHeader } from "../../Component/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const List = () => {
  const data = useGetList("?limit=10&skip=10");
  return (
    <div className="p-4">
      <section className="flex justify-between items-center">
        <h2 className="h2">Recipes</h2>
        <span>Results: {data[0]?.total}</span>
      </section>
      <SearchRecipe />

      <div className="grid grid-cols-4 gap-5 my-4">
        {data[0]?.recipes?.map((recipe) => (
          <Card key={recipe.name}>
            <CardHeader className={"flex justify-between items-center"}>
              <h3 className="text-md font-medium mb-2">{recipe.name}</h3>
              <Link to={`/recipe/${recipe.id}`}>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </Link>
            </CardHeader>
            <CardBody>
              <>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="h-35 h-full"
                />
                {recipe.ingredients.map((ingredient, index) => (
                  <Fragment key={ingredient}>
                    {index < 5 ? (
                      <span className="mx-1">{ingredient}</span>
                    ) : index === recipe.ingredients.length - 1 ? (
                      <Link to={`/recipe/${recipe.id}`}>more</Link>
                    ) : null}
                  </Fragment>
                ))}
              </>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default List;
