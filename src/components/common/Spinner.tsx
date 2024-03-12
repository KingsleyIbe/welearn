import '../../assets/styles/spinner.css';

const Spinner = () => {
    return (
        
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
       
    )
}

const SpinnerText = () => {
    return (
        <div className="flex flex-row gap-3 justify-cente text-cente absolute left-[50%] top-[50vh]">
            <Spinner />
            <div className="mt-4 text-[20px] font-bold">Welearn</div>
        </div>
    )
}

export default SpinnerText;
