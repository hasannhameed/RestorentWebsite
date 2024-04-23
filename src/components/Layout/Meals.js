import MealsSummary from "./MealsSummery";
import AvailableMeals from "./AvalableMeals";
import { Fragment } from "react";

const Meals = () => {
    return(
            <Fragment>
                <MealsSummary />
                <AvailableMeals />
            </Fragment>
    )
}

export default Meals;