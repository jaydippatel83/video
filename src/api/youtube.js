import axios from 'axios';

const KEY='AIzaSyAHZRnHClWgrjQy7Co4IG6uvMyQXR7sw4E';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:50,
        key:KEY
    }
});
