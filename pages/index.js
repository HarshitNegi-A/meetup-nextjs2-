import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS=[
    {
        id:'m1',
        title:'A first meetup',
        image:'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341395/EducationHub/photos/sonoran-desert.jpg',
        address:'Some address',
        description:"First meetup"
    },
    {
        id:'m2',
        title:'A second meetup',
        image:'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341395/EducationHub/photos/sonoran-desert.jpg',
        address:'Some second address',
        description:"Second meetup"
    }
]

function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS} />
    
}

export default HomePage;