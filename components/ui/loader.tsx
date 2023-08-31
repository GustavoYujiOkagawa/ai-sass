import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-ful flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="logo" fill src="/loader1.png" />
      </div>
      <p className="text-sm text-muted-foreground">AllAI está pensando...</p>
    </div>
  );
};
