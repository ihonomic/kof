import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    age: yup.number().required("Required"),
    phoneNumber: yup.number().min(11, "Invalid").positive().integer().required("Required"),
    state: yup.string().required("Required"),
    lga: yup.string().required("Required"),
    category: yup
        .string()
        .oneOf(["Barber", "Hairdresser", "Make up Artist", "Nail professional"], "Invalid Category Type")
        .required("Required"),
    shopName: yup.string().required("Required"),

    // password: yup
    //     .string()
    //     .min(5)
    //     .matches(passwordRules, { message: "Please create a stronger password" })
    //     .required("Required"),
    // confirmPassword: yup
    //     .string()
    //     .oneOf([yup.ref("password"), null], "Passwords must match")
    //     .required("Required"),
});

export const advancedSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
    jobType: yup
        .string()
        .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
        .required("Required"),
    acceptedTos: yup
        .boolean()
        .oneOf([true], "Please accept the terms of service"),
});