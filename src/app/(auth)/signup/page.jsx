'use client';

import { useState } from 'react';
import { useRegister } from '@/hooks/use-auth';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({ userName: '', email: '', password: '', confirmPassword: '' });

  const registerMutation = useRegister();

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const SignupSubmitHandler = (e) => {
    e.preventDefault();

    const { userName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    registerMutation.mutate({ userName, email, password, confirmPassword });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <form onSubmit={SignupSubmitHandler} className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="userName" className="block text-foreground font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              required
              className="w-full border border-border p-2 rounded-md bg-background"
              placeholder="Enter your name"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-foreground font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-border p-2 rounded-md bg-background"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-foreground font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full border border-border p-2 rounded-md bg-background"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-foreground font-semibold mb-2">
              Password Confirmation
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full border border-border p-2 rounded-md bg-background"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full bg-primary text-primary-foreground p-2 rounded-md hover:opacity-90 transition duration-300 disabled:opacity-50"
          >
            {registerMutation.isPending ? 'Loading...' : 'Signup'}
          </button>

          <div className="mt-4 text-center">
            <Link href="/login" className="text-sm hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
