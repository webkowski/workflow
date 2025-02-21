"use client";

import { useCompletion } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    streamProtocol: "data", // optional, this is the default
    api: "/api/estimator/analyze",
  });

  return (
    <form
      className="flex w-full max-w-4xl flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex  gap-2">
        <Input
          name="prompt"
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit">Submit</Button>
      </div>
      <div>{completion}</div>
    </form>
  );
}
