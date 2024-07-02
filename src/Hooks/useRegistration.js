import axios from "axios"
const useRegistration = () => {
    const url = "https://glitzapi.onrender.com/send-email"

    const enrollCourse = async (registrationData) => {
        try {
            const response = await axios.post(url, registrationData)
            console.log(response.data)
            alert("Enrollment successful")
        } catch (error) {
            console.log(error)
        }
    }


    return {enrollCourse}
}

export default useRegistration