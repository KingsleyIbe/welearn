import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../../db/tutorInfo";

const Card = () => {
    return (
        <div className="bg-[#EAF3FF] m-10 p-10 rounded-[8px] text-[#000]">
            <ul className="parent-flex-wrap gap-2 w-[100%]">
              {Data.map((item) => (
                <li key={item?.id} className="child-flex-wrap">
                    <div className="relative">
                        <img src={item?.image} alt="Tutor avatar" className="w-[400px] h-[400px]"/>
                        <FontAwesomeIcon icon={item?.favouriteIcon} className="absolute top-5 right-5"/>
                        <p className="absolute left-5 bottom-[70px] font-bold text-[30px] text-[#fff]">{item?.name}</p>
                        <div className="flex absolute left-5 bottom-[50px] font-semibold text-[#FD9800]">
                            <p>{item?.location }</p>
                            <p> - ({item?.teachingMode})</p>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <FontAwesomeIcon icon={item?.ratingIcon} className="text-[#FD9800]" />
                                <p>{item?.rating} </p>
                                <p>{item?.numberOfReviews} {item?.numberOfReviews > 0 ? 'reviews' : 'review'} </p>
                            </div>
                            <div>{item?.status}</div>
                        </div>
                        <div className="flex gap-2">
                            <p>{item?.course} - </p>
                            <p>{item?.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>#{item?.price}/h - </p>
                            <p>{item?.note}</p>
                        </div>
                    </div>
                </li>
              ))}
            </ul>
            
        </div>
    );
};

export default Card;
