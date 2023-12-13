import { useField } from "formik";

export const CustomInput = ({ ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div className='w-full max-w-xl'>
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input   {...field} {...props} type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}
                className={`${meta.touched && meta.error ? " input input-bordered w-full max-w-xl input-error" : " input input-bordered w-full max-w-xl"}`} />
            {meta.touched && meta.error && (
                <div className="flex space-x-5  py-2 alert mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{meta.error}</span>
                </div>)}
        </div >

    );
};