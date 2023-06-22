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
        try {
            const res = await fetch('api/contact', {
                method: 'POST',
                body:JSON.stringify({
                    data
                }),
                headers: {
                    'content-type': 'application/json',
                }

            })
        } catch (error) {
            console.log(error)
        }
        


    }
        return {handleChange, data, handleSubmit};
}

export default useForm