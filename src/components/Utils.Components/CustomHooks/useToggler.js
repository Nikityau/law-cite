import {useState} from "react";

export const useToggler = (defState = false) => {
    const [is, setIs] = useState(defState)

    const on = () => setIs(true)
    const off = () => setIs(false)
    const toggle = () => setIs(prev => !prev)

    return [
        is,
        {
            on,
            off,
            toggle
        }
    ]
}