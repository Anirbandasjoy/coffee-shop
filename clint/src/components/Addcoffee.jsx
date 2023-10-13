import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Addcoffee = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const alldetails = { name, chef, supplier, taste, category, details, photo, category }

        try {
            const { data } = await axios.post("http://localhost:4000/coffee", alldetails)
            console.log(data)
            if (data.insertedId) {
                Swal.fire(
                    'Added coffe!',
                    'successfully added coffee!',
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
                        <input name='name' id='name' type="text" placeholder="Enter coffee name" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC font-bold' htmlFor="name">Chef</label>
                        <input name='chef' id='chef' type="text" placeholder="Enter coffee chef" className="border-blue-300 bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                </div>
                <div className='flex  items-center justify-center gap-4 '>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Supplier</label>
                        <input name='supplier' id='supplier' type="text" placeholder="Enter coffee supplier" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC font-bold' htmlFor="name">Taste</label>
                        <input name='taste' id='taste' type="text" placeholder="Enter coffee taste" className="border-blue-300 bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                </div>

                <div className='flex  items-center justify-center gap-4 '>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Category</label>
                        <input name='category' id='category' type="text" placeholder="Enter coffee category" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-xs text-[#1B1A1ACC font-bold' htmlFor="name">Details</label>
                        <input name='details' id='details' type="text" placeholder="Enter coffee details" className="border-blue-300 bg-[#FFFFFF] px-1 text-xs text-blue-600 py-2 block border-b-2 outline-none" required />
                    </div>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <label className='text-xs text-[#1B1A1ACC] font-bold' htmlFor="name">Photo</label>
                    <input name='photo' id='photo' type="text" placeholder="Enter photo URL" className="border-blue-300  bg-[#FFFFFF] px-1 text-xs text-blue-600 w-full py-2 block border-b-2 outline-none" required />
                </div>
                <button type='submit' className='btn bg-[#331A15] w-full text-white rounded-sm hover hover:text-black hover:border-2 hover:border-[#331A15]  capitalize'>Add Coffee</button>
            </form>
        </div>
    )
}

export default Addcoffee