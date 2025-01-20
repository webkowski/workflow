export const MESSAGE_TYPES = ["success", "error", "info"];

export type MessageProps = {
  [type in (typeof MESSAGE_TYPES)[number]]: string;
};

function sanitizeMessage(message: string): string {
  return message
    .replace(/[^a-zA-Z0-9\s]/g, "") // Only allow alphanumeric and spaces
    .trim()
    .slice(0, 280); // Twitter-like limit
}

export function sanitizeSearchParams(params: { [key: string]: string }): MessageProps | null {
  if (!params || typeof params !== "object") return null;

  const sanitizedParams: Record<string, string> = {};

  for (const type of MESSAGE_TYPES) {
    if (type in params && typeof params[type] === "string") {
      sanitizedParams[type] = sanitizeMessage(params[type]);
    }
  }

  return Object.keys(sanitizedParams).length > 0 ? (sanitizedParams as MessageProps) : null;
}

export function Message({ message }: { message: MessageProps }) {
  if (!MESSAGE_TYPES.some((type) => type in message)) {
    return null;
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-2 text-sm">
      {"success" in message && (
        <div className="border-l-2 border-foreground px-4 text-foreground">{message.success}</div>
      )}
      {"error" in message && <div className="border-l-2 border-red-600 px-4">{message.error}</div>}
      {"info" in message && <div className="border-l-2 px-4 text-foreground">{message.info}</div>}
    </div>
  );
}
