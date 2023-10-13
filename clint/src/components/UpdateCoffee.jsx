import axios from 'axios';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { _id, name, chef, supplier, taste, details, photo, category } = state;


    const handleSubmit = async (e) => {
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const Updateddetails = { name, chef, supplier, taste, category, details, photo, category }
        e.preventDefault()

        try {
            const { data } = await axios.put(`http://localhost:4000/coffee/${_id}`, Updateddetails)
            console.log(data)
            if (data.acknowledged) {
                Swal.fire(
                    'updated coffee!',
                    'successfully updated coffee!',
                    'success'
                )
                navigate("/all-coffee")
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='flex h-screen mt-3  justify-center'>
            <form onSubmit={handleSubmit} className='bg-[#F4F3F0] p-10 w-full  sm:w-3/6 h-5/6 space-y-7' >
                <div className='flex  items-center justify-center gap-4 '>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Name</label>
                        <input defaultValue={name} name='name' id='name' type="text" placeholder="Enter coffee name" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC font-bold' htmlFor="name">Chef</label>
                        <input defaultValue={chef} name='chef' id='chef' type="text" placeholder="Enter coffee chef" className="border-blue-300 bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                </div>
                <div className='flex  items-center justify-center gap-4 '>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Supplier</label>
                        <input defaultValue={supplier} name='supplier' id='supplier' type="text" placeholder="Enter coffee supplier" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC font-bold' htmlFor="name">Taste</label>
                        <input defaultValue={taste} name='taste' id='taste' type="text" placeholder="Enter coffee taste" className="border-blue-300 bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                </div>

                <div className='flex  items-center justify-center gap-4 '>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Category</label>
                        <input defaultValue={category} name='category' id='category' type="text" placeholder="Enter coffee category" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC font-bold' htmlFor="name">Details</label>
                        <input defaultValue={details} name='details' id='details' type="text" placeholder="Enter coffee details" className="border-blue-300 bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Photo</label>
                    <input defaultValue={photo} name='photo' id='photo' type="text" placeholder="Enter photo URL" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 w-full py-2 block border-b-2 outline-none" required />
                </div>
                <button type='submit' className='btn bg-[#331A15] w-full text-white rounded-sm hover hover:text-black hover:border-2 hover:border-[#331A15]  capitalize'>Update Coffee</button>
            </form>
        </div>
    )
}

export default UpdateCoffee