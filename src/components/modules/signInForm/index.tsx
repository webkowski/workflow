import Link from "next/link";
import { signUpAction } from "@/app/actions";
import Button from "@/components/base/button";

export default function SignInForm() {
  return (
    <form className="mx-auto flex min-w-64 max-w-64 flex-col text-black">
      Request early access
      <h1 className="text-2xl font-medium">Sign up</h1>
      <p className="text-sm text-foreground">
        Already have an account?{" "}
        <Link
          className="font-medium underline"
          href="/sign-in"
        >
          Sign in
        </Link>
      </p>
      <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          placeholder="you@example.com"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          minLength={6}
          name="password"
          placeholder="Your password"
          type="password"
        />
        <Button
          formAction={signUpAction}
          type="submit"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
