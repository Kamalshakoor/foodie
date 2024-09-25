import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      
      <p>
        <Link href="/meals/">MealsPage</Link>
        <Link href="/meals/share/">ShareMeal</Link>
        <Link href="/community/">community</Link>
      </p>
    </main>
  );
}
