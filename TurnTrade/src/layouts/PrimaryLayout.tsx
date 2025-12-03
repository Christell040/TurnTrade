export default function PrimaryLayout() {
    return (
        <>
            {/*Parent container*/}
            <div className="flex bg-black min-h-screen">

                {/*Sidebar*/}
                <div
                    className="flex flex-col fixed relative border border-white w-70 ">
                    

                </div>

                {/*Right side*/}
                <div className="flex flex-1 flex-col border border-white w-70">
                    {/*Header*/}
                    <div className="border border-red-500 h-16 w-full"></div>
                    {/*Main*/}
                    <div className="border border-white flex-1 overflow-y-auto"></div>


                </div>
            </div>
        </>
    );
}