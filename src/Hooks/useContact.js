import axios from "axios";
import { toast } from "react-toastify";

const contactUsIn = () => {
    const url = "https://glitzapi.onrender.com/contact-us";

    const contactUs = async (contactUsData) => {
        try {
            const response = await axios.post(url, contactUsData);
            toast.success("Message sent successful!");
            console.log(response.data);
        } catch (error) {
            toast.error("Message failed. Please try again.");
            console.log(error);
        }
    };

    return { contactUs};
};

export default contactUsIn;