<form onSubmit={handleSubmit(handleUpdate)} >
<div className="mb-4">
    <label htmlFor="campName" className="block mb-2 text-sm font-medium text-gray-700">Camp Name</label>
    <input type="text" id="campName" className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" defaultValue={selectedCamp.campName}
        {...register("campName")} />
</div>

<div className="mb-4">
    <label htmlFor="dateTime" className="block mb-2 text-sm font-medium text-gray-700">Date & Time</label>
    <input type="text" id="dateTime" className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" defaultValue={selectedCamp.dateTime}
        {...register("dateTime")} />
</div>

<div className="mb-4">
    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">Location</label>
    <input type="text" id="location" className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" defaultValue={selectedCamp.location}
        {...register("location")} />
</div>

<div className="mb-4">
    <label htmlFor="healthcareProfessionalName" className="block mb-2 text-sm font-medium text-gray-700">Healthcare Professional</label>
    <input type="text" id="healthcareProfessionalName" className="block w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" defaultValue={selectedCamp.healthcareProfessionalName}
        {...register("healthcareProfessional")} />
</div>

<div className="flex justify-end">
    <Button color="red" onClick={closeModal}>Cancel</Button> {/* Added onClick handler to close the modal */}
    <Button type="submit" color="blue" className="ml-2">Update</Button>
</div>
</form>