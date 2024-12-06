import { useRouter } from "next/router"

function ShowDetails(){
    const router=useRouter()
    const id=router.query.meetupId
    return <h1>{id}</h1>
}

export default ShowDetails