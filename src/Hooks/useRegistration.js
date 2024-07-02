import axios from "axios";
import { toast } from "react-toastify";

const useRegistration = () => {
    const url = "https://glitzapi.onrender.com/send-email";

    const enrollCourse = async (registrationData) => {
        try {
            const response = await axios.post(url, registrationData);
            toast.success("Enrollment successful!");
            console.log(response.data);
        } catch (error) {
            toast.error("Enrollment failed. Please try again.");
            console.log(error);
        }
    };

    return { enrollCourse };
};

export default useRegistration;
