const Subjects = () => {
    return (
        <div className="bg-[#fff] text-[#181842] p-10 rounded-[8px]">
            <div className="mb-5">
                <h1 className="text-[30px] font-bold mb-5">Subjects</h1>
                <p>You can choose up to two different subjects as long as you choose one as your speciality. For each one we will need to know your level, the subjects you focus on.</p>
            </div>
            <hr />
            <div className="mt-10">
                <h3 className="font-bold">Which subjects would you like to teach?</h3>
                <p>You can select up to two different subjects.</p>
            </div>
            <div className="subject-edit p-10 my-5">
                <div className="flex flex-row justify-between font-bold">
                    <h3>Computer Programming</h3>
                    <span className="flex flex-row gap-2 ">
                        <button type="button" className="text-[#FD9800]">Edit</button>
                        <span>|</span>
                        <button type="button" className="text-[#FD9800]">Delete</button>
                    </span>
                </div>
                <p className="opacity-[0.4]">Javascript - Ruby - HTML - CSS - Nodejs - React - Python - Typescript</p>
            </div>
        </div>
    );
};

export default Subjects;
