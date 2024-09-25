import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/sliderShow/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Next Level Food for <br /> Next Level People </h1>

            <p>Delicious foods, shared by a food-loving community.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Browse meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Foodies is a platform for food enthusiasts to share their favorite
            recipes and connect with like-minded food enthusiasts. You can browse 
            recipes, create your own recipes, and share them with others.
          </p>
          <p>
            Nextlevel Food is a platform for food enthusiasts to share their favorite
          </p>
        </section>
        <section className={classes.section}>
          <h2>Why choose Nextlevel Food?</h2>
          <p>
            Nextlevel Food is a platform for food enthusiasts to share their favorite
            recipes and connect with like-minded food enthusiasts. You can browse 
            recipes, create your own recipes, and share them with others.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Features</h2>
          <ul>
            <li>Share your favorite recipes</li>
            <li>Connect with like-minded food enthusiasts</li>
            <li>Discover new recipes and share them with others</li>
          </ul>
        </section>

      </main>
    </>
  );
}
