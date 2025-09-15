import Main from "./components/UI/Main";
import NavBar from "./components/Navbar/NavBar";
import Logo from "./components/Navbar/Logo";
import Search from "./components/Navbar/Search";
import NumResults from "./components/Navbar/NumResults";
import MoviesList from "./components/Movies/MoviesList";
import WatchedSummary from "./components/Watched/WatchedSummary";
import WatchedList from "./components/Watched/WatchedList";
import MovieDetails from "./components/Watched/MovieDetails";
import Loader from "./components/UI/Loader";
import Box from "./components/UI/Box";
import ErrorMessage from "./components/UI/ErrorMessage";
import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
    const [query, setQuery] = useState("");
    const [selectedId, SetSelectedId] = useState(null);
    const [watched, setWatched] = useLocalStorageState([], "watched");

    function handleselectedId(id) {
        SetSelectedId(selectedId => (selectedId === id ? null : id));
    }

    function handleClosebtn() {
        SetSelectedId(null);
    }

    function handleWatchedMovie(movie) {
        setWatched(watched => [...watched, movie]);
    }

    function handleDeletedWatched(id) {
        setWatched(watched => watched.filter(movie => id !== movie.imdbID));
    }

    const { movies, isLoading, error } = useMovies(query);

    return (
        <>
            <NavBar>
                <Logo />
                <Search query={query} setQuery={setQuery} />
                <NumResults movies={movies} />
            </NavBar>
            <Main>
                <Box>
                    {isLoading && <Loader />}
                    {!isLoading && !error && (
                        <MoviesList
                            movies={movies}
                            onSelectMovie={handleselectedId}
                            onCloseMovie={handleClosebtn}
                        />
                    )}
                    {error && <ErrorMessage message={error} />}
                </Box>

                <Box>
                    {selectedId ? (
                        <MovieDetails
                            selectedId={selectedId}
                            onCloseMovie={handleClosebtn}
                            onAddWatched={handleWatchedMovie}
                            watched={watched}
                        />
                    ) : (
                        <>
                            <WatchedSummary watched={watched} />
                            <WatchedList
                                watched={watched}
                                onDeleteWatched={handleDeletedWatched}
                            />
                        </>
                    )}
                </Box>
            </Main>
        </>
    );
}
