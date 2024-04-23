import classes from './Available.module.css';

const DUMMY_MEALS= [
    {
        id : 'm1',
        name: 'sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },

    {
            id : 'm1',
            name: 'sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
    },

    {
            id : 'm1',
            name: 'sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
    },

    {
        id : 'm1',
        name: 'sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },

]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meals =><li>{meals.name}</li>);

    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
};

export default AvailableMeals;