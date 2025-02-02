import { cn } from "#/lib/utils";

export default function Avatar({
  user = {},
  className,
}: {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
  className?: string;
}) {
  if (!user) {
    return (
      <div
        className={cn(
          "h-10 w-10 animate-pulse rounded-full border border-gray-300 bg-gray-100",
          className,
        )}
      />
    );
  }

  return (
    <img
      alt={`Avatar for ${user?.name || user?.email}`}
      src={
        user?.image ||
        `https://avatars.dicebear.com/api/micah/${user?.email}.svg`
      }
      className={cn("h-10 w-10 rounded-full border border-gray-300", className)}
      draggable={false}
    />
  );
}

export function TokenAvatar({ id }: { id: string }) {
  return (
    <img
      src={`https://api.dicebear.com/7.x/shapes/svg?seed=${id}`}
      alt="avatar"
      className="h-10 w-10 rounded-full"
      draggable={false}
    />
  );
}
