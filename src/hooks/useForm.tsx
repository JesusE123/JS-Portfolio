import React,{useState} from 'react'
import axios from 'axios'
const useForm = () => {
const [data, setData] = useState({
    subject: '',
    email: '',
    message:''
})

    const handleChange = (e:any) => {
        setData({
            ...data,
            [e.target.name] : e.target.value,

        })
    
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const res = await axios.post("../app/api/sendMail/sendMail", data)
        .then(res => console.log(res))


    }
        return {handleChange, data, handleSubmit};
}

export default useForm