import { Link } from "react-router-dom";
import { ImageCarousel } from './Carousel'

export function Home() {
    return (
      <>
        <main>
          <h2>Daily Fresh Trivia!</h2>
        </main>
        <ImageCarousel />
        <nav>
        <Link to="/">Home</Link>
      </nav>
      </>
    );
  }