import { Select, Stack } from '@chakra-ui/react'
import React from "react";
// import Select from 'react-select'
import './ReactselectCSS.css'

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
    return (
        <>
            <Stack>
                {/* <Select >
                    {options?.map((c) => (
                        <option value={c}>{c}</option>
                    ))}
                </Select> */}
            </Stack>
        </>
    )

}
export default ReactSelectComp