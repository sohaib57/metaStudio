import { Select, Stack } from '@chakra-ui/react'
import React, { useState } from "react";
// import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'as', label: 'as' },
    { value: 'sd', label: 'sd' },
    { value: 'df', label: 'df' },
    { value: 'fg', label: 'fg' },
    { value: 'gh', label: 'gh' },
    { value: 'hj', label: 'hj' },
    { value: 'jk', label: 'jk' },
    { value: 'kl', label: 'kl' },
    { value: 'vanilla', label: 'Vanilla' }
]

const ReactSelectComp = () => {
    const [option, setOption] = useState({});
    const handleChange = (e) => {
        setOption(options[+e.target.value]);
    };
    console.log(option);
    return (
        <>
            <Stack color={'black'}>
                <Select onChange={() => handleChange}>
                    {options.map((option, index) => (
                        <option key={index} value={index} >
                            {option.label}
                        </option>
                    ))}
                </Select>
            </Stack>

        </>
    )

}
export default ReactSelectComp