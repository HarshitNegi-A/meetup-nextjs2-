import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"

function HomePage(props){

   

    return <MeetupList meetups={props.meetups} />
    
}

// export async function getServerSideProps(context) {
    
//     return {
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     }
    
// }

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://harshit:Harshit123@cluster0.k6gpe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0')

        const db = client.db()

        const meetupsCollection = db.collection('meetups')
        const meetups = await meetupsCollection.find().toArray();

        client.close();

    return {
        props:{
            meetups:meetups.map(meetup=>({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString()
            }))
        },
        revalidate:10
    }
}

export default HomePage;