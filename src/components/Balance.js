import React, { useContext } from 'react'
import {TransactionsContext} from '../transContext';

export const Balance = () => {

    let {transactions} = useContext(TransactionsContext)


    const getIncome = () =>{
        let income = 0;
        for (var i=0; i<transactions.length; i++) {
            if(transactions[i].amount > 0)
                income += transactions[i].amount;
        }
        return income
    }

    const getExpense = () =>{
        let expense = 0;
        for (var i=0; i<transactions.length; i++) {
            if(transactions[i].amount < 0)
                expense += transactions[i].amount;
        }
        return expense
    }

    return (
        <div>
            <h3 className="blc text-center">Your Balance <br/> 
            <span className="blc-span text-center">
            ${getIncome() + getExpense()} 
            </span>
            </h3>
            
        </div>
    )
}
