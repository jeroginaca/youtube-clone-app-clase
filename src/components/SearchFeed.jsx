import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";


const SearchFeed = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    
  return (
    <Stack sx={{ flexDirection: { sx: "column", md:"row"}}}>

        <Box p={2} sx={{ overflow: "scroll", height: "90vh", flex: 2, marginLeft: { sx:"auto", md:"3rem"} }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
             Search Results for: <span style={{ color: "#EA3323"}}>{searchTerm}</span>
            </Typography>

            <Videos videos={videos}/>

        </Box>
    </Stack>
  )
}

export default SearchFeed