import { MongoClient, ObjectId } from "mongodb"
import MeetupDetail from "../../components/meetups/MeetupDetail"


function ShowDetails(props){
    return (
        <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
        />
    )
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://harshit:Harshit123@cluster0.k6gpe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')

        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const meetups=await meetupsCollection.find({}, {_id: 1}).toArray();

        client.close()

    return {
        fallback: false,
        paths:meetups.map(meetup=>({params:{meetupId:meetup._id.toString()}}))
        // [
        //     {params:{
        //         meetupId:'m1',
        //     }},
        //     {params:{
        //         meetupId:'m2',
        //     }},
        //     {params:{
        //         meetupId:'m3',
        //     }}
        // ]
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    const client = await MongoClient.connect('mongodb+srv://harshit:Harshit123@cluster0.k6gpe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')

        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const selectedMeetup=await meetupsCollection.findOne({
            _id:new ObjectId(meetupId),
        })

        client.close()
    return {
        props:{
            meetupData:{
                id:selectedMeetup._id.toString(),
                title:selectedMeetup.title.toString(),
                address:selectedMeetup.address.toString(),
                description:selectedMeetup.description.toString(),
                image:selectedMeetup.image.toString(),
            },
        }
    }
}

export default ShowDetails