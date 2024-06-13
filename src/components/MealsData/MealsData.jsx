"use client";
import { Button, Image, Input } from "@nextui-org/react";
import { useState } from "react";

const MealsData = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals);

  const fetchMeals = async name => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name || "*"}`
    );
    const data = await res.json();
    setMeals(data);
  };

  const handleSearch = async event => {
    event.preventDefault();
    const name = event.target.name.value;
    await fetchMeals(name);
    console.log(meals);
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center w-5/12 mx-auto my-10"
      >
        <Input
          type="text"
          label="Type Meal Name"
          variant="underlined"
          size="sm"
          color="danger"
          name="name"
        />
        <Button type="submit" variant="solid" size="md" color="danger">
          Search
        </Button>
      </form>
      <div className="my-10 grid md:grid-cols-4 gap-5">
        {meals.meals?.map((meal, i) => (
          <div className="border border-pink-600 p-6 rounded" key={i}>
            <Image src={meal.strMealThumb} alt=""/>
            <h4 className="text-xl font-semibold my-3">{meal.strMeal}</h4>
          
            <p className="">{meal.strInstructions.length > 100 ? meal.strInstructions.slice(0,100)+"..." : meal.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default MealsData;
