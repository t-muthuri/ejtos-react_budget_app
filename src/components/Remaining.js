import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {

    const { expense, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert danger' : 'alert success'
    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: ${budget - totalExpenses}
            </span>
        </div>
    );
}

export default Remaining;