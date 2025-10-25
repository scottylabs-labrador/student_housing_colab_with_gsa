// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold">GSA Housing App</h1> 
      <p className="mt-2 text-gray-600">Sign in to view/create listings</p>
      <div className="mt-4 flex gap-4">
        <a
          href="/signin"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In
        </a>
        <a
          href="/signup"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sign Up
        </a>
      </div>
    </main>
  );
}
