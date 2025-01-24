import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EarlyAccess({ onSubmit }: { onSubmit: (formData: FormData) => void }) {
  return (
    <section className="flex w-full justify-center">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join our Early Access Beta Program</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Be the first to experience our new features and improvements. <br />
            Help us build a better product with your feedback.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <Input
              className="max-w-lg flex-1"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
            <Button
              formAction={onSubmit}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch early access beta.
          </p>
        </div>
      </div>
    </section>
  );
}
