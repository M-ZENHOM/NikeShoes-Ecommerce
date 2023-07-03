import { useField } from "formik";

export const CustomSelect = ({ ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div className='w-full max-w-xl'>
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <select {...field} {...props} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} className={`${meta.touched && meta.error ? " select select-bordered w-full max-w-xl select-error" : " select select-bordered w-full max-w-xl"}`} >
                <option>Men's Shoes</option>
                <option>Men's Basketball Shoes</option>
            </select>
            {meta.touched && meta.error && (
                <div className="flex space-x-5  py-2 alert mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{meta.error}</span>
                </div>)}

        </div >

    );
};
export const CustomSelectSize = ({ ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div className='w-full max-w-xl'>
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <select {...field} {...props} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} className={`${meta.touched && meta.error ? " select select-bordered w-full max-w-xl select-error" : " select select-bordered w-full max-w-xl"}`} >
                <option>UK-10.5</option>
                <option>UK-11.5</option>
                <option>UK-12</option>
                <option>UK-12.5</option>
                <option>UK-13</option>
            </select>
            {meta.touched && meta.error && (
                <div className="flex space-x-5  py-2 alert mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{meta.error}</span>
                </div>)}

        </div >

    );
};