import { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
    return (
        <input ref={ref} type="text" placeholder="Enter Name" />
    )
})

export default TextField;