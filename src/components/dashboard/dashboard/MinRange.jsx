import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const MinRange = () => {
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        let tempNumbers = [];
        for (let i = 4; i <= 100; i++) {
            tempNumbers.push({
                id: uuidv4(),
                value: i
            });
        }
        setNumbers(tempNumbers);
    }, [])

    return (
        <select className="register-input-bolder p-2">
            <option disabled defaultValue={-1}>Minimum Age</option>
            {numbers.map((item) => (
                <option key={item.id}>{item.value}</option>
            ))}
        </select>
    );
};

export default MinRange;