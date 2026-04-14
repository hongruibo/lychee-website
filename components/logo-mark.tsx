import Image from "next/image";

type LogoMarkProps = {
  size: number;
  priority?: boolean;
};

export function LogoMark({ size, priority = false }: LogoMarkProps) {
  return (
    <span
      className="logo-mark-shell relative block overflow-hidden rounded-full border"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo/logo-white-black.jpeg"
        alt="Lychee Labs logo"
        width={size}
        height={size}
        className="logo-for-dark h-full w-full object-cover"
        priority={priority}
      />
      <Image
        src="/logo/logo-black-white.jpeg"
        alt="Lychee Labs logo"
        width={size}
        height={size}
        className="logo-for-light absolute inset-0 hidden h-full w-full object-cover"
      />
    </span>
  );
}
