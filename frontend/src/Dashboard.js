import './Dashboard.css';

function Dashboard(props){

    switch(props.status){

        // no ongoing no upcoming
        case 1:
            return(
                <>
                <div id="boardWrapper">
                    <div id="board">
                        No ongoing or upcoming trips
                    </div>
                </div>
                
                </>
            );
        
        // ongoing but no upcoming
        // case 2:
        //     return(

        //     );

        // // upcoming but no ongoing
        // case 3:
        //     return(

        //     );

        // // both ongoing and upcoming
        // case 4:
        //     return(

        //     );

        default:
            return(
                <>
                <div id="boardWrapper">
                    <div id="board">
                        Something went wrong :(
                    </div>
                </div>
                </>
            );
    }
    return(
        <>
        <div id="boardWrapper">
            <div id="board">
            {props.status}
            </div>
        </div>
        
        </>
    );

}

export default Dashboard;