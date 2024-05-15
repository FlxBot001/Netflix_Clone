const key = 'b7f30758daca7e45714b47c592d904b1'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=4`,
    requestTopRated: 'https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1',
    requestTrending: 'https://api.themoviedb.org/3/tv/on_the_air?api_key=${key}&language=en-US&page=1',
    requestUpComming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1',
    requestAiringToday: 'https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1',
    requestAll: 'https://api.themoviedb.org/3/movie/movie_id/videos?api_key=${key}&language=en-US',
    requestRecomended: 'https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${key}&language=en-US&page=1',
};

export default requests