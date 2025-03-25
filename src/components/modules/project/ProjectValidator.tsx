'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";

interface ValidationResponse {
  isComplete: boolean;
  missingFields: {
    field: string;
    question: string;
  }[];
}

export function ProjectValidator() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationResult, setValidationResult] = useState<ValidationResponse | null>(null);
  const { toast } = useToast();

  const handleValidate = async () => {
    if (!name || !description) {
      toast({
        title: "Error",
        description: "Please provide both project name and description.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/project/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        throw new Error("Validation request failed");
      }

      const result = await response.json();
      setValidationResult(result);
    } catch (error) {
      console.error("Validation error:", error);
      toast({
        title: "Error",
        description: "Failed to validate project details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Project Name
        </label>
        <Textarea
          id="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setName(e.target.value)}
          placeholder="Enter project name..."
          className="min-h-[40px]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">
          Project Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          placeholder="Enter project description..."
          className="min-h-[120px]"
        />
      </div>

      <Button
        onClick={handleValidate}
        disabled={loading || !name || !description}
        className="w-full"
      >
        {loading ? (
          <>
            <Spinner className="mr-2" />
            Validating...
          </>
        ) : (
          "Validate Project"
        )}
      </Button>

      {validationResult && (
        <div className="mt-4 space-y-4">
          {validationResult.isComplete ? (
            <div className="rounded-md bg-green-50 p-4">
              <p className="text-green-800">
                Project details are complete! You can proceed with the next steps.
              </p>
            </div>
          ) : (
            <div className="rounded-md bg-yellow-50 p-4">
              <h3 className="font-medium text-yellow-800">
                Please provide more information:
              </h3>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {validationResult.missingFields.map((field, index) => (
                  <li key={index} className="text-yellow-700">
                    <span className="font-medium">{field.field}:</span>{" "}
                    {field.question}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}