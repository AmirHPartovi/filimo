import Grid from "@mui/material/Grid";

import MovieContainer from "../Components/Common/MovieContainer";
import MovieCard from "../Components/Common/MovieCard";
import {GetStaticPropsContext} from "next";
import {api} from "../APIs/Api";

import image1 from '../Assets/Images/flash35.jpg'
import image2 from '../Assets/Images/share.jpg'
import image3 from '../Assets/Images/image.jpg'
import image4 from '../Assets/Images/share.jpg'

export default function Home({movies} : {movies: {image:string}[]}) {
    return (
        <Grid container p={2}>
            <MovieContainer title={'ویژه'} link={'/animation'}>
                <MovieCard image={image1} size={'Horizontal'}/>
                <MovieCard image={image2} size={'Horizontal'}/>
                <MovieCard image={image3} size={'Horizontal'}/>
                <MovieCard image={image4} size={'Horizontal'}/>
            </MovieContainer>
            <MovieContainer title={'تازه ها'} link={'drama'}>
                {movies.slice(9,17).map( (movie:any) => <MovieCard key={movie.id} image={movie.image} size={'Vertical'}/>)}
            </MovieContainer>
        </Grid>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const data = await api
    const movies = data.data
    console.log(movies)
    return {
        props: {
            movies
        },
    }
}
