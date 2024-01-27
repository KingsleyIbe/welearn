const DashboardItems = () => {
    return (
        <div className="text-center font-bold text-[30px] my-[200px] px-10">
            <div className="flex flex-row gap-2">
                <div className="bg-[#ccc]">
                    <div>
                        <h3>Congratulations! Your profile has been approved</h3>
                        <p>Your profile is now public! You are now ready to teach on Weteach.</p>
                    </div>
                    <nav>
                        <ul>
                            <li><button type="button">Basic Info</button></li>
                            <li><button type="button">Subjects</button></li>
                            <li><button type="button">Profile Description</button></li>
                            <li><button type="button">Education and experience</button></li>
                            <li><button type="button">Education and experience</button></li>
                        </ul>
                    </nav>
                </div>
                <div className="bg-[#ddd]">Old</div>
            </div>
        </div>
    );
};

export default DashboardItems;
