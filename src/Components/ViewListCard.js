import { StarIcon, EyeIcon } from "@heroicons/react/24/outline"
export default function ViewListCard(props) {

        const {title, image, genres, voteAverage, voteCount} = props

    
        return (
            <div className="w-[300px] h-[400px] bg-center bg-cover" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${image}")`}}>
                <div className="flex justify-between flex-col w-[300px] h-[400px] p-5 bg-gradient-to-b from-transparent from-60% to-black to-80%">

                
                <div className="flex gap-1 flex-wrap">
                {genres.map((genre, index)=>{
                            return ( 
                                <span key={index} className="rounded-md bg-yellow-300 text-black py-[2px] px-2 text-[10px]">
                                {genre.name}
                                </span>
                            )

            })
           }
             </div>   



                <div className="">
                    <div className="flex gap-4 bg-yellow-300 px-2 pv-1 rounded-md">
                        <span className="flex gap-1 text-black">
                            <StarIcon className="h-6 w-6 text-black"/>
                         {voteAverage}
                         </span>

                        <span className="flex gap-1 text-black">
                             <EyeIcon className="h-6 w-6 text-black"/>
                            {voteCount}
                        </span>
                    </div>
                    <div>
                     <h3 className="text-2xl text-center">{title}</h3>
                    </div>
                </div>
                </div>
            </div>
        )
    }