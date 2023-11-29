
const Card = ({ data }) => {
    let { name, gender, phone, picture } = data
    return (
        <div className="lg:scale-125 w-fit gap-5 px-8 py-6 relative rounded outline outline-indigo-200 outline-offset-2  border flex flex-col sm:flex-row items-center justify-center">
            <div className="absolute z-0  h-full w-full left-0 top-0 blur-md shadow-indigo-100 shadow-md bg-gray-600"></div>
            <img src={picture?.large} alt={`profile picture of ${name?.first} ${name?.last}`} className=" z-10  h-32 w-32 select-none rounded-full" />
            <div className="flex flex-col z-10 text-white capitalize text-center sm:text-start">
                <p className="font-semibold text-xl">{name?.first} {name?.last}</p>
                <p >Gender: {gender}</p>

                <p>Phone: <span className="text-sm">{phone}</span> </p>


            </div>
        </div>
    );
};

export default Card;