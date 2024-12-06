

function ShowDetails(props){
    return <h1>{props.id}</h1>
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            {params:{
                meetupId:'m1',
            }},
            {params:{
                meetupId:'m2',
            }},
            {params:{
                meetupId:'m3',
            }}
        ]
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    return {
        props:{
            id:meetupId
        }
    }
}

export default ShowDetails