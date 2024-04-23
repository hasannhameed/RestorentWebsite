import MealsSummery from "./MealsSummery";
import AvailableMeals from "./AvalableMeals";
import { Fragment } from "react";

const Meals = () => {
    return(
            <Fragment>
                <MealsSummery />
                <AvailableMeals />
            </Fragment>
    )
}

export default Meals;