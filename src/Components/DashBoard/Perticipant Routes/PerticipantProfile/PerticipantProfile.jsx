import UseAuth from "../../../Hooks/useAuth/useAuth";

const PerticipantProfile = () => {
    const { user } = UseAuth();

    return (
        <div>
            <div className="text-center text-lg font-medium pb-3">
                <p> Perticipant Profile</p>
            </div>
            <div className="w-full max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg flex gap-3">
                <img className="object-cover w-1/3 h-30" src={
                    user.photoURL ? user.photoURL : "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                } alt="avatar" />

                <div className="py-5 ">
                    <h1>{user.displayName}</h1>

                    <p>
                        {user.email}
                    </p>
                </div>

            </div>
            <div className="mt-5">
                <button className="p-2 bg-gray-400 rounded-md hover:bg-orange-400
                            transition-transform duration-300 
                            hover:scale-105 ">Update Profile</button>
            </div>
        </div>
    );
};

export default PerticipantProfile;