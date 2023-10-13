import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { PiPencilLineLight } from 'react-icons/pi'
import { RiDeleteBinLine } from 'react-icons/ri'
import Swal from 'sweetalert2'


const AllCoffee = () => {
    const [coffees, setCoffees] = useState([])
    const { data } = useLoaderData();
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:4000/coffee/${id}`)
            const newCoffees = coffees.filter(coffee => coffee._id !== id)
            setCoffees(newCoffees)
            if (data.deletedCount > 0) {
                Swal.fire(
                    'Deleted',
                    'Thid Coffee Deleted Successfully',
                    'success'
                )
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        setCoffees(data)

    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-3'>
            {
                coffees.map(c => {
                    return <div key={c._id} className='bg-gray-400 flex justify-between flex-col gap-4 lg:gap-0 lg:flex-row items-center  '>

                        <div className='h-32 flex-grow  flex  w-full gap-4 items-center lg:h-44'>
                            <img className='h-full' src={c.photo} alt={c.name} />
                            <div className='space-y-2 font-semibold text-gray-700'>
                                <h1>Name : {c.name}</h1>
                                <h2>Chef : {c.chef}</h2>
                                <h3>Category : {c.category}</h3>
                            </div>
                        </div>


                        <div className='lg:mr-10  flex flex-row lg:flex-col justify-center items-center gap-4 '>
                            <AiFillEye size={35} className='bg-[#D2B48C] text-white p-2 rounded-sm cursor-pointer' />
                            <Link state={c} to={`/update-coffee/${c._id}`}>
                                <PiPencilLineLight size={35} className='bg-[#FFFFFF] text-gray-700 p-2 cursor-pointer rounded-sm' />
                            </Link>
                            <RiDeleteBinLine onClick={() => handleDelete(c._id)} size={35} className='bg-red-400 cursor-pointer text-white p-2 rounded-sm' />
                        </div>

                    </div>
                })
            }
        </div>
    )
}
export default AllCoffee;