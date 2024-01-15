const DashboardHeader = () => {
    return (
        <div className="mt-[120px] text-[#181842]">
            <ul className="flex flex-row gap-10 p-10 bg-[#FD9800] font-bold">
                <li><button type="button">Dashboard</button></li>
                <li><button type="button">My Messages</button></li>
                <li><button type="button">My Ads</button></li>
                <li><button type="button">Reviews</button></li>
                <li><button type="button">My Account</button></li>
                <li><button type="button">My Subscriptions</button></li>
            </ul>
        </div>
    );
};

export default DashboardHeader;
