
const AddCamp = () => {
    return (
        <div>
            <form className="max-w-md mx-auto p-4 border border-gray-300 rounded-md">

                <div className="mb-4">
                    <label htmlFor="campName" className="block mb-1">Camp Name:</label>
                    <input type="text" placeholder="Camp Name" name="campName" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1">Image:</label>
                    <input type="file"  name="image" className="w-full border border-gray-300 rounded-md px-3 py-2" accept="image/*" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="campFees" className="block mb-1">Camp Fees:</label>
                    <input type="number" placeholder="$" name="campFees" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="dateTime" className="block mb-1">Date & Time:</label>
                    <input type="datetime-local" name="dateTime" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block mb-1">Location:</label>
                    <input type="text" placeholder="Location" name="location" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="healthcareProfessional" className="block mb-1">Healthcare Professional Name:</label>
                    <input type="text" placeholder="Healthcare Professional Name" name="healthcareProfessional" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="participantCount" className="block mb-1">Participant Count:</label>
                    <input type="number" placeholder="number"
                    name="participantCount" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description:</label>
                    <textarea
                   placeholder="Add Your Description" name="description" className="w-full border border-gray-300 rounded-md px-3 py-2" rows="4" required></textarea>
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md">Add A Camp</button>
            </form>

        </div>
    );
};

export default AddCamp;