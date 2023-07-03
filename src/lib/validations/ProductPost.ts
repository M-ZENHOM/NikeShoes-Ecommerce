import * as yup from "yup";


export const ProductSchema = yup.object().shape({
    title: yup
        .string()
        .min(3, "Title must be at least 3 characters long")
        .max(16, "Title must be less than 16 characters")
        .required("Required"),

    price: yup.number().positive("Number must be positive").required("Required").min(1, "Price must be at least 1 number"),
    quantity: yup.number().positive("Number must be positive").required("Required").min(1, "Quantity must be at least 1 number"),
    description: yup
        .string()
        .min(5, "Message must be at least 5 characters long")
        .max(255, "Message must be less than 255 characters")
        .required("Required"),

    category: yup
        .string()
        .min(5, "Message must be at least 5 characters long")
        .max(50, "Message must be less than 50 characters")
        .required("Required"),
    size: yup
        .string()
        .required("Required"),
    images: yup
        .array()
        .required("Required"),
    sizes: yup
        .array()
        .required("Required"),
    thumbnail: yup
        .string()
        .required("Required"),
    userId: yup
        .string()
        .required("Required"),
});
