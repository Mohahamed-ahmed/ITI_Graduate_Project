import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <form className="bg-card p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-foreground font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-foreground font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-foreground font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-foreground font-semibold mb-2">
              Password Confirmation
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full border border-border p-2 rounded-md"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90 transition duration-300"
          >
            Signup
          </button>
          <div>
            <Link href="/login" className="text-primary-foreground hover:underline mt-4 block text-center">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
