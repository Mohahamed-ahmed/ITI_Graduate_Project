import Image from "next/image"
import Modal from "./modal"
import img from '../../public/istockphoto-466090186-612x612.jpg'
export default function PackageCard({ show = false }) {
    return(
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition w-[350px]">
            <Image src={img} alt="Cairo" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"/>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Safari Experience</h3>
                <p className="text-gray-600 mb-4 ">Serengeti, Tanzania</p>
            </div>
            <div className="flex items-center justify-between p-2">
                <p className="ml-2">7 Days</p>
                <p className="px-4 py-2 text-orange-600">$2,500</p>
            </div>
            {show && (
                <div className="flex w-full justify-between">
                    <Modal 
                        title="Edit Package"
                        description="Update your package details below."
                        createClassName="bg-white text-black hover:bg-gray-200 px-1 py-1 transition duration-300 rounded-md mx-4 mb-4 w-[50px]"
                        packages
                    >
                    Edit 
                    </Modal>
                    {/* <button className="bg-white cursor-pointer px-2 py-1 transition duration-300 rounded-md text-black mx-4 mb-4">Edit Destination</button> */}
                    <button className="bg-red-600 hover:bg-red-800 cursor-pointer px-2 py-1 transition duration-300 rounded-md text-orange-50 mx-4 mb-4">Delete</button>
                </div>
            )}
        </div>
    )
}