import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage(){

    function addMeetupHandler(enteredMeetUpData){
        console.log(enteredMeetUpData)
    }
    
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}
export default NewMeetupPage