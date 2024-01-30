import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const MaxRange = () => {
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
            <option disabled defaultValue={-1}>Maximum Age</option>
            {numbers.map((item) => (
                <option key={item.id} value={item?.value}>{item.value}</option>
            ))}
        </select>
    );
};

export default MaxRange;