type Props = {
  num: string;
  title: string;
  children?: React.ReactNode;
};

/** Numbered heading block used at the top of every section. */
export default function SectionHeading({ num, title, children }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-mono text-[13px] text-green">{num}</div>
      <h2 className="text-[26px] font-bold tracking-[-0.01em] min-[521px]:text-[32px]">
        {title}
      </h2>
      {children ? (
        <p className="max-w-[640px] text-[17px] leading-[1.55] text-ink-soft text-pretty">
          {children}
        </p>
      ) : null}
    </div>
  );
}
