'use client'

import { useState } from 'react';


interface Props {
    value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {

    const [counter, setCounter] = useState(value);


    //* Funcion for increment the counter
    const handleIncrement = () => {
        setCounter(counter + 1);
    }


    //* Funcion for decrement the counter
    const handleDecrement = () => {

        if (counter === 0) return; //? If the counter is 0, return
        setCounter(counter - 1);
    }


    return (
        <>
            <span className="text-9xl">{counter}</span>

            <div className="flex">
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={handleIncrement}
                >
                    +1
                </button>

                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={handleDecrement}>
                    -1
                </button>
            </div>
        </>
    )
}
